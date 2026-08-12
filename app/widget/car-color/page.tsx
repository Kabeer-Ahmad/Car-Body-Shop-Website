"use client";

import { useEffect, useRef, useState } from "react";

type Vibe = "minimalist" | "bold" | "elegant" | "sporty" | "classic" | "adventurous";
type Step = "model" | "reg" | "vibe" | "photo" | "suggestion" | "generating" | "result";

const BRAND = "#155dfc";

const FLOW_STEPS: Step[] = ["model", "reg", "vibe", "photo", "suggestion"];

const VIBES: { value: Vibe; label: string; hint: string }[] = [
  { value: "minimalist", label: "Minimalist", hint: "Clean & understated" },
  { value: "bold", label: "Bold", hint: "Make a statement" },
  { value: "elegant", label: "Elegant", hint: "Refined & premium" },
  { value: "sporty", label: "Sporty", hint: "Fast & energetic" },
  { value: "classic", label: "Classic", hint: "Timeless look" },
  { value: "adventurous", label: "Adventurous", hint: "Rugged & outdoorsy" },
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

function progressIndex(step: Step): number {
  if (step === "generating" || step === "result") return FLOW_STEPS.length;
  return Math.max(0, FLOW_STEPS.indexOf(step));
}

function ProgressBar({ step }: { step: Step }) {
  const current = progressIndex(step);
  const total = FLOW_STEPS.length;
  const pct = Math.min(100, Math.round(((current + 1) / total) * 100));

  return (
    <div className="px-4 pt-3 pb-1 sm:px-5">
      <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-slate-500">
        <span>
          Step {Math.min(current + 1, total)} of {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${pct}%`, backgroundColor: BRAND }}
        />
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-sm font-semibold text-slate-800">{children}</label>;
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-base text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ${props.className ?? ""}`}
    />
  );
}

function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{ backgroundColor: BRAND, ...(props.style || {}) }}
      className={`inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.99] ${props.className ?? ""}`}
    />
  );
}

function SecondaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 ${props.className ?? ""}`}
    />
  );
}

function StepShell({
  title,
  subtitle,
  children,
  footer,
  onBack,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onBack?: () => void;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-[1.35rem]">{title}</h2>
        {subtitle && <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{subtitle}</p>}
        <div className="mt-5">{children}</div>
      </div>
      {footer && (
        <div className="flex-shrink-0 border-t border-slate-100 bg-white/95 px-4 py-3 backdrop-blur sm:px-5">
          {footer}
        </div>
      )}
    </div>
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
  const [chosenLabel, setChosenLabel] = useState("");
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
    "Analysing your photo...",
    "Matching the paint finish...",
    "Rendering the colour change...",
    "Still working — AI edits can take a minute...",
    "Almost there...",
  ];
  const generatingMessage =
    GENERATING_MESSAGES[Math.min(Math.floor(elapsedSeconds / 15), GENERATING_MESSAGES.length - 1)];

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function getSuggestion() {
    if (!photoFile || !vibe) return;
    setError(null);
    setSuggestion(null);
    setStep("suggestion");
    try {
      const form = new FormData();
      form.append("carModel", carModel);
      form.append("vibe", vibe);
      form.append("photo", photoFile);
      const res = await fetch("/api/widgets/car-color/suggest", { method: "POST", body: form });
      if (!res.ok) throw new Error("Couldn't get a suggestion. Please try again.");
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
      if (!res.ok) throw new Error("Couldn't generate that. Please try again.");
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
    if (photoPreview) URL.revokeObjectURL(photoPreview);
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

  const showProgress = step !== "generating" && step !== "result";

  return (
    <main className="flex h-[100dvh] flex-col bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {showProgress && <ProgressBar step={step} />}

      <div className="min-h-0 flex-1">
        {step === "model" && (
          <StepShell
            title="What's your car model?"
            subtitle="We'll use this to suggest a colour that suits the vehicle."
            footer={
              <PrimaryButton onClick={() => carModel.trim() && setStep("reg")} disabled={!carModel.trim()}>
                Continue
              </PrimaryButton>
            }
          >
            <FieldLabel>Car model</FieldLabel>
            <TextInput
              autoFocus
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && carModel.trim()) setStep("reg");
              }}
              placeholder="e.g. Ford Focus"
              autoComplete="off"
            />
          </StepShell>
        )}

        {step === "reg" && (
          <StepShell
            title="What's the registration?"
            subtitle="Helps us keep your preview tied to the right vehicle."
            onBack={() => setStep("model")}
            footer={
              <PrimaryButton onClick={() => reg.trim() && setStep("vibe")} disabled={!reg.trim()}>
                Continue
              </PrimaryButton>
            }
          >
            <FieldLabel>Registration plate</FieldLabel>
            <TextInput
              autoFocus
              value={reg}
              onChange={(e) => setReg(e.target.value.toUpperCase())}
              onKeyDown={(e) => {
                if (e.key === "Enter" && reg.trim()) setStep("vibe");
              }}
              placeholder="e.g. AB12 CDE"
              className="uppercase tracking-wider"
              autoComplete="off"
            />
          </StepShell>
        )}

        {step === "vibe" && (
          <StepShell
            title="What's your vibe?"
            subtitle="Pick the style that feels most like you — we'll suggest a colour to match."
            onBack={() => setStep("reg")}
            footer={
              <PrimaryButton onClick={() => vibe && setStep("photo")} disabled={!vibe}>
                Continue
              </PrimaryButton>
            }
          >
            <div className="grid grid-cols-2 gap-2.5">
              {VIBES.map((v) => {
                const selected = vibe === v.value;
                return (
                  <button
                    key={v.value}
                    type="button"
                    onClick={() => setVibe(v.value)}
                    className={`rounded-xl border px-3 py-3.5 text-left transition ${
                      selected
                        ? "border-blue-500 bg-blue-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <span className={`block text-sm font-bold ${selected ? "text-blue-700" : "text-slate-800"}`}>
                      {v.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-slate-500">{v.hint}</span>
                  </button>
                );
              })}
            </div>
          </StepShell>
        )}

        {step === "photo" && (
          <StepShell
            title="Upload a photo of your car"
            subtitle="A clear side or three-quarter shot works best."
            onBack={() => setStep("vibe")}
            footer={
              <PrimaryButton onClick={getSuggestion} disabled={!photoFile}>
                Get my colour suggestion
              </PrimaryButton>
            }
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoChange}
              className="hidden"
            />

            {photoPreview ? (
              <div className="mb-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoPreview} alt="Your car" className="max-h-56 w-full object-cover" />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mb-3 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-4 py-10 text-center transition hover:border-blue-400 hover:bg-blue-50/40"
              >
                <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16l4-4a3 3 0 014 0l2 2 3-3a3 3 0 014 0l2 2M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-slate-800">Tap to upload a photo</span>
                <span className="mt-1 text-xs text-slate-500">JPG or PNG · phone camera works great</span>
              </button>
            )}

            {photoFile && (
              <SecondaryButton type="button" onClick={() => fileInputRef.current?.click()} className="w-full">
                Choose a different photo
              </SecondaryButton>
            )}
          </StepShell>
        )}

        {step === "suggestion" && (
          <StepShell
            title="Your suggested colour"
            subtitle={!suggestion && !error ? "Finding a finish that matches your vibe..." : undefined}
            onBack={() => setStep("photo")}
            footer={
              suggestion ? (
                <div className="space-y-2">
                  <PrimaryButton
                    onClick={() =>
                      generate(
                        `Change the car's paint color to ${suggestion.colorName} (${suggestion.hex}).`,
                        suggestion.colorName
                      )
                    }
                  >
                    Show my car in this colour
                  </PrimaryButton>
                  <button
                    type="button"
                    onClick={() => setShowPalette((s) => !s)}
                    className="w-full py-1 text-center text-sm font-medium text-slate-500 underline-offset-2 hover:text-slate-800 hover:underline"
                  >
                    {showPalette ? "Hide other options" : "I don't like this — show other options"}
                  </button>
                </div>
              ) : error ? (
                <PrimaryButton onClick={getSuggestion}>Try again</PrimaryButton>
              ) : null
            }
          >
            {!suggestion && !error && (
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                <span
                  className="h-6 w-6 flex-shrink-0 animate-spin rounded-full border-2 border-slate-200"
                  style={{ borderTopColor: BRAND }}
                />
                <p className="text-sm text-slate-600">Thinking about what would suit you...</p>
              </div>
            )}

            {suggestion && (
              <>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div
                    className="h-14 w-14 flex-shrink-0 rounded-full border border-slate-200 shadow-inner"
                    style={{ backgroundColor: suggestion.hex }}
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900">{suggestion.colorName}</p>
                    <p className="mt-0.5 text-sm leading-snug text-slate-500">{suggestion.reason}</p>
                  </div>
                </div>

                {showPalette && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold text-slate-800">Pick a colour</p>
                      <div className="grid grid-cols-4 gap-2">
                        {SWATCHES.map((s) => (
                          <button
                            key={s.hex}
                            type="button"
                            onClick={() => generateFromSwatch(s.name, s.hex)}
                            className="flex flex-col items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-2.5 transition hover:border-blue-400 hover:bg-blue-50/40"
                          >
                            <span
                              className="h-8 w-8 rounded-full border border-slate-300"
                              style={{ backgroundColor: s.hex }}
                            />
                            <span className="text-[11px] font-medium text-slate-600">{s.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <FieldLabel>Or describe exactly what you want</FieldLabel>
                      <textarea
                        value={customRequest}
                        onChange={(e) => setCustomRequest(e.target.value)}
                        placeholder="e.g. matte British racing green, or just change the bumper to red"
                        rows={2}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      />
                      <PrimaryButton
                        onClick={generateFromCustomRequest}
                        disabled={!customRequest.trim()}
                        className="mt-2"
                      >
                        Use this instead
                      </PrimaryButton>
                    </div>
                  </div>
                )}
              </>
            )}

            {error && (
              <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-700">
                {error}
              </div>
            )}
          </StepShell>
        )}

        {step === "generating" && (
          <StepShell title={`Working on “${chosenLabel}”`}>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 h-7 w-7 flex-shrink-0 animate-spin rounded-full border-2 border-slate-200"
                  style={{ borderTopColor: BRAND }}
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">{generatingMessage}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {elapsedSeconds}s elapsed — this can take up to a minute. Please keep this open.
                  </p>
                </div>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min(92, 12 + elapsedSeconds * 1.4)}%`,
                    backgroundColor: BRAND,
                  }}
                />
              </div>
            </div>
          </StepShell>
        )}

        {step === "result" && resultImage && (
          <StepShell
            title={`Here’s your car in “${chosenLabel}”`}
            subtitle="AI-generated preview — an actual respray may vary slightly."
            footer={
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={resultImage}
                  download="my-car-colour.png"
                  style={{ backgroundColor: BRAND }}
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-bold text-white shadow-sm"
                >
                  Download image
                </a>
                <SecondaryButton onClick={startOver} className="flex-1">
                  Try another
                </SecondaryButton>
              </div>
            }
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={resultImage} alt={`Car in ${chosenLabel}`} className="w-full object-contain" />
            </div>
          </StepShell>
        )}
      </div>
    </main>
  );
}
