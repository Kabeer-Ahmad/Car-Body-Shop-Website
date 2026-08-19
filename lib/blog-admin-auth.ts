import { NextResponse } from "next/server";

export function assertBlogAdminAuthorized(request: Request) {
  const secret = process.env.BLOG_ADMIN_SECRET;
  if (!secret) return null;

  const provided = request.headers.get("x-blog-admin-secret");
  if (provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
