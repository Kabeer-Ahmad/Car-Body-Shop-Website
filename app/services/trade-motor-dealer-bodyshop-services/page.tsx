'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { businessNode, breadcrumbList, BUSINESS_ID } from '@/lib/schema';

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
// The FAQPage schema for this page is emitted separately, inside TradeFaqSection below.
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        businessNode(),
        {
            "@type": "Service",
            "serviceType": "Trade & Motor Dealer Bodyshop Services",
            "name": "Trade & Motor Dealer Bodyshop Services",
            "description": "Trusted trade bodyshop services in Greater Manchester. Fast turnaround, dealer prep and priority slots for motor traders.",
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
            "url": "https://www.carbodyshop.org/services/trade-motor-dealer-bodyshop-services",
            "audience": { "@type": "BusinessAudience", "audienceType": "Motor dealers and trade fleets" }
        },
        breadcrumbList([
            { name: "Home", url: "https://www.carbodyshop.org/" },
            { name: "Services", url: "https://www.carbodyshop.org/services" },
            { name: "Trade & Motor Dealer Bodyshop Services", url: "https://www.carbodyshop.org/services/trade-motor-dealer-bodyshop-services" }
        ])
    ]
};

export default function TradeBodyshopServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services/trade-dealer-bodyshop.jpg"
                        alt="Trade and Motor Dealer Bodyshop Services in Rochdale"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-gray-900/75 to-black/80" />
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT: Headline + CTAs + Trust Badges */}
                        <div>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Trade & Motor Dealer<br />
                                <span className="text-blue-400">Bodyshop Services in Rochdale</span>
                            </h1>

                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Priority bodyshop slots and trade pricing for motor dealers, independent traders and fleet operators. Dealer preparation, full resprays, accident repair and lease return work — completed to a 1–3 day trade turnaround, with volume discounts for ongoing accounts. Serving Rochdale, Oldham, Bury and Greater Manchester.
                            </p>

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
                                    href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20to%20discuss%20setting%20up%20a%20trade%20account.`}
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
                                    10+ Years Trade Partnerships
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                                    </svg>
                                    Priority Trade Slots
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Lead Capture Form */}
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <div className="mb-5">
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Trade Bodyshop Quote</h2>
                                    <p className="text-gray-300 text-sm">Send your business and vehicle details, and we&apos;ll respond within the hour with trade pricing.</p>
                                </div>
                                <TradeQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 3 — RECENT WORK GALLERY + STATS
            ═══════════════════════════════════════════════════════════ */}
            <section className="bg-gray-950 pt-0 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Recent Dealer & Fleet Bodyshop Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every dealership and fleet has different priorities — turnaround speed, consistency across multiple vehicles, and a finish that holds up to forecourt inspection. Explore recent trade and fleet jobs completed by our Rochdale bodyshop team, from dealer preparation and panel touch-ups to full pre-sale resprays and lease return repairs.
                    </p>
                </div>

                <div className="relative w-full px-0">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Before_Car_Fender_Dent.webp"
                        afterSrc="/gallery/AfteR_Cad_Fender_paint.webp"
                        beforeAlt="Lease Return Prep Before"
                        afterAlt="Lease Return Prep After"
                    />
                    <p className="text-center text-gray-400 text-sm mt-3 tracking-wide">
                        ← Drag to reveal transformation →
                    </p>
                </div>

                <div className="hidden lg:block absolute right-10 mt-[-260px] z-30">
                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 w-56">
                        <div className="flex text-yellow-400 mb-3">
                            {'★★★★★'.split('').map((s, i) => <span key={i} className="text-lg">{s}</span>)}
                        </div>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Fleet van respray — 2 days</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Dealer prep bumper — 1 day</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Pre-sale full respray — 3 days</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Lease return scuff — same day</li>
                        </ul>
                    </div>
                </div>

                <GalleryThumbnails />

                <div className="max-w-3xl mx-auto px-6 md:px-12 mt-10 text-center">
                    <p className="text-gray-400 leading-relaxed">
                        Every vehicle that enters our workshop for a trade or dealer job is treated with the same precision as our retail work — because the condition of your stock reflects directly on your business. From single touch-ups to multi-vehicle dealer prep, our trade bodyshop service uses premium paint systems and computerised colour matching to deliver a consistent, forecourt-ready finish, every time.
                    </p>
                </div>

                <AnimatedTradeStats />
            </section>

            {/* ═══════════════════════════════════════════════════════════
                SECTION 4 — OUR TRADE PROCESS (Scroll-Sticky)
            ═══════════════════════════════════════════════════════════ */}
            <TradeProcessSection />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 5 — BENEFITS OF A DEDICATED PARTNER
            ═══════════════════════════════════════════════════════════ */}
            <TradeTransformationSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 6 — TRADE SERVICES & ACCOUNT OPTIONS
            ═══════════════════════════════════════════════════════════ */}
            <TradeOptionsSection />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 7 — TRADE PRICING & VOLUME DISCOUNT GUIDE
            ═══════════════════════════════════════════════════════════ */}
            <TradeCostEstimatorSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 8 — WHAT MOTOR DEALERS SAY
            ═══════════════════════════════════════════════════════════ */}
            <TradeCustomerStoriesSection />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 9 — RELATED SERVICES
            ═══════════════════════════════════════════════════════════ */}
            <TradeOtherServicesSection />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 10 — SERVICE AREAS
            ═══════════════════════════════════════════════════════════ */}
            <TradeServiceAreasSection />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 11 — FAQs
            ═══════════════════════════════════════════════════════════ */}
            <TradeFaqSection />

            {/* ═══════════════════════════════════════════════════════════
                SECTION 12 — FINAL CTA
            ═══════════════════════════════════════════════════════════ */}
            <TradeFinalCTASection whatsapp={BUSINESS_DETAILS.whatsapp} />

            <Footer />
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOCAL COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function TradeQuoteForm({ whatsapp }: { whatsapp: string }) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const msg = [
            `👋 Hi, I'd like a Trade Bodyshop Quote:`,
            ``,
            `🏢 Business Name: ${fd.get('businessName')}`,
            `👤 Contact Name: ${fd.get('contactName')}`,
            `🔧 Business Type: ${fd.get('businessType')}`,
            `🚗 Monthly Volume: ${fd.get('volume')}`,
            `📞 Phone: ${fd.get('phone')}`,
            `💬 Details: ${fd.get('details') || 'N/A'}`
        ].join('\n');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <input name="businessName" type="text" required placeholder="Business Name"
                    className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" />
                <input name="contactName" type="text" required placeholder="Contact Name"
                    className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <select name="businessType" required defaultValue=""
                    className="w-full bg-white/10 border border-white/25 text-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none appearance-none">
                    <option value="" disabled className="bg-gray-800">Business Type</option>
                    <option value="Independent Trader" className="bg-gray-800">Independent Trader</option>
                    <option value="Dealership" className="bg-gray-800">Dealership</option>
                    <option value="Fleet Operator" className="bg-gray-800">Fleet Operator</option>
                    <option value="Leasing Company" className="bg-gray-800">Leasing Company</option>
                </select>
                <select name="volume" required defaultValue=""
                    className="w-full bg-white/10 border border-white/25 text-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none appearance-none">
                    <option value="" disabled className="bg-gray-800">Monthly Volume</option>
                    <option value="1-2 vehicles" className="bg-gray-800">1-2 vehicles</option>
                    <option value="3-9 vehicles" className="bg-gray-800">3-9 vehicles</option>
                    <option value="10+ vehicles" className="bg-gray-800">10+ vehicles</option>
                </select>
            </div>
            <input name="phone" type="tel" required placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none" />
            <textarea name="details" rows={2} placeholder="Additional Details (e.g. dealer prep, accident repair)"
                className="w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-400 outline-none"></textarea>
            <button type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] mt-2">
                Request Trade Account Quote via WhatsApp
            </button>
            <p className="text-gray-400 text-xs text-center">Opens WhatsApp with your details pre-filled. We confirm trade pricing same day.</p>
        </form>
    );
}

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: { beforeSrc: string; afterSrc: string; beforeAlt: string; afterAlt: string; }) {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(percent);
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div
                ref={containerRef}
                className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize border border-gray-800 shadow-2xl"
                onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
                onTouchMove={handleMove}
            >
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold tracking-widest uppercase shadow">After</div>
                
                <div className="absolute inset-0" style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}>
                    <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold tracking-widest uppercase shadow z-10">Before</div>
                </div>
                <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `calc(${sliderPos}% - 2px)` }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

