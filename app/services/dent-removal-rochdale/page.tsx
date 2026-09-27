'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
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
            "serviceType": "Car Dent Removal",
            "name": "Car Dent Removal Rochdale",
            "description": "Paintless and traditional dent removal in Rochdale, same day in most cases.",
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
            "url": "https://www.carbodyshop.org/services/dent-removal-rochdale",
            "offers": [
                { "@type": "Offer", "name": "Small paintless dent", "price": "80", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/dent-removal-rochdale" },
                { "@type": "Offer", "name": "Medium paintless dent", "price": "150", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/dent-removal-rochdale" },
                { "@type": "Offer", "name": "Large or multiple paintless dents", "price": "250", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/dent-removal-rochdale" },
                { "@type": "Offer", "name": "Traditional dent repair with paint", "price": "200", "priceCurrency": "GBP", "availability": "https://schema.org/InStock", "url": "https://www.carbodyshop.org/services/dent-removal-rochdale" }
            ]
        },
        breadcrumbList([
            { name: "Home", url: "https://www.carbodyshop.org/" },
            { name: "Services", url: "https://www.carbodyshop.org/services" },
            { name: "Car Dent Removal Rochdale", url: "https://www.carbodyshop.org/services/dent-removal-rochdale" }
        ]),
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can I remove a dent from my car myself?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Small dents with unbroken paint can sometimes be pushed out at home with a plunger or hot water, but results are inconsistent and can stretch the metal further if done wrong. Paintless dent removal by a trained technician gets a reliable, invisible result and is often cheaper than people expect. Send us a photo and we will tell you honestly whether it is worth doing yourself or booking it in."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between paintless dent removal and traditional repair?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Paintless dent removal works when the paint is not broken. We massage the dent out from behind the panel with no filling or repainting needed. Traditional repair is used when the paint is cracked or the metal is creased, and involves reshaping the panel followed by a colour-matched respray."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does dent removal cost in Rochdale?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Small paintless dents start from around £80. Medium dents typically range from £150 to £250. Traditional dent and paint repairs start from around £200. Send a photo on WhatsApp for an exact price."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does dent removal take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most paintless dent removal is completed the same day. Traditional dent and paint repairs usually take 1 to 2 days. Multiple dents or hail damage may take 2 to 3 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will paintless dent removal affect my car's warranty?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. PDR does not involve filling, sanding or repainting, so the original factory finish and any manufacturer warranty are unaffected."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer collection and delivery for dent removal?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Free collection and delivery across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester and Bolton."
                    }
                }
            ]
        }
    ]
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DentRemovalPage() {
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
                        src="/gallery/Before_Car_Fender_Dent.webp"
                        alt="Car dent removal in Rochdale, Car Body Shop workshop"
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
                                Car Dent Removal Rochdale
                            </p>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Car Dent Removal<br />
                                <span className="text-blue-400">in Rochdale</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Paintless dent removal and traditional repair. Same day in most cases. Cash prices, no insurance needed. Serving Rochdale, Oldham, Bury and Greater Manchester.
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
                                    href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20dent%20removal.`}
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
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Dent Removal Quote</h2>
                                    <p className="text-gray-300 text-sm">Send a photo of the dent and we will reply within the hour with a cash price.</p>
                                </div>
                                <DentQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} />
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
                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20dent%20removal%20quote.`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 text-white font-bold py-4 flex items-center justify-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                        WhatsApp
                    </a>
                </div>
            </section>


            {/* ══════════════════════════════════════════════════════════════
                S3 — RECENT DENT REMOVAL WORK (Before/After gallery)
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pt-0 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Recent Dent Removal Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Drag the slider to see real dent removal jobs completed at our Rochdale workshop.
                    </p>
                </div>

                <div className="relative w-full px-0">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Before_Car_Fender_Dent.webp"
                        afterSrc="/gallery/AfteR_Cad_Fender_paint.webp"
                        beforeAlt="Car panel with dent before repair"
                        afterAlt="Car panel after dent removal, perfect finish"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">
                        Drag to reveal transformation
                    </p>
                </div>

                {/* Badge strip */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
                    {['Paintless Dent Removal', 'Professional Spray Booth', 'Computer Colour Matching', 'Factory Paint Preserved'].map((b) => (
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
                S4 — PDR VS TRADITIONAL (NEW comparison section)
            ══════════════════════════════════════════════════════════════ */}
            <PdrVsTraditionalSection />

            {/* ══════════════════════════════════════════════════════════════
                S5 — HOW WE REMOVE YOUR DENT (4-step process)
            ══════════════════════════════════════════════════════════════ */}
            <ProcessSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S6 — CAR DENT REPAIR COST CALCULATOR
            ══════════════════════════════════════════════════════════════ */}
            <CostCalculatorSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S7 — WHY CHOOSE US
            ══════════════════════════════════════════════════════════════ */}
            <WhyChooseSection />

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
// FORM — Dent Quote Form (hero + standalone)
// ─────────────────────────────────────────────────────────────────────────────
function DentQuoteForm({ whatsapp }: { whatsapp: string }) {
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [location, setLocation] = useState('');
    const [paintBroken, setPaintBroken] = useState('');
    const [date, setDate] = useState('');
    const [extra, setExtra] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const msg = [
            `Hi, I would like a free dent removal quote.`,
            `Name: ${name}`,
            `Vehicle: ${vehicle}`,
            `Location/Postcode: ${location}`,
            `Paint broken? ${paintBroken || 'Not specified'}`,
            date ? `Preferred date: ${date}` : '',
            extra ? `Extra details: ${extra}` : '',
        ].filter(Boolean).join('%0A');
        window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank');
    }

    const inputCls = "w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm";
    const lightInputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={inputCls} />
                <input required value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Your Vehicle (e.g. Ford Fiesta)" className={inputCls} />
            </div>
            <input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Your Location / Postcode" className={inputCls} />
            <div>
                <p className="text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2">Is the paint broken?</p>
                <div className="grid grid-cols-3 gap-2">
                    {['Yes', 'No', 'Not Sure'].map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => setPaintBroken(opt)}
                            className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${paintBroken === opt ? 'border-blue-400 bg-blue-500/20 text-blue-300' : 'border-white/20 text-gray-300 hover:border-white/40'}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                <p className="text-gray-500 text-xs mt-1.5">This tells us whether PDR is an option before you even visit.</p>
            </div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inputCls} />
            <textarea value={extra} onChange={e => setExtra(e.target.value)} placeholder="Any extra details? (optional)" rows={2} className={`${inputCls} resize-none`} />
            <button
                type="submit"
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                Get Free Dent Removal Quote via WhatsApp
            </button>
            <p className="text-center text-gray-400 text-xs">Opens WhatsApp with your details pre-filled. We confirm same day.</p>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S4 — PDR vs Traditional (NEW two-card comparison)
// ─────────────────────────────────────────────────────────────────────────────
function PdrVsTraditionalSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Paintless Dent Removal or Traditional Repair?
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Not every dent qualifies for paintless repair. Here is how we decide which method suits your car.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* PDR Card */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest">Faster and cheaper</p>
                                <h3 className="text-xl font-extrabold text-gray-900">Paintless Dent Removal (PDR)</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Works when the paint is not broken. We access the back of the panel and massage the dent out from behind, keeping your original factory paint intact. Faster and usually cheaper than a respray.
                        </p>
                        <div className="mb-6">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Perfect for</p>
                            <ul className="space-y-2">
                                {['Door dents and trolley dings', 'Small bonnet and wing dents', 'Hail damage', 'Car park knocks'].map((p) => (
                                    <li key={p} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                                        <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto bg-blue-100 rounded-2xl px-5 py-3">
                            <p className="text-blue-700 text-sm font-semibold">From £80 &middot; Same day in most cases</p>
                        </div>
                    </div>

                    {/* Traditional Card */}
                    <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">For damaged paint</p>
                                <h3 className="text-xl font-extrabold text-gray-900">Traditional Dent Repair</h3>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Used when the paint is cracked, the metal has stretched, or the dent is on a hard-to-reach panel. We repair the shape, fill where needed, then colour match and respray to a seamless finish.
                        </p>
                        <div className="mb-6">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Perfect for</p>
                            <ul className="space-y-2">
                                {['Creased or folded panels', 'Dents with chipped or cracked paint', 'Deeper impact damage', 'Hard-to-access panels'].map((p) => (
                                    <li key={p} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                                        <span className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-auto bg-gray-100 rounded-2xl px-5 py-3">
                            <p className="text-gray-600 text-sm font-semibold">From £200 &middot; 1 to 2 days</p>
                        </div>
                    </div>
                </div>

                {/* How we decide */}
                <div className="bg-blue-600 rounded-3xl p-8 text-center text-white">
                    <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">How we decide</p>
                    <p className="text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
                        Send us a photo and tell us if the paint is broken. In most cases we can tell you which method applies before you even bring the car in.
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
        title: 'Assess the Damage',
        body: 'We check the paint condition and panel access to confirm whether PDR is possible or a traditional repair is needed.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Remove the Dent',
        body: 'PDR technicians massage the dent out from behind the panel. For traditional repairs, the panel is reshaped and prepared for paint.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Colour Match and Finish',
        body: 'Traditional repairs are resprayed inside our enclosed booth using your exact paint code. PDR jobs need no paintwork at all.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Final Inspection',
        body: 'Every panel is checked in daylight before your car is handed back. We only release it when the result is invisible.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

function ProcessSection({ whatsapp }: { whatsapp: string }) {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">How We Remove Your Dent</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Whether it is PDR or a traditional repair, the process is straightforward from drop-off to collection.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Step list */}
                    <div className="space-y-4">
                        {steps.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveStep(i)}
                                className={`w-full text-left rounded-2xl border-2 p-6 transition-all duration-200 ${activeStep === i ? 'border-blue-500 bg-blue-600/10' : 'border-gray-700 bg-gray-900 hover:border-gray-500'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-3xl font-extrabold ${activeStep === i ? 'text-blue-400' : 'text-gray-600'}`}>{s.num}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activeStep === i ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                                        {s.icon}
                                    </div>
                                    <span className={`font-bold text-lg ${activeStep === i ? 'text-white' : 'text-gray-300'}`}>{s.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Detail panel */}
                    <div className="bg-gray-900 rounded-3xl border border-gray-700 p-10 flex flex-col justify-between min-h-[320px]">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-5xl font-extrabold text-blue-400">{steps[activeStep].num}</span>
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                    {steps[activeStep].icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4">{steps[activeStep].title}</h3>
                            <p className="text-gray-400 leading-relaxed">{steps[activeStep].body}</p>
                        </div>
                        <a
                            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20dent%20removal%20quote.`}
                            target="_blank" rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                        >
                            Find out which method suits your dent
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
type RepairType = 'PDR' | 'Traditional';
type DentSize = 'Small' | 'Medium' | 'Large';
type Panel = 'Door' | 'Wing' | 'Bonnet' | 'Boot' | 'Roof';

const pricingMatrix: Record<RepairType, Record<DentSize, { lo: number; hi: number; time: string }>> = {
    PDR: {
        Small: { lo: 80, hi: 120, time: 'Same day' },
        Medium: { lo: 150, hi: 250, time: 'Same day' },
        Large: { lo: 250, hi: 450, time: '1 day' },
    },
    Traditional: {
        Small: { lo: 200, hi: 280, time: '1 day' },
        Medium: { lo: 280, hi: 380, time: '1-2 days' },
        Large: { lo: 380, hi: 600, time: '1-2 days' },
    },
};

const panelAdder: Record<Panel, number> = { Door: 0, Wing: 20, Bonnet: 30, Boot: 20, Roof: 50 };

function CostCalculatorSection({ whatsapp }: { whatsapp: string }) {
    const [repairType, setRepairType] = useState<RepairType>('PDR');
    const [dentSize, setDentSize] = useState<DentSize>('Small');
    const [panel, setPanel] = useState<Panel>('Door');

    const base = pricingMatrix[repairType][dentSize];
    const add = panelAdder[panel];
    const lo = base.lo + add;
    const hi = base.hi + add;

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Car Dent Repair Cost in Rochdale</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Dent removal cost depends on size, panel access and whether the paint is broken. These are guide prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Calculator */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Estimate Calculator</p>

                        {/* Repair Type */}
                        <div className="mb-8">
                            <p className="text-gray-800 font-semibold mb-4">Repair Type</p>
                            <div className="grid grid-cols-2 gap-3">
                                {(['PDR', 'Traditional'] as RepairType[]).map((t) => (
                                    <button key={t} onClick={() => setRepairType(t)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${repairType === t ? 'border-blue-500 bg-blue-600/10 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                                        {t === 'PDR' ? 'Paintless (PDR)' : 'Traditional (Dent & Paint)'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dent Size */}
                        <div className="mb-8">
                            <p className="text-gray-800 font-semibold mb-4">Dent Size</p>
                            <div className="grid grid-cols-3 gap-3">
                                {(['Small', 'Medium', 'Large'] as DentSize[]).map((s) => (
                                    <button key={s} onClick={() => setDentSize(s)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${dentSize === s ? 'border-blue-500 bg-blue-600/10 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                                        {s === 'Small' ? 'Small (coin)' : s === 'Medium' ? 'Medium (palm)' : 'Large / Multiple'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Panel */}
                        <div className="mb-10">
                            <p className="text-gray-800 font-semibold mb-4">Panel</p>
                            <div className="grid grid-cols-3 gap-3">
                                {(['Door', 'Wing', 'Bonnet', 'Boot', 'Roof'] as Panel[]).map((p) => (
                                    <button key={p} onClick={() => setPanel(p)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${panel === p ? 'border-blue-500 bg-blue-600/10 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result */}
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
                                            <th className="px-4 py-3 text-left">Type</th>
                                            <th className="px-4 py-3 text-left">Guide Price</th>
                                            <th className="px-4 py-3 text-left">Turnaround</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            { type: 'Small PDR dent', price: 'From £80', time: 'Same day' },
                                            { type: 'Medium PDR dent', price: 'From £150', time: 'Same day' },
                                            { type: 'Large / multiple PDR', price: 'From £250', time: '1 day' },
                                            { type: 'Traditional dent & paint', price: 'From £200', time: '1-2 days' },
                                            { type: 'Hail damage, multi-panel', price: 'Free quote', time: '2-3 days' },
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
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20an%20exact%20dent%20removal%20price.`}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
                            >
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
// S7 — Why Choose Us
// ─────────────────────────────────────────────────────────────────────────────
const whyPoints = [
    'Paintless dent removal keeps your original factory paint intact.',
    'Same day turnaround on most single-panel dents.',
    'Proper workshop, not a van on your driveway.',
    'No insurance needed. Straightforward cash pricing.',
    'Computer colour matching for traditional repairs.',
    'Free collection and delivery across Greater Manchester.',
    '10+ years removing dents in Rochdale.',
];

function WhyChooseSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Why Choose Car Body Shop for Dent Removal?
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            Rochdale&apos;s local dent removal specialists. Paintless and traditional repair from a proper workshop.
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
                            src="/gallery/AfteR_Cad_Fender_paint.webp"
                            alt="Car Body Shop Rochdale workshop, professional dent removal"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                            <p className="text-gray-900 font-extrabold text-sm">Proper Workshop</p>
                            <p className="text-gray-500 text-xs">Not a van on your driveway</p>
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
    { title: 'Car Scratch Repair', desc: 'Deep scratches and paint damage corrected and blended.', href: '/services/car-scratch-repair-rochdale', img: '/gallery/AfteR_Rim_Job.webp' },
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
                        If your car needs more than dent removal, we handle every type of car bodywork from our Rochdale workshop.
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
                    {/* Map */}
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200 shadow-xl">
                        <MapEmbed />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Dent Removal Coverage Across Greater Manchester
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Wherever you are across Greater Manchester, we offer the same fast turnaround and free collection and delivery on every dent removal job.
                        </p>

                        {/* Area chips */}
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
                            <p className="text-gray-900 font-bold text-lg mb-2">Dent Removal in {activeArea}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We serve dent removal customers in {activeArea} with the same fast turnaround and cash pricing as our Rochdale workshop. Paintless dent removal available. Free collection and delivery available.
                            </p>
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
        q: 'Can I remove a dent from my car myself?',
        a: 'Small dents with unbroken paint can sometimes be pushed out at home with a plunger or hot water, but results are inconsistent and can stretch the metal further if done wrong. Paintless dent removal by a trained technician gets a reliable, invisible result and is often cheaper than people expect. Send us a photo and we will tell you honestly whether it is worth doing yourself or booking it in.',
    },
    {
        q: 'What is the difference between paintless dent removal and traditional repair?',
        a: 'Paintless dent removal works when the paint is not broken. We massage the dent out from behind the panel with no filling or repainting needed. Traditional repair is used when the paint is cracked or the metal is creased, and involves reshaping the panel followed by a colour-matched respray.',
    },
    {
        q: 'How much does dent removal cost in Rochdale?',
        a: 'Small paintless dents start from around £80. Medium dents typically range from £150 to £250. Traditional dent and paint repairs start from around £200. Send a photo on WhatsApp for an exact price.',
    },
    {
        q: 'How long does dent removal take?',
        a: 'Most paintless dent removal is completed the same day. Traditional dent and paint repairs usually take 1 to 2 days. Multiple dents or hail damage may take 2 to 3 days.',
    },
    {
        q: "Will paintless dent removal affect my car's warranty?",
        a: 'No. PDR does not involve filling, sanding or repainting, so the original factory finish and any manufacturer warranty are unaffected.',
    },
    {
        q: 'Do you offer collection and delivery for dent removal?',
        a: 'Yes. Free collection and delivery across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester and Bolton.',
    },
];

function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Car Dent Removal FAQs</h2>
                    <p className="text-gray-400">Everything you need to know about dent removal at our Rochdale workshop.</p>
                </div>
                <div className="space-y-3">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                            >
                                <span className="text-white font-semibold">{f.q}</span>
                                <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60 pb-5' : 'max-h-0'}`}>
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

                    {/* Left: contact + trust */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                            Book Your Dent Removal Today
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            From a single trolley ding to hail damage across multiple panels, Car Body Shop removes dents in Rochdale using paintless and traditional methods, most within a single day.
                        </p>

                        {/* Trust badges */}
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

                        {/* Contact */}
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
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20dent%20removal%20quote.`}
                                target="_blank" rel="noopener noreferrer"
                                className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Get My Free Dent Removal Quote
                            </a>
                            <a
                                href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="px-7 py-4 border-2 border-gray-200 hover:border-blue-300 text-gray-700 font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2"
                            >
                                Call Our Team
                            </a>
                        </div>
                    </div>

                    {/* Right: repeat form */}
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                        <p className="text-gray-900 font-extrabold text-xl mb-1">Send Your Dent Photo</p>
                        <p className="text-gray-500 text-sm mb-6">We will reply within the hour with a cash price.</p>
                        <DentQuoteFormLight whatsapp={whatsapp} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Light-background variant of the form (for the final CTA section)
function DentQuoteFormLight({ whatsapp }: { whatsapp: string }) {
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [location, setLocation] = useState('');
    const [paintBroken, setPaintBroken] = useState('');
    const [date, setDate] = useState('');
    const [extra, setExtra] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const msg = [
            `Hi, I would like a free dent removal quote.`,
            `Name: ${name}`,
            `Vehicle: ${vehicle}`,
            `Location/Postcode: ${location}`,
            `Paint broken? ${paintBroken || 'Not specified'}`,
            date ? `Preferred date: ${date}` : '',
            extra ? `Extra details: ${extra}` : '',
        ].filter(Boolean).join('%0A');
        window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank');
    }

    const cls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={cls} />
                <input required value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Your Vehicle" className={cls} />
            </div>
            <input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Your Location / Postcode" className={cls} />
            <div>
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">Is the paint broken?</p>
                <div className="grid grid-cols-3 gap-2">
                    {['Yes', 'No', 'Not Sure'].map((opt) => (
                        <button key={opt} type="button" onClick={() => setPaintBroken(opt)}
                            className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${paintBroken === opt ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}>
                            {opt}
                        </button>
                    ))}
                </div>
            </div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={cls} />
            <textarea value={extra} onChange={e => setExtra(e.target.value)} placeholder="Any extra details? (optional)" rows={2} className={`${cls} resize-none`} />
            <button type="submit"
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                Get My Free Dent Removal Quote
            </button>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Before / After Slider (self-contained)
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
