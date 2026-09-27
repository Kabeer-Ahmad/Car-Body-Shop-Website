'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import AreaLink from '@/components/AreaLink';
import MapEmbed from '@/components/MapEmbed';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { businessNode, breadcrumbList, BUSINESS_ID } from '@/lib/schema';

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────
// The FAQPage schema for this page is emitted separately, inside SplitFaqSection below.
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        businessNode(),
        {
            "@type": "Service",
            "serviceType": "Accident & Collision Repair",
            "name": "Accident & Collision Repair Rochdale",
            "description": "Professional accident and collision repair in Rochdale. Insurance-quality results, fast turnaround, no insurance claim required.",
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
            "url": "https://www.carbodyshop.org/services/accident-collision-repair-rochdale"
        },
        breadcrumbList([
            { name: "Home", url: "https://www.carbodyshop.org/" },
            { name: "Services", url: "https://www.carbodyshop.org/services" },
            { name: "Accident & Collision Repair Rochdale", url: "https://www.carbodyshop.org/services/accident-collision-repair-rochdale" }
        ])
    ]
};

export default function AccidentCollisionRepairPage() {
    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services/accident-collision-repair.jpg"
                        alt="Accident & Collision Repair Rochdale, Car Body Shop Workshop"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-gray-900/75 to-black/80" />
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Car Accident Repair Rochdale</p>
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                                Car Accident Repair in Rochdale
                            </h1>
                            <p className="text-base md:text-lg text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
                                Professional collision damage repair. No insurance needed. Cash prices. 2-4 day turnaround. Serving Rochdale, Oldham, Bury and Greater Manchester.
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
                                    href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20car%20accident%20repair.`}
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
                            <div className="flex flex-wrap gap-5 text-sm font-medium text-gray-300">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    5,000+ Repairs Completed
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    10+ Years Experience
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    5.0 Star Average Rating
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                                    </svg>
                                    100% Satisfaction Guarantee
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                                <div className="mb-5">
                                    <h2 className="text-2xl font-extrabold text-white mb-1">Get a Free Accident Repair Quote</h2>
                                    <p className="text-gray-300 text-sm">Send photos of your accident damage and we'll reply within the hour with a clear cash price.</p>
                                </div>
                                <RepairQuoteForm whatsapp={BUSINESS_DETAILS.whatsapp} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Gallery Section ── */}
            <section className="bg-gray-950 pt-0 pb-20 overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Recent Accident & Collision Repair Work
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every accident is different. Browse real collision repairs completed at our Rochdale workshop, from single-panel impacts to multi-point damage.
                    </p>
                </div>
                <div className="relative w-full px-0">
                    <BeforeAfterSlider
                        beforeSrc="/gallery/Before_Car_Fender_Dent.webp"
                        afterSrc="/gallery/AfteR_Cad_Fender_paint.webp"
                        beforeAlt="Car before accident repair"
                        afterAlt="Car after accident repair"
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
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Premium Paint Systems</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Professional Spray Booth</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />Computer Colour Matching</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />OEM Paint Finish</li>
                        </ul>
                    </div>
                </div>
                <GalleryThumbnails />
                <div className="max-w-3xl mx-auto px-6 md:px-12 mt-10 text-center">
                    <p className="text-gray-400 leading-relaxed">
                        Every vehicle is assessed panel by panel before any work begins. Visible damage is rarely the whole story. We find and fix hidden stress fractures, paint cracking and panel misalignment before the respray starts.
                    </p>
                </div>
                <AnimatedStats />
            </section>

            {/* ── Process Section ── */}
            <PrepSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ── Damage Types Section ── */}
            <DamageTypesSection />

            {/* ── Cost Estimator Section ── */}
            <CostEstimatorSection whatsapp={BUSINESS_DETAILS.whatsapp} />

            {/* ── Why Choose Us ── */}
            <WhyChooseUsSection />

            {/* ── Related Services ── */}
            <OtherServicesSection />

            {/* ── Service Areas ── */}
            <ServiceAreasSection />

            {/* ── FAQs ── */}
            <SplitFaqSection />

            {/* ── Final CTA ── */}
            <FinalCTASection whatsapp={BUSINESS_DETAILS.whatsapp} />

            <Footer />
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers / Components
// ─────────────────────────────────────────────────────────────────────────────

function RepairQuoteForm({ whatsapp }: { whatsapp: string }) {
    const today = new Date().toISOString().split('T')[0];
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const msg = [
            `👋 Hi, I'd like a free quote for Accident Repair:`,
            ``,
            `📛 Name: ${fd.get('name')}`,
            `🚗 Vehicle: ${fd.get('vehicle')}`,
            `📍 Location: ${fd.get('location')}`,
            `💥 Damage Type: ${fd.get('damage')}`,
            `📅 Preferred Date: ${fd.get('date')}`,
            `📝 Extra Info: ${fd.get('notes') || 'None'}`,
        ].join('\n');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }
    const input = 'w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all';
    const label = 'block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide';
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="rq-name" className={label}>Your Name</label>
                    <input id="rq-name" name="name" type="text" required placeholder="e.g. John Smith" className={input} />
                </div>
                <div>
                    <label htmlFor="rq-vehicle" className={label}>Your Vehicle</label>
                    <input id="rq-vehicle" name="vehicle" type="text" required placeholder="e.g. Ford Focus" className={input} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="rq-location" className={label}>Your Location / Postcode</label>
                    <input id="rq-location" name="location" type="text" required placeholder="e.g. Rochdale, OL12" className={input} />
                </div>
                <div>
                    <label htmlFor="rq-damage" className={label}>Type of Damage</label>
                    <select id="rq-damage" name="damage" required className={input + ' [&>option]:bg-gray-800'}>
                        <option value="">Select type...</option>
                        <option value="Front Impact">Front Impact</option>
                        <option value="Rear Impact">Rear Impact</option>
                        <option value="Side Swipe">Side Swipe</option>
                        <option value="Multi-Panel">Multi-Panel</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="rq-date" className={label}>Preferred Date</label>
                <input id="rq-date" name="date" type="date" required min={today} className={input + ' [color-scheme:dark]'} />
            </div>
            <div>
                <label htmlFor="rq-notes" className={label}>Any extra details? (optional)</label>
                <textarea id="rq-notes" name="notes" rows={2} placeholder="e.g. bonnet crease, deep scratch..." className={input + ' resize-none'} />
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 mt-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                Get Free Accident Repair Quote via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 pt-1">
                Opens WhatsApp with your details pre-filled. We confirm same day.
            </p>
        </form>
    );
}

