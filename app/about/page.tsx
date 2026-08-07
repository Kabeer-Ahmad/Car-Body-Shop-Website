'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';

// Image URLs for real workshop feel
const IMAGES = {
    heroWorkshop: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1200",
    storyOwner: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=1000",
    card1Inspect: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1000",
    card2Sanding: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
    card3Booth: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=1000",
    card4Delivery: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
    step1Assess: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1000",
    step2Repair: "/gallery/Before_Car_Fender_Dent.webp",
    step3Prep: "/gallery/Middlestage_Car_Fender_Putene.webp",
    step4Paint: "/gallery/AfteR_Cad_Fender_paint.webp",
    step5Inspect: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=1000",
    service1: "/services/accident-collision-repair.jpg",
    service2: "/services/full-car-respray.jpg",
    service3: "/services/dent-removal.jpg",
    service4: "/services/car-scratch-repair.jpg",
    service5: "/services/bumper-repair.jpg",
    service6: "/services/minor-accident-repair.jpg",
};

const AREAS = ['Rochdale', 'Whitworth', 'Littleborough', 'Oldham', 'Heywood', 'Bury', 'Milnrow', 'Middleton', 'Bolton', 'Manchester'];

const REVIEWS = [
    {
        stars: 5,
        quote: "The repair exceeded my expectations. The paint match was perfect, and the whole process was straightforward from start to finish.",
        author: "James T.",
        vehicle: "Audi A4",
        location: "Rochdale",
    },
    {
        stars: 5,
        quote: "Brought my BMW in with a severe dent and bumper scrape. Returned looking brand new within 48 hours. Honest pricing and fantastic service!",
        author: "Sarah M.",
        vehicle: "BMW 3 Series",
        location: "Whitworth",
    },
    {
        stars: 5,
        quote: "Top quality respray and panel alignment. Couldn't tell where the original damage was. Highly recommended workshop.",
        author: "David K.",
        vehicle: "VW Golf",
        location: "Littleborough",
    },
];

const TRUST_GRID = [
    "Free Estimates",
    "Fully Insured",
    "Premium Paint Systems",
    "Professional Workshop",
    "Fast Turnaround",
    "Honest Pricing",
    "Local Business",
    "Quality Repairs",
];

const FAQS = [
    {
        q: "How do I get a repair quote?",
        a: "The quickest way is to complete our online quote form or send clear photographs of the damage via WhatsApp. We'll review your enquiry and provide a free, no-obligation estimate based on the information you provide. If we need to inspect the vehicle in person, we'll arrange a convenient time with you."
    },
    {
        q: "Do I need to book an appointment?",
        a: "Yes. We recommend booking in advance so a technician is available to inspect your vehicle and discuss the most suitable repair options. This also helps us provide a more accurate quotation and estimated completion time."
    },
    {
        q: "How long do car body repairs usually take?",
        a: "Repair times vary depending on the type and extent of the damage. Minor cosmetic repairs may be completed within one or two working days, while larger accident repairs or full car resprays can take longer. We'll confirm an estimated timescale before any work begins."
    },
    {
        q: "Can you match my vehicle's paint colour?",
        a: "Yes. We use professional colour-matching technology and high-quality automotive paint systems to achieve a finish that blends naturally with your vehicle's existing paintwork."
    },
    {
        q: "Do you provide free estimates?",
        a: "Yes. All estimates are provided free of charge with no obligation to proceed. We'll explain the recommended repair, estimated cost and expected turnaround time before any work begins."
    },
    {
        q: "Which areas do you cover?",
        a: "Our workshop is based in Whitworth, Rochdale, and we regularly welcome customers from Rochdale, Littleborough, Oldham, Bury, Heywood, Milnrow, Middleton, Manchester and the surrounding Greater Manchester area."
    }
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm transition-all duration-200">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50/80 transition-colors"
            >
                <span className="font-bold text-gray-900 text-base md:text-lg">{q}</span>
                <svg className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-base">
                    {a}
                </div>
            )}
        </div>
    );
}