function GalleryThumbnails() {
    const images = ['/gallery/AfteR_Cad_Fender_paint.webp', '/gallery/After_Van_Backdoor_Complete.webp', '/gallery/AfteR_Rim_Job.webp', '/gallery/Bumper Lip After.webp'];
    return (
        <div className="max-w-4xl mx-auto px-6 mt-8 hidden sm:grid grid-cols-4 gap-4">
            {images.map((src, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <Image src={src} alt={`Trade Bodywork Gallery ${i}`} fill className="object-cover" />
                </div>
            ))}
        </div>
    );
}

function AnimatedTradeStats() {
    return (
        <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-800">
                <div className="flex flex-col items-center justify-center p-2">
                    <span className="text-3xl md:text-5xl font-extrabold mb-1 text-white">5,000+</span>
                    <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">Trade Vehicles Completed</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                    <span className="text-3xl md:text-5xl font-extrabold mb-1 text-white">10+</span>
                    <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">Years Trade Experience</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                    <span className="text-3xl md:text-5xl font-extrabold mb-1 text-white">5.0<span className="text-yellow-400 text-2xl">★</span></span>
                    <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">Average Rating</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                    <span className="text-3xl md:text-5xl font-extrabold mb-1 text-white">1–3 Day</span>
                    <span className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">Typical Turnaround</span>
                </div>
            </div>
        </div>
    );
}

