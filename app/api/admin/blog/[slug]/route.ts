import { NextResponse } from "next/server";
import { assertBlogAdminAuthorized } from "@/lib/blog-admin-auth";
import {
  deleteBlogPost,
  getBlogPostBySlug,
  isEffectivelyEmptyHtml,
  replaceEmbeddedImages,
  updateBlogPost,
} from "@/lib/blog-storage";

export const runtime = "nodejs";
export const maxDuration = 60;

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(request: Request, context: RouteContext) {
  const unauthorized = assertBlogAdminAuthorized(request);
  if (unauthorized) return unauthorized;

  try {
    const { slug } = await context.params;
    const post = await getBlogPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (error) {
    console.error("Error loading blog post:", error);
    return NextResponse.json({ error: "Failed to load blog post." }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  const unauthorized = assertBlogAdminAuthorized(request);
  if (unauthorized) return unauthorized;

  try {
    const { slug } = await context.params;
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

    const processedContent = await replaceEmbeddedImages(content, slug);
    const post = await updateBlogPost(slug, {
      title,
      excerpt,
      content: processedContent,
      author,
    });

    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error("Error updating blog post:", error);
    const message = error instanceof Error ? error.message : "Failed to update blog post";
    const status = message === "Post not found." ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  const unauthorized = assertBlogAdminAuthorized(request);
  if (unauthorized) return unauthorized;

  try {
    const { slug } = await context.params;
    const post = await deleteBlogPost(slug);
    return NextResponse.json({ success: true, post });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    const message = error instanceof Error ? error.message : "Failed to delete blog post";
    const status = message === "Post not found." ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
