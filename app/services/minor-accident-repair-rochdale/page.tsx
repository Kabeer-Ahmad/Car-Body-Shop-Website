'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';

const WHATSAPP_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "name": "Minor Accident Repair Rochdale",
            "description": "Minor accident repair in Rochdale from £150. Small bumps and cosmetic damage fixed same day, no insurance claim needed. Free quote via WhatsApp.",
            "provider": {
                "@type": "AutoBodyShop",
                "name": "Car Body Shop",
                "url": "https://www.carbodyshop.org",
                "telephone": BUSINESS_DETAILS.phone,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2 Whitworth",
                    "addressLocality": "Rochdale",
                    "postalCode": "OL12 8HN",
                    "addressCountry": "UK"
                }
            },
            "areaServed": "Greater Manchester",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "GBP",
                "price": "150",
                "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "description": "Minor accident repair from £150 for single panel scuffs and scrapes"
                }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What counts as a minor accident repair?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Minor accident repair covers small, cosmetic damage such as a single dented panel, a cracked bumper corner, or a scuff from a low-speed knock. If your car is still fully driveable and the damage is limited to one or two panels, it usually falls into this category. Larger or structural damage is handled by our full accident and collision repair team."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need to claim on insurance for minor accident repairs?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Most minor accident repairs are well within a typical insurance excess, so paying directly is usually cheaper and protects your no-claims bonus. We give you a cash price upfront so you can compare it against your excess yourself."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does minor accident repair cost in Rochdale?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Small scuffs and scrapes start from around £150. Small dents with colour matching typically start from £180. Cracked bumper corners start from around £200. Send a photo on WhatsApp for an exact price."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a minor accident repair take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most minor accident repairs are completed the same day. Jobs involving two panels or a full colour match may take one working day."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer collection and delivery for minor accident repairs?",
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
export default function MinorAccidentRepairPage() {
    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            {/* ══════════════════════════════════════════════════════════════
                S1 — HERO
            ══════════════════════════════════════════════════════════════ */}
            <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/gallery/Middlestage_Car_Fender_Putene.webp"
                        alt="Minor accident repair in Rochdale, Car Body Shop workshop"
                        fill className="object-cover object-center" priority quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/88 via-gray-900/78 to-black/82" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* LEFT */}
                        <div>
                            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
                                Minor Accident Repair Rochdale
                            </p>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Minor Accident Repair<br />
                                <span className="text-blue-400">in Rochdale</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Small bumps and cosmetic damage fixed fast. No insurance claim needed. Cash prices, often same day. Serving Rochdale, Oldham, Bury and Greater Manchester.
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300 mb-8">
                                {[
                                    { icon: 'star', text: '5,000+ Repairs Completed', colour: 'text-yellow-400' },
                                    { icon: 'clock', text: '10+ Years Experience', colour: 'text-blue-400' },
                                    { icon: 'star', text: '5.0 Star Rated', colour: 'text-yellow-400' },
                                    { icon: 'shield', text: '100% Satisfaction Guarantee', colour: 'text-green-400' },
                                ].map(({ icon, text, colour }) => (
                                    <div key={text} className="flex items-center gap-2">
                                        {icon === 'star' && (
                                            <svg className={`w-4 h-4 flex-shrink-0 ${colour}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        )}
                                        {icon === 'clock' && (
                                            <svg className={`w-4 h-4 flex-shrink-0 ${colour}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                        {icon === 'shield' && (
                                            <svg className={`w-4 h-4 flex-shrink-0 ${colour}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        )}
                                        {text}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={`tel:${BUSINESS_DETAILS.phone}`}
                                    className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
                                </a>
                                <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20minor%20accident%20repair.`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                        {/* RIGHT — Quote form */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Minor Accident Repair Quote</h2>
                                <p className="text-gray-300 text-sm mb-5">Send a photo of the damage and we will reply within the hour with a cash price.</p>
                                <MinorRepairForm whatsapp={BUSINESS_DETAILS.whatsapp} dark />
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
                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20minor%20accident%20repair%20quote.`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex-1 bg-green-500 text-white font-bold py-4 flex items-center justify-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                        WhatsApp
                    </a>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                S3 — RECENT WORK
            ══════════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pt-0 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Recent Minor Accident Repair Work</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Drag the slider to see real minor accident repairs completed at our Rochdale workshop.
                    </p>
                </div>
                <div className="relative w-full px-0">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Before_Car_Fender_Dent.webp"
                        afterSrc="/gallery/AfteR_Cad_Fender_paint.webp"
                        beforeAlt="Minor accident damage before repair"
                        afterAlt="Panel restored after minor accident repair"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">Drag to reveal transformation</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-10 px-6">
                    {['No Insurance Claim Needed', 'Same Day in Most Cases', 'Computer Colour Matching', 'Cash Pricing'].map((b) => (
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
                S4 — IS YOUR DAMAGE MINOR? (self-triage)
            ══════════════════════════════════════════════════════════════ */}
            <IsYourDamageMinorSection />

            {/* ══════════════════════════════════════════════════════════════
                S5 — HOW WE REPAIR MINOR ACCIDENT DAMAGE
            ══════════════════════════════════════════════════════════════ */}
            <ProcessSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ══════════════════════════════════════════════════════════════
                S6 — COST CALCULATOR
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
                S9 — COVERAGE
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
// FORM
// ─────────────────────────────────────────────────────────────────────────────
function MinorRepairForm({ whatsapp, dark = false }: { whatsapp: string; dark?: boolean }) {
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [location, setLocation] = useState('');
    const [panels, setPanels] = useState('');
    const [date, setDate] = useState('');
    const [extra, setExtra] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const msg = [
            `Hi, I would like a free minor accident repair quote.`,
            `Name: ${name}`,
            `Vehicle: ${vehicle}`,
            `Location/Postcode: ${location}`,
            `Panels affected: ${panels || 'Not specified'}`,
            date ? `Preferred date: ${date}` : '',
            extra ? `Extra details: ${extra}` : '',
        ].filter(Boolean).join('%0A');
        window.open(`https://wa.me/${whatsapp}?text=${msg}`, '_blank');
    }

    const inp = dark
        ? "w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        : "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm";
    const labelCls = dark ? "text-gray-300 text-xs font-semibold uppercase tracking-wide mb-2" : "text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2";
    const active = dark ? "border-blue-400 bg-blue-500/20 text-blue-300" : "border-blue-500 bg-blue-50 text-blue-700";
    const idle = dark ? "border-white/20 text-gray-300 hover:border-white/40" : "border-gray-200 text-gray-500 hover:border-gray-300";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" className={inp} />
                <input required value={vehicle} onChange={e => setVehicle(e.target.value)} placeholder="Your Vehicle (e.g. Vauxhall Corsa)" className={inp} />
            </div>
            <input required value={location} onChange={e => setLocation(e.target.value)} placeholder="Your Location / Postcode" className={inp} />
            <div>
                <p className={labelCls}>How many panels are affected?</p>
                <div className="grid grid-cols-3 gap-2">
                    {['One', 'Two', 'Not Sure'].map((opt) => (
                        <button key={opt} type="button" onClick={() => setPanels(opt)}
                            className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${panels === opt ? active : idle}`}>
                            {opt}
                        </button>
                    ))}
                </div>
                <p className={`text-xs mt-1.5 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Three or more panels? Our full <Link href="/services/accident-collision-repair-rochdale" className="underline">Accident Repair</Link> team can help.</p>
            </div>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className={inp} />
            <textarea value={extra} onChange={e => setExtra(e.target.value)} placeholder="Any extra details? (optional)" rows={2} className={`${inp} resize-none`} />
            <button type="submit"
                className="w-full py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WHATSAPP_PATH} /></svg>
                Get Free Minor Accident Repair Quote via WhatsApp
            </button>
            <p className={`text-center text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Opens WhatsApp with your details pre-filled. We confirm same day.</p>
        </form>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S4 — Is Your Damage Minor? (self-triage — most important section)
// ─────────────────────────────────────────────────────────────────────────────
function IsYourDamageMinorSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Is Your Damage Minor?</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Not sure if your damage counts as minor? Here is a simple way to check.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* This page is right for you */}
                    <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-green-700 text-xs font-bold uppercase tracking-widest">You are in the right place</p>
                                <h3 className="text-xl font-extrabold text-gray-900">This Page Is Right For You If</h3>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Damage is limited to one or two panels',
                                'The car is fully driveable',
                                'There is no structural or mechanical damage',
                                'You want to avoid an insurance claim',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <p className="text-gray-700 font-medium leading-snug">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* May need full accident repair */}
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-amber-700 text-xs font-bold uppercase tracking-widest">You may need a bigger service</p>
                                <h3 className="text-xl font-extrabold text-gray-900">You May Need Full Accident Repair If</h3>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {[
                                'Three or more panels are affected',
                                'The car is not driveable or feels different to drive',
                                'There is frame, suspension or mechanical damage',
                                'You are making an insurance claim through a third party',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    <p className="text-gray-700 font-medium leading-snug">{item}</p>
                                </li>
                            ))}
                        </ul>
                        <Link href="/services/accident-collision-repair-rochdale"
                            className="inline-flex items-center gap-2 text-amber-700 font-bold text-sm border-2 border-amber-300 bg-amber-100 hover:bg-amber-200 px-5 py-2.5 rounded-xl transition-all">
                            See our full Accident &amp; Collision Repair service
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Not sure callout */}
                <div className="bg-blue-600 rounded-3xl p-8 text-center text-white">
                    <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Not sure which applies?</p>
                    <p className="text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
                        Send us a photo and we will point you to the right service. Minor repair or our full accident and collision repair team.
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
        title: 'Quick Assessment',
        body: 'We check the affected panel and confirm it is a minor repair, not a bigger job. Most of this is done from your WhatsApp photos before you even arrive.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Repair the Panel',
        body: 'Dents and creases are pulled or filled, and any cracked plastic is repaired using the right technique for the damage.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Colour Match and Spray',
        body: 'Where paintwork is affected, we colour match to your exact code and respray inside our enclosed booth.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Final Check',
        body: 'The repair is inspected in daylight before your car is handed back.',
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
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">How We Repair Minor Accident Damage</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Most minor accident repairs follow the same four straightforward stages.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        {steps.map((s, i) => (
                            <button key={i} onClick={() => setActive(i)}
                                className={`w-full text-left rounded-2xl border-2 p-6 transition-all duration-200 ${active === i ? 'border-blue-500 bg-blue-600/10' : 'border-gray-700 bg-gray-900 hover:border-gray-500'}`}>
                                <div className="flex items-center gap-4">
                                    <span className={`text-3xl font-extrabold ${active === i ? 'text-blue-400' : 'text-gray-600'}`}>{s.num}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${active === i ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}>{s.icon}</div>
                                    <span className={`font-bold text-lg ${active === i ? 'text-white' : 'text-gray-300'}`}>{s.title}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="bg-gray-900 rounded-3xl border border-gray-700 p-10 flex flex-col justify-between min-h-[320px]">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-5xl font-extrabold text-blue-400">{steps[active].num}</span>
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">{steps[active].icon}</div>
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-4">{steps[active].title}</h3>
                            <p className="text-gray-400 leading-relaxed">{steps[active].body}</p>
                        </div>
                        <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20same%20day%20minor%20accident%20repair%20estimate.`}
                            target="_blank" rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105">
                            Get a same day estimate
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
// S6 — Cost Calculator (capped at 2 panels)
// ─────────────────────────────────────────────────────────────────────────────
type DamageType = 'Scuff or Scrape' | 'Small Dent' | 'Cracked Bumper' | 'Combination';
type PanelCount = 'One' | 'Two';
type PaintFinish = 'Solid' | 'Metallic' | 'Pearlescent';

const damageBase: Record<DamageType, { lo: number; hi: number; time: string }> = {
    'Scuff or Scrape': { lo: 150, hi: 220, time: 'Same day' },
    'Small Dent': { lo: 180, hi: 260, time: 'Same day' },
    'Cracked Bumper': { lo: 200, hi: 300, time: 'Same or 1 day' },
    'Combination': { lo: 300, hi: 450, time: '1 day' },
};
const panelAdder: Record<PanelCount, number> = { One: 0, Two: 80 };
const finishAdder: Record<PaintFinish, number> = { Solid: 0, Metallic: 40, Pearlescent: 80 };

function CostCalculatorSection({ whatsapp }: { whatsapp: string }) {
    const [damage, setDamage] = useState<DamageType>('Scuff or Scrape');
    const [panels, setPanels] = useState<PanelCount>('One');
    const [finish, setFinish] = useState<PaintFinish>('Solid');

    const base = damageBase[damage];
    const lo = base.lo + panelAdder[panels] + finishAdder[finish];
    const hi = base.hi + panelAdder[panels] + finishAdder[finish];

    const btnA = "border-blue-500 bg-blue-600/10 text-blue-700";
    const btnI = "border-gray-200 text-gray-500 hover:border-gray-300";

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Minor Accident Repair Cost in Rochdale</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Minor accident repair cost depends on how many panels are affected and whether paintwork is needed. These are guide prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Estimate Calculator</p>

                        {/* Damage type */}
                        <div className="mb-8">
                            <p className="text-gray-800 font-semibold mb-4">Damage Type</p>
                            <div className="grid grid-cols-2 gap-3">
                                {(['Scuff or Scrape', 'Small Dent', 'Cracked Bumper', 'Combination'] as DamageType[]).map((d) => (
                                    <button key={d} onClick={() => setDamage(d)}
                                        className={`py-3 px-2 rounded-xl text-sm font-semibold border-2 transition-all ${damage === d ? btnA : btnI}`}>
                                        {d}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Panels */}
                        <div className="mb-8">
                            <p className="text-gray-800 font-semibold mb-4">Panels Affected</p>
                            <div className="grid grid-cols-2 gap-3">
                                {(['One', 'Two'] as PanelCount[]).map((p) => (
                                    <button key={p} onClick={() => setPanels(p)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${panels === p ? btnA : btnI}`}>
                                        {p} panel{p === 'Two' ? 's' : ''}
                                    </button>
                                ))}
                            </div>
                            <p className="text-gray-400 text-xs mt-2">Three or more panels? <Link href="/services/accident-collision-repair-rochdale" className="text-blue-500 underline">See full accident repair pricing.</Link></p>
                        </div>

                        {/* Finish */}
                        <div className="mb-10">
                            <p className="text-gray-800 font-semibold mb-4">Paint Finish</p>
                            <div className="grid grid-cols-3 gap-3">
                                {(['Solid', 'Metallic', 'Pearlescent'] as PaintFinish[]).map((f) => (
                                    <button key={f} onClick={() => setFinish(f)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${finish === f ? btnA : btnI}`}>
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

                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6">Guide Price Table</h3>
                            <div className="overflow-hidden rounded-2xl border border-gray-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100 text-gray-500 font-bold uppercase text-xs tracking-wide">
                                        <tr>
                                            <th className="px-4 py-3 text-left">Damage Type</th>
                                            <th className="px-4 py-3 text-left">Guide Price</th>
                                            <th className="px-4 py-3 text-left">Turnaround</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            { type: 'Scuff or scrape, single panel', price: 'From £150', time: 'Same day' },
                                            { type: 'Small dent, colour matched', price: 'From £180', time: 'Same day' },
                                            { type: 'Cracked bumper corner', price: 'From £200', time: 'Same or 1 day' },
                                            { type: 'Combination, two panels', price: 'From £300', time: '1 day' },
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
                            <p className="text-gray-400 text-xs mt-3">If your damage covers more than two panels, see our <Link href="/services/accident-collision-repair-rochdale" className="text-blue-500 underline">full accident and collision repair pricing</Link> instead.</p>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-gray-500 font-medium mb-4">Need an exact price?</p>
                            <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20an%20exact%20minor%20accident%20repair%20price.`}
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
// S7 — Why Choose Us
// ─────────────────────────────────────────────────────────────────────────────
const whyPoints = [
    'No insurance claim needed for small, straightforward damage.',
    'Same day turnaround on most minor repairs.',
    'Cash prices, no excess, no premium increase.',
    'Computer colour matching for a seamless finish.',
    'Free collection and delivery across Greater Manchester.',
    'Honest, itemised quotes. No upselling to a bigger job than you need.',
    '10+ years repairing minor accident damage in Rochdale.',
];

function WhyChooseSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            Why Choose Car Body Shop for Minor Accident Repair?
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                            A small bump should not mean a big process. We keep it simple, fast and fairly priced.
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
                            alt="Car Body Shop Rochdale workshop, minor accident repair completed"
                            fill className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                            <p className="text-gray-900 font-extrabold text-sm">No Claim Needed</p>
                            <p className="text-gray-500 text-xs">Cash prices, same day in most cases</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S8 — Related Services (Accident & Collision first)
// ─────────────────────────────────────────────────────────────────────────────
const relatedServices = [
    { title: 'Accident & Collision Repair', desc: 'For multi-panel or structural collision damage. Vehicles restored to pre-accident condition.', href: '/services/accident-collision-repair-rochdale', img: '/gallery/Middlestage_Van_backdoor_Putene.webp' },
    { title: 'Bumper Repair', desc: 'Scuffs, cracks and splits repaired and colour-matched.', href: '/services/bumper-repair-rochdale', img: '/gallery/Bumper Lip After.webp' },
    { title: 'Dent Removal', desc: 'Panel dents pulled and refinished, paintless where possible.', href: '/services/dent-removal-rochdale', img: '/gallery/Before_Car_Fender_Dent.webp' },
    { title: 'Car Scratch Repair', desc: 'Deep scratches and paint damage corrected and blended.', href: '/services/car-scratch-repair-rochdale', img: '/gallery/AfteR_Rim_Job.webp' },
    { title: 'Full Car Respray', desc: 'Complete resprays and colour changes with factory-matched paint.', href: '/services/full-car-respray-rochdale', img: '/gallery/AfteR_Cad_Fender_paint.webp' },
    { title: 'Lease Return Repairs', desc: 'Repairs before handover to avoid end-of-lease charges.', href: '/services/lease-return-repairs-rochdale', img: '/gallery/After_Van_Backdoor_Complete.webp' },
];

function RelatedServicesSection() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Related Car Body Repair Services</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        If your damage covers more than one or two panels, or your car is not driveable, our full accident repair team can help.
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
                        <iframe
                            title="Car Body Shop Rochdale location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.9!2d-2.1608!3d53.6452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba77b4d1d1c4b%3A0x7b3e2e2e2e2e2e2e!2sWhitworth%2C%20Rochdale!5e0!3m2!1sen!2suk!4v1700000000000"
                            className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Minor Accident Repair Coverage Across Greater Manchester
                        </h2>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Wherever you are across Greater Manchester, we offer the same fast turnaround and free collection and delivery on every minor accident repair.
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
                            <p className="text-gray-900 font-bold text-lg mb-2">Minor Accident Repair in {activeArea}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We serve minor accident repair customers in {activeArea} from our workshop in Whitworth, Rochdale. Same day turnaround on most jobs. Free collection and delivery available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// S10 — FAQs (5 questions)
// ─────────────────────────────────────────────────────────────────────────────
const faqs = [
    {
        q: 'What counts as a minor accident repair?',
        a: 'Minor accident repair covers small, cosmetic damage such as a single dented panel, a cracked bumper corner, or a scuff from a low-speed knock. If your car is still fully driveable and the damage is limited to one or two panels, it usually falls into this category. Larger or structural damage is handled by our full accident and collision repair team.',
    },
    {
        q: 'Do I need to claim on insurance for minor accident repairs?',
        a: 'No. Most minor accident repairs are well within a typical insurance excess, so paying directly is usually cheaper and protects your no-claims bonus. We give you a cash price upfront so you can compare it against your excess yourself.',
    },
    {
        q: 'How much does minor accident repair cost in Rochdale?',
        a: 'Small scuffs and scrapes start from around £150. Small dents with colour matching typically start from £180. Cracked bumper corners start from around £200. Send a photo on WhatsApp for an exact price.',
    },
    {
        q: 'How long does a minor accident repair take?',
        a: 'Most minor accident repairs are completed the same day. Jobs involving two panels or a full colour match may take one working day.',
    },
    {
        q: 'Do you offer collection and delivery for minor accident repairs?',
        a: 'Yes. Free collection and delivery across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester and Bolton.',
    },
];

function FaqSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Minor Accident Repair FAQs</h2>
                    <p className="text-gray-400">Everything you need to know about minor accident repair at our Rochdale workshop.</p>
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
                            Book Your Minor Accident Repair Today
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            A small bump does not need a big insurance process. Car Body Shop fixes minor accident damage in Rochdale fast, with honest cash pricing and no claim required.
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
                                <span>Whitworth, Rochdale, OL12 8HN</span>
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
                            <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20minor%20accident%20repair%20quote.`}
                                target="_blank" rel="noopener noreferrer"
                                className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                                Get My Free Minor Accident Repair Quote
                            </a>
                            <a href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="px-7 py-4 border-2 border-gray-200 hover:border-blue-300 text-gray-700 font-bold rounded-xl text-base transition-all flex items-center justify-center gap-2">
                                Call Our Team
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                        <p className="text-gray-900 font-extrabold text-xl mb-1">Send Your Damage Photo</p>
                        <p className="text-gray-500 text-sm mb-6">We will reply within the hour with a cash price.</p>
                        <MinorRepairForm whatsapp={whatsapp} dark={false} />
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
        setPos(Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100)));
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
