'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-20">

                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services/full-car-respray.jpg"
                        alt="Full Car Respray Rochdale, Car Body Shop Workshop"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-gray-900/75 to-black/80" />
                </div>

                {/* Content Grid */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* LEFT: Headline + CTAs + Trust Badges */}
                        <div>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Full Car Respray Rochdale |<br />
                                <span className="text-blue-400">Professional Vehicle Resprays &amp; Car Painting</span>
                            </h1>

                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Expert full car resprays from our Rochdale workshop. Factory-quality colour matching, enclosed spray booth, and a flawless finish, guaranteed. Serving Rochdale, Oldham, Bury, and Greater Manchester.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <a
                                    href={`tel:${BUSINESS_DETAILS.phone}`}
                                    className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
                                </a>
                                <a
                                    href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20a%20full%20car%20respray.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-5 text-sm font-medium text-gray-300">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    5-Star Rated
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Fully Insured
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    10+ Years Experience
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                                    </svg>
                                    Free Estimates
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Lead Capture Form */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <div className="mb-5">
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Respray Quote</h2>
                                    <p className="text-gray-300 text-sm">Send your details, and we&apos;ll respond within the hour.</p>
                                </div>
                                <ResprayQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 1 — BEFORE / AFTER GALLERY + STATS
            ═══════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pt-0 pb-20 overflow-hidden">

                {/* Top heading */}
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Full Car Respray & Car Painting Gallery
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every vehicle tells a different story. Explore real customer projects completed by our Rochdale car respray specialists, from faded paintwork and peeling lacquer to complete colour changes and accident damage restoration.
                    </p>
                </div>

                {/* Before / After Slider */}
                <div className="relative w-full px-0">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Before_Car_Fender_Dent.webp"
                        afterSrc="/gallery/AfteR_Cad_Fender_paint.webp"
                        beforeAlt="Car body before respray, faded and damaged"
                        afterAlt="Car body after respray, showroom finish"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">
                        ← Drag to reveal transformation →
                    </p>
                </div>

                {/* Floating Quality Card — desktop only */}
                <div className="hidden lg:block absolute right-10 mt-[-260px] z-30">
                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 w-56">
                        <div className="flex text-yellow-400 mb-3">
                            {'★★★★★'.split('').map((s, i) => <span key={i} className="text-lg">{s}</span>)}
                        </div>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Premium Paint Systems</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Professional Spray Booth</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Computer Colour Matching</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />OEM Paint Finish</li>
                        </ul>
                    </div>
                </div>

                {/* Thumbnails */}
                <GalleryThumbnails />

                {/* SEO paragraph */}
                <div className="max-w-3xl mx-auto px-6 md:px-12 mt-10 text-center">
                    <p className="text-gray-400 leading-relaxed">
                        Every vehicle that enters our workshop is treated with the same level of care we&apos;d expect for our own. From faded paint and peeling lacquer to complete colour changes and accident repairs, our professional car respray service restores vehicles using premium automotive paint systems, precision preparation and factory-standard colour matching. Browse some of our recent work and see why drivers across Rochdale trust us for high-quality vehicle resprays.
                    </p>
                </div>

                {/* Animated Stats */}
                <AnimatedStats />
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 2 — THE PREPARATION PROCESS (Scroll-Sticky)
            ═══════════════════════════════════════════════════════════ */}
            <PrepSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 3 — TRANSFORMATION (Before → After comparison + Cards)
            ═══════════════════════════════════════════════════════════ */}
            <TransformationSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* S4 — PAINT OPTIONS */}
            <PaintOptionsSection />

            {/* S5 — COST ESTIMATOR */}
            <CostEstimatorSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* S6 — CUSTOMER STORIES */}
            <CustomerStoriesSection />

            {/* S7 — OTHER SERVICES */}
            <OtherServicesSection />

            {/* S8 — SERVICE AREAS */}
            <ServiceAreasSection />

            {/* S9 — FAQs */}
            <SplitFaqSection />

            {/* FINAL — Luxury CTA */}
            <FinalCTASection whatsapp={BUSINESS_DETAILS.whatsapp} />

            <Footer />
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S4: Paint & Finish Options
// ─────────────────────────────────────────────────────────────────────────────
const paintTabs = [
    {
        label: 'Factory Colour',
        heading: 'Factory Colour Restoration',
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
        body: "Restore your vehicle's original appearance with precise manufacturer colour matching. This option is ideal for vehicles with faded paint, UV damage, oxidation or worn clear coat. Using professional paint systems and digital colour matching technology, we recreate your factory finish with exceptional accuracy.",
        perks: ['Faded paint', 'Ageing vehicles', 'Lease returns', 'Increasing resale value'],
    },
    {
        label: 'Colour Change',
        heading: 'Complete Colour Change',
        img: '/gallery/After_Van_Backdoor_Complete.webp',
        body: "Looking for a completely different look? A full colour change transforms your vehicle inside and out, including door shuts, edges and visible painted surfaces. Whether you're moving from black to white or creating a custom finish, we ensure every detail is professionally refinished.",
        perks: ['Full transformation', 'Custom finishes', 'Door shut painting', 'Metallic & pearl options'],
    },
    {
        label: 'Panel Respray',
        heading: 'Panel & Localised Resprays',
        img: '/gallery/Bumper Lip After.webp',
        body: 'Not every vehicle requires a complete respray. If the damage is isolated to one or two panels, we can professionally repaint affected areas while blending seamlessly into the surrounding paintwork.',
        perks: ['Cost-effective', 'Seamless blending', 'All panel types', 'Accident damage'],
    },
    {
        label: 'Commercial Vehicles',
        heading: 'Commercial Vehicle Resprays',
        img: '/gallery/AfteR_Rim_Job.webp',
        body: 'Keep your business vehicles looking professional with high-quality van and commercial vehicle resprays. We restore faded paintwork, repair cosmetic damage and prepare fleet vehicles for continued use.',
        perks: ['Fleet operators', 'Vans & LCVs', 'Priority booking', 'Competitive trade rates'],
    },
];

