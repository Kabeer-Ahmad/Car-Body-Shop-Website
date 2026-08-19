import { NextResponse } from "next/server";
import { assertBlogAdminAuthorized } from "@/lib/blog-admin-auth";
import { saveImageFile, slugifyTitle } from "@/lib/blog-storage";

export const runtime = "nodejs";

const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  const unauthorized = assertBlogAdminAuthorized(request);
  if (unauthorized) return unauthorized;

  try {
    const form = await request.formData();
    const file = form.get("file");
    const slug = typeof form.get("slug") === "string" ? slugifyTitle(form.get("slug") as string) : "blog";

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Image file is required." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
    }

    if (file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json({ error: "Image must be under 8MB." }, { status: 400 });
    }

    const ext = file.type.split("/")[1]?.replace("jpeg", "jpg") || "jpg";
    const fileName = `${slug || "blog"}-${Date.now()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await saveImageFile(fileName, buffer);

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error uploading blog image:", error);
    const message = error instanceof Error ? error.message : "Failed to upload image";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
