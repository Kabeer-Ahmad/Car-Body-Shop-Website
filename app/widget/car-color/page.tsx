"use client";

import { useEffect, useRef, useState } from "react";

type Vibe = "minimalist" | "bold" | "elegant" | "sporty" | "classic" | "adventurous";
type Step = "model" | "reg" | "vibe" | "photo" | "suggestion" | "generating" | "result";

const BRAND_BLUE = "#155dfc";

const VIBES: { value: Vibe; label: string }[] = [
  { value: "minimalist", label: "Minimalist" },
  { value: "bold", label: "Bold" },
  { value: "elegant", label: "Elegant" },
  { value: "sporty", label: "Sporty" },
  { value: "classic", label: "Classic" },
  { value: "adventurous", label: "Adventurous" },
];

const SWATCHES = [
  { name: "White", hex: "#F2F3F4" },
  { name: "Black", hex: "#0A0A0A" },
  { name: "Silver", hex: "#C0C0C5" },
  { name: "Red", hex: "#C8102E" },
  { name: "Blue", hex: "#1B4F9C" },
  { name: "Green", hex: "#1E5C3A" },
  { name: "Yellow", hex: "#E8B400" },
  { name: "Orange", hex: "#FF5A1F" },
];

function StepShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col justify-center p-6">
      <h2 className="mb-5 text-xl font-semibold text-slate-900">{title}</h2>
      {children}
    </div>
  );
}

