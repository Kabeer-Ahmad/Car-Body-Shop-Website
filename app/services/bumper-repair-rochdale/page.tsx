'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import MapEmbed from '@/components/MapEmbed';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { businessNode, breadcrumbList, BUSINESS_ID } from '@/lib/schema';

// ─── Shared SVG primitives ────────────────────────────────────────────────────
const WHATSAPP_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        businessNode(),
        {
            "@type": "Service",
            "serviceType": "Bumper Repair",
            "name": "Bumper Repair Rochdale",
            "description": "Expert bumper repair in Rochdale. Scuffs, cracks and dents repaired and colour-matched to a showroom finish.",
            "provider": { "@id": BUSINESS_ID },
            "areaServed": [
                { "@type": "City", "name": "Rochdale" },
                { "@type": "City", "name": "Oldham" },
                { "@type": "City", "name": "Bury" },
                { "@type": "City", "name": "Heywood" },
                { "@type": "City", "name": "Middleton" },
                { "@type": "City", "name": "Manchester" },
                { "@type": "City", "name": "Bolton" }
            ],
            "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale",
            "offers": [
                { "@type": "Offer", "name": "Light scuff or scrape", "price": "150", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale" },
                { "@type": "Offer", "name": "Scratch, colour matched", "price": "200", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale" },
                { "@type": "Offer", "name": "Crack or split repair", "price": "250", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale" },
                { "@type": "Offer", "name": "Dent, pulled and painted", "price": "200", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale" },
                { "@type": "Offer", "name": "Multiple areas or full bumper", "price": "350", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/bumper-repair-rochdale" }
            ]
        },
        breadcrumbList([
            { name: "Home", url: "https://www.carbodyshop.org/" },
            { name: "Services", url: "https://www.carbodyshop.org/services" },
            { name: "Bumper Repair Rochdale", url: "https://www.carbodyshop.org/services/bumper-repair-rochdale" }
        ]),
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can a cracked bumper be repaired instead of replaced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In most cases, yes. We repair the vast majority of cracked and split bumpers using flexible plastic repair materials rather than fitting a full replacement. This saves you money and usually takes less time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does bumper repair cost in Rochdale?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Light scuffs start from around £150. Cracks, splits and larger repairs typically range from £200 to £350 depending on the damage. Send a photo on WhatsApp for an exact price."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a bumper repair take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most scuffs, scratches and small cracks are completed the same day. Larger repairs involving splits or multiple areas usually take 1 to 2 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will the repaired area match the rest of my bumper?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We use computerised colour matching to your exact manufacturer paint code, so the repaired section blends seamlessly with the rest of the bumper and bodywork."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need to go through insurance for a bumper repair?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Bumper repairs are usually well within most insurance excess amounts, so paying directly is often cheaper and protects your no-claims bonus. We give you a cash price upfront so you can compare."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer paintless dent removal in Whitworth and Lancashire?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Where the paint surface is intact, we use paintless dent removal (PDR) to push bumper dents back into shape without spraying. This is faster and less expensive than traditional repair. We cover Whitworth, Rochdale and the surrounding Lancashire area. If you are looking for dent repair near me in Whitworth Lancashire, we are the closest specialist auto body shop."
                    }
                }
            ]
        }
    ]
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BumperRepairPage() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* ══════════════════════════════════════════════════════════════
                S1 — HERO
            ══════════════════════════════════════════════════════════════ */}
            <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/gallery/Bumper Lip After.webp"
                        alt="Car bumper repair in Rochdale, Car Body Shop workshop"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-gray-900/78 to-black/82" />
                </div>

                {/* Content Grid */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* LEFT */}
                        <div>
                            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
                                Car Bumper Repair Rochdale
                            </p>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Car Bumper Repair<br />
                                <span className="text-blue-400">in Rochdale</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Scuffs, scratches, cracks, dents and plastic bumper damage repaired. Same day turnaround. Cash prices, no insurance needed. Dent repair near me in Whitworth, Rochdale and across Greater Manchester.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300 mb-8">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    5,000+ Repairs Completed
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    10+ Years Experience
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    5.0 Star Rated
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    100% Satisfaction Guarantee
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
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
                                    href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20a%20bumper%20repair.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={WHATSAPP_PATH} />
                                    </svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Quote Form */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <div className="mb-5">
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Bumper Repair Quote</h2>
                                    <p className="text-gray-300 text-sm">Send a photo of the damage and we will reply within the hour with a cash price.</p>
                                </div>
                                <BumperQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S2 — BEFORE/AFTER GALLERY
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Recent Bumper Repair Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Drag the slider to see real bumper repairs completed at our Rochdale workshop.
                    </p>
                </div>

                {/* Before/After Slider */}
                <div className="relative w-full">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Bumper Lip Before.webp"
                        afterSrc="/gallery/Bumper Lip After.webp"
                        beforeAlt="Car bumper before repair, scuffed and scratched"
                        afterAlt="Car bumper after repair, colour matched and polished"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">
                        ← Drag to reveal transformation →
                    </p>
                </div>

                {/* Badge Strip */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
                    {['Premium Paint Systems', 'Professional Spray Booth', 'Computer Colour Matching', 'OEM Paint Finish'].map((b) => (
                        <div key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-5 py-2.5 text-sm font-medium">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {b}
                        </div>
                    ))}
                </div>

                {/* Thumbnails */}
                <BumperThumbnails />

                {/* Animated Stats */}
                <AnimatedStats />
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S3 — HOW WE REPAIR YOUR BUMPER (4-step scroll stepper)
            ══════════════════════════════════════════════════════════════ */}
            <RepairProcessSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S4 — DAMAGE TYPE TABS
            ══════════════════════════════════════════════════════════════ */}
            <DamageTypesSection />

            {/* ══════════════════════════════════════════════════════════════
                S5 — COST CALCULATOR
            ══════════════════════════════════════════════════════════════ */}
            <CostCalculatorSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S6 — WHY CHOOSE US
            ══════════════════════════════════════════════════════════════ */}
            <WhyChooseSection />

            {/* ══════════════════════════════════════════════════════════════
                S7 — RELATED SERVICES
            ══════════════════════════════════════════════════════════════ */}
            <RelatedServicesSection />

            {/* ══════════════════════════════════════════════════════════════
                S8 — COVERAGE AREAS
            ══════════════════════════════════════════════════════════════ */}
            <CoverageSection />

            {/* ══════════════════════════════════════════════════════════════
                S9 — FAQs
            ══════════════════════════════════════════════════════════════ */}
            <FaqSection />

            {/* ══════════════════════════════════════════════════════════════
                S10 — FINAL CTA
            ══════════════════════════════════════════════════════════════ */}
            <FinalCtaSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            <Footer />
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// BEFORE / AFTER SLIDER
// ─────────────────────────────────────────────────────────────────────────────
function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: {
    beforeSrc: string; afterSrc: string; beforeAlt: string; afterAlt: string;
}) {
    const [pos, setPos] = useState(50);
    const [dragging, setDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const updatePos = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        setPos(Math.min(95, Math.max(5, ((clientX - left) / width) * 100)));
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => { if (dragging) updatePos(e.clientX); }, [dragging, updatePos]);
    const onTouchMove = useCallback((e: TouchEvent) => { if (dragging) updatePos(e.touches[0].clientX); }, [dragging, updatePos]);
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
            <div className="absolute inset-0">
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">After</div>
            </div>
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
                <div className="absolute inset-0" style={{ width: `${100 / (pos / 100)}%` }}>
                    <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
                </div>
                <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">Before</div>
            </div>
            <div className="absolute top-0 bottom-0 z-20 flex items-center justify-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
                <div className="w-0.5 h-full bg-white/60" />
                <div className={`absolute w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center transition-all duration-150 ${dragging ? 'scale-110 ring-2 ring-blue-400' : 'hover:scale-110'}`}>
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY THUMBNAILS
// ─────────────────────────────────────────────────────────────────────────────
const bumperThumbs = [
    { src: '/gallery/Bumper Lip After.webp', alt: 'Bumper scuff repair finished' },
    { src: '/gallery/Bumper Lip Before.webp', alt: 'Bumper scuff before repair' },
    { src: '/gallery/AfteR_Cad_Fender_paint.webp', alt: 'Colour matched panel repair after' },
    { src: '/gallery/Middlestage_Car_Fender_Putene.webp', alt: 'Mid-stage bumper filler and primer' },
];

function BumperThumbnails() {
    const [lightbox, setLightbox] = useState<string | null>(null);
    return (
        <>
            <div className="grid grid-cols-4 gap-2 px-4 md:px-12 mt-6">
                {bumperThumbs.map((t) => (
                    <button
                        key={t.src}
                        onClick={() => setLightbox(t.src)}
                        className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                        aria-label={`View ${t.alt}`}
                    >
                        <Image src={t.src} alt={t.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                    </button>
                ))}
            </div>
            {lightbox && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
                    <div className="relative max-w-4xl w-full aspect-video">
                        <Image src={lightbox} alt="Gallery image" fill className="object-contain" />
                    </div>
                    <button className="absolute top-4 right-4 text-white text-4xl font-light leading-none hover:text-gray-300">&times;</button>
                </div>
            )}
        </>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED STATS
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// S3 — REPAIR PROCESS (4-step sticky stepper)
// ─────────────────────────────────────────────────────────────────────────────
const repairSteps = [
    {
        title: 'Assess the Damage',
        body: 'We check whether the bumper needs repair or replacement. Most scuffs, scratches and cracks can be repaired, saving you the cost of a new bumper.',
        img: '/gallery/Before_Car_Fender_Dent.webp',
    },
    {
        title: 'Repair the Plastic',
        body: 'Cracks and splits are welded or filled using flexible plastic repair materials built to handle bumper movement without cracking again.',
        img: '/gallery/Middlestage_Car_Fender_Putene.webp',
    },
    {
        title: 'Colour Match and Spray',
        body: 'Your bumper is resprayed inside our enclosed booth using your exact manufacturer colour code, so the repair blends with the rest of the car.',
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
    },
    {
        title: 'Polish and Inspect',
        body: 'The finish is polished and checked panel to panel before your car is handed back.',
        img: '/gallery/Bumper Lip After.webp',
    },
];

function RepairProcessSection({ whatsapp }: { whatsapp: string }) {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        How We Repair Your Bumper
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Most bumper repairs follow the same four stages, whether it is a scuff or a full crack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Sticky image */}
                    <div className="lg:sticky lg:top-24">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <Image
                                src={repairSteps[activeStep].img}
                                alt={repairSteps[activeStep].title}
                                fill
                                className="object-cover transition-all duration-700"
                            />
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200/40">
                                <div
                                    className="w-full bg-blue-500 transition-all duration-500 rounded-full"
                                    style={{ height: `${((activeStep + 1) / repairSteps.length) * 100}%` }}
                                />
                            </div>
                            <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                                Step {activeStep + 1} of {repairSteps.length}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Scrollable steps */}
                    <div className="space-y-6">
                        {repairSteps.map((step, i) => (
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
                                </div>
                                <p className={`text-sm leading-relaxed transition-all duration-300 ${activeStep === i ? 'text-gray-700 max-h-40 opacity-100' : 'text-gray-500 max-h-0 opacity-0 overflow-hidden'}`}>
                                    {step.body}
                                </p>
                            </div>
                        ))}

                        <div className="pt-4 text-center">
                            <p className="text-gray-600 font-medium mb-4">See how we would fix yours</p>
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20a%20bumper%20repair.`}
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

// ─────────────────────────────────────────────────────────────────────────────
// S4 — DAMAGE TYPE TABS
// ─────────────────────────────────────────────────────────────────────────────
const damageTabs = [
    {
        label: 'Scuffs and Scrapes',
        heading: 'Scuffs and Scrapes',
        img: '/gallery/Bumper Lip Before.webp',
        body: 'Kerb scuffs, car park scrapes and gatepost marks. The most common bumper damage and usually the fastest to fix.',
        perks: ['Kerb damage', 'Car park scrapes', 'Faded paint on the bumper edge', 'Same day turnaround'],
    },
    {
        label: 'Cracks and Splits',
        heading: 'Cracks and Splits',
        img: '/gallery/Middlestage_Car_Fender_Putene.webp',
        body: 'Impact cracks and split plastic repaired using flexible bumper repair materials, avoiding a full replacement.',
        perks: ['Cracked corners', 'Split mounting points', 'Impact damage', 'Saves cost of new bumper'],
    },
    {
        label: 'Scratches',
        heading: 'Deep Scratches',
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
        body: 'Deep scratches through the paint and clear coat, colour matched and blended seamlessly.',
        perks: ['Key scratches', 'Trolley damage', 'Road debris marks', 'Colour matched finish'],
    },
    {
        label: 'Dents',
        heading: 'Bumper Dents',
        img: '/gallery/Before_Car_Fender_Dent.webp',
        body: 'Bumper dents from low-speed knocks pulled back into shape or filled and resprayed. Where the paint is undamaged, we offer paintless dent removal — faster and cheaper. Serving Whitworth, Lancashire and the wider Rochdale area.',
        perks: ['Paintless dent removal', 'Low-speed shunts', 'Reversing knocks', 'Car park dents', 'Whitworth & Lancashire coverage'],
    },
];

function DamageTypesSection() {
    const [active, setActive] = useState(0);
    const [fading, setFading] = useState(false);

    function switchTab(i: number) {
        if (i === active) return;
        setFading(true);
        setTimeout(() => { setActive(i); setFading(false); }, 220);
    }

    const tab = damageTabs[active];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Types of Bumper Damage We Repair
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        From light scuffs to deep cracks, we repair all types of car bumper damage in Rochdale.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {damageTabs.map((t, i) => (
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
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
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
// S5 — COST CALCULATOR
// ─────────────────────────────────────────────────────────────────────────────
const damageBasePrice: Record<string, number> = {
    'Scuff or Scrape': 150,
    'Scratch': 200,
    'Crack or Split': 250,
    'Dent': 200,
};
const sizeMultiplier: Record<string, number> = { 'Small (under 10cm)': 1, 'Medium': 1.35, 'Large or Multiple': 1.75 };
const finishAdder: Record<string, number> = { Solid: 0, Metallic: 40, Pearlescent: 80 };

const pricingTable = [
    { type: 'Light scuff or scrape', from: '£150', turnaround: 'Same day' },
    { type: 'Scratch, colour matched', from: '£200', turnaround: 'Same day' },
    { type: 'Crack or split repair', from: '£250', turnaround: '1 day' },
    { type: 'Dent, pulled and painted', from: '£200', turnaround: '1 day' },
    { type: 'Multiple areas / full bumper', from: '£350', turnaround: '1-2 days' },
];

function CostCalculatorSection({ whatsapp }: { whatsapp: string }) {
    const [damage, setDamage] = useState('Scuff or Scrape');
    const [size, setSize] = useState('Small (under 10cm)');
    const [finish, setFinish] = useState('Solid');
    const [showTable, setShowTable] = useState(false);

    const base = damageBasePrice[damage];
    const mult = sizeMultiplier[size];
    const add = finishAdder[finish];
    const estimate = Math.round(base * mult + add);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Car Bumper Repair Cost in Rochdale</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Bumper repair cost depends on the type and size of the damage. These are guide prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* LEFT: Calculator */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Estimate Calculator</p>

                        {/* Damage Type */}
                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Damage Type</p>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.keys(damageBasePrice).map((d) => (
                                    <button key={d} onClick={() => setDamage(d)}
                                        className={`py-3 px-2 rounded-xl text-sm font-semibold border-2 transition-all ${damage === d ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {d}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size */}
                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Damage Size</p>
                            <div className="grid grid-cols-3 gap-3">
                                {Object.keys(sizeMultiplier).map((s) => (
                                    <button key={s} onClick={() => setSize(s)}
                                        className={`py-3 px-1 rounded-xl text-xs font-semibold border-2 transition-all ${size === s ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Finish */}
                        <div className="mb-10">
                            <p className="text-white font-semibold mb-4">Paint Finish</p>
                            <div className="grid grid-cols-3 gap-3">
                                {Object.keys(finishAdder).map((f) => (
                                    <button key={f} onClick={() => setFinish(f)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${finish === f ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result */}
                        <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                            <p className="text-gray-400 text-sm mb-3">Guide Price</p>
                            <div className="flex items-center justify-center gap-2 text-white">
                                <span className="text-gray-400 text-xl">from</span>
                                <span className="text-5xl font-extrabold">£{estimate}</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-3">Guide prices only. Send a photo for an exact quote.</p>
                        </div>
                    </div>

                    {/* RIGHT: Price table + CTA */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-extrabold text-white">Bumper Repair Price Guide</h3>
                            <button onClick={() => setShowTable(!showTable)} className="text-blue-400 text-sm font-semibold hover:text-blue-300">
                                {showTable ? 'Hide' : 'Show'} table
                            </button>
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ${showTable ? 'max-h-[600px]' : 'max-h-0'}`}>
                            <div className="rounded-2xl border border-gray-700 overflow-hidden mb-8">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-800">
                                            <th className="text-left px-4 py-3 text-gray-300 font-semibold">Damage Type</th>
                                            <th className="text-left px-4 py-3 text-gray-300 font-semibold">Guide Price</th>
                                            <th className="text-left px-4 py-3 text-gray-300 font-semibold">Turnaround</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pricingTable.map((row, i) => (
                                            <tr key={i} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                                                <td className="px-4 py-3 text-gray-300">{row.type}</td>
                                                <td className="px-4 py-3 text-blue-400 font-bold">{row.from}</td>
                                                <td className="px-4 py-3 text-green-400">{row.turnaround}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {!showTable && (
                            <div className="space-y-3 mb-8">
                                {pricingTable.slice(0, 3).map((row, i) => (
                                    <div key={i} className="flex items-center justify-between bg-gray-900 rounded-xl px-5 py-4 border border-gray-700">
                                        <span className="text-gray-300 text-sm">{row.type}</span>
                                        <div className="text-right">
                                            <span className="text-blue-400 font-bold">{row.from}</span>
                                            <span className="text-gray-500 text-xs ml-2">· {row.turnaround}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="mt-8 text-center">
                            <p className="text-gray-400 mb-5 font-medium">Get My Exact Price</p>
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20an%20exact%20bumper%20repair%20quote.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S6 — WHY CHOOSE US
// ─────────────────────────────────────────────────────────────────────────────
const whyPoints = [
    'Most bumpers repaired, not replaced. Saves you time and money.',
    'Same day turnaround on most scuffs, scratches and small cracks.',
    'No insurance needed. Straightforward cash pricing.',
    'Computer colour matching for a seamless finish.',
    'Free collection and delivery across Greater Manchester.',
    'Honest, itemised quotes. No hidden charges.',
    '10+ years repairing bumpers in Rochdale.',
];

function WhyChooseSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Why Choose Car Body Shop for Bumper Repair?
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            Rochdale&apos;s local specialists for bumper repair. Fast, affordable, and done right the first time.
                        </p>
                        <ul className="space-y-4">
                            {whyPoints.map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <p className="text-gray-700 font-medium leading-snug">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                        <Image src="/gallery/Bumper Lip After.webp" alt="Car bumper repair result" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex gap-3 flex-wrap">
                                {['5 Star Rated', 'Cash Prices', 'Same Day'].map((badge) => (
                                    <span key={badge} className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full">{badge}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S7 — RELATED SERVICES
// ─────────────────────────────────────────────────────────────────────────────
const relatedServices = [
    { title: 'Full Car Respray', desc: 'Complete resprays and colour changes with factory-matched paint.', href: '/services/full-car-respray-rochdale', img: '/gallery/AfteR_Cad_Fender_paint.webp' },
    { title: 'Accident & Collision Repair', desc: 'Collision damage restored to pre-accident condition. No insurance needed.', href: '/services/accident-collision-repair-rochdale', img: '/gallery/Middlestage_Van_backdoor_Putene.webp' },
    { title: 'Dent Removal', desc: 'Panel dents pulled and refinished, paintless where possible.', href: '/services/dent-removal-rochdale', img: '/gallery/Before_Car_Fender_Dent.webp' },
    { title: 'Car Scratch Repair', desc: 'Deep scratches and paint damage corrected and blended.', href: '/services/car-scratch-repair-rochdale', img: '/gallery/AfteR_Rim_Job.webp' },
    { title: 'Minor Accident Repair', desc: 'Fast, affordable fixes for bumps and cosmetic damage.', href: '/services/minor-accident-repair-rochdale', img: '/gallery/Middlestage_Car_Fender_Putene.webp' },
    { title: 'Lease Return Repairs', desc: 'Repairs before handover to avoid end-of-lease charges.', href: '/services/lease-return-repairs-rochdale', img: '/gallery/After_Van_Backdoor_Complete.webp' },
];

function RelatedServicesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Related Car Body Repair Services</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        If your car needs more than a bumper repair, we handle every type of car bodywork from our Rochdale workshop.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedServices.map((s) => (
                        <Link key={s.title} href={s.href}
                            className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5">
                            <div className="relative h-44 overflow-hidden">
                                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                                <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                    Learn More
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
// S8 — COVERAGE AREAS
// ─────────────────────────────────────────────────────────────────────────────
const areas = ['Rochdale', 'Whitworth', 'Littleborough', 'Heywood', 'Oldham', 'Bury', 'Milnrow', 'Middleton', 'Manchester', 'Bolton'];

function CoverageSection() {
    const [activeArea, setActiveArea] = useState('Rochdale');

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    {/* Map */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-800 border border-gray-700 shadow-2xl">
                        <MapEmbed />
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Bumper Repair Coverage Across Greater Manchester
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Wherever you are across Greater Manchester, we offer the same fast turnaround and free collection and delivery on every bumper repair.
                        </p>

                        {/* Area Chips */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {areas.map((a) => (
                                <button key={a} onClick={() => setActiveArea(a)}
                                    className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                                        activeArea === a
                                            ? 'border-blue-500 bg-blue-600/20 text-blue-300'
                                            : 'border-gray-600 text-gray-400 hover:border-gray-400'
                                    }`}>
                                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {a}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                            <p className="text-white font-bold text-lg mb-2">Bumper Repair in {activeArea}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We serve bumper repair and dent repair customers in {activeArea} with the same fast turnaround and cash pricing as our Rochdale workshop. Paintless dent removal available. Free collection and delivery available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S9 — FAQs
// ─────────────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: 'Can a cracked bumper be repaired instead of replaced?',
        a: 'In most cases, yes. We repair the vast majority of cracked and split bumpers using flexible plastic repair materials rather than fitting a full replacement. This saves you money and usually takes less time.',
    },
    {
        q: 'How much does bumper repair cost in Rochdale?',
        a: 'Light scuffs start from around £150. Cracks, splits and larger repairs typically range from £200 to £350 depending on the damage. Send a photo on WhatsApp for an exact price.',
    },
    {
        q: 'How long does a bumper repair take?',
        a: 'Most scuffs, scratches and small cracks are completed the same day. Larger repairs involving splits or multiple areas usually take 1 to 2 days.',
    },
    {
        q: 'Will the repaired area match the rest of my bumper?',
        a: 'Yes. We use computerised colour matching to your exact manufacturer paint code, so the repaired section blends seamlessly with the rest of the bumper and bodywork.',
    },
    {
        q: 'Do I need to go through insurance for a bumper repair?',
        a: 'No. Bumper repairs are usually well within most insurance excess amounts, so paying directly is often cheaper and protects your no-claims bonus. We give you a cash price upfront so you can compare.',
    },
    {
        q: 'Do you offer paintless dent removal in Whitworth and Lancashire?',
        a: 'Yes. Where the paint surface is intact, we use paintless dent removal (PDR) to push bumper dents back into shape without spraying. This is faster and less expensive than traditional repair. We cover Whitworth, Rochdale and the surrounding Lancashire area. If you are looking for dent repair near me in Whitworth Lancashire, we are the closest specialist auto body shop.',
    },
];

function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Car Bumper Repair FAQs</h2>
                    <p className="text-gray-500 text-lg">Common questions about bumper repair in Rochdale.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                                <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S10 — FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────
function FinalCtaSection({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Book Your Bumper Repair Today</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Do not pay for a full bumper replacement when a repair will do. Car Body Shop fixes scuffs, scratches, cracks and dents in Rochdale, most within a single day.
                        </p>

                        {/* Badge row */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {['5 Star Rated', 'No Insurance Needed', 'Free Collection & Delivery', 'Cash Prices', 'Free Quotations'].map((b) => (
                                <span key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-4 py-2 text-sm font-medium">
                                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {b}
                                </span>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="space-y-3 text-gray-400 text-sm mb-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>{BUSINESS_DETAILS.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors">{BUSINESS_DETAILS.phone}</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-white transition-colors">{BUSINESS_DETAILS.email}</a>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20bumper%20repair%20quote.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                Get My Free Quote
                            </a>
                            <a
                                href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Our Team
                            </a>
                        </div>
                    </div>

                    {/* Right: Quote form repeated */}
                    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                        <h3 className="text-2xl font-extrabold text-white mb-2">Get a Free Bumper Repair Quote</h3>
                        <p className="text-gray-400 text-sm mb-6">Send your details and we reply within the hour.</p>
                        <BumperQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} dark />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// BUMPER QUOTE FORM
// ─────────────────────────────────────────────────────────────────────────────
function BumperQuoteForm({ whatsapp, dark = false }: { whatsapp: string; dark?: boolean }) {
    const today = new Date().toISOString().split('T')[0];

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const msg = [
            `👋 Hi, I'd like a free quote for a Bumper Repair:`,
            ``,
            `📛 Name: ${fd.get('name')}`,
            `🚗 Vehicle: ${fd.get('vehicle')}`,
            `📍 Location: ${fd.get('location')}`,
            `🔧 Damage Type: ${fd.get('damage')}`,
            `📅 Preferred Date: ${fd.get('date')}`,
            `📝 Extra Info: ${fd.get('notes') || 'None'}`,
        ].join('\n');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }

    const input = dark
        ? 'w-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all'
        : 'w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all';
    const label = 'block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="bq-name" className={label}>Your Name</label>
                    <input id="bq-name" name="name" type="text" required placeholder="e.g. John Smith" className={input} />
                </div>
                <div>
                    <label htmlFor="bq-vehicle" className={label}>Your Vehicle</label>
                    <input id="bq-vehicle" name="vehicle" type="text" required placeholder="e.g. Ford Focus" className={input} />
                </div>
            </div>

            <div>
                <label htmlFor="bq-location" className={label}>Your Location / Postcode</label>
                <input id="bq-location" name="location" type="text" required placeholder="e.g. Rochdale, OL12" className={input} />
            </div>

            <div>
                <label htmlFor="bq-damage" className={label}>Type of Damage</label>
                <select id="bq-damage" name="damage" required className={input}>
                    <option value="">Select damage type...</option>
                    <option value="Scuff">Scuff</option>
                    <option value="Scratch">Scratch</option>
                    <option value="Crack or Split">Crack or Split</option>
                    <option value="Dent">Dent</option>
                    <option value="Multiple">Multiple</option>
                </select>
            </div>

            <div>
                <label htmlFor="bq-date" className={label}>Preferred Date</label>
                <input id="bq-date" name="date" type="date" required min={today} className={input + ' [color-scheme:dark]'} />
            </div>

            <div>
                <label htmlFor="bq-notes" className={label}>Any extra details? (optional)</label>
                <textarea id="bq-notes" name="notes" rows={2} placeholder="e.g. front bumper scuff, silver paint…" className={input + ' resize-none'} />
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                Get Free Bumper Repair Quote via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400 pt-1">
                Opens WhatsApp with your details pre-filled. We confirm same day.
            </p>
        </form>
    );
}