function PaintOptionsSection() {
    const [active, setActive] = useState(0);
    const [fading, setFading] = useState(false);

    function switchTab(i: number) {
        if (i === active) return;
        setFading(true);
        setTimeout(() => { setActive(i); setFading(false); }, 220);
    }

    const tab = paintTabs[active];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Full Car Respray & Car Painting Options
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Whether you&apos;re restoring faded paintwork, repairing accident damage, or completely changing your vehicle&apos;s colour, we offer professional car painting solutions tailored to your needs.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {paintTabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => switchTab(i)}
                            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-200 border-2 ${
                                active === i
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                            }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Tab content */}
                <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
                >
                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1">
                        <Image src={tab.img} alt={tab.heading} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                            {tab.label}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">{tab.heading}</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">{tab.body}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Perfect for</p>
                        <ul className="space-y-3">
                            {tab.perks.map((p) => (
                                <li key={p} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S5: Cost Estimator
// ─────────────────────────────────────────────────────────────────────────────
const vehicleRanges: Record<string, [number, number]> = {
    Hatchback: [800, 1600],
    Saloon: [900, 1800],
    SUV: [1100, 2200],
    Van: [1200, 2500],
};
const conditionMultiplier: Record<string, number> = { Good: 1, Fair: 1.25, Poor: 1.6 };
const finishAdder: Record<string, number> = { Solid: 0, Metallic: 150, Pearlescent: 300 };

const costFaqs = [
    { q: 'Vehicle Size', a: 'Larger vehicles require more preparation time, additional materials and increased paint coverage.' },
    { q: 'Existing Paint Condition', a: 'Vehicles with peeling lacquer, corrosion or previous poor-quality repairs require significantly more preparation before painting can begin.' },
    { q: 'Colour Choice', a: 'Metallic, pearlescent and specialist finishes involve additional processes and materials compared to standard solid colours.' },
    { q: 'Repair Work', a: 'If dents, scratches or accident damage are present, body repairs are completed before the respray begins to ensure a flawless finish.' },
];

function CostEstimatorSection({ whatsapp }: { whatsapp: string }) {
    const [vehicle, setVehicle] = useState('Hatchback');
    const [condition, setCondition] = useState('Good');
    const [finish, setFinish] = useState('Solid');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const [lo, hi] = vehicleRanges[vehicle];
    const mult = conditionMultiplier[condition];
    const add = finishAdder[finish];
    const estLo = Math.round(lo * mult + add);
    const estHi = Math.round(hi * mult + add);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Full Car Respray Cost Guide</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        The cost depends on preparation, repairs, paint type and finish. We provide transparent estimates based on what your vehicle actually requires.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT: Estimator */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Estimate Calculator</p>

                        {/* Vehicle */}
                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Vehicle Type</p>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.keys(vehicleRanges).map((v) => (
                                    <button key={v} onClick={() => setVehicle(v)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${vehicle === v ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {v}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Condition */}
                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Paint Condition</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['Good', 'Fair', 'Poor'].map((c) => (
                                    <button key={c} onClick={() => setCondition(c)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${condition === c ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Finish */}
                        <div className="mb-10">
                            <p className="text-white font-semibold mb-4">Finish Type</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['Solid', 'Metallic', 'Pearlescent'].map((f) => (
                                    <button key={f} onClick={() => setFinish(f)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${finish === f ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result */}
                        <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                            <p className="text-gray-400 text-sm mb-3">Estimated Range</p>
                            <div className="flex items-center justify-center gap-3 text-white">
                                <span className="text-4xl md:text-5xl font-extrabold">£{estLo.toLocaleString()}</span>
                                <span className="text-gray-500 text-xl font-medium">to</span>
                                <span className="text-4xl md:text-5xl font-extrabold">£{estHi.toLocaleString()}</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-3">This guide is for estimation only. Final quotations are confirmed after inspection.</p>
                        </div>
                    </div>

                    {/* RIGHT: Accordions */}
                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-8">What Affects the Price?</h3>
                        <div className="space-y-3">
                            {costFaqs.map((f, i) => (
                                <div key={i} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                                    >
                                        <span className="text-white font-semibold">{f.q}</span>
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                                        <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-gray-400 mb-5 font-medium">Need an accurate quotation?</p>
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20car%20respray%20quote.`}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg animate-pulse-subtle"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Upload Vehicle Photos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S6: Customer Stories
// ─────────────────────────────────────────────────────────────────────────────
const reviews = [
    { stars: 5, text: 'My Audi looked better than when I bought it. The colour match was absolutely perfect. Highly recommend Car Body Shop Rochdale.', name: 'James T.', vehicle: 'Audi A4', location: 'Rochdale' },
    { stars: 5, text: 'Had my BMW resprayed after an accident. The finish is flawless; you can\'t even tell there was any damage. Brilliant work.', name: 'Sarah M.', vehicle: 'BMW 3 Series', location: 'Oldham' },
    { stars: 5, text: 'Professional service from start to finish. They kept me updated every day and the van came back looking brand new. Wouldn\'t go anywhere else.', name: 'Chris D.', vehicle: 'Ford Transit', location: 'Bury' },
    { stars: 5, text: 'Fantastic job on my Mercedes. The paint is perfectly matched and the finish is showroom quality. Great value too, much cheaper than the dealer.', name: 'Natalie H.', vehicle: 'Mercedes C-Class', location: 'Heywood' },
    { stars: 5, text: 'Got my Vauxhall Astra resprayed after years of wear. The result was incredible; it looks like a completely different car. Will definitely return.', name: 'Marcus W.', vehicle: 'Vauxhall Astra', location: 'Middleton' },
];

function CustomerStoriesSection() {
    const [idx, setIdx] = useState(0);
    const r = reviews[idx];

    return (
        <section className="pt-24 pb-12 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Customer Reviews for Car Resprays
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Hundreds of customers have trusted us to restore everything from daily drivers to prestige vehicles.
                    </p>
                </div>

                {/* Main review card */}
                <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-gray-100 mb-8 relative">
                    <div className="flex text-yellow-400 mb-6 gap-1">
                        {Array.from({ length: r.stars }).map((_, i) => (
                            <svg key={i} className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                        &ldquo;{r.text}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {r.name[0]}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">{r.name}</p>
                            <p className="text-gray-500 text-sm">{r.vehicle} · {r.location}</p>
                        </div>
                        <div className="ml-auto">
                            <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        </div>
                    </div>

                    {/* Nav arrows */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-5 hidden md:block">
                        <button onClick={() => setIdx((idx - 1 + reviews.length) % reviews.length)}
                            className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 border border-gray-100 transition-colors">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-5 hidden md:block">
                        <button onClick={() => setIdx((idx + 1) % reviews.length)}
                            className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 border border-gray-100 transition-colors">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2">
                    {reviews.map((_, i) => (
                        <button key={i} onClick={() => setIdx(i)}
                            className={`transition-all rounded-full ${i === idx ? 'w-6 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`} />
                    ))}
                </div>

            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S7: Other Services
// ─────────────────────────────────────────────────────────────────────────────
const otherServices = [
    { title: 'Dent Removal Services', desc: 'Repair dents, dings and creases while preserving your vehicle\'s original paintwork and appearance.', cta: 'Learn More', href: '/services/dent-removal-rochdale', img: '/gallery/Before_Car_Fender_Dent.webp' },
    { title: 'Car Scratch Repair Services', desc: 'Professional paint correction and scratch repairs using precision colour matching and OEM quality materials.', cta: 'Learn More', href: '/services/car-scratch-repair-rochdale', img: '/gallery/AfteR_Cad_Fender_paint.webp' },
    { title: 'Bumper Repair Services', desc: 'Repair cracked, scratched and damaged bumpers to a factory standard without unnecessary panel replacements.', cta: 'Learn More', href: '/services/bumper-repair-rochdale', img: '/gallery/Bumper Lip After.webp' },
    { title: 'Accident & Collision Repair', desc: 'Comprehensive repairs after collisions, from structural bodywork and panel straightening to final paint refinishing.', cta: 'Learn More', href: '/services/accident-collision-repair-rochdale', img: '/gallery/Middlestage_Van_backdoor_Putene.webp' },
    { title: 'Minor Accident Repair Services', desc: 'Fast, affordable repairs for minor bumps, scrapes and cosmetic damage with no insurance claim necessary.', cta: 'Learn More', href: '/services/minor-accident-repair-rochdale', img: '/gallery/Middlestage_Car_Fender_Putene.webp' },
    { title: 'Lease Return Repair Services', desc: 'Scuffs, dents and scratches repaired before your handover date to help avoid costly end-of-lease penalty charges.', cta: 'Learn More', href: '/services/lease-return-repairs-rochdale', img: '/gallery/After_Van_Backdoor_Complete.webp' },
];

function OtherServicesSection() {
    return (
        <section className="pt-12 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Related Car Body Repair Services</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        If your vehicle doesn&apos;t require a complete respray, we also provide a full range of professional car body repair services from our Rochdale workshop.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherServices.map((s) => (
                        <Link key={s.title} href={s.href}
                            className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5">
                            {/* Background image */}
                            <div className="relative h-44 overflow-hidden">
                                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                                <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                    {s.cta}
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S8: Service Areas
// ─────────────────────────────────────────────────────────────────────────────
const areas = ['Rochdale', 'Whitworth', 'Littleborough', 'Heywood', 'Oldham', 'Bury', 'Milnrow', 'Middleton', 'Manchester', 'Bolton'];

function ServiceAreasSection() {
    const [active, setActive] = useState('Rochdale');

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left: Map placeholder */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-800 border border-gray-700 shadow-2xl">
                        <iframe
                            title="Car Body Shop Rochdale location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.9!2d-2.1608!3d53.6452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba77b4d1d1c4b%3A0x7b3e2e2e2e2e2e2e!2sWhitworth%2C%20Rochdale!5e0!3m2!1sen!2suk!4v1700000000000"
                            className="w-full h-full border-0 opacity-80"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Car Respray Services Across Greater Manchester
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            We proudly provide professional car resprays, car painting, and vehicle refinishing for customers throughout Rochdale and the surrounding areas.
                        </p>

                        {/* Chips */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {areas.map((a) => (
                                <button key={a} onClick={() => setActive(a)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                                        active === a
                                            ? 'border-blue-500 bg-blue-600/20 text-blue-300'
                                            : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                                    }`}>
                                    📍 {a}
                                </button>
                            ))}
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Wherever you&apos;re located in or around Rochdale, our experienced technicians deliver the same high standards of workmanship, premium materials and meticulous attention to detail.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S9: Split FAQ
// ─────────────────────────────────────────────────────────────────────────────
const splitFaqs = [
    { q: 'How much does a full car respray cost?', a: 'The cost depends on vehicle size, paintwork condition, finish type and any repair work required. Prices typically start from around £800 for a standard hatchback in good condition. We provide free, itemised quotes; send us photos on WhatsApp for an accurate price within the hour.' },
    { q: 'How long does a complete respray take?', a: 'Most full car resprays are completed within two to five working days. The exact timeframe depends on the amount of preparation needed and the size of the vehicle. We always provide a realistic estimate upfront and keep you updated throughout.' },
    { q: 'Will the new paint match perfectly?', a: 'Yes. We use computerised colour-matching technology and your vehicle\'s manufacturer paint code to reproduce the exact factory shade. Even on older vehicles with slight fading, our technicians blend and feather the paint edges for a consistent, seamless result.' },
    { q: 'Can you change my vehicle\'s colour?', a: 'Absolutely. A full colour change is one of our most popular services. We paint all visible surfaces including door shuts, edges and jambs to ensure a professional, consistent finish. We\'ll advise on the best approach for your specific vehicle.' },
    { q: "Is a respray better than replacing damaged panels?", a: 'In most cases, yes. A professional respray is significantly more cost-effective than panel replacement and delivers an equally impressive result. We\'ll always advise you honestly on the best approach after inspecting your vehicle.' },
    { q: 'Do you provide commercial vehicle resprays?', a: 'Yes. We regularly respray vans, light commercial vehicles and fleet vehicles. We offer priority slots for trade customers and can work around your schedule to minimise downtime.' },
];

function SplitFaqSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Full Car Respray FAQs</h2>
                    <p className="text-gray-500">Everything you need to know about our professional car respray service in Rochdale.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">

                    {/* Question list */}
                    <div className="space-y-2">
                        {splitFaqs.map((f, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-full text-left px-6 py-5 rounded-2xl border-2 font-semibold transition-all duration-200 ${
                                    active === i
                                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-200'
                                }`}
                            >
                                <span className="flex items-center justify-between gap-4">
                                    {f.q}
                                    <svg className={`w-5 h-5 flex-shrink-0 transition-transform ${active === i ? 'rotate-90 text-blue-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Answer panel */}
                    <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 md:p-10 flex flex-col justify-center min-h-[280px] shadow-sm">
                        <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">Answer</p>
                        <h3 className="text-xl font-bold text-gray-900 mb-5">{splitFaqs[active].q}</h3>
                        <p className="text-gray-600 leading-relaxed">{splitFaqs[active].a}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINAL: Luxury CTA
// ─────────────────────────────────────────────────────────────────────────────
function FinalCTASection({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="relative py-36 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/gallery/AfteR_Cad_Fender_paint.webp"
                    alt="Freshly resprayed vehicle by Car Body Shop Rochdale"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950/90" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Get Your Free Car Respray Quote
                </h2>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                    Whether your vehicle needs a complete colour transformation, factory colour restoration or professional paint refinishing after years of wear, our experienced team is here to help. From your first quotation to the final polish, every vehicle is treated with precision, care and craftsmanship.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20respray%20quote.`}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl shadow-blue-900/40"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        Get My Free Quote
                    </a>
                    <a
                        href={`tel:${BUSINESS_DETAILS.phone}`}
                        className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                        </svg>
                        Call Our Team
                    </a>
                </div>

                {/* Trust strip */}
                <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
                    {['★★★★★ Rated', 'Factory Colour Matching', 'Premium Paint Systems', 'Fast Turnaround', 'Free Quotations'].map((t) => (
                        <span key={t} className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}


// ── Before / After Slider ─────────────────────────────────────────────────────
function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: {
    beforeSrc: string; afterSrc: string; beforeAlt: string; afterAlt: string;
}) {
    const [pos, setPos] = useState(50);
    const [dragging, setDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updatePos = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
        setPos(pct);
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => { if (dragging) updatePos(e.clientX); }, [dragging, updatePos]);
    const onTouchMove = useCallback((e: TouchEvent) => { updatePos(e.touches[0].clientX); }, [updatePos]);
    const stopDrag = useCallback(() => setDragging(false), []);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', stopDrag);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', stopDrag);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', stopDrag);
        };
    }, [onMouseMove, onTouchMove, stopDrag]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[50vh] md:h-[70vh] cursor-ew-resize select-none overflow-hidden"
            onMouseDown={() => setDragging(true)}
            onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}
        >
            {/* AFTER — full width base */}
            <div className="absolute inset-0">
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">After</div>
            </div>

            {/* BEFORE — clipped left */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
                <div className="absolute inset-0" style={{ width: `${100 / (pos / 100)}%` }}>
                    <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
                </div>
                <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">Before</div>
            </div>

            {/* Divider handle */}
            <div
                className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
                style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            >
                <div className="w-0.5 h-full bg-white/60" />
                <div className={`absolute w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center transition-all duration-150 ${dragging ? 'scale-110 shadow-blue-400/60 shadow-2xl ring-2 ring-blue-400' : 'hover:scale-110'}`}>
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

// ── Gallery Thumbnails ────────────────────────────────────────────────────────
const thumbs = [
    { src: '/gallery/AfteR_Rim_Job.webp', alt: 'Alloy wheel respray after' },
    { src: '/gallery/After_Van_Backdoor_Complete.webp', alt: 'Van rear door respray complete' },
    { src: '/gallery/Bumper Lip After.webp', alt: 'Bumper respray finished' },
    { src: '/gallery/Middlestage_Car_Fender_Putene.webp', alt: 'Mid-stage body panel preparation' },
];

function GalleryThumbnails() {
    const [lightbox, setLightbox] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-4 gap-2 px-4 md:px-12 mt-6">
                {thumbs.map((t) => (
                    <button
                        key={t.src}
                        onClick={() => setLightbox(t.src)}
                        className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                        aria-label={`View ${t.alt}`}
                    >
                        <Image
                            src={t.src}
                            alt={t.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-4xl w-full aspect-video">
                        <Image src={lightbox} alt="Gallery image" fill className="object-contain" />
                    </div>
                    <button className="absolute top-4 right-4 text-white text-4xl font-light leading-none hover:text-gray-300">&times;</button>
                </div>
            )}
        </>
    );
}

// ── Animated Stats ────────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix }: { target: number | string; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                if (typeof target === 'number') {
                    let start = 0;
                    const step = Math.ceil(target / 50);
                    const timer = setInterval(() => {
                        start = Math.min(start + step, target);
                        setCount(start);
                        if (start >= target) clearInterval(timer);
                    }, 30);
                }
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white">
            {typeof target === 'number' ? count : target}{suffix}
        </div>
    );
}

function AnimatedStats() {
    const stats = [
        { target: 5000, suffix: '+', label: 'Repairs Completed' },
        { target: 10, suffix: '+', label: 'Years Experience' },
        { target: '5.0', suffix: '★', label: 'Average Rating' },
        { target: '100%', suffix: '', label: 'Satisfaction Guarantee' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6 md:px-12 mt-14">
            {stats.map((s, i) => (
                <div key={i} className="text-center py-8 px-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    {typeof s.target === 'number'
                        ? <AnimatedCounter target={s.target} suffix={s.suffix} />
                        : <div className="text-4xl md:text-5xl font-extrabold text-white">{s.target}{s.suffix}</div>
                    }
                    <p className="text-gray-400 text-sm mt-2 font-medium">{s.label}</p>
                </div>
            ))}
        </div>
    );
}

// ── Preparation Process Section ───────────────────────────────────────────────
const prepSteps = [
    {
        title: 'Surface Inspection',
        body: 'Before any work begins, we inspect the condition of every panel, identify previous repairs, check for corrosion and determine the best preparation method. This allows us to plan a respray that delivers a consistent finish across the entire vehicle.',
        img: '/gallery/Middlestage_Car_Fender_Putene.webp',
    },
    {
        title: 'Bodywork Repairs',
        body: 'Small dents, stone chips, scratches and imperfections are repaired before painting begins. A flawless finish is only possible when the surface beneath the paint is perfectly prepared.',
        img: '/gallery/Before_Car_Fender_Dent.webp',
    },
    {
        title: 'Precision Sanding',
        body: 'Existing paintwork is carefully sanded to create the ideal surface for primer and fresh paint. This step improves adhesion and helps eliminate imperfections that could affect the final finish.',
        img: '/gallery/Middlestage_Van_backdoor_Putene.webp',
    },
    {
        title: 'Computer Colour Matching',
        body: "Using manufacturer paint codes and professional colour matching technology, we accurately recreate your vehicle's original finish or prepare it for a complete colour change.",
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
    },
    {
        title: 'Controlled Spray Booth Application',
        body: 'Your vehicle is painted inside our enclosed spray booth where dust, temperature and airflow are carefully controlled to produce a clean, even finish.',
        img: '/gallery/AfteR_Rim_Job.webp',
    },
    {
        title: 'Protective Lacquer & Machine Polishing',
        body: 'Multiple layers of clear lacquer protect the paint before the vehicle is polished to enhance gloss, depth and durability.',
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
    },
];

function PrepSection({ whatsapp }: { whatsapp: string }) {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = stepRefs.current.findIndex((r) => r === entry.target);
                        if (idx !== -1) setActiveStep(idx);
                    }
                });
            },
            { threshold: 0.6 }
        );
        stepRefs.current.forEach((r) => { if (r) observer.observe(r); });
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our Full Car Respray Process
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        The quality of a vehicle respray isn&apos;t determined by the final coat of paint. It&apos;s determined by everything that happens beforehand. Proper preparation creates a smoother finish, stronger paint adhesion and a result that lasts for years rather than months.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: Sticky image */}
                    <div className="lg:sticky lg:top-24">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <Image
                                src={prepSteps[activeStep].img}
                                alt={prepSteps[activeStep].title}
                                fill
                                className="object-cover transition-all duration-700"
                            />
                            {/* Progress line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200/40">
                                <div
                                    className="w-full bg-blue-500 transition-all duration-500 rounded-full"
                                    style={{ height: `${((activeStep + 1) / prepSteps.length) * 100}%` }}
                                />
                            </div>
                            <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                                Step {activeStep + 1} of {prepSteps.length}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Scrollable steps */}
                    <div className="space-y-6">
                        {prepSteps.map((step, i) => (
                            <div
                                key={i}
                                ref={(el) => { stepRefs.current[i] = el; }}
                                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                                    activeStep === i
                                        ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100'
                                        : 'border-gray-200 bg-white hover:border-blue-200'
                                }`}
                                onClick={() => setActiveStep(i)}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${activeStep === i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                                        {i + 1}
                                    </span>
                                    <h3 className={`font-bold text-lg ${activeStep === i ? 'text-blue-700' : 'text-gray-800'}`}>
                                        {step.title}
                                    </h3>
                                    {i < prepSteps.length - 1 && (
                                        <span className="ml-auto text-gray-400">↓</span>
                                    )}
                                </div>
                                <p className={`text-sm leading-relaxed transition-all duration-300 ${activeStep === i ? 'text-gray-700 max-h-40 opacity-100' : 'text-gray-500 max-h-0 opacity-0 overflow-hidden'}`}>
                                    {step.body}
                                </p>
                            </div>
                        ))}

                        <div className="pt-4 text-center">
                            <p className="text-gray-600 font-medium mb-4">Curious how we&apos;d restore your vehicle?</p>
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20a%20full%20car%20respray.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
                            >
                                Get Free Quote
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ── Transformation Section ────────────────────────────────────────────────────
const beforeItems = ['Faded Paint', 'Deep Scratches', 'Stone Chips', 'Oxidised Panels', 'Peeling Lacquer'];
const afterItems = ['Deep Gloss', 'Factory Finish', 'UV Protection', 'Increased Value', 'Like-New Appearance'];

function TransformationSection({ whatsapp }: { whatsapp: string }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const trustItems = ['Factory Finish', 'Premium Paint', 'Colour Accuracy', 'Long-lasting Protection', 'Fast Turnaround', 'Free Estimates'];

    return (
        <section className="bg-gray-900 py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Benefits of a Full Car Respray
                    </h2>
                </div>

                {/* Before ↔ After Comparison */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">

                    {/* Before column */}
                    <div className="bg-gray-800/60 rounded-3xl p-8 border border-gray-700">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Before</p>
                        <ul className="space-y-4">
                            {beforeItems.map((item, i) => (
                                <li
                                    key={item}
                                    className={`flex items-center gap-3 text-gray-300 font-medium transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Animated arrow */}
                    <div className="flex flex-col items-center justify-center py-8 gap-4">
                        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-blue-400 text-sm font-bold text-center uppercase tracking-wider">Respray</p>
                    </div>

                    {/* After column */}
                    <div className="bg-blue-900/40 rounded-3xl p-8 border border-blue-700/50">
                        <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">After</p>
                        <ul className="space-y-4">
                            {afterItems.map((item, i) => (
                                <li
                                    key={item}
                                    className={`flex items-center gap-3 text-white font-medium transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                                    style={{ transitionDelay: `${(i * 100) + 400}ms` }}
                                >
                                    <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3 Premium Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            img: '/gallery/AfteR_Cad_Fender_paint.webp',
                            title: "Restore Your Vehicle's Original Finish",
                            body: "Years of sunlight, road debris and weather gradually dull your paintwork. Our full car respray service restores colour depth, gloss and protection, helping your vehicle look as close to factory fresh as possible.",
                        },
                        {
                            img: '/gallery/AfteR_Rim_Job.webp',
                            title: 'Increase Resale Value',
                            body: 'Fresh paintwork creates a stronger first impression and can significantly improve resale appeal by eliminating faded panels, scratches and cosmetic damage.',
                        },
                        {
                            img: '/gallery/After_Van_Backdoor_Complete.webp',
                            title: 'Complete Colour Change Available',
                            body: 'Looking for something different? Whether you want to restore the original colour or completely transform your vehicle, our experienced car painters provide accurate colour matching and professional refinishing.',
                        },
                    ].map((card, i) => (
                        <div key={i} className="group bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden">
                                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Strip */}
                <div className="overflow-x-auto scrollbar-hide mb-14">
                    <div className="flex gap-4 min-w-max mx-auto md:justify-center flex-nowrap px-2">
                        {trustItems.map((item) => (
                            <div key={item} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap">
                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Ready to transform your vehicle?</h3>
                    <a
                        href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20respray%20quote.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all hover:scale-105 shadow-2xl shadow-blue-900/50"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        Request My Car Respray Quote
                    </a>
                </div>
            </div>
        </section>
    );
}

// ── Lead Capture Form ─────────────────────────────────────────────────────────

function ResprayQuoteForm({ whatsapp }: { whatsapp: string }) {
    const today = new Date().toISOString().split('T')[0];

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const msg = [
            `👋 Hi, I'd like a free quote for a Full Car Respray:`,
            ``,
            `📛 Name: ${fd.get('name')}`,
            `🚗 Vehicle: ${fd.get('vehicle')}`,
            `📍 Location: ${fd.get('location')}`,
            `📅 Preferred Date: ${fd.get('date')}`,
            `📝 Extra Info: ${fd.get('notes') || 'None'}`,
        ].join('\n');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }

    const input = 'w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all';
    const label = 'block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name + Vehicle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="rq-name" className={label}>Your Name</label>
                    <input id="rq-name" name="name" type="text" required placeholder="e.g. John Smith" className={input} />
                </div>
                <div>
                    <label htmlFor="rq-vehicle" className={label}>Your Vehicle</label>
                    <input id="rq-vehicle" name="vehicle" type="text" required placeholder="e.g. BMW 3 Series" className={input} />
                </div>
            </div>

            {/* Location */}
            <div>
                <label htmlFor="rq-location" className={label}>Your Location / Postcode</label>
                <input id="rq-location" name="location" type="text" required placeholder="e.g. Rochdale, OL12" className={input} />
            </div>

            {/* Date */}
            <div>
                <label htmlFor="rq-date" className={label}>Preferred Date</label>
                <input id="rq-date" name="date" type="date" required min={today} className={input + ' [color-scheme:dark]'} />
            </div>

            {/* Notes */}
            <div>
                <label htmlFor="rq-notes" className={label}>Any extra details? (optional)</label>
                <textarea id="rq-notes" name="notes" rows={2} placeholder="e.g. colour change, accident damage, rust…" className={input + ' resize-none'} />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Get Free Quote via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400 pt-1">
                Opens WhatsApp with your details pre-filled. We confirm same day.
            </p>
        </form>
    );
}
