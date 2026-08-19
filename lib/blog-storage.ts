import fs from "fs";
import path from "path";
import type { BlogPost } from "@/lib/blog-data";
import { githubReadText, githubWriteBinary, githubWriteText, isGitHubStorageEnabled } from "@/lib/github-storage";

const POSTS_FILE = path.join(process.cwd(), "data", "posts.json");
const IMAGES_DIR = path.join(process.cwd(), "public", "blog-images");

export function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export function isEffectivelyEmptyHtml(html: string) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length === 0;
}

export function readPostsFromDisk(): BlogPost[] {
  if (!fs.existsSync(POSTS_FILE)) return [];
  const raw = fs.readFileSync(POSTS_FILE, "utf8");
  return JSON.parse(raw) as BlogPost[];
}

async function readPostsForSave(): Promise<BlogPost[]> {
  if (isGitHubStorageEnabled()) {
    const remote = await githubReadText("data/posts.json");
    if (remote?.content) {
      return JSON.parse(remote.content) as BlogPost[];
    }
  }
  return readPostsFromDisk();
}

function writePostsToDisk(posts: BlogPost[]) {
  const dataDir = path.dirname(POSTS_FILE);
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 4));
}

export async function saveImageFile(fileName: string, buffer: Buffer) {
  if (isGitHubStorageEnabled()) {
    await githubWriteBinary(`public/blog-images/${fileName}`, buffer, `Add blog image ${fileName}`);
    return `/blog-images/${fileName}`;
  }

  if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
  const filePath = path.join(IMAGES_DIR, fileName);
  fs.writeFileSync(filePath, buffer);
  return `/blog-images/${fileName}`;
}

export async function saveBlogPost(newPost: BlogPost) {
  const posts = await readPostsForSave();
  if (posts.some((post) => post.slug === newPost.slug)) {
    throw new Error("A post with this title already exists. Please use a different title.");
  }

  posts.unshift(newPost);
  await persistPosts(posts, `Add blog post: ${newPost.title}`);
  return newPost;
}

async function persistPosts(posts: BlogPost[], commitMessage: string) {
  const serialized = JSON.stringify(posts, null, 4);

  if (isGitHubStorageEnabled()) {
    await githubWriteText("data/posts.json", serialized, commitMessage);
    return;
  }

  try {
    writePostsToDisk(posts);
  } catch (error) {
    const code = typeof error === "object" && error && "code" in error ? String((error as { code?: string }).code) : undefined;
    if (code === "EROFS" || code === "EPERM" || code === "EACCES") {
      throw new Error(
        "This server cannot save files. Set GITHUB_TOKEN and GITHUB_REPO in your environment to publish posts on the live site."
      );
    }
    throw error;
  }
}

export async function getAllPostsForAdmin(): Promise<BlogPost[]> {
  return readPostsForSave();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await readPostsForSave();
  return posts.find((post) => post.slug === slug);
}

export async function updateBlogPost(
  slug: string,
  updates: { title: string; excerpt: string; content: string; author: string }
): Promise<BlogPost> {
  const posts = await readPostsForSave();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    throw new Error("Post not found.");
  }

  const updated: BlogPost = {
    ...posts[index],
    ...updates,
    slug,
  };

  posts[index] = updated;
  await persistPosts(posts, `Update blog post: ${updated.title}`);
  return updated;
}

export async function deleteBlogPost(slug: string): Promise<BlogPost> {
  const posts = await readPostsForSave();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) {
    throw new Error("Post not found.");
  }

  const [removed] = posts.splice(index, 1);
  await persistPosts(posts, `Delete blog post: ${removed.title}`);
  return removed;
}

export async function replaceEmbeddedImages(content: string, slug: string) {
  const imgRegex = /<img[^>]+src="data:image\/([^;]+);base64,([^"]+)"[^>]*>/g;
  let processedContent = content;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = imgRegex.exec(content)) !== null) {
    const ext = match[1].replace("jpeg", "jpg");
    const base64Data = match[2];
    const fileName = `${slug}-${Date.now()}-${index}.${ext}`;
    index += 1;

    const buffer = Buffer.from(base64Data, "base64");
    const publicUrl = await saveImageFile(fileName, buffer);

    const fullMatch = match[0];
    const newImgTag = fullMatch.replace(`data:image/${match[1]};base64,${base64Data}`, publicUrl);
    processedContent = processedContent.replace(fullMatch, newImgTag);
  }

  return processedContent;
}