function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: { beforeSrc: string, afterSrc: string, beforeAlt: string, afterAlt: string }) {
    const [pos, setPos] = useState(50);
    const [dragging, setDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const updatePos = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - left, width));
        setPos((x / width) * 100);
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
        <div ref={containerRef} className="relative w-full h-[50vh] md:h-[70vh] cursor-ew-resize select-none overflow-hidden" onMouseDown={() => setDragging(true)} onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}>
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
                <Image src={afterSrc} alt={afterAlt} fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">After</div>
            </div>
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-widest uppercase">Before</div>
            </div>
            <div className="absolute top-0 bottom-0 z-20 flex items-center justify-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
                <div className="w-0.5 h-full bg-white/60" />
                <div className={`absolute w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center transition-all duration-150 ${dragging ? 'scale-110 shadow-blue-400/60 shadow-2xl ring-2 ring-blue-400' : 'hover:scale-110'}`}>
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" /></svg>
                </div>
            </div>
        </div>
    );
}

const thumbs = [
    { src: '/gallery/Before_Car_Fender_Dent.webp', alt: 'Rear-end collision: bumper, boot lid and rear panel. 3 days.' },
    { src: '/gallery/Middlestage_Car_Fender_Putene.webp', alt: 'Front impact: bonnet, wing and bumper. 4 days.' },
    { src: '/gallery/Middlestage_Van_backdoor_Putene.webp', alt: 'Side swipe: two door panels. 2 days.' },
    { src: '/gallery/After_Van_Backdoor_Complete.webp', alt: 'Multi-panel collision: full nearside restoration. 5 days.' },
];
function GalleryThumbnails() {
    const [lightbox, setLightbox] = useState<string | null>(null);
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-12 mt-6">
                {thumbs.map((t) => (
                    <button key={t.src} onClick={() => setLightbox(t.src)} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer" aria-label={t.alt}>
                        <Image src={t.src} alt={t.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-3">
                            <p className="text-white text-xs font-medium text-left">{t.alt}</p>
                        </div>
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
    return <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white">{typeof target === 'number' ? count : target}{suffix}</div>;
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
                    {typeof s.target === 'number' ? <AnimatedCounter target={s.target} suffix={s.suffix} /> : <div className="text-4xl md:text-5xl font-extrabold text-white">{s.target}{s.suffix}</div>}
                    <p className="text-gray-400 text-sm mt-2 font-medium">{s.label}</p>
                </div>
            ))}
        </div>
    );
}

