import { NextRequest, NextResponse } from "next/server";
import { suggestCarColor, type CarVibe } from "@/lib/openai-image";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const VALID_VIBES: CarVibe[] = ["minimalist", "bold", "elegant", "sporty", "classic", "adventurous"];

export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  const carModel = form?.get("carModel");
  const vibe = form?.get("vibe");
  const photo = form?.get("photo");

  if (
    typeof carModel !== "string" ||
    typeof vibe !== "string" ||
    !VALID_VIBES.includes(vibe as CarVibe) ||
    !(photo instanceof Blob)
  ) {
    return NextResponse.json(
      { error: "carModel, a valid vibe, and a photo are all required" },
      { status: 400 }
    );
  }

  const imageBase64 = Buffer.from(await photo.arrayBuffer()).toString("base64");
  const imageMimeType = photo.type || "image/jpeg";

  const suggestion = await suggestCarColor({
    carModel,
    vibe: vibe as CarVibe,
    imageBase64,
    imageMimeType,
  });

  return NextResponse.json({ suggestion });
}
