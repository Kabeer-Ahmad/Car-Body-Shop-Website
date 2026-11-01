'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import { AreaPageLinks } from '@/components/AreaLink';
import MapEmbed from '@/components/MapEmbed';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { businessNode, breadcrumbList, BUSINESS_ID } from '@/lib/schema';

// ─── Shared SVG primitives ────────────────────────────────────────────────────
const WHATSAPP_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";
const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";
const PHONE_PATH = "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z";

const PAGE_URL = 'https://www.carbodyshop.org/services/alloy-wheel-repair-rochdale';
const waLink = (text: string) => `https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=${encodeURIComponent(text)}`;

// ─── FAQs (rendered on the page and in the FAQPage schema) ────────────────────
const faqs = [
    {
        q: 'How much does alloy wheel repair cost in Rochdale?',
        a: 'Kerb scuff repair starts from £80 per wheel. Full alloy refurbishment, diamond cut refurbs and cracked alloy wheel repair are priced from photos, because the cost depends on the wheel size, finish and damage. Send photos on WhatsApp and we reply with an exact cash price within the hour.',
    },
    {
        q: 'Can a cracked alloy wheel be repaired?',
        a: 'Often, yes. We inspect every crack before quoting. Cracked and buckled alloy wheels that can be repaired safely are repaired and refinished. If a crack is in a place where a repair would not be safe, we tell you and do not carry out the repair.',
    },
    {
        q: 'Do you refurbish diamond cut alloy wheels?',
        a: 'Yes. Diamond cut alloy wheels are refurbished by re-cutting the face to restore the bright machined finish, then lacquering to protect it. Send a photo of the wheel for a price.',
    },
    {
        q: 'Do you offer mobile alloy wheel repair?',
        a: 'No. Every alloy wheel repair is done in our workshop, where the paint and lacquer cure away from dust and damp. If you cannot bring the car to us, we collect it for free and bring it back once the wheels are done.',
    },
    {
        q: 'How long does an alloy wheel refurb take?',
        a: 'Most kerb scuff repairs are finished the same day. A full alloy wheel refurbishment usually takes 1 to 2 days. We confirm the turnaround for diamond cut and cracked wheel repairs with your quote.',
    },
    {
        q: 'Can I change the colour of my alloy wheels?',
        a: 'Yes. A full alloy refurbishment can return the wheels to their original colour or change them to a new one, such as gloss black, with a clear lacquer finish.',
    },
    {
        q: 'Do you do mag wheel repairs?',
        a: 'Yes. Most wheels called mag wheels are aluminium alloy wheels, and we repair and refurbish them the same way: kerb damage, corrosion, cracks, buckles and full refurbs.',
    },
];

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        businessNode(),
        {
            "@type": "Service",
            "serviceType": "Alloy Wheel Repair",
            "name": "Alloy Wheel Repair and Refurbishment Rochdale",
            "description": "Alloy wheel repair and refurbishment in Rochdale. Kerb scuff repair, full alloy refurbs, diamond cut refurbs and cracked alloy wheel repair.",
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
            "url": PAGE_URL,
            "offers": [
                { "@type": "Offer", "name": "Alloy wheel kerb scuff repair, per wheel", "price": "80", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": PAGE_URL }
            ]
        },
        breadcrumbList([
            { name: "Home", url: "https://www.carbodyshop.org/" },
            { name: "Services", url: "https://www.carbodyshop.org/services" },
            { name: "Alloy Wheel Repair Rochdale", url: PAGE_URL }
        ]),
        {
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
        }
    ]
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AlloyWheelRepairPage() {
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
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/gallery/AfteR_Rim_Job.webp"
                        alt="Alloy wheel repair in Rochdale, alloy wheel refurbished in gloss black at Car Body Shop"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-gray-900/78 to-black/82" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* LEFT */}
                        <div>
                            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
                                Alloy Wheel Repair Rochdale
                            </p>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Alloy Wheel Repair &amp; Refurbishment<br />
                                <span className="text-blue-400">in Rochdale</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-6 font-light leading-relaxed max-w-lg">
                                Kerbed, scuffed, corroded, cracked and buckled alloy wheels repaired in our Rochdale workshop. Kerb scuff repair from £80 per wheel, full alloy refurbs, diamond cut refurbs and colour changes. Free collection and delivery, cash prices.
                            </p>

                            {/* Price callout */}
                            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 mb-8">
                                <span className="text-3xl font-extrabold text-white">£80</span>
                                <span className="text-sm text-gray-300 leading-tight">per wheel for<br />kerb scuff repair</span>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300 mb-8">
                                <a href={BUSINESS_DETAILS.gbpLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white hover:underline underline-offset-4">
                                    <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d={STAR_PATH} /></svg>
                                    5-Star Rated on Google
                                </a>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Same Day Kerb Repairs
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Free Collection &amp; Delivery
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={waLink("Hi, I'd like a quote for alloy wheel repair. I'll send photos of the wheels.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                    Send Photos
                                </a>
                                <a
                                    href={`tel:${BUSINESS_DETAILS.phone}`}
                                    className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={PHONE_PATH} />
                                    </svg>
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Quote Form */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <div className="mb-5">
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Alloy Wheel Repair Quote</h2>
                                    <p className="text-gray-300 text-sm">Tell us about the wheels, then send photos on WhatsApp. We reply within the hour with a cash price.</p>
                                </div>
                                <AlloyQuoteForm idPrefix="aq" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S2 — BEFORE/AFTER
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Alloy Wheel Refurbishment Before and After
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A full wheel refurbishment from our Rochdale workshop: masked and primed, then refinished in gloss black. Drag the slider to compare.
                    </p>
                </div>

                <div className="relative w-full">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/before_Rim_Job.webp"
                        afterSrc="/gallery/AfteR_Rim_Job.webp"
                        beforeAlt="Alloy wheel masked and primed during alloy refurbishment"
                        afterAlt="Refurbished alloy wheel finished in gloss black"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">
                        ← Drag to compare →
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
                    {['Enclosed Spray Booth', 'Colour Matched or New Colour', 'Clear Lacquer Finish', 'Diamond Cut Refurbs'].map((b) => (
                        <div key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-5 py-2.5 text-sm font-medium">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {b}
                        </div>
                    ))}
                </div>

                <AnimatedStats />
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S3 — HOW WE REPAIR ALLOY WHEELS
            ══════════════════════════════════════════════════════════════ */}
            <RepairProcessSection />

            {/* ══════════════════════════════════════════════════════════════
                S4 — REPAIR TYPE TABS
            ══════════════════════════════════════════════════════════════ */}
            <RepairTypesSection />

            {/* ══════════════════════════════════════════════════════════════
                S5 — COST
            ══════════════════════════════════════════════════════════════ */}
            <CostSection />

            {/* ══════════════════════════════════════════════════════════════
                S6 — MOBILE VS WORKSHOP
            ══════════════════════════════════════════════════════════════ */}
            <WhyWorkshopSection />

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
            <FinalCtaSection />

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
// ANIMATED STATS
// ─────────────────────────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                let start = 0;
                const step = Math.ceil(target / 50);
                const timer = setInterval(() => {
                    start = Math.min(start + step, target);
                    setCount(start);
                    if (start >= target) clearInterval(timer);
                }, 30);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);
    return (
        <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white">
            {count}{suffix}
        </div>
    );
}

function AnimatedStats() {
    const stats: { target: number | string; suffix: string; label: string }[] = [
        { target: 5000, suffix: '+', label: 'Repairs Completed' },
        { target: 10, suffix: '+', label: 'Years Experience' },
        { target: '£80', suffix: '', label: 'Kerb Scuff Repair, Per Wheel' },
        { target: '5.0', suffix: '★', label: 'Google Rating' },
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
        title: 'Inspect the Wheel and Price the Repair',
        body: 'We check each alloy wheel for kerb damage, corrosion, cracks and buckles, then give you a fixed cash price before any work starts.',
        img: '/gallery/before_Rim_Job.webp',
    },
    {
        title: 'Repair Kerb Damage, Cracks and Buckles',
        body: 'Kerb gouges and scuffs are sanded back and filled until the rim edge is smooth. Cracked and buckled wheels that can be repaired safely are repaired at this stage.',
        img: '/gallery/before_Rim_Job.webp',
    },
    {
        title: 'Prime, Paint or Diamond Cut',
        body: 'The wheel is primed and painted inside our enclosed booth, in the original colour or a new one. Diamond cut wheels have the face re-cut to bring back the bright machined finish.',
        img: '/gallery/AfteR_Rim_Job.webp',
    },
    {
        title: 'Lacquer and Final Check',
        body: 'A clear lacquer protects the new finish. Every wheel is checked before the car goes back to you.',
        img: '/gallery/AfteR_Rim_Job.webp',
    },
];

function RepairProcessSection() {
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
                        How We Repair Alloy Wheels
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Fixing alloy wheels follows the same four stages. We refurb alloy wheels this way whether it is one kerbed rim or a full set of four.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="lg:sticky lg:top-24">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <Image
                                src={repairSteps[activeStep].img}
                                alt={`Alloy wheel refurbishment, ${repairSteps[activeStep].title.toLowerCase()}`}
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
                            <p className="text-gray-600 font-medium mb-4">Send photos and we will tell you exactly how we would fix yours</p>
                            <a
                                href={waLink("Hi, I'd like a free quote for alloy wheel repair. I'll send photos of the wheels.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
                            >
                                Get a Free Quote
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
// S4 — REPAIR TYPE TABS
// ─────────────────────────────────────────────────────────────────────────────
const repairTabs = [
    {
        label: 'Kerb Scuffs',
        heading: 'Alloy Scuff Repair',
        img: '/gallery/before_Rim_Job.webp',
        imgAlt: 'Alloy scuff repair, kerbed alloy wheel prepared for refinishing',
        body: 'Kerb scuffs and scrapes on the rim edge are the most common alloy repair. The damaged area is sanded smooth, filled, colour matched and lacquered, usually the same day, from £80 per wheel.',
        perks: ['Kerbed rim edges', 'Parking scrapes', 'Light corrosion on the lip', 'Same day, from £80 per wheel'],
    },
    {
        label: 'Full Refurbishment',
        heading: 'Alloy Rim Refurbishment',
        img: '/gallery/AfteR_Rim_Job.webp',
        imgAlt: 'Alloy rim refurbishment, wheel refinished in gloss black',
        body: 'A full alloy refurb restores the whole wheel. Peeling lacquer, corrosion and kerb damage are repaired, then the wheel is primed, painted and lacquered in the original colour or a new one. Refurb one alloy wheel or a full set of four.',
        perks: ['Peeling lacquer and corrosion', 'Colour changes, such as gloss black', 'Single wheels or full sets', '1 to 2 days'],
    },
    {
        label: 'Diamond Cut',
        heading: 'Diamond Cut Alloy Refurb',
        img: '/gallery/AfteR_Rim_Job.webp',
        imgAlt: 'Diamond cut alloy wheel refurbishment in Rochdale',
        body: 'Diamond cut alloy wheels have a bright machined face that paint alone cannot restore. We re-cut the face to bring the finish back, then lacquer it to protect against corrosion.',
        perks: ['Corroded diamond cut faces', 'Kerbed diamond cut rims', 'Bright machined finish restored', 'Priced from photos'],
    },
    {
        label: 'Cracks and Buckles',
        heading: 'Cracked Alloy Wheel Repair',
        img: '/gallery/before_Rim_Job.webp',
        imgAlt: 'Cracked alloy wheel repair and wheel rim repair in Rochdale',
        body: 'Potholes can crack or buckle an alloy rim and cause slow punctures or vibration. We inspect every crack and buckle first. If the alloy rim crack repair can be done safely, we repair and refinish the wheel. If it cannot, we tell you. The same alloy rim repair process straightens buckled rims.',
        perks: ['Alloy rim crack repair', 'Wheel rim repair for buckled and bent rims', 'Slow punctures from rim damage', 'Inspected before we quote'],
    },
];

function RepairTypesSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Alloy Repairs and Wheel Refurbs We Carry Out
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        From a single kerbed rim to cracked alloy wheel repair, every wheel repair is done in our Rochdale workshop.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
                    {repairTabs.map((t, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={active === i}
                            aria-controls={`alloy-tab-${i}`}
                            onClick={() => setActive(i)}
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

                {/* Every panel is rendered so all repair types are in the page HTML; only the active one shows. */}
                {repairTabs.map((tab, i) => (
                    <div
                        key={tab.label}
                        id={`alloy-tab-${i}`}
                        role="tabpanel"
                        hidden={active !== i}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1">
                            <Image src={tab.img} alt={tab.imgAlt} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                            <div className="absolute bottom-5 left-5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                                {tab.label}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">{tab.heading}</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">{tab.body}</p>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Covers</p>
                            <ul className="space-y-3 mb-8">
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
                            <a
                                href={waLink(`Hi, I'd like a quote for ${tab.heading.toLowerCase()}. I'll send photos of the wheels.`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                Quote for {tab.heading}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S5 — COST
// ─────────────────────────────────────────────────────────────────────────────
const pricingTable = [
    { type: 'Kerb scuff repair', from: 'From £80 per wheel', turnaround: 'Same day' },
    { type: 'Full alloy wheel refurbishment', from: 'Priced from photos', turnaround: '1 to 2 days' },
    { type: 'Diamond cut alloy refurb', from: 'Priced from photos', turnaround: 'Confirmed with quote' },
    { type: 'Cracked or buckled alloy wheel repair', from: 'Priced from photos', turnaround: 'Confirmed with quote' },
];

const quoteSteps = [
    { title: 'Photograph each damaged wheel', body: 'One photo of the whole wheel and one close up of the damage.' },
    { title: 'Send them on WhatsApp', body: `To ${BUSINESS_DETAILS.whatsappDisplay}, with your car make and model.` },
    { title: 'Get a fixed cash price', body: 'We reply within the hour. No obligation, no insurance claim.' },
];

function CostSection() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Alloy Wheel Repair Cost in Rochdale</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Kerb scuff repair starts from £80 per wheel. Full refurbs, diamond cut and cracked wheel repairs depend on the wheel, so we price them from your photos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* LEFT: Price guide */}
                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-6">Alloy Wheel Refurb Price Guide</h3>
                        <div className="rounded-2xl border border-gray-700 overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-800">
                                        <th className="text-left px-4 py-3 text-gray-300 font-semibold">Repair</th>
                                        <th className="text-left px-4 py-3 text-gray-300 font-semibold">Price</th>
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
                        <p className="text-gray-500 text-xs mt-3">Cash prices. No insurance claim, no excess.</p>
                    </div>

                    {/* RIGHT: How to get an exact price */}
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700">
                        <h3 className="text-xl font-extrabold text-white mb-6">Get an Exact Price in 3 Steps</h3>
                        <ol className="space-y-5 mb-8">
                            {quoteSteps.map((s, i) => (
                                <li key={s.title} className="flex gap-4">
                                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                                    <div>
                                        <p className="text-white font-semibold">{s.title}</p>
                                        <p className="text-gray-400 text-sm">{s.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <a
                            href={waLink("Hi, I'd like an exact price for alloy wheel repair. Photos attached.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                            Send Photos for a Price
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S6 — MOBILE VS WORKSHOP
// ─────────────────────────────────────────────────────────────────────────────
const whyPoints = [
    'Paint and lacquer cure inside an enclosed booth, away from the dust, damp and wind a driveway repair is exposed to.',
    'Free collection and delivery, so you get workshop results without leaving home.',
    'Same day kerb scuff repair, from £80 per wheel.',
    'Refurbished alloy wheels are colour matched to the original, or painted a new colour if you want a change.',
    'Cracked and buckled rims inspected before we quote, and only repaired when a repair is safe.',
    'Cash prices with no insurance claim.',
    '10+ years and more than 5,000 repairs at our Rochdale workshop.',
];

function WhyWorkshopSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Mobile Alloy Wheel Repair or a Workshop Refurb?
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            We do not offer mobile wheel refurbishment from a van. Every car wheel refurbishment is done in our workshop, and we collect your car for free if you cannot bring it in.
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
                        <Image
                            src="/gallery/before_Rim_Job.webp"
                            alt="Car wheel refurbishment in our Rochdale workshop, alloy wheel masked for painting"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                            <p className="text-gray-900 font-extrabold text-sm">Workshop Refurbishment</p>
                            <p className="text-gray-500 text-xs">Free collection and delivery</p>
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
    { title: 'Lease Return Repairs', desc: 'Kerbed alloys, scratches and dents repaired before handover to avoid end-of-lease charges.', href: '/services/lease-return-repairs-rochdale', img: '/services/lease-return-repairs-rochdale.jpg' },
    { title: 'Car Scratch Repair', desc: 'Deep scratches and paint damage corrected and blended.', href: '/services/car-scratch-repair-rochdale', img: '/services/car-scratch-repair-rochdale.jpg' },
    { title: 'Bumper Repair', desc: 'Scuffs, cracks and splits repaired and colour matched.', href: '/services/bumper-repair-rochdale', img: '/services/bumper-repair-rochdale.jpg' },
    { title: 'Dent Removal', desc: 'Panel dents pulled and refinished, paintless where possible.', href: '/services/dent-removal-rochdale', img: '/services/dent-removal-rochdale.jpg' },
    { title: 'Minor Accident Repair', desc: 'Fast, affordable fixes for bumps and cosmetic damage.', href: '/services/minor-accident-repair-rochdale', img: '/services/minor-accident-repair.jpg' },
    { title: 'Full Car Respray', desc: 'Complete resprays and colour changes with factory-matched paint.', href: '/services/full-car-respray-rochdale', img: '/services/full-car-respray-rochdale.jpg' },
];

function RelatedServicesSection() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Related Car Body Repair Services</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        If your car needs more than an alloy wheel repair, we handle every type of car bodywork from our Rochdale workshop.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedServices.map((s) => (
                        <Link key={s.title} href={s.href}
                            className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5">
                            <div className="relative h-44 overflow-hidden">
                                <Image src={s.img} alt={`${s.title} in Rochdale`} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
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
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 shadow-2xl">
                        <MapEmbed />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Alloy Wheel Repair Across Rochdale and Greater Manchester
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            We collect cars for alloy wheel repair and alloy wheels refurbishment from across Rochdale and Greater Manchester, and bring them back when the wheels are done.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {areas.map((a) => (
                                <button key={a} onClick={() => setActiveArea(a)}
                                    className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                                        activeArea === a
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-200 text-gray-500 hover:border-gray-400'
                                    }`}>
                                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {a}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                            <p className="text-gray-900 font-bold text-lg mb-2">Alloy Wheel Repair in {activeArea}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Alloy wheel repairs for {activeArea} drivers get the same cash prices and free collection and delivery as our Rochdale customers. Kerb scuff repair from £80 per wheel.
                            </p>
                            <AreaPageLinks className="text-blue-600 hover:text-blue-700" />
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
function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Alloy Wheel Repair FAQs</h2>
                    <p className="text-gray-500 text-lg">Common questions about alloy wheel repair and refurbishment in Rochdale.</p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                                <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-80 pb-6' : 'max-h-0'}`}>
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
function FinalCtaSection() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Book Your Alloy Wheel Refurb in Rochdale</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Kerbed, corroded or cracked, send us photos and we will price your alloy wheel repair within the hour. Kerb scuff repair from £80 per wheel, most finished the same day.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {['5-Star Rated on Google', 'No Insurance Needed', 'Free Collection & Delivery', 'Cash Prices', 'Free Quotes'].map((b) => (
                                <span key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 text-white rounded-full px-4 py-2 text-sm font-medium">
                                    <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {b}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-3 text-gray-400 text-sm mb-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>{BUSINESS_DETAILS.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={PHONE_PATH} />
                                </svg>
                                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors">{BUSINESS_DETAILS.phoneDisplay}</a>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={waLink("Hi, I'd like a free alloy wheel repair quote. I'll send photos of the wheels.")}
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={PHONE_PATH} />
                                </svg>
                                Call Our Team
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                        <h3 className="text-2xl font-extrabold text-white mb-2">Get a Free Alloy Wheel Repair Quote</h3>
                        <p className="text-gray-400 text-sm mb-6">Tell us about the wheels and we reply within the hour.</p>
                        <AlloyQuoteForm idPrefix="aq2" dark />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// ALLOY QUOTE FORM
// ─────────────────────────────────────────────────────────────────────────────
function AlloyQuoteForm({ idPrefix, dark = false }: { idPrefix: string; dark?: boolean }) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const msg = [
            `👋 Hi, I'd like a free quote for Alloy Wheel Repair:`,
            ``,
            `📛 Name: ${fd.get('name')}`,
            `🚗 Vehicle: ${fd.get('vehicle')}`,
            `📍 Location: ${fd.get('location')}`,
            `🔧 Repair: ${fd.get('repair')}`,
            `🛞 Wheels: ${fd.get('wheels')}`,
            `🚚 Free collection: ${fd.get('collection') ? 'Yes please' : 'No, I will drop it off'}`,
            `📝 Extra Info: ${fd.get('notes') || 'None'}`,
            ``,
            `I'll send photos of the wheels in this chat.`,
        ].join('\n');
        window.open(waLink(msg), '_blank', 'noopener,noreferrer');
    }

    const input = dark
        ? 'w-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all'
        : 'w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all';
    const label = 'block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide';
    const id = (name: string) => `${idPrefix}-${name}`;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor={id('name')} className={label}>Your Name</label>
                    <input id={id('name')} name="name" type="text" required placeholder="e.g. John Smith" className={input} />
                </div>
                <div>
                    <label htmlFor={id('vehicle')} className={label}>Your Vehicle</label>
                    <input id={id('vehicle')} name="vehicle" type="text" required placeholder="e.g. Audi A3" className={input} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor={id('repair')} className={label}>Repair Needed</label>
                    <select id={id('repair')} name="repair" required defaultValue="" className={input + ' appearance-none cursor-pointer'}>
                        <option value="" disabled className="bg-gray-800">Select…</option>
                        <option value="Kerb scuff repair" className="bg-gray-800">Kerb scuff repair</option>
                        <option value="Full alloy refurbishment" className="bg-gray-800">Full refurbishment</option>
                        <option value="Colour change" className="bg-gray-800">Colour change</option>
                        <option value="Diamond cut refurb" className="bg-gray-800">Diamond cut refurb</option>
                        <option value="Cracked or buckled wheel" className="bg-gray-800">Cracked or buckled</option>
                        <option value="Not sure" className="bg-gray-800">Not sure</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={id('wheels')} className={label}>How Many Wheels?</label>
                    <select id={id('wheels')} name="wheels" required defaultValue="" className={input + ' appearance-none cursor-pointer'}>
                        <option value="" disabled className="bg-gray-800">Select…</option>
                        <option value="1" className="bg-gray-800">1 wheel</option>
                        <option value="2" className="bg-gray-800">2 wheels</option>
                        <option value="3" className="bg-gray-800">3 wheels</option>
                        <option value="4" className="bg-gray-800">Full set of 4</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor={id('location')} className={label}>Your Location / Postcode</label>
                <input id={id('location')} name="location" type="text" required placeholder="e.g. Rochdale, OL12" className={input} />
            </div>

            <div>
                <label htmlFor={id('notes')} className={label}>Any extra details? (optional)</label>
                <textarea id={id('notes')} name="notes" rows={2} placeholder="e.g. 18 inch, front left kerbed, silver" className={input + ' resize-none'} />
            </div>

            <label className="flex items-center gap-3 text-sm text-gray-300 cursor-pointer">
                <input type="checkbox" name="collection" className="w-4 h-4 accent-blue-500" />
                Collect my car for free
            </label>

            <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                Get My Alloy Wheel Quote
            </button>

            <p className="text-center text-xs text-gray-400 pt-1">
                Opens WhatsApp with your details filled in. Add photos of the wheels and we reply within the hour.
            </p>
        </form>
    );
}