const prepSteps = [
    {
        title: 'Full Damage Assessment',
        body: 'We inspect every panel for visible and hidden damage including stress fractures, paint cracking and misalignment caused by the impact. This determines the full repair scope before any work begins.',
        img: '/gallery/Before_Car_Fender_Dent.webp',
    },
    {
        title: 'Panel Repair or Replacement',
        body: 'Dented and creased panels are straightened using panel beating and dent removal. Where damage is too severe, replacement panels are fitted before any paintwork.',
        img: '/gallery/Middlestage_Car_Fender_Putene.webp',
    },
    {
        title: 'Surface Preparation and Sanding',
        body: 'Every repaired surface is flatted and feathered to remove imperfections and create proper paint adhesion. This stage determines how long the repair holds up.',
        img: '/gallery/Middlestage_Van_backdoor_Putene.webp',
    },
    {
        title: 'Computer Colour Matching',
        body: "We use your vehicle's manufacturer colour code and computerised colour-matching technology to mix a precise paint match, including on older vehicles where original colour has faded.",
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
    },
    {
        title: 'Enclosed Spray Booth Application',
        body: 'All accident repair paintwork is applied inside our enclosed spray booth. No dust, no contamination, no uneven coverage.',
        img: '/gallery/AfteR_Rim_Job.webp',
    },
    {
        title: 'Lacquer, Polish and Final Inspection',
        body: 'A protective lacquer coat is applied for gloss and UV protection. Each vehicle is then machine-polished and checked against the original job spec before sign-off.',
        img: '/gallery/After_Van_Backdoor_Complete.webp',
    },
];
function PrepSection({ whatsapp }: { whatsapp: string }) {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const idx = stepRefs.current.findIndex((r) => r === entry.target);
                    if (idx !== -1) setActiveStep(idx);
                }
            });
        }, { threshold: 0.6 });
        stepRefs.current.forEach((r) => { if (r) observer.observe(r); });
        return () => observer.disconnect();
    }, []);
    return (
        <section ref={sectionRef} className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Accident Repair Process</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        A proper car accident repair starts with a full assessment and ends only when every panel is indistinguishable from the original.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="lg:sticky lg:top-24">
                        <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                            <Image src={prepSteps[activeStep].img} alt={prepSteps[activeStep].title} fill className="object-cover transition-all duration-700" />
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200/40">
                                <div className="w-full bg-blue-500 transition-all duration-500 rounded-full" style={{ height: `${((activeStep + 1) / prepSteps.length) * 100}%` }} />
                            </div>
                            <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                                Step {activeStep + 1} of {prepSteps.length}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        {prepSteps.map((step, i) => (
                            <div key={i} ref={(el) => { stepRefs.current[i] = el; }} className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${activeStep === i ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100' : 'border-gray-200 bg-white hover:border-blue-200'}`} onClick={() => setActiveStep(i)}>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${activeStep === i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>{i + 1}</span>
                                    <h3 className={`font-bold text-lg ${activeStep === i ? 'text-blue-700' : 'text-gray-800'}`}>{step.title}</h3>
                                    {i < prepSteps.length - 1 && <span className="ml-auto text-gray-400">↓</span>}
                                </div>
                                <p className={`text-sm leading-relaxed transition-all duration-300 ${activeStep === i ? 'text-gray-700 max-h-40 opacity-100' : 'text-gray-500 max-h-0 opacity-0 overflow-hidden'}`}>{step.body}</p>
                            </div>
                        ))}
                        <div className="pt-4 text-center">
                            <p className="text-gray-600 font-medium mb-4">Want to know how we'd handle your damage?</p>
                            <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20a%20car%20accident%20repair.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg">
                                Get Free Quote
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const damageTabs = [
    {
        label: 'Front Impact',
        heading: 'Front Impact',
        img: '/gallery/Before_Car_Fender_Dent.webp',
        body: "Head-on bumper damage, bonnet and front wing creases, headlight surround and grille repairs. We check structural integrity before any cosmetic work.",
        perks: ['low-speed urban shunts', 'car park front-end damage', 'bonnet and wing creases'],
    },
    {
        label: 'Rear Impact',
        heading: 'Rear Impact',
        img: '/gallery/AfteR_Cad_Fender_paint.webp',
        body: "Bumper cracks, boot lid damage, rear quarter panels and tail light surrounds. Even low-speed rear impacts can cause hidden damage to boot seals and panel alignment.",
        perks: ['rear-end collisions', 'boot lid and bumper damage', 'tail light surround repairs'],
    },
    {
        label: 'Side Swipe',
        heading: 'Side Swipe',
        img: '/gallery/Middlestage_Van_backdoor_Putene.webp',
        body: "Door panels, sills, mirror housings and rear quarter panels. Requires precise colour matching to blend with undamaged doors and surrounding bodywork.",
        perks: ['car park scrapes', 'supermarket trolley damage', 'door panel dents and scratches'],
    },
    {
        label: 'Multi-Panel',
        heading: 'Multi-Panel Damage',
        img: '/gallery/After_Van_Backdoor_Complete.webp',
        body: "Where three or more panels are affected, we assess the full scope and provide one itemised quote covering every area.",
        perks: ['high-speed collisions', 'damage spanning front side and rear', 'commercial vehicles'],
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
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Types of Accident & Collision Damage We Repair</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        From a single crumpled panel to multi-point collision damage, we carry out professional accident car repairs across all damage types.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {damageTabs.map((t, i) => (
                        <button key={i} onClick={() => switchTab(i)} className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-200 border-2 ${active === i ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'}`}>
                            {t.label}
                        </button>
                    ))}
                </div>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-300 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl order-2 lg:order-1">
                        <Image src={tab.img} alt={tab.heading} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                        <div className="absolute bottom-5 left-5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">{tab.label}</div>
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

const accidentRanges: Record<string, { price: string, time: string }> = {
    'Single Panel': { price: 'From £150', time: '1-2 days' },
    'Two Panels': { price: 'From £350', time: '2-3 days' },
    'Multi-Panel (3+)': { price: 'From £600', time: '3-5 days' },
    'Structural': { price: 'Free quote', time: '4-7 days' },
};

const costFaqs = [
    { q: 'Number of panels affected', a: 'Costs increase for each additional panel requiring repair and repainting.' },
    { q: 'Severity of impact', a: 'Deeper dents, creases, and structural impacts demand more labour and potentially panel replacements.' },
    { q: 'Paint finish type', a: 'Metallic and pearlescent finishes require more complex preparation and application.' },
    { q: 'Repair vs full panel replacement', a: 'Depending on the severity, completely replacing a panel can increase material costs but may be necessary for safety.' },
    { q: 'Vehicle size', a: 'Larger vehicles like SUVs and vans have bigger panels, meaning more materials and labour are required.' },
];

function CostEstimatorSection({ whatsapp }: { whatsapp: string }) {
    const [damage, setDamage] = useState('Single Panel');
    const [vehicle, setVehicle] = useState('Small Hatchback');
    const [finish, setFinish] = useState('Solid');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">What Does Car Accident Repair Cost in Rochdale?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Car accident repair costs depend on the number of panels affected, severity of impact and paint finish. These are guide ranges.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 border border-gray-700">
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">Guide Price Calculator</p>
                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Damage Type</p>
                            <div className="grid grid-cols-2 gap-3">
                                {Object.keys(accidentRanges).map((v) => (
                                    <button key={v} onClick={() => setDamage(v)} className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${damage === v ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>{v}</button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="text-white font-semibold mb-4">Vehicle Size</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['Small Hatchback', 'Medium Saloon-Estate', 'Large SUV-Van'].map((c) => (
                                    <button key={c} onClick={() => setVehicle(c)} className={`py-3 px-1 text-center rounded-xl text-sm font-semibold border-2 transition-all ${vehicle === c ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>{c}</button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-10">
                            <p className="text-white font-semibold mb-4">Paint Finish</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['Solid', 'Metallic', 'Pearlescent'].map((f) => (
                                    <button key={f} onClick={() => setFinish(f)} className={`py-3 rounded-xl text-sm font-semibold border-2 transition-all ${finish === f ? 'border-blue-500 bg-blue-600/20 text-blue-300' : 'border-gray-600 text-gray-400 hover:border-gray-400'}`}>{f}</button>
                                ))}
                            </div>
                        </div>
                        <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-6 text-center">
                            <p className="text-gray-400 text-sm mb-3">Guide Price & Turnaround</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-white">
                                <span className="text-3xl md:text-4xl font-extrabold">{accidentRanges[damage].price}</span>
                                <span className="text-gray-500 text-lg font-medium">|</span>
                                <span className="text-2xl md:text-3xl font-extrabold">{accidentRanges[damage].time}</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-3">Guide prices only. Send us photos for an exact cash price within the hour.</p>
                        </div>
                        
                        {/* Pay Direct vs Insurance widget */}
                        <div className="mt-8 border border-gray-700 rounded-2xl overflow-hidden text-sm">
                            <div className="bg-gray-800 grid grid-cols-3 p-3 font-semibold text-white text-center items-center">
                                <div className="text-left text-gray-400 text-xs uppercase tracking-wider">Comparison</div>
                                <div className="text-blue-400">Pay Direct</div>
                                <div className="text-gray-400">Claim Insurance</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 border-t border-gray-700 text-center items-center">
                                <div className="text-gray-400 text-left font-semibold">Cost</div>
                                <div className="text-white px-2">Cash price, often under excess</div>
                                <div className="text-gray-500 px-2">Excess plus premium rise</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 border-t border-gray-700 text-center items-center">
                                <div className="text-gray-400 text-left font-semibold">Speed</div>
                                <div className="text-white px-2">Booked within days</div>
                                <div className="text-gray-500 px-2">Weeks waiting for approval</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 border-t border-gray-700 text-center items-center">
                                <div className="text-gray-400 text-left font-semibold">No-Claims</div>
                                <div className="text-white px-2">Protected, no claim made</div>
                                <div className="text-gray-500 px-2">At risk if you are at fault</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-8">What Affects the Price?</h3>
                        <div className="space-y-3">
                            {costFaqs.map((f, i) => (
                                <div key={i} className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                                        <span className="text-white font-semibold">{f.q}</span>
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                                        <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-gray-400 mb-5 font-medium">Need an exact quote?</p>
                            <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20car%20accident%20repair%20quote.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                Upload Vehicle Photos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const otherServices = [
    { title: 'Full Car Respray', desc: 'Complete resprays where accident damage requires full colour restoration or a colour change.', cta: 'Learn More', href: '/services/full-car-respray-rochdale', img: '/gallery/After_Van_Backdoor_Complete.webp' },
    { title: 'Bumper Repair', desc: 'Bumper cracks, splits and scuffs repaired and colour-matched. The most common result of a low-speed accident.', cta: 'Learn More', href: '/services/bumper-repair-rochdale', img: '/gallery/Bumper Lip After.webp' },
    { title: 'Dent Removal', desc: 'Panel dents from collisions removed using paintless and traditional techniques for a seamless finish.', cta: 'Learn More', href: '/services/dent-removal-rochdale', img: '/gallery/Before_Car_Fender_Dent.webp' },
    { title: 'Car Scratch Repair', desc: 'Deep scratches and scuffs from side swipes and door scrapes repaired with precision colour matching.', cta: 'Learn More', href: '/services/car-scratch-repair-rochdale', img: '/gallery/AfteR_Cad_Fender_paint.webp' },
    { title: 'Minor Accident Repair', desc: 'Fast, affordable repairs for minor bumps and cosmetic collision damage, often completed same day.', cta: 'Learn More', href: '/services/minor-accident-repair-rochdale', img: '/gallery/Middlestage_Car_Fender_Putene.webp' },
    { title: 'Lease Return Repairs', desc: 'Accident damage repaired before your handover date to avoid end-of-contract penalty charges.', cta: 'Learn More', href: '/services/lease-return-repairs-rochdale', img: '/gallery/Middlestage_Van_backdoor_Putene.webp' },
];
function OtherServicesSection() {
    return (
        <section className="pt-12 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Accident Car Repair Services in Rochdale</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        If your vehicle does not need a full collision repair, we carry out a full range of accident car repair services from our Rochdale workshop.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherServices.map((s) => (
                        <Link key={s.title} href={s.href} className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-1.5">
                            <div className="relative h-44 overflow-hidden">
                                <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                            </div>
                            <div className="p-7">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                                <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                    {s.cta}
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceAreasSection() {
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                        Accident Repair Coverage Across Greater Manchester
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {['Rochdale', 'Whitworth', 'Littleborough', 'Heywood', 'Oldham', 'Bury', 'Milnrow', 'Middleton', 'Manchester', 'Bolton'].map((a) => (
                            <AreaLink key={a} name={a} className="flex items-center gap-2 text-gray-300 font-medium bg-gray-900 px-4 py-2 rounded-full border border-gray-800" linkClassName="underline decoration-blue-400 underline-offset-2 hover:border-blue-500 hover:text-white transition-colors">
                                <span className="text-blue-500">📍</span> {a}
                            </AreaLink>
                        ))}
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Wherever you are across Greater Manchester, Car Body Shop provides professional car accident repairs with free collection and delivery so your vehicle comes to us and returns to you.
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden aspect-[16/9] bg-gray-800 border border-gray-700 shadow-2xl">
                    <MapEmbed />
                </div>
            </div>
        </section>
    );
}

const faqs = [
    {
        q: 'Do I have to use my insurance for car accident repairs?',
        a: 'No. You are not legally required to claim. Many Rochdale drivers pay direct because the cash price is less than their excess and their no-claims bonus stays protected. We give you a free itemised price so you can compare before deciding.'
    },
    {
        q: 'How much does car accident repair cost in Rochdale?',
        a: 'Single-panel accident repairs start from around £150. Prices increase with the number of panels affected, severity of impact and paint finish. Send us photos on WhatsApp for an exact cash price within the hour.'
    },
    {
        q: 'How long does accident and collision repair take?',
        a: 'Most accident car repairs are completed in 2 to 4 working days. Single-panel repairs are often done in 1 to 2 days. Multi-panel or structural repairs take 4 to 7 days. We confirm the turnaround when you book and keep you updated throughout.'
    },
    {
        q: 'Will the repaired panels match the rest of my paintwork?',
        a: 'Yes. We use computerised colour-matching technology and your manufacturer paint code to mix a precise match on every repaired panel. We blend and feather edges carefully so the repair is invisible, even on older vehicles with faded paint.'
    },
    {
        q: 'Can you repair accident damage without replacing the whole panel?',
        a: 'In many cases, yes. We assess each panel individually and repair rather than replace wherever the structure allows. If replacement is needed, we tell you upfront in your itemised quote.'
    },
    {
        q: 'Do you offer collection and delivery for accident repair?',
        a: 'Yes. Free collection and delivery across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester and Bolton. If your car is not driveable, call or WhatsApp us to arrange a pickup time.'
    }
];
function SplitFaqSection() {
    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <section className="py-24 bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Car Accident Repair FAQs</h2>
                    <p className="text-gray-500 text-lg">
                        Everything you need to know about car accident repair and collision damage restoration in Rochdale.
                    </p>
                </div>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className={`bg-white rounded-2xl border transition-all duration-300 ${openFaq === i ? 'border-blue-500 shadow-md shadow-blue-100' : 'border-gray-200 hover:border-blue-300'}`}>
                            <button onClick={() => setOpenFaq(i)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                                <span className={`font-bold ${openFaq === i ? 'text-blue-700' : 'text-gray-900'}`}>{f.q}</span>
                                <svg className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-64 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTASection({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-14 border border-gray-800 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 -m-16 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30" />
                    <div className="absolute bottom-0 left-0 -m-16 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                                Get Your Car Accident Repairs Booked Today
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Do not leave accident damage unrepaired. Car Body Shop carries out professional car accident repairs in Rochdale with honest cash pricing, a 2-4 day turnaround and a guaranteed finish.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm font-medium text-blue-200 mb-10">
                                {['5 Star Rated', 'No Insurance Needed', 'Free Collection and Delivery', 'Cash Prices', 'Free Quotations'].map((b) => (
                                    <div key={b} className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        {b}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <a href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote%20for%20car%20accident%20repair.`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center text-center">
                                    Get My Free Accident Repair Quote
                                </a>
                                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-lg transition-all flex items-center justify-center gap-2 border border-white/20">
                                    Call Our Team
                                </a>
                            </div>
                            <div className="text-gray-400 text-sm">
                                📍 {BUSINESS_DETAILS.address} &nbsp;|&nbsp; 📞 {BUSINESS_DETAILS.phone} &nbsp;|&nbsp; 📧 {BUSINESS_DETAILS.email}
                            </div>
                        </div>
                        <div>
                            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-white mb-1">Need a fast estimate?</h3>
                                    <p className="text-gray-400 text-sm">Send your details now. Cash prices confirmed within the hour.</p>
                                </div>
                                <RepairQuoteForm whatsapp={whatsapp} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUsSection() {
    const reasons = [
        'No insurance needed. Cash prices, no excess, no premium hike.',
        'Quote within the hour. Send photos on WhatsApp, get a price fast.',
        '2-4 day turnaround on most accident and collision repairs.',
        'Enclosed spray booth. Workshop repairs, not a mobile van.',
        'Computer colour matching on every panel.',
        'Free collection and delivery across Greater Manchester.',
        'Honest, itemised quotes. No hidden charges, ever.',
        '10+ years of car accident repairs in Rochdale.'
    ];
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Why Choose Car Body Shop for Accident Repairs?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((r, i) => (
                        <div key={i} className="flex items-start gap-4 bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors">
                            <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            <p className="font-semibold text-gray-200 leading-snug">{r}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
