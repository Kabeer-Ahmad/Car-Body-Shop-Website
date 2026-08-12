import { NextRequest, NextResponse } from "next/server";
import { generateRecoloredCar } from "@/lib/openai-image";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  const instruction = form?.get("instruction");
  const photo = form?.get("photo");

  if (typeof instruction !== "string" || !instruction.trim() || !(photo instanceof Blob)) {
    return NextResponse.json(
      { error: "instruction and a photo are both required" },
      { status: 400 }
    );
  }

  const imageBase64 = Buffer.from(await photo.arrayBuffer()).toString("base64");
  const imageMimeType = photo.type || "image/jpeg";

  const result = await generateRecoloredCar({
    imageBase64,
    imageMimeType,
    instruction,
  });

  return NextResponse.json({ imageBase64: result.imageBase64 });
}