export default function AboutPage() {
    const [activeReview, setActiveReview] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % REVIEWS.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Custom keyframes for floating glass card */}
            <style jsx global>{`
                @keyframes floatGentle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                }
                .animate-float-gentle {
                    animation: floatGentle 4s ease-in-out infinite;
                }
            `}</style>

            {/* ── SECTION 1: HERO (85-90vh, 60/40 Split) ────────────────── */}
            <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-white pt-28 pb-16 flex items-center overflow-hidden">
                {/* Subtle blue gradient glow behind right image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT (60%) */}
                        <div className="space-y-8">
                            <nav className="flex items-center gap-2 text-sm text-gray-400">
                                <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                                <span>/</span>
                                <span className="text-blue-600 font-medium">About Us</span>
                            </nav>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                                About <span className="text-blue-600">Car Body Shop</span> Rochdale
                            </h1>

                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                                Car Body Shop is a trusted car body repair shop in Rochdale, providing expert repairs for dents, scratches, bumpers, accident damage and full car resprays. Our experienced technicians combine skilled workmanship, modern repair techniques and premium materials to restore vehicles to a high standard.
                            </p>

                            {/* Two CTAs */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                                <Link
                                    href="/contact-us"
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center text-base"
                                >
                                    Get Free Quote
                                </Link>
                                <Link
                                    href="/#gallery"
                                    className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-extrabold rounded-2xl transition-all text-center text-base border border-gray-200"
                                >
                                    View Our Work
                                </Link>
                            </div>

                            {/* Trust strip */}
                            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-xs md:text-sm font-semibold px-4 py-2 rounded-full">
                                    ⭐ 5-Star Rated
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-xs md:text-sm font-semibold px-4 py-2 rounded-full">
                                    🛡 Fully Insured
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-xs md:text-sm font-semibold px-4 py-2 rounded-full">
                                    📍 Rochdale &amp; Greater Manchester
                                </span>
                            </div>
                        </div>

                        {/* RIGHT (40%) — Workshop Image + Floating Glass Card */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-[5/4] group">
                                <img
                                    src={IMAGES.heroWorkshop}
                                    alt="Car Body Shop Rochdale Workshop Technicians"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            {/* Floating Glass Card */}
                            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/90 backdrop-blur-md border border-white/80 p-5 sm:p-6 rounded-3xl shadow-2xl animate-float-gentle max-w-[280px] sm:max-w-[320px] z-20">
                                <div className="text-yellow-400 text-base mb-1 font-extrabold tracking-wider">★★★★★</div>
                                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">5,000+</div>
                                <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wide">Vehicles Repaired</div>
                                <div className="mt-2 pt-2 border-t border-gray-200/80 text-xs font-semibold text-blue-600">
                                    Car Body Repair Specialists
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── SECTION 2: OUR STORY (60/40 Split, Image Left, Content Right) ── */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
                        
                        {/* IMAGE LEFT */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3] relative">
                                <img
                                    src={IMAGES.storyOwner}
                                    alt="Car Body Shop Workshop Inspection"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating badge below image */}
                            <div className="mt-4 bg-gray-900 text-white p-5 rounded-2xl shadow-lg flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg">📍</div>
                                    <div>
                                        <p className="font-extrabold text-sm text-white">Serving Rochdale</p>
                                        <p className="text-xs text-gray-400">Trusted Local Workshop</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT RIGHT */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                Trusted Car Body Repair Specialists in Rochdale
                            </h2>

                            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                                <p>
                                    Finding a body shop you can trust isn&apos;t always easy. Whether your vehicle has been involved in an accident or simply needs cosmetic repairs, you want experienced technicians who will treat it with the same care they would their own.
                                </p>
                                <p className="font-bold text-gray-900 border-l-4 border-blue-600 pl-4 py-1 text-lg">
                                    That&apos;s exactly how we work.
                                </p>
                                <p>
                                    At Car Body Shop, we specialise in professional car body repairs in Rochdale, helping customers restore everything from minor scratches and dents to damaged bumpers and complete vehicle resprays. Every repair begins with a thorough assessment, allowing us to recommend the most appropriate solution based on your vehicle, the extent of the damage and your budget.
                                </p>
                                <p>
                                    Rather than replacing parts unnecessarily, we focus on practical, cost-effective repairs that restore your vehicle&apos;s appearance while maintaining high standards of workmanship.
                                </p>
                                <p>
                                    Our reputation has been built on honest advice, attention to detail and consistent results. Much of our work comes from repeat customers and recommendations, reflecting the quality of repairs we deliver every day.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── SECTION 3: WHAT MAKES US DIFFERENT (Alternating Cards) ──── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Why Customers Choose Our Car Body Repair Shop
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Quality repairs aren&apos;t just about paint. They&apos;re about experience, preparation and attention to detail. Here&apos;s what sets our workshop apart.
                        </p>
                    </div>

                    {/* Stacked Horizontal Cards with Alternating Layout */}
                    <div className="space-y-8">
                        {/* CARD 1: Text Left, Image Right */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition-shadow">
                            <div className="p-8 md:p-12 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xl">
                                    01
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900">Honest Advice</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    We assess every vehicle individually and recommend the most appropriate repair, not the most expensive one. If a localised repair is the better option than a replacement panel, we&apos;ll tell you.
                                </p>
                            </div>
                            <div className="h-64 lg:h-full relative overflow-hidden min-h-[260px]">
                                <img
                                    src={IMAGES.card1Inspect}
                                    alt="Technician inspecting vehicle damage"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* CARD 2: Image Left, Text Right */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition-shadow">
                            <div className="h-64 lg:h-full relative overflow-hidden min-h-[260px] order-2 lg:order-1">
                                <img
                                    src={IMAGES.card2Sanding}
                                    alt="Technician sanding vehicle panel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-12 space-y-4 order-1 lg:order-2">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xl">
                                    02
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900">Quality Workmanship</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Every repair follows a structured process, from preparation and panel repairs to colour matching and final inspection. We don&apos;t rush repairs because long-lasting results depend on careful workmanship.
                                </p>
                            </div>
                        </div>

                        {/* CARD 3: Text Left, Image Right */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition-shadow">
                            <div className="p-8 md:p-12 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xl">
                                    03
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900">Modern Repair Techniques</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Our workshop uses professional repair equipment, enclosed spray booth facilities and premium automotive paint systems to achieve accurate colour matching and durable finishes.
                                </p>
                            </div>
                            <div className="h-64 lg:h-full relative overflow-hidden min-h-[260px]">
                                <img
                                    src={IMAGES.card3Booth}
                                    alt="Enclosed spray booth facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* CARD 4: Image Left, Text Right */}
                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition-shadow">
                            <div className="h-64 lg:h-full relative overflow-hidden min-h-[260px] order-2 lg:order-1">
                                <img
                                    src={IMAGES.card4Delivery}
                                    alt="Customer collecting vehicle"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-12 space-y-4 order-1 lg:order-2">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xl">
                                    04
                                </div>
                                <h3 className="text-2xl font-extrabold text-gray-900">Customer First Approach</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    We believe good communication is just as important as good repairs. From your first enquiry through to vehicle collection, we&apos;ll keep you informed and make the repair process as straightforward as possible.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center bg-white border border-gray-200 rounded-3xl p-8 max-w-xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="font-extrabold text-gray-900 text-lg">Looking for a trusted body shop?</span>
                        <Link
                            href="/contact-us"
                            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-md transition-all text-sm flex-shrink-0"
                        >
                            Get Free Estimate
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── SECTION 4: INSIDE OUR CAR BODY REPAIR WORKSHOP (Timeline) ── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            How We Repair Every Vehicle
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Every repair follows a structured process designed to restore your vehicle safely, accurately and to a high standard. From the initial inspection through to the final polish, every stage receives the same attention to detail.
                        </p>
                    </div>

                    {/* Alternating Row Timeline */}
                    <div className="space-y-20">
                        {/* STEP 1: Image Left, Content Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] relative">
                                <img src={IMAGES.step1Assess} alt="Vehicle Assessment" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                                    STEP 1
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Vehicle Assessment</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Before any repair begins, we carefully inspect the vehicle to understand the extent of the damage and identify the most appropriate repair method. We look beyond visible scratches or dents to ensure no underlying issues are overlooked.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    This allows us to provide an accurate quotation, realistic turnaround time and the most cost-effective repair solution.
                                </p>
                            </div>
                        </div>

                        {/* STEP 2: Content Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className="space-y-4 order-2 lg:order-1">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Bodywork Repairs</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Once the repair plan has been agreed, damaged panels are repaired using professional body repair techniques. Where possible, we repair existing panels rather than replacing them, helping reduce costs while maintaining structural integrity and appearance.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Every repair is completed with precision before any paintwork begins.
                                </p>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] relative order-1 lg:order-2">
                                <img src={IMAGES.step2Repair} alt="Bodywork Repairs" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                                    STEP 2
                                </div>
                            </div>
                        </div>

                        {/* STEP 3: Image Left, Content Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] relative">
                                <img src={IMAGES.step3Prep} alt="Surface Preparation" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                                    STEP 3
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Surface Preparation</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Preparation is one of the most important stages of any repair.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Panels are cleaned, filled where necessary, sanded and primed to create the ideal surface for refinishing. Proper preparation improves paint adhesion, produces a smoother finish and helps ensure long-lasting results.
                                </p>
                            </div>
                        </div>

                        {/* STEP 4: Content Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className="space-y-4 order-2 lg:order-1">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Paint &amp; Colour Matching</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Where paintwork is required, we use professional automotive paint systems and computer-assisted colour matching to achieve a seamless finish.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Whether we&apos;re repairing a scratched bumper or completing a full car respray, our goal is to ensure the repaired area blends naturally with the rest of the vehicle.
                                </p>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] relative order-1 lg:order-2">
                                <img src={IMAGES.step4Paint} alt="Paint & Colour Matching" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                                    STEP 4
                                </div>
                            </div>
                        </div>

                        {/* STEP 5: Image Left, Content Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/10] relative">
                                <img src={IMAGES.step5Inspect} alt="Quality Inspection" className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                                    STEP 5
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Quality Inspection</h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Before returning any vehicle, we complete a final inspection to ensure repairs meet our quality standards.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    We check panel alignment, paint finish, colour consistency and overall workmanship so every customer receives a repair completed with care and attention to detail.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center bg-gray-50 border border-gray-200 rounded-3xl p-8 max-w-xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="font-extrabold text-gray-900 text-lg">Need advice about your vehicle?</span>
                        <Link
                            href="/contact-us"
                            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-md transition-all text-sm flex-shrink-0"
                        >
                            Request a Free Estimate
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── SECTION 5: OUR CAR BODY REPAIR SERVICES (Editorial 2-Col Grid) ── */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Car Body Repair Services We Provide
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            From minor cosmetic repairs to complete vehicle restorations, our Rochdale workshop provides a range of professional car body repair services for private vehicle owners throughout Greater Manchester.
                        </p>
                    </div>

                    {/* 2-Column Editorial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <Link
                            href="/"
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[360px]"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={IMAGES.service1} alt="Car Body Repairs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        Car Body Repairs
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Restore dents, scratches, accident damage and worn bodywork with professional repairs designed to return your vehicle to its original condition.
                                    </p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                                    View Car Body Repairs &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link
                            href="/services/full-car-respray-rochdale"
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[360px]"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={IMAGES.service2} alt="Full Car Resprays" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        Full Car Resprays
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Professional full car resprays using premium automotive paint systems and precision colour matching for a factory-quality finish.
                                    </p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                                    View Full Car Resprays &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link
                            href="/services/dent-removal-rochdale"
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[360px]"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={IMAGES.service3} alt="Dent Removal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        Dent Removal
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Repair dents, creases and impact damage with careful panel restoration that preserves the appearance of your vehicle.
                                    </p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                                    View Dent Removal &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 4 */}
                        <Link
                            href="/services/car-scratch-repair-rochdale"
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[360px]"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={IMAGES.service4} alt="Scratch Repairs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        Scratch Repairs
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Remove scratches, scuffs and paint damage using accurate colour matching and high-quality refinishing techniques.
                                    </p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                                    View Scratch Repairs &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 5 */}
                        <Link
                            href="/services/bumper-repair-rochdale"
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[360px]"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={IMAGES.service5} alt="Bumper Repairs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        Bumper Repairs
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Repair cracked, scratched and damaged bumpers with durable repairs that restore both appearance and function.
                                    </p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                                    View Bumper Repairs &rarr;
                                </span>
                            </div>
                        </Link>

                        {/* Card 6 */}
                        <Link
                            href="/services/lease-return-repairs-rochdale"
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[360px]"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={IMAGES.service6} alt="Minor Accident Repairs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                        Minor Accident Repairs
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        Professional repairs for everyday collision damage, helping restore your vehicle quickly and cost-effectively.
                                    </p>
                                </div>
                                <span className="inline-flex items-center text-blue-600 font-extrabold text-sm group-hover:translate-x-1 transition-transform">
                                    View Minor Accident Repairs &rarr;
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── SECTION 6: WHY LOCAL DRIVERS TRUST CAR BODY SHOP (Dark Navy) ── */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 60%)' }} />

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-20">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                            Why Local Drivers Trust Car Body Shop
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Trusted by thousands of car owners across Rochdale and Greater Manchester.
                        </p>
                    </div>

                    {/* Four Large Statistics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-800/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">5,000+</div>
                            <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">Repairs Completed</div>
                        </div>
                        <div className="bg-gray-800/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">10+</div>
                            <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">Years Experience</div>
                        </div>
                        <div className="bg-gray-800/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">5★</div>
                            <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">Average Rating</div>
                        </div>
                        <div className="bg-gray-800/80 border border-gray-700/60 rounded-3xl p-8 text-center backdrop-blur-sm">
                            <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">100%</div>
                            <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">Commitment To Quality</div>
                        </div>
                    </div>

                    {/* Review Carousel Card */}
                    <div className="bg-gray-800/90 border border-gray-700 p-8 md:p-12 rounded-3xl shadow-2xl relative max-w-4xl mx-auto">
                        <div className="text-yellow-400 text-2xl mb-4 font-bold">
                            {"★".repeat(REVIEWS[activeReview].stars)}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed mb-8 italic">
                            &ldquo;{REVIEWS[activeReview].quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-between flex-wrap gap-4 border-t border-gray-700/80 pt-6">
                            <div>
                                <p className="font-extrabold text-white text-base">{REVIEWS[activeReview].author}</p>
                                <p className="text-xs text-gray-400">{REVIEWS[activeReview].vehicle} &bull; {REVIEWS[activeReview].location}</p>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="flex items-center gap-2">
                                {REVIEWS.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveReview(i)}
                                        className={`h-2.5 rounded-full transition-all ${activeReview === i ? 'w-8 bg-blue-500' : 'w-2.5 bg-gray-600 hover:bg-gray-500'}`}
                                        aria-label={`Go to review ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Large Trust Grid (2 Rows of Badges) */}
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
                            OUR WORKSHOP GUARANTEE
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {TRUST_GRID.map((item) => (
                                <div key={item} className="flex items-center justify-center gap-2 bg-gray-800/50 border border-gray-700/50 text-gray-200 text-sm font-bold px-4 py-3.5 rounded-2xl text-center">
                                    <span className="text-blue-400">✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center pt-4">
                        <Link
                            href="/#gallery"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-2xl shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            See Our Recent Repairs &darr;
                        </Link>
                    </div>
                </div>
            </section>


            {/* ── SECTION 7: AREAS WE COVER (Visual Split Layout) ───────── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-16 items-center">
                        
                        {/* LEFT SIDE: Interactive Google Map */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-80 md:h-[480px]">
                            <iframe
                                src={BUSINESS_DETAILS.mapsLink}
                                className="w-full h-full"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Car Body Shop Rochdale Map"
                            />
                        </div>

                        {/* RIGHT SIDE: Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                Serving Rochdale &amp; Greater Manchester
                            </h2>

                            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                                <p>
                                    Our workshop is based in Whitworth, Rochdale, making it convenient for customers throughout Greater Manchester to access professional car body repairs, dent removal, scratch repairs and full car resprays.
                                </p>
                                <p>
                                    Customers regularly visit us from surrounding towns because they value honest advice, quality workmanship and repairs completed to a high standard.
                                </p>
                                <p>
                                    Whether you&apos;re nearby or travelling a little further, we&apos;ll make the repair process straightforward from quotation through to collection.
                                </p>
                            </div>

                            {/* Service Areas Location Chips */}
                            <div>
                                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">Service Areas</p>
                                <div className="flex flex-wrap gap-2">
                                    {AREAS.map((town) => (
                                        <span
                                            key={town}
                                            className="bg-gray-50 border border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 text-gray-800 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all cursor-default"
                                        >
                                            {town}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                                <div>
                                    <p className="font-extrabold text-gray-900 text-sm">Car Body Shop</p>
                                    <p className="text-xs text-gray-600">Whitworth, Rochdale, OL12 8HN</p>
                                </div>
                                <div className="text-xs text-gray-600 border-t sm:border-t-0 sm:border-l border-gray-200 pt-2 sm:pt-0 sm:pl-4">
                                    <p><span className="font-bold text-gray-800">Mon–Fri:</span> 8:30 – 5:30</p>
                                    <p><span className="font-bold text-gray-800">Sat:</span> 9:00 – 1:00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ── SECTION 8: FREQUENTLY ASKED QUESTIONS ─────────────────── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            If you&apos;re considering car body repairs or a full car respray, you may find the answers below helpful. If you have another question, our team will be happy to help.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={index === 0} />
                        ))}
                    </div>
                </div>
            </section>


            {/* ── SECTION 9: REQUEST A FREE CAR BODY REPAIR QUOTE (Final CTA) ── */}
            <section className="relative py-28 bg-gray-900 text-white overflow-hidden">
                {/* Background image overlay */}
                <div className="absolute inset-0">
                    <img
                        src={IMAGES.heroWorkshop}
                        alt="Car Body Shop Workshop Background"
                        className="w-full h-full object-cover opacity-20 blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-gray-900/95 to-black/90" />
                </div>

                <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        Request a Free Car Body Repair Quote
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Whether your vehicle has a small scratch, a damaged bumper, accident damage or requires a complete car respray, our experienced team is here to help.
                    </p>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        We&apos;ll assess your vehicle, explain the available repair options and provide a free, no-obligation quotation based on the work required. Get in touch today to discuss your repair with our Rochdale workshop.
                    </p>

                    {/* Primary & Secondary Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all text-center text-base"
                        >
                            Get Free Quote
                        </Link>
                        <a
                            href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-extrabold rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all text-center text-base flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call 07471 512557
                        </a>
                    </div>

                    {/* Trust Strip */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-gray-800 text-xs md:text-sm text-gray-300 font-medium">
                        <span className="bg-white/10 px-3.5 py-1.5 rounded-full">★★★★★ Rated</span>
                        <span className="bg-white/10 px-3.5 py-1.5 rounded-full">Free Estimates</span>
                        <span className="bg-white/10 px-3.5 py-1.5 rounded-full">Fully Insured</span>
                        <span className="bg-white/10 px-3.5 py-1.5 rounded-full">Quality Guaranteed</span>
                    </div>

                    <p className="text-xs text-gray-500 pt-2">
                        We aim to respond to all enquiries during normal business hours.
                    </p>
                </div>
            </section>

            {/* ── SECTION 10: FOOTER ─────────────────────────────────────── */}
            <Footer />
        </main>
    );
}
