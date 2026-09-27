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

// ─── Shared SVG path ─────────────────────────────────────────────────────────
const WHATSAPP_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        businessNode(),
        {
            "@type": "Service",
            "serviceType": "Car Scratch Repair",
            "name": "Car Scratch Repair Rochdale",
            "description": "Car scratch repair in Rochdale, colour matched in an enclosed workshop, same day in most cases.",
            "provider": { "@id": BUSINESS_ID },
            "areaServed": [
                { "@type": "City", "name": "Rochdale" },
                { "@type": "City", "name": "Whitworth" },
                { "@type": "City", "name": "Littleborough" },
                { "@type": "City", "name": "Milnrow" },
                { "@type": "City", "name": "Heywood" },
                { "@type": "City", "name": "Oldham" },
                { "@type": "City", "name": "Bury" },
                { "@type": "City", "name": "Manchester" },
                { "@type": "City", "name": "Bolton" }
            ],
            "url": "https://www.carbodyshop.org/services/car-scratch-repair-rochdale",
            "offers": [
                { "@type": "Offer", "name": "Clear coat scratch", "price": "80", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/car-scratch-repair-rochdale" },
                { "@type": "Offer", "name": "Base coat scratch", "price": "150", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/car-scratch-repair-rochdale" },
                { "@type": "Offer", "name": "Deep or primer scratch", "price": "250", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/car-scratch-repair-rochdale" },
                { "@type": "Offer", "name": "Multiple panels or long scratch", "price": "350", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/car-scratch-repair-rochdale" }
            ]
        },
        breadcrumbList([
            { name: "Home", url: "https://www.carbodyshop.org/" },
            { name: "Services", url: "https://www.carbodyshop.org/services" },
            { name: "Car Scratch Repair Rochdale", url: "https://www.carbodyshop.org/services/car-scratch-repair-rochdale" }
        ]),
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I remove a scratch from my car myself?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Very light clear coat scratches can sometimes be improved with a home polish kit, but results vary and a poor attempt can make the repair harder later. Anything you can feel with a fingernail has gone through the paint and needs a proper colour matched repair. Send us a photo and we will tell you honestly which category yours falls into."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I know how deep my scratch is?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Run your fingernail across it. If you cannot feel a groove, it is likely a clear coat scratch. If you can feel it, or you can see a different colour underneath such as white primer or bare metal, it needs a full colour matched repair."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does scratch repair cost in Rochdale?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Light clear coat scratches start from around £80. Base coat scratches needing colour matched paint typically start from £150. Deeper scratches needing filler and a full respray start from £250. Send a photo on WhatsApp for an exact price."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does scratch repair take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most clear coat and base coat scratches are completed the same day. Deeper scratches needing a full respray of the panel usually take 1 to 2 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will the repaired area match the rest of my paintwork?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We use computerised colour matching to your exact manufacturer paint code and blend the edges carefully so the repair is invisible, even on older vehicles where the original colour has faded slightly."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer a mobile scratch repair service?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We do not repair scratches on your driveway. Every scratch repair is carried out inside our enclosed workshop in Whitworth, which gives a dust-free, contamination-free finish that a mobile van cannot match. If you cannot get your car to us, we offer free collection and delivery instead, so you still get a proper workshop repair without the inconvenience."
                    }
                }
            ]
        }
    ]
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CarScratchRepairPage() {
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
                        src="/gallery/AfteR_Cad_Fender_paint.webp"
                        alt="Car scratch repair in Rochdale, Car Body Shop enclosed workshop"
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
                                Car Scratch Repair Rochdale
                            </p>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Car Scratch Repair<br />
                                <span className="text-blue-400">in Rochdale</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Scratches colour matched and blended to a showroom finish. Same day in most cases. Cash prices, no insurance needed. Serving Rochdale, Oldham, Bury and Greater Manchester.
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
                                <a href={`tel:${BUSINESS_DETAILS.phone}`}
                                    className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
                                </a>
                                <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20car%20scratch%20repair.`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Quote Form */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <div className="mb-5">
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Car Scratch Repair Quote</h2>
                                    <p className="text-gray-300 text-sm">Send a photo of the scratch and we will reply within the hour with a cash price.</p>
                                </div>
                                <ScratchQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} dark />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky mobile bar */}
                <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-gray-700">
                    <a href={`tel:${BUSINESS_DETAILS.phone}`} className="flex-1 bg-blue-600 text-white font-bold py-4 flex items-center justify-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                    </a>
                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20scratch%20repair%20quote.`} target="_blank" rel="noopener noreferrer"
                        className="flex-1 bg-green-500 text-white font-bold py-4 flex items-center justify-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                        WhatsApp
                    </a>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S3 — RECENT SCRATCH REPAIR WORK
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pt-0 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Recent Car Scratch Repair Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Drag the slider to see real scratch repairs completed at our Rochdale workshop.
                    </p>
                </div>

                <div className="relative w-full px-0">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Before_Car_Fender_Dent.webp"
                        afterSrc="/gallery/AfteR_Cad_Fender_paint.webp"
                        beforeAlt="Car panel with scratch before repair"
                        afterAlt="Car panel after scratch repair, showroom finish"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">
                        Drag to reveal transformation
                    </p>
                </div>

                {/* Badge strip */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
                    {['Computer Colour Matching', 'Professional Spray Booth', 'Enclosed Workshop', 'OEM Paint Finish'].map((b) => (
                        <span key={b} className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold px-5 py-2 rounded-full">
                            <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {b}
                        </span>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S4 — HOW DEEP IS YOUR SCRATCH? (3-card education block)
            ══════════════════════════════════════════════════════════════ */}
            <ScratchDepthSection />

            {/* ══════════════════════════════════════════════════════════════
                S5 — HOW WE REPAIR YOUR SCRATCH (4-step process)
            ══════════════════════════════════════════════════════════════ */}
            <ProcessSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S6 — CAR SCRATCH REPAIR COST CALCULATOR
            ══════════════════════════════════════════════════════════════ */}
            <CostCalculatorSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S7 — WHY CHOOSE A WORKSHOP OVER A MOBILE VAN?
            ══════════════════════════════════════════════════════════════ */}
            <WhyWorkshopSection />

            {/* ══════════════════════════════════════════════════════════════
                S8 — RELATED SERVICES
            ══════════════════════════════════════════════════════════════ */}
            <RelatedServicesSection />

            {/* ══════════════════════════════════════════════════════════════
                S9 — COVERAGE ACROSS GREATER MANCHESTER
            ══════════════════════════════════════════════════════════════ */}
            <CoverageSection />

            {/* ══════════════════════════════════════════════════════════════
                S10 — FAQs
            ══════════════════════════════════════════════════════════════ */}
            <FaqSection />

            {/* ══════════════════════════════════════════════════════════════
                S11 — FINAL CTA
            ══════════════════════════════════════════════════════════════ */}
            <FinalCtaSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            <Footer />
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// FORM — Scratch Quote Form (used in hero + final CTA)
// ─────────────────────────────────────────────────────────────────────────────
function ScratchQuoteForm({ whatsapp, dark = false }: { whatsapp: string; dark?: boolean }) {
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [location, setLocation] = useState('');
    const [fingernail, setFingernail] = useState('');
    const [date, setDate] = useState('');
    const [extra, setExtra] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const msg = [
            `Hi, I would like a free car scratch repair quote.`,
            `Name: ${name}`,
            `Vehicle: ${vehicle}`,
            `Location/Postcode: ${location}`,
            `Can you feel the scratch with your fingernail? ${fingernail || 'Not specified'}`,
            date ? `Preferred date: ${date}` : '',
            extra ? `Extra details: ${extra}` : '',
        ].filter(Boolean).join('%0A');
        window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank');
    }

    const base = dark
        ? "w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        : "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm";

    const labelCls = dark ? "text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2" : "text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2";
    const btnActiveCls = dark
        ? "border-blue-400 bg-blue-500/20 text-blue-300"
        : "border-blue-500 bg-blue-50 text-blue-700";
    const btnIdleCls = dark
        ? "border-white/20 text-gray-300 hover:border-white/40"
        : "border-gray-200 text-gray-500 hover:border-gray-300";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={base} />
                <input required value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Your Vehicle (e.g. Ford Fiesta)" className={base} />
            </div>
            <input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Your Location / Postcode" className={base} />
            <div>
                <p className={labelCls}>Can you feel the scratch with your fingernail?</p>
                <div className="grid grid-cols-3 gap-2">
                    {['Yes', 'No', 'Not Sure'].map((opt) => (
                        <button key={opt} type="button" onClick={() => setFingernail(opt)}
                            className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${fingernail === opt ? btnActiveCls : btnIdleCls}`}>
                            {opt}
                        </button>
                    ))}
                </div>
                <p className={`text-xs mt-1.5 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>If yes, the scratch has gone through the paint layer.</p>
            </div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={base} />
            <textarea value={extra} onChange={e => setExtra(e.target.value)} placeholder="Any extra details? (optional)" rows={2} className={`${base} resize-none`} />
            <button type="submit"
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                Get Free Scratch Repair Quote via WhatsApp
            </button>
            <p className={`text-center text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Opens WhatsApp with your details pre-filled. We confirm same day.</p>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S4 — Scratch Depth (3-card education block)
// ─────────────────────────────────────────────────────────────────────────────
const depthCards = [
    {
        label: 'Lightest',
        title: 'Clear Coat Scratch',
        colour: 'blue',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        test: 'You cannot feel it with a fingernail.',
        body: 'Sits in the top lacquer layer only. Often fixed by flatting and polishing, with no repainting needed.',
        perks: ['Light swirl marks', 'Car wash scratches', 'Faint surface marks'],
        price: 'From £80',
        time: 'Same day',
        bgCard: 'bg-blue-50 border-blue-200',
        bgIcon: 'bg-blue-600',
        bgBadge: 'bg-blue-100',
        textBadge: 'text-blue-700',
        checkBg: 'bg-blue-600',
    },
    {
        label: 'Mid-depth',
        title: 'Base Coat Scratch',
        colour: 'amber',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
        test: 'You can feel a groove with your fingernail.',
        body: 'Cuts through the colour layer. Needs colour matched paint and a clear coat to finish.',
        perks: ['Key scratches', 'Car park scrapes', 'Everyday scratches'],
        price: 'From £150',
        time: 'Same day',
        bgCard: 'bg-amber-50 border-amber-200',
        bgIcon: 'bg-amber-500',
        bgBadge: 'bg-amber-100',
        textBadge: 'text-amber-700',
        checkBg: 'bg-amber-500',
    },
    {
        label: 'Deepest',
        title: 'Deep or Primer Scratch',
        colour: 'red',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        test: 'White, grey or bare metal visible underneath.',
        body: 'Goes down to the primer or bare metal. Left untreated, this is where rust starts. Needs filling, priming, colour matching and a full respray of the affected panel.',
        perks: ['Deep gouges', 'Scratches with visible metal', 'Large impact marks'],
        price: 'From £250',
        time: '1 day',
        bgCard: 'bg-red-50 border-red-200',
        bgIcon: 'bg-red-600',
        bgBadge: 'bg-red-100',
        textBadge: 'text-red-700',
        checkBg: 'bg-red-600',
    },
];

function ScratchDepthSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">How Deep Is Your Scratch?</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        The repair method and the price both depend on how deep the scratch actually goes. Here is how to tell.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {depthCards.map((c) => (
                        <div key={c.title} className={`rounded-3xl border-2 p-8 flex flex-col ${c.bgCard}`}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-white ${c.bgIcon}`}>
                                    {c.icon}
                                </span>
                                <div>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{c.label}</p>
                                    <h3 className="text-lg font-extrabold text-gray-900">{c.title}</h3>
                                </div>
                            </div>

                            {/* Fingernail test callout */}
                            <div className="flex items-start gap-2 bg-white rounded-xl px-4 py-3 mb-4 border border-gray-100">
                                <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <p className="text-gray-600 text-xs font-medium">{c.test}</p>
                            </div>

                            <p className="text-gray-600 leading-relaxed text-sm mb-5">{c.body}</p>

                            <div className="mb-5">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Typical examples</p>
                                <ul className="space-y-2">
                                    {c.perks.map((p) => (
                                        <li key={p} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                                            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${c.checkBg}`}>
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`mt-auto rounded-2xl px-5 py-3 ${c.bgBadge}`}>
                                <p className={`text-sm font-semibold ${c.textBadge}`}>{c.price} &middot; {c.time}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* How we decide */}
                <div className="bg-blue-600 rounded-3xl p-8 text-center text-white">
                    <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">How we decide</p>
                    <p className="text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
                        Send us a photo and run your fingernail across the scratch. That single test tells us most of what we need before you even bring the car in.
                    </p>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S5 — Process (4 steps)
// ─────────────────────────────────────────────────────────────────────────────
const steps = [
    {
        num: '01',
        title: 'Assess the Depth',
        body: 'We check whether the scratch sits in the clear coat, the base coat, or down to the metal, and confirm the right repair method.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Prepare the Panel',
        body: 'Light scratches are flatted back. Deeper scratches are filled and primed ready for paint.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Colour Match and Blend',
        body: 'Where paint is needed, we match your exact manufacturer colour code and blend it into the surrounding panel so the repair is invisible.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Polish and Inspect',
        body: 'The finish is machine polished and checked in daylight before your car is handed back.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

function ProcessSection({ whatsapp }: { whatsapp: string }) {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">How We Repair Your Scratch</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Whichever depth of scratch you have, the process follows the same four stages.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        {steps.map((s, i) => (
                            <button key={i} onClick={() => setActive(i)}
                                className={`w-full text-left rounded-2xl border-2 p-6 transition-all duration-200 ${active === i ? 'border-blue-500 bg-blue-600/10' : 'border-gray-700 bg-gray-900 hover:border-gray-500'}`}>
                                <div className="flex items-center gap-4">
                                    <span className={`text-3xl font-extrabold ${active === i ? 'text-blue-400' : 'text-gray-600'}`}>{s.num}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${active === i ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                                        {s.icon}
                                    </div>
                                    <span className={`font-bold text-lg ${active === i ? 'text-white' : 'text-gray-300'}`}>{s.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-3xl border border-gray-700 p-10 flex flex-col justify-between min-h-[320px]">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-5xl font-extrabold text-blue-400">{steps[active].num}</span>
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                    {steps[active].icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4">{steps[active].title}</h3>
                            <p className="text-gray-400 leading-relaxed">{steps[active].body}</p>
                        </div>
                        <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20scratch%20repair%20quote.`}
                            target="_blank" rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105">
                            Find out what your scratch needs
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S6 — Cost Calculator
// ─────────────────────────────────────────────────────────────────────────────
type ScratchDepth = 'Clear Coat' | 'Base Coat' | 'Deep';
type ScratchLength = 'Small' | 'Medium' | 'Large';
type PaintFinish = 'Solid' | 'Metallic' | 'Pearlescent';

const depthBase: Record<ScratchDepth, { lo: number; hi: number; time: string }> = {
    'Clear Coat': { lo: 80, hi: 140, time: 'Same day' },
    'Base Coat': { lo: 150, hi: 250, time: 'Same day' },
    'Deep': { lo: 250, hi: 400, time: '1 day' },
};
const lengthAdder: Record<ScratchLength, number> = { Small: 0, Medium: 50, Large: 100 };
const finishAdder: Record<PaintFinish, number> = { Solid: 0, Metallic: 40, Pearlescent: 80 };

function CostCalculatorSection({ whatsapp }: { whatsapp: string }) {
    const [depth, setDepth] = useState<ScratchDepth>('Clear Coat');
    const [length, setLength] = useState<ScratchLength>('Small');
    const [finish, setFinish] = useState<PaintFinish>('Solid');

    const base = depthBase[depth];
    const lo = base.lo + lengthAdder[length] + finishAdder[finish];
    const hi = base.hi + lengthAdder[length] + finishAdder[finish];

    const btnActive = "border-blue-500 bg-blue-600/10 text-blue-700";
    const btnIdle = "border-gray-200 text-gray-500 hover:border-gray-300";

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Car Scratch Repair Cost in Rochdale</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Scratch repair cost depends on depth, length and paint finish. These are guide prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Calculator */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Estimate Calculator</p>

                        <div className="mb-8">
                            <p className="text-gray-800 font-semibold mb-4">Scratch Depth</p>
                            <div className="grid grid-cols-3 gap-3">
                                {(['Clear Coat', 'Base Coat', 'Deep'] as ScratchDepth[]).map((d) => (
                                    <button key={d} onClick={() => setDepth(d)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${depth === d ? btnActive : btnIdle}`}>
                                        {d === 'Deep' ? 'Deep / Primer' : d}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-gray-800 font-semibold mb-4">Scratch Length</p>
                            <div className="grid grid-cols-3 gap-3">
                                {(['Small', 'Medium', 'Large'] as ScratchLength[]).map((l) => (
                                    <button key={l} onClick={() => setLength(l)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${length === l ? btnActive : btnIdle}`}>
                                        {l === 'Small' ? 'Small (<10cm)' : l === 'Large' ? 'Large / Multiple' : l}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <p className="text-gray-800 font-semibold mb-4">Paint Finish</p>
                            <div className="grid grid-cols-3 gap-3">
                                {(['Solid', 'Metallic', 'Pearlescent'] as PaintFinish[]).map((f) => (
                                    <button key={f} onClick={() => setFinish(f)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${finish === f ? btnActive : btnIdle}`}>
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
                            <p className="text-gray-500 text-sm mb-3">Estimated Guide Price</p>
                            <div className="flex items-center justify-center gap-3 text-gray-900">
                                <span className="text-4xl md:text-5xl font-extrabold">£{lo}</span>
                                <span className="text-gray-400 text-xl font-medium">to</span>
                                <span className="text-4xl md:text-5xl font-extrabold">£{hi}</span>
                            </div>
                            <p className="text-blue-600 text-sm font-semibold mt-3">Turnaround: {base.time}</p>
                            <p className="text-gray-400 text-xs mt-2">Guide prices only. Send a photo for an exact quote.</p>
                        </div>
                    </div>

                    {/* Price table + CTA */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Guide Price Table</h3>
                            <div className="overflow-hidden rounded-2xl border border-gray-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 font-bold uppercase text-xs tracking-wide">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Scratch Type</th>
                                            <th className="px-4 py-3 text-left">Guide Price</th>
                                            <th className="px-4 py-3 text-left">Turnaround</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            { type: 'Clear coat, flat and polish', price: 'From £80', time: 'Same day' },
                                            { type: 'Base coat, colour matched', price: 'From £150', time: 'Same day' },
                                            { type: 'Deep scratch, filled and resprayed', price: 'From £250', time: '1 day' },
                                            { type: 'Multiple panels or long scratch', price: 'From £350', time: '1-2 days' },
                                        ].map((row) => (
                                            <tr key={row.type} className="bg-white hover:bg-gray-50 transition-colors">
                                                <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                                                <td className="px-4 py-3 text-blue-600 font-bold">{row.price}</td>
                                                <td className="px-4 py-3 text-gray-500">{row.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500 font-medium mb-4">Need an exact price?</p>
                            <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20an%20exact%20scratch%20repair%20price.`}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                Get My Exact Price
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S7 — Why Choose a Workshop Over a Mobile Van?
// ─────────────────────────────────────────────────────────────────────────────
const whyPoints = [
    'Dust-free enclosed spray booth. A driveway repair cannot match this finish.',
    'Computer colour matching for a seamless blend.',
    'Same day turnaround on most clear coat and base coat scratches.',
    'No insurance needed. Straightforward cash pricing.',
    'Free collection and delivery if you cannot get to us.',
    'Honest, itemised quotes. No hidden charges.',
    '10+ years repairing scratches in Rochdale.',
];

function WhyWorkshopSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Why Choose a Workshop Over a Mobile Repair Van?
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            Every competitor in this area does scratch repairs from a van on your driveway. We do not. Here is why that matters.
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
                            src="/gallery/Middlestage_Car_Fender_Putene.webp"
                            alt="Car Body Shop Rochdale enclosed workshop, scratch repair in progress"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                            <p className="text-gray-900 font-extrabold text-sm">Enclosed Workshop</p>
                            <p className="text-gray-500 text-xs">Dust-free, contamination-free finish</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S8 — Related Services
// ─────────────────────────────────────────────────────────────────────────────
const relatedServices = [
    { title: 'Full Car Respray', desc: 'Complete resprays and colour changes with factory-matched paint.', href: '/services/full-car-respray-rochdale', img: '/gallery/AfteR_Cad_Fender_paint.webp' },
    { title: 'Accident & Collision Repair', desc: 'Collision damage restored to pre-accident condition. No insurance needed.', href: '/services/accident-collision-repair-rochdale', img: '/gallery/Middlestage_Van_backdoor_Putene.webp' },
    { title: 'Bumper Repair', desc: 'Scuffs, cracks and splits repaired and colour-matched.', href: '/services/bumper-repair-rochdale', img: '/gallery/Bumper Lip After.webp' },
    { title: 'Dent Removal', desc: 'Panel dents pulled and refinished, paintless where possible.', href: '/services/dent-removal-rochdale', img: '/gallery/Before_Car_Fender_Dent.webp' },
    { title: 'Minor Accident Repair', desc: 'Fast, affordable fixes for bumps and cosmetic damage.', href: '/services/minor-accident-repair-rochdale', img: '/gallery/Middlestage_Car_Fender_Putene.webp' },
    { title: 'Lease Return Repairs', desc: 'Repairs before handover to avoid end-of-lease charges.', href: '/services/lease-return-repairs-rochdale', img: '/gallery/After_Van_Backdoor_Complete.webp' },
];

function RelatedServicesSection() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Related Car Body Repair Services</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        If your car needs more than a scratch repair, we handle every type of car bodywork from our Rochdale workshop.
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
// S9 — Coverage
// ─────────────────────────────────────────────────────────────────────────────
const areas = ['Rochdale', 'Whitworth', 'Littleborough', 'Heywood', 'Oldham', 'Bury', 'Milnrow', 'Middleton', 'Manchester', 'Bolton'];

function CoverageSection() {
    const [activeArea, setActiveArea] = useState('Rochdale');

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 shadow-xl">
                        <MapEmbed />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Scratch Repair Coverage Across Greater Manchester
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Wherever you are across Greater Manchester, bring your car to our Rochdale workshop or use our free collection and delivery service.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {areas.map((a) => (
                                <button key={a} onClick={() => setActiveArea(a)}
                                    className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${activeArea === a ? 'border-blue-500 bg-blue-600/10 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {a}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <p className="text-gray-900 font-bold text-lg mb-2">Scratch Repair in {activeArea}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We serve scratch repair customers in {activeArea} from our enclosed workshop in Whitworth, Rochdale. Free collection and delivery available. Same day turnaround on most repairs.
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
// S10 — FAQs
// ─────────────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: 'Can I remove a scratch from my car myself?',
        a: 'Very light clear coat scratches can sometimes be improved with a home polish kit, but results vary and a poor attempt can make the repair harder later. Anything you can feel with a fingernail has gone through the paint and needs a proper colour matched repair. Send us a photo and we will tell you honestly which category yours falls into.',
    },
    {
        q: 'How do I know how deep my scratch is?',
        a: 'Run your fingernail across it. If you cannot feel a groove, it is likely a clear coat scratch. If you can feel it, or you can see a different colour underneath such as white primer or bare metal, it needs a full colour matched repair.',
    },
    {
        q: 'How much does scratch repair cost in Rochdale?',
        a: 'Light clear coat scratches start from around £80. Base coat scratches needing colour matched paint typically start from £150. Deeper scratches needing filler and a full respray start from £250. Send a photo on WhatsApp for an exact price.',
    },
    {
        q: 'How long does scratch repair take?',
        a: 'Most clear coat and base coat scratches are completed the same day. Deeper scratches needing a full respray of the panel usually take 1 to 2 days.',
    },
    {
        q: "Will the repaired area match the rest of my paintwork?",
        a: 'Yes. We use computerised colour matching to your exact manufacturer paint code and blend the edges carefully so the repair is invisible, even on older vehicles where the original colour has faded slightly.',
    },
    {
        q: 'Do you offer a mobile scratch repair service?',
        a: 'We do not repair scratches on your driveway. Every scratch repair is carried out inside our enclosed workshop in Whitworth, which gives a dust-free, contamination-free finish that a mobile van cannot match. If you cannot get your car to us, we offer free collection and delivery instead, so you still get a proper workshop repair without the inconvenience.',
    },
];

function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Car Scratch Repair FAQs</h2>
                    <p className="text-gray-400">Everything you need to know about scratch repair at our Rochdale workshop.</p>
                </div>
                <div className="space-y-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                                <span className="text-white font-semibold">{f.q}</span>
                                <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-72 pb-5' : 'max-h-0'}`}>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S11 — Final CTA
// ─────────────────────────────────────────────────────────────────────────────
const trustBadges = ['5 Star Rated', 'No Insurance Needed', 'Free Collection & Delivery', 'Cash Prices', 'Free Quotations'];

function FinalCtaSection({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                            Book Your Scratch Repair Today
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            From a light clear coat mark to a deep scratch down to the metal, Car Body Shop repairs scratches in Rochdale to a workshop standard, most within a single day.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {trustBadges.map((b) => (
                                <span key={b} className="flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
                                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {b}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-3 text-gray-500 text-sm mb-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>{BUSINESS_DETAILS.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-gray-900 transition-colors font-medium">{BUSINESS_DETAILS.phone}</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-gray-900 transition-colors font-medium">{BUSINESS_DETAILS.email}</a>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20scratch%20repair%20quote.`}
                                target="_blank" rel="noopener noreferrer"
                                className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                Get My Free Scratch Repair Quote
                            </a>
                            <a href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="px-7 py-4 border-2 border-gray-200 hover:border-blue-300 text-gray-700 font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2">
                                Call Our Team
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                        <p className="text-gray-900 font-extrabold text-xl mb-1">Send Your Scratch Photo</p>
                        <p className="text-gray-500 text-sm mb-6">We will reply within the hour with a cash price.</p>
                        <ScratchQuoteForm whatsapp={whatsapp} dark={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Before / After Slider
// ─────────────────────────────────────────────────────────────────────────────
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
        <div ref={containerRef}
            className="relative w-full h-[50vh] md:h-[70vh] cursor-ew-resize select-none overflow-hidden"
            onMouseDown={() => setDragging(true)}
            onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}>
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
            <div className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
                style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
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
