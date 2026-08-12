/**
 * Suggests a paint color from a vibe/model/photo, then generates a recolored
 * (or partially edited) version of the actual photo. Runs a harmless stub
 * reply when OPENAI_API_KEY isn't set, so the app boots without a key.
 */
export type CarVibe =
  | "minimalist"
  | "bold"
  | "elegant"
  | "sporty"
  | "classic"
  | "adventurous";

export type SuggestColorInput = {
  carModel: string;
  vibe: CarVibe;
  imageBase64: string;
  imageMimeType: string;
};

export type SuggestColorResult = {
  colorName: string;
  hex: string;
  reason: string;
};

export type GenerateColorInput = {
  imageBase64: string;
  imageMimeType: string;
  /**
   * Freeform description of the change to make, e.g. "change the paint to
   * British Racing Green (#004225)" or "only change the bumper to matte
   * black". Not restricted to full-car recolors.
   */
  instruction: string;
};

export type GenerateColorResult = {
  imageBase64: string;
};

const VIBE_SUGGESTIONS: Record<CarVibe, SuggestColorResult> = {
  minimalist: { colorName: "Glacier White", hex: "#F2F3F4", reason: "Clean and understated, lets the shape of the car speak for itself." },
  bold: { colorName: "Racing Red", hex: "#C8102E", reason: "Impossible to ignore, matches a make-a-statement personality." },
  elegant: { colorName: "Midnight Sapphire", hex: "#0B1F3A", reason: "Deep, refined, and reads as premium in any light." },
  sporty: { colorName: "Electric Orange", hex: "#FF5A1F", reason: "High energy, built to look fast standing still." },
  classic: { colorName: "British Racing Green", hex: "#004225", reason: "Timeless, understated confidence, ages well." },
  adventurous: { colorName: "Desert Khaki", hex: "#8A7B5C", reason: "Rugged and outdoorsy without trying too hard." },
};

function hasRealKey() {
  return !!process.env.OPENAI_API_KEY;
}

export async function suggestCarColor({
  carModel,
  vibe,
  imageBase64,
  imageMimeType,
}: SuggestColorInput): Promise<SuggestColorResult> {
  if (!hasRealKey()) return VIBE_SUGGESTIONS[vibe] ?? VIBE_SUGGESTIONS.classic;

  const OpenAI = (await import("openai")).default;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    max_tokens: 300,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text:
              `A customer's car is a ${carModel}. Their style/vibe is "${vibe}". ` +
              `Based on the photo and that vibe, suggest ONE paint color that would suit ` +
              `them and this car. Respond with ONLY a JSON object, no other text: ` +
              `{"colorName": string, "hex": "#RRGGBB", "reason": string (one short sentence)}.`,
          },
          {
            type: "image_url",
            image_url: { url: `data:${imageMimeType};base64,${imageBase64}` },
          },
        ],
      },
    ],
  });

  const text = completion.choices[0]?.message?.content ?? "";
  try {
    const parsed = JSON.parse(text.trim());
    if (parsed.colorName && parsed.hex) return parsed;
  } catch {
    // fall through to a safe default below
  }
  return VIBE_SUGGESTIONS.classic;
}

export async function generateRecoloredCar({
  imageBase64,
  imageMimeType,
  instruction,
}: GenerateColorInput): Promise<GenerateColorResult> {
  if (!hasRealKey()) {
    // No key: can't actually edit the image, return it unchanged rather
    // than pretending to.
    return { imageBase64 };
  }

  const OpenAI = (await import("openai")).default;
  const { toFile } = await import("openai");
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  const buffer = Buffer.from(imageBase64, "base64");
  const file = await toFile(buffer, "car.png", { type: imageMimeType });

  const result = await client.images.edit({
    model: "gpt-image-1",
    image: file,
    prompt:
      `Apply this specific change to the car in the photo: ${instruction}. ` +
      `Keep absolutely everything else identical: the exact same background, location, ` +
      `camera angle, lighting, shadows, reflections, wheels, windows, license plate, and ` +
      `every part of the car not mentioned in the request. Do not change the car's shape, ` +
      `position, or anything other than what was explicitly asked for.`,
  });

  const b64 = result.data?.[0]?.b64_json;
  if (!b64) throw new Error("OpenAI image edit returned no image data");
  return { imageBase64: b64 };
}
