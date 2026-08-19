import { NextResponse } from "next/server";
import { assertBlogAdminAuthorized } from "@/lib/blog-admin-auth";
import {
  getAllPostsForAdmin,
  isEffectivelyEmptyHtml,
  replaceEmbeddedImages,
  saveBlogPost,
  slugifyTitle,
} from "@/lib/blog-storage";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(request: Request) {
  const unauthorized = assertBlogAdminAuthorized(request);
  if (unauthorized) return unauthorized;

  try {
    const posts = await getAllPostsForAdmin();
    const summary = posts.map(({ slug, title, date, author, excerpt }) => ({
      slug,
      title,
      date,
      author,
      excerpt,
    }));
    return NextResponse.json({ posts: summary });
  } catch (error) {
    console.error("Error listing blog posts:", error);
    return NextResponse.json({ error: "Failed to load blog posts." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const unauthorized = assertBlogAdminAuthorized(request);
  if (unauthorized) return unauthorized;

  try {
    const body = await request.json();
    const title = typeof body.title === "string" ? body.title.trim() : "";
    const excerpt = typeof body.excerpt === "string" ? body.excerpt.trim() : "";
    const content = typeof body.content === "string" ? body.content.trim() : "";
    const author = typeof body.author === "string" ? body.author.trim() : "";

    if (!title || !excerpt || !author) {
      return NextResponse.json({ error: "Title, excerpt, and author are required." }, { status: 400 });
    }

    if (!content || isEffectivelyEmptyHtml(content)) {
      return NextResponse.json({ error: "Article content cannot be empty." }, { status: 400 });
    }

    const slug = slugifyTitle(title);
    if (!slug) {
      return NextResponse.json({ error: "Could not generate a valid URL from the title." }, { status: 400 });
    }

    const processedContent = await replaceEmbeddedImages(content, slug);
    const date = new Date().toISOString().split("T")[0];

    const newPost = await saveBlogPost({
      slug,
      title,
      date,
      excerpt,
      content: processedContent,
      author,
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error saving blog post:", error);
    const message = error instanceof Error ? error.message : "Failed to save blog post";
    const status = message.includes("already exists") ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