function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{ backgroundColor: BRAND_BLUE }}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40 ${props.className ?? ""}`}
    />
  );
}

export default function CarColorWidget() {
  const [step, setStep] = useState<Step>("model");
  const [carModel, setCarModel] = useState("");
  const [reg, setReg] = useState("");
  const [vibe, setVibe] = useState<Vibe | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<{ colorName: string; hex: string; reason: string } | null>(null);
  const [chosenLabel, setChosenLabel] = useState<string>("");
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPalette, setShowPalette] = useState(false);
  const [customRequest, setCustomRequest] = useState("");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (step !== "generating") {
      setElapsedSeconds(0);
      return;
    }
    const interval = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [step]);

  const GENERATING_MESSAGES = [
    "Analyzing your photo...",
    "Working out the paint...",
    "Rendering the change...",
    "Still going, AI image edits take a little while...",
    "Almost there...",
  ];
  const generatingMessage =
    GENERATING_MESSAGES[Math.min(Math.floor(elapsedSeconds / 15), GENERATING_MESSAGES.length - 1)];

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function getSuggestion() {
    if (!photoFile || !vibe) return;
    setError(null);
    setStep("suggestion");
    try {
      const form = new FormData();
      form.append("carModel", carModel);
      form.append("vibe", vibe);
      form.append("photo", photoFile);
      const res = await fetch("/api/widgets/car-color/suggest", { method: "POST", body: form });
      if (!res.ok) throw new Error("Couldn't get a suggestion, try again.");
      const data = await res.json();
      setSuggestion(data.suggestion);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  async function generate(instruction: string, label: string) {
    if (!photoFile) return;
    setChosenLabel(label);
    setError(null);
    setStep("generating");
    try {
      const form = new FormData();
      form.append("instruction", instruction);
      form.append("photo", photoFile);
      const res = await fetch("/api/widgets/car-color/generate", { method: "POST", body: form });
      if (!res.ok) throw new Error("Couldn't generate that, try again.");
      const data = await res.json();
      setResultImage(`data:image/png;base64,${data.imageBase64}`);
      setStep("result");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setStep("suggestion");
    }
  }

  function generateFromSwatch(name: string, hex: string) {
    generate(`Change the car's paint color to ${name} (${hex}).`, name);
  }

  function generateFromCustomRequest() {
    if (!customRequest.trim()) return;
    generate(customRequest.trim(), customRequest.trim());
  }

  function startOver() {
    setStep("model");
    setCarModel("");
    setReg("");
    setVibe(null);
    setPhotoFile(null);
    setPhotoPreview(null);
    setSuggestion(null);
    setChosenLabel("");
    setResultImage(null);
    setError(null);
    setShowPalette(false);
    setCustomRequest("");
  }

  return (
    <main className="flex h-screen flex-col bg-white">
      <div className="flex-1 overflow-y-auto">
        {step === "model" && (
          <StepShell title="What's the model of your car?">
            <input
              autoFocus
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="e.g. Ford Focus"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": BRAND_BLUE } as React.CSSProperties}
            />
            <PrimaryButton onClick={() => carModel.trim() && setStep("reg")} disabled={!carModel.trim()} className="mt-4">
              Next
            </PrimaryButton>
          </StepShell>
        )}

        {step === "reg" && (
          <StepShell title="What's the registration?">
            <input
              autoFocus
              value={reg}
              onChange={(e) => setReg(e.target.value.toUpperCase())}
              placeholder="e.g. AB12 CDE"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base uppercase focus:outline-none focus:ring-2"
              style={{ "--tw-ring-color": BRAND_BLUE } as React.CSSProperties}
            />
            <PrimaryButton onClick={() => reg.trim() && setStep("vibe")} disabled={!reg.trim()} className="mt-4">
              Next
            </PrimaryButton>
          </StepShell>
        )}

        {step === "vibe" && (
          <StepShell title="What's your vibe?">
            <div className="grid grid-cols-2 gap-2">
              {VIBES.map((v) => (
                <button
                  key={v.value}
                  onClick={() => setVibe(v.value)}
                  style={vibe === v.value ? { borderColor: BRAND_BLUE, color: BRAND_BLUE, backgroundColor: "#eff4ff" } : undefined}
                  className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                    vibe === v.value ? "" : "border-slate-300 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <PrimaryButton onClick={() => vibe && setStep("photo")} disabled={!vibe} className="mt-4">
              Next
            </PrimaryButton>
          </StepShell>
        )}

        {step === "photo" && (
          <StepShell title="Upload a photo of your car">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            {photoPreview ? (
              <div className="mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoPreview} alt="Your car" className="w-full rounded-lg border border-slate-200" />
              </div>
            ) : null}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full rounded-lg border-2 border-dashed border-slate-300 px-4 py-6 text-sm font-medium text-slate-500 hover:border-slate-400"
            >
              {photoFile ? "Choose a different photo" : "Tap to upload a photo"}
            </button>
            <PrimaryButton onClick={getSuggestion} disabled={!photoFile} className="mt-4">
              See my suggested color
            </PrimaryButton>
          </StepShell>
        )}

        {step === "suggestion" && (
          <StepShell title="Your suggested color">
            {!suggestion ? (
              <p className="text-sm text-slate-500">Thinking about what would suit you...</p>
            ) : (
              <>
                <div className="mb-4 flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                  <div
                    className="h-12 w-12 flex-shrink-0 rounded-full border border-slate-300"
                    style={{ backgroundColor: suggestion.hex }}
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{suggestion.colorName}</p>
                    <p className="text-sm text-slate-500">{suggestion.reason}</p>
                  </div>
                </div>
                <PrimaryButton
                  onClick={() => generate(`Change the car's paint color to ${suggestion.colorName} (${suggestion.hex}).`, suggestion.colorName)}
                  className="w-full"
                >
                  Show me my car in this color
                </PrimaryButton>
                <button
                  onClick={() => setShowPalette((s) => !s)}
                  className="mt-3 w-full text-sm font-medium text-slate-500 underline"
                >
                  {showPalette ? "Hide other options" : "I don't like this, show me other options"}
                </button>
                {showPalette && (
                  <div className="mt-3 space-y-4">
                    <div className="grid grid-cols-4 gap-2">
                      {SWATCHES.map((s) => (
                        <button
                          key={s.hex}
                          onClick={() => generateFromSwatch(s.name, s.hex)}
                          className="flex flex-col items-center gap-1 rounded-lg border border-slate-200 p-2 hover:border-slate-400"
                        >
                          <span
                            className="h-8 w-8 rounded-full border border-slate-300"
                            style={{ backgroundColor: s.hex }}
                          />
                          <span className="text-xs text-slate-600">{s.name}</span>
                        </button>
                      ))}
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Or tell us exactly what you want
                      </label>
                      <textarea
                        value={customRequest}
                        onChange={(e) => setCustomRequest(e.target.value)}
                        placeholder="e.g. 'matte British racing green', or 'just change the bumper to red'"
                        rows={2}
                        className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2"
                        style={{ "--tw-ring-color": BRAND_BLUE } as React.CSSProperties}
                      />
                      <PrimaryButton
                        onClick={generateFromCustomRequest}
                        disabled={!customRequest.trim()}
                        className="mt-2 w-full"
                      >
                        Use this instead
                      </PrimaryButton>
                    </div>
                  </div>
                )}
              </>
            )}
            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          </StepShell>
        )}

        {step === "generating" && (
          <StepShell title={`Working on "${chosenLabel}"...`}>
            <div className="flex items-center gap-3">
              <span
                className="h-6 w-6 flex-shrink-0 animate-spin rounded-full border-2 border-slate-200"
                style={{ borderTopColor: BRAND_BLUE }}
              />
              <div>
                <p className="text-sm font-medium text-slate-700">{generatingMessage}</p>
                <p className="text-xs text-slate-400">
                  {elapsedSeconds}s elapsed — this can take up to a minute or so, don't close this.
                </p>
              </div>
            </div>
          </StepShell>
        )}

        {step === "result" && resultImage && (
          <StepShell title={`Here's your car: "${chosenLabel}"`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={resultImage} alt="Edited car" className="w-full rounded-lg border border-slate-200" />
            <p className="mt-2 text-xs text-slate-400">AI-generated preview, an actual respray may vary slightly.</p>
            <div className="mt-4 flex gap-2">
              <a
                href={resultImage}
                download="my-car-color.png"
                style={{ backgroundColor: BRAND_BLUE }}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              >
                Download image
              </a>
              <button
                onClick={startOver}
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                Try another
              </button>
            </div>
          </StepShell>
        )}
      </div>
    </main>
  );
}