const tradeProcessSteps = [
    { title: 'Priority Intake & Assessment', desc: 'Trade jobs are logged and assessed ahead of the standard retail queue. We confirm scope, condition and an agreed turnaround date before any work begins.' },
    { title: 'Bodywork & Panel Repairs', desc: 'Dents, scuffs and structural panel work are completed first, using the same techniques as our retail accident repairs, scaled for multiple vehicles where needed.' },
    { title: 'Precision Sanding & Preparation', desc: 'Surfaces are prepared to the same standard across every vehicle in a batch, so dealer stock looks consistent panel to panel and car to car.' },
    { title: 'Computer Colour Matching', desc: 'Every panel is matched to the manufacturer colour code using digital colour-matching technology, even across multiple vehicles in the same colour run.' },
    { title: 'Controlled Spray Booth Application', desc: 'All trade paintwork is applied inside our enclosed spray booth, eliminating contamination and ensuring a uniform, dust-free finish on every vehicle.' },
    { title: 'Final Inspection & Sign-Off', desc: 'Each vehicle is inspected against the original job spec before it\'s released, so what leaves our workshop matches exactly what was agreed for your forecourt or fleet.' },
];

function TradeProcessSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Trade & Motor Dealer Bodyshop Process</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Trade and dealer work runs on a deadline — your forecourt or fleet schedule doesn&apos;t wait. Our process is built for consistency at volume, so every vehicle leaving our workshop meets the same standard, on the same timeline you agreed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-24 space-y-4">
                        {tradeProcessSteps.map((s, i) => (
                            <div key={i} onClick={() => setActive(i)}
                                className={`cursor-pointer border-l-4 pl-6 py-3 transition-all duration-300 ${active === i ? 'border-blue-600 bg-blue-50/50 rounded-r-2xl' : 'border-gray-200 hover:border-blue-300'}`}>
                                <h3 className={`text-xl font-bold mb-2 ${active === i ? 'text-blue-700' : 'text-gray-700'}`}>
                                    {i + 1}. {s.title}
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ${active === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="mt-8 p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center shadow-sm">
                            <p className="text-gray-900 font-bold mb-4 text-lg">Curious how we&apos;d handle your next batch of vehicles?</p>
                            <a href="#trade-account" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1">
                                Get Trade Quote
                            </a>
                        </div>
                    </div>
                    
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl bg-gray-100">
                        <Image src={`/gallery/${active % 2 === 0 ? 'AfteR_Cad_Fender_paint.webp' : 'Bumper Lip After.webp'}`} alt="Trade bodyshop process" fill className="object-cover transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 text-white">
                            <p className="text-sm font-bold tracking-widest text-blue-400 mb-2 uppercase">Step {active + 1}</p>
                            <p className="text-2xl font-extrabold">{tradeProcessSteps[active].title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TradeTransformationSection({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Benefits of a Dedicated Trade Bodyshop Partner</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Before
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-600">
                                <span className="text-red-400 flex-shrink-0">✕</span> Vehicles queued behind retail jobs
                            </li>
                            <li className="flex gap-3 text-gray-600">
                                <span className="text-red-400 flex-shrink-0">✕</span> Inconsistent finish across multiple vehicles
                            </li>
                            <li className="flex gap-3 text-gray-600">
                                <span className="text-red-400 flex-shrink-0">✕</span> Per-job pricing with no volume benefit
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2 relative z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            After Partnering With Us
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3 text-white text-lg">
                                <span className="bg-green-500/20 text-green-400 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                                Priority trade booking slots
                            </li>
                            <li className="flex items-start gap-3 text-white text-lg">
                                <span className="bg-green-500/20 text-green-400 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                                Consistent, forecourt-ready finish across your stock
                            </li>
                            <li className="flex items-start gap-3 text-white text-lg">
                                <span className="bg-green-500/20 text-green-400 rounded-full p-1 mt-0.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></span>
                                Volume pricing and flexible trade invoicing
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Priority Scheduling",
                            body: "Trade vehicles are scheduled ahead of the standard retail queue, with an agreed turnaround date confirmed before work begins — so your stock keeps moving and your forecourt doesn't sit empty."
                        },
                        {
                            title: "Consistent Multi-Vehicle Finish",
                            body: "Whether it's one car or a batch of ten, every vehicle is matched and finished to the same standard. Computerised colour matching keeps results consistent across your entire stock, not just one panel."
                        },
                        {
                            title: "Volume Pricing & Trade Accounts",
                            body: "Ongoing trade accounts unlock discounted rates and flexible monthly invoicing, so repair costs are easier to factor directly into your buying and stock-turnover decisions."
                        }
                    ].map((c, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            <h4 className="text-lg font-bold text-gray-900 mb-3">{c.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#trade-account" className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                        Ready to set up a trade account? Set Up Trade Account
                    </a>
                </div>
            </div>
        </section>
    );
}

const tradeServiceTabs = [
    {
        label: 'Dealer Preparation',
        heading: 'Dealer Preparation',
        img: '/services/trade-dealer-bodyshop.jpg',
        body: "Forecourt-ready cosmetic preparation for vehicles going on display — paint touch-ups, alloy wheel refurbishment, scratch and scuff removal, and full or panel resprays where a complete colour refresh is needed before sale.",
        perks: ['Pre-sale forecourt prep', 'Part-exchange vehicles', 'Auction-bound stock'],
    },
    {
        label: 'Trade Account',
        heading: 'Trade Account',
        img: '/services/full-car-respray.jpg',
        body: "An ongoing arrangement for traders and dealerships with regular repair volume. Includes priority booking, volume-based pricing, and flexible monthly invoicing instead of per-job payment.",
        perks: ['Dealerships with regular throughput', 'Independent traders moving multiple vehicles monthly', 'Businesses wanting predictable, invoiced costs'],
    },
    {
        label: 'Panel & Touch-Up',
        heading: 'Panel & Touch-Up',
        img: '/services/car-scratch-repair.jpg',
        body: "Fast, colour-matched repair for single-panel damage — ideal where a full respray isn't justified but the finish still needs to meet retail standard.",
        perks: ['Minor forecourt damage', 'Single-panel scuffs and scratches', 'Quick turnaround before a sale date'],
    },
    {
        label: 'Fleet & Lease Return',
        heading: 'Fleet & Lease Return',
        img: '/services/lease-return-repairs.jpg',
        body: "Bodywork and paint repairs for company fleets and lease vehicles ahead of handover, designed to help fleet managers avoid end-of-lease damage charges.",
        perks: ['Fleet operators of any size', 'Leasing companies', 'Vehicles approaching lease-return inspection'],
    },
];

function TradeOptionsSection() {
    const [active, setActive] = useState(0);
    const [fading, setFading] = useState(false);

    function switchTab(i: number) {
        if (i === active) return;
        setFading(true);
        setTimeout(() => { setActive(i); setFading(false); }, 220);
    }

    const tab = tradeServiceTabs[active];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Trade Bodyshop Services & Account Options
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Whether you need a single dealer prep job or an ongoing account for fleet maintenance, we offer trade bodyshop solutions tailored to how your business actually operates.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {tradeServiceTabs.map((t, i) => (
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

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1">
                        <Image src={tab.img} alt={tab.heading} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                            {tab.label}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">{tab.heading}</h3>
                        <p className="text-gray-600 leading-relaxed mb-8">{tab.body}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Perfect for</p>
                        <ul className="space-y-3">
                            {tab.perks.map((p) => (
                                <li key={p} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
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

const tradeCostRanges: Record<string, [number, number]> = {
    'Touch-Up / Panel Repair': [100, 250],
    'Single Panel Respray': [150, 400],
    'Full Vehicle Respray': [1200, 2500],
    'Dealer Prep Bundle': [250, 600],
};
const tradeConditionMultiplier: Record<string, number> = { Good: 1, Fair: 1.25, Poor: 1.6 };
const tradeVolumeDiscount: Record<string, number> = { '1-2 vehicles': 1, '3-9 vehicles': 0.9, '10+ vehicles (trade account)': 0.8 };

const tradeCostFaqs = [
    { q: 'Vehicle Size', a: 'Larger commercial vehicles and SUVs require more preparation time, additional materials and increased paint coverage compared to standard hatchbacks.' },
    { q: 'Existing Paint Condition', a: 'Vehicles with peeling lacquer, corrosion or previous poor-quality repairs require significantly more preparation before trade painting can begin.' },
    { q: 'Job Type (touch-up vs full respray)', a: 'Localised smart repairs and touch-ups are highly cost-effective, while full resprays involve dismantling, masking, and enclosed booth time.' },
    { q: 'Monthly Volume / Account Tier', a: 'Traders committing to higher monthly volumes receive priority scheduling and substantial discounts compared to one-off repairs.' },
];

function TradeCostEstimatorSection({ whatsapp }: { whatsapp: string }) {
    const [jobType, setJobType] = useState('Touch-Up / Panel Repair');
    const [condition, setCondition] = useState('Good');
    const [volume, setVolume] = useState('1-2 vehicles');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const [lo, hi] = tradeCostRanges[jobType];
    const mult = tradeConditionMultiplier[condition];
    const disc = tradeVolumeDiscount[volume];
    const estLo = Math.round(lo * mult * disc);
    const estHi = Math.round(hi * mult * disc);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Trade Bodyshop Pricing & Volume Discount Guide</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Trade pricing depends on job type, vehicle condition and monthly volume. Use the calculator below for an instant guide range, or send your stock list for an exact trade quote.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Trade Estimate Calculator</p>

                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Job Type</p>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.keys(tradeCostRanges).map((v) => (
                                    <button key={v} onClick={() => setJobType(v)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${jobType === v ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {v}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Vehicle Condition</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['Good', 'Fair', 'Poor'].map((c) => (
                                    <button key={c} onClick={() => setCondition(c)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${condition === c ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {c}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <p className="text-white font-semibold mb-4">Monthly Volume</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {Object.keys(tradeVolumeDiscount).map((f) => (
                                    <button key={f} onClick={() => setVolume(f)}
                                        className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${volume === f ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                            <p className="text-gray-400 text-sm mb-3">Estimated Range</p>
                            <div className="flex items-center justify-center gap-3 text-white">
                                <span className="text-4xl md:text-5xl font-extrabold">£{estLo.toLocaleString()}</span>
                                <span className="text-gray-500 text-xl font-medium">to</span>
                                <span className="text-4xl md:text-5xl font-extrabold">£{estHi.toLocaleString()}</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-3">This guide is for estimation only. Trade account pricing is confirmed after reviewing your typical volume and vehicle condition.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-8">What Affects the Price?</h3>
                        <div className="space-y-3">
                            {tradeCostFaqs.map((f, i) => (
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
                            <p className="text-gray-400 mb-5 font-medium">Need an exact trade quotation?</p>
                            <a
                                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20to%20send%20some%20stock%20photos%20for%20a%20trade%20quote.`}
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg animate-pulse-subtle"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Upload Stock Photos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const tradeReviews = [
    { stars: 5, text: 'We send 4–5 vehicles a month for prep before they go on the forecourt. Turnaround is always on time and the finish is consistent across every car.', name: 'Independent Trader', vehicle: 'Motor Dealership', location: 'Rochdale' },
    /* TODO: replace with real trade reviews when available */
    { stars: 5, text: 'Car Body Shop handles all our lease return vehicles. They ensure scuffs and scratches are sorted before inspection, saving us a fortune in penalties.', name: 'Fleet Manager', vehicle: 'Logistics Fleet', location: 'Manchester' },
    { stars: 5, text: 'Excellent trade partner. We rely on them for fast bumper repairs and dent removals on part-exchanges. Never let us down.', name: 'Sales Director', vehicle: 'Main Dealership', location: 'Bury' },
    { stars: 5, text: 'Brilliant volume pricing and priority slots. They understand we need stock moving quickly. Highly recommended for any trader.', name: 'Car Sales', vehicle: 'Independent Dealer', location: 'Oldham' }
];

function TradeCustomerStoriesSection() {
    const [idx, setIdx] = useState(0);
    const r = tradeReviews[idx];

    return (
        <section className="pt-24 pb-12 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        What Motor Dealers & Traders Say
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Independent traders and dealerships across Greater Manchester trust us to keep their stock forecourt-ready.
                    </p>
                </div>

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

                    <div className="absolute top-1/2 -translate-y-1/2 -left-5 hidden md:block">
                        <button onClick={() => setIdx((idx - 1 + tradeReviews.length) % tradeReviews.length)}
                            className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 border border-gray-100 transition-colors">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-5 hidden md:block">
                        <button onClick={() => setIdx((idx + 1) % tradeReviews.length)}
                            className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-blue-50 border border-gray-100 transition-colors">
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center gap-2">
                    {tradeReviews.map((_, i) => (
                        <button key={i} onClick={() => setIdx(i)}
                            className={`transition-all rounded-full ${i === idx ? 'w-6 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`} />
                    ))}
                </div>

            </div>
        </section>
    );
}

const tradeOtherServices = [
    { title: 'Full Car Respray', desc: 'Complete vehicle resprays with full colour matching, ideal for pre-sale preparation or a complete colour change before a vehicle goes on display.', cta: 'Learn More', href: '/services/full-car-respray-rochdale', img: '/services/full-car-respray.jpg' },
    { title: 'Accident & Collision Repair', desc: 'Comprehensive repairs after collisions, from structural bodywork and panel straightening to final paint refinishing, with priority turnaround for trade accounts.', cta: 'Learn More', href: '/services/accident-collision-repair-rochdale', img: '/services/accident-collision-repair.jpg' },
    { title: 'Bumper Repair', desc: 'Repair cracked, scratched and damaged bumpers to a factory standard without unnecessary panel replacements — fast enough for forecourt deadlines.', cta: 'Learn More', href: '/services/bumper-repair-rochdale', img: '/gallery/Bumper Lip After.webp' },
    { title: 'Dent Removal', desc: 'Repair dents, dings and creases while preserving original paintwork, keeping vehicles retail-ready without a full respray.', cta: 'Learn More', href: '/services/dent-removal-rochdale', img: '/gallery/Before_Car_Fender_Dent.webp' },
    { title: 'Car Scratch Repair', desc: 'Professional paint correction and scratch repairs using precision colour matching, essential for maintaining forecourt presentation.', cta: 'Learn More', href: '/services/car-scratch-repair-rochdale', img: '/gallery/AfteR_Cad_Fender_paint.webp' },
    { title: 'Lease Return Repairs', desc: 'Scuffs, dents and scratches repaired before handover to help fleet and leasing companies avoid costly end-of-lease penalty charges.', cta: 'Learn More', href: '/services/lease-return-repairs-rochdale', img: '/services/lease-return-repairs.jpg' },
];

function TradeOtherServicesSection() {
    return (
        <section className="pt-12 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Related Car Body Repair Services for Trade Accounts</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        If a vehicle doesn&apos;t need a full respray, we also provide a full range of trade-ready body repair services from our Rochdale workshop.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tradeOtherServices.map((s) => (
                        <Link key={s.title} href={s.href}
                            className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5">
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

const tradeAreas = ['Rochdale', 'Whitworth', 'Littleborough', 'Heywood', 'Oldham', 'Bury', 'Milnrow', 'Middleton', 'Manchester', 'Bolton'];

function TradeServiceAreasSection() {
    const [active, setActive] = useState('Rochdale');

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
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

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Trade Bodyshop Coverage Across Greater Manchester
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            We provide trade and motor dealer bodyshop services for businesses throughout Rochdale and the surrounding areas.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {tradeAreas.map((a) => (
                                <button key={a} onClick={() => setActive(a)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                                        active === a
                                            ? 'border-blue-500 bg-blue-600 text-white shadow-lg'
                                            : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                                    }`}>
                                    <span className="mr-2 opacity-70">📍</span>{a}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Wherever your forecourt, dealership or fleet is based in or around Rochdale, our team delivers the same priority turnaround, trade pricing and consistent finish — with collection and delivery available so vehicles can be sent directly from your site without disrupting daily operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const tradeFaqs = [
    { q: 'Do you offer trade accounts for motor dealers?', a: 'Yes. Car Body Shop offers trade accounts for motor dealers, independent traders and fleet operators across Greater Manchester. Trade accounts include volume-based pricing, priority booking slots and flexible monthly invoicing. Call or WhatsApp us to set one up.' },
    { q: 'How quickly can you turn around trade repair jobs?', a: 'Most trade repairs and dealer preparation work are completed within one to three working days. Minor cosmetic touch-ups can often be turned around the same day when pre-booked, so your stock isn\'t held up before a sale.' },
    { q: 'Is there a minimum vehicle volume to open a trade account?', a: 'No minimum is required. We work with independent traders moving a handful of vehicles a month through to larger dealerships and fleets — pricing and priority access scale with your typical volume.' },
    { q: 'Can you handle multiple vehicles for a dealership at once?', a: 'Yes. We regularly prepare several vehicles in parallel for dealers and fleets, with consistent colour matching and finish across the whole batch, not just one car at a time.' },
    { q: 'Do you offer collection and delivery for trade customers?', a: 'Yes, across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester and Bolton. Vehicles can be sent directly from your site without disrupting daily operations.' },
    { q: 'How is trade invoicing different from a standard quote?', a: 'Trade accounts can be set up with flexible monthly invoicing rather than per-job payment, making it easier to factor repair costs into your buying and stock-turnover decisions.' },
];

function TradeFaqSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: tradeFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

    return (
        <section className="py-24 bg-white relative">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Trade & Motor Dealer Bodyshop FAQs</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about our trade and motor dealer bodyshop service in Rochdale.
                    </p>
                </div>

                <div className="space-y-4">
                    {tradeFaqs.map((f, i) => (
                        <div key={i} className={`border rounded-2xl transition-all duration-300 ${openFaq === i ? 'border-blue-200 bg-blue-50 shadow-md' : 'border-gray-200 bg-white hover:border-blue-100'}`}>
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between gap-6">
                                <span className={`text-lg font-bold ${openFaq === i ? 'text-blue-700' : 'text-gray-900'}`}>{f.q}</span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    <svg className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6 px-8' : 'max-h-0 px-8'}`}>
                                <p className="text-gray-600 leading-relaxed text-base">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TradeFinalCTASection({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200" id="trade-account">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center border border-gray-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -m-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -m-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
                        Set Up Your Trade Account Today
                    </h2>
                    
                    <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto relative z-10 font-light leading-relaxed">
                        Whether you need a single dealer prep job or an ongoing trade account for fleet maintenance, our experienced team is here to help. From your first enquiry to final sign-off, every vehicle is treated with the same precision, speed and consistency your forecourt or fleet depends on.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10 mb-10">
                        <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20to%20set%20up%20a%20trade%20account.`}
                            target="_blank" rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                            Set Up My Trade Account
                        </a>
                        <a href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:-translate-y-1">
                            Call Our Team
                        </a>
                    </div>
                    
                    <p className="text-gray-400 text-sm relative z-10 flex flex-wrap justify-center gap-4">
                        <span>📍 Whitworth, Rochdale, OL12 8HN</span>
                        <span className="hidden sm:inline">·</span>
                        <span>📞 07471512557</span>
                        <span className="hidden sm:inline">·</span>
                        <span>📧 carbodyshopltd@gmail.com</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
