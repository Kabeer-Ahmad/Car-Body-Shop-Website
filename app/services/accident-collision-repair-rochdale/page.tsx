import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ComparisonSlider from '@/components/ComparisonSlider';

export const metadata: Metadata = {
    title: `Accident & Collision Repair Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Professional accident & collision repair in Rochdale. Insurance-quality results, fast turnaround & no fuss. Call Car Body Shop on 07471512557 today.`,
    alternates: {
        canonical: 'https://carbodyshop.org/services/accident-collision-repair-rochdale',
    },
    openGraph: {
        title: `Accident & Collision Repair Rochdale | Car Body Shop`,
        description: `Professional accident & collision repair in Rochdale. Insurance-quality results, fast turnaround & no fuss. Call Car Body Shop on 07471512557 today.`,
        url: `https://carbodyshop.org/services/accident-collision-repair-rochdale`,
        type: 'website',
    },
};

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-10 sm:pb-14 md:py-16">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
                </div>

                <div className="relative z-20 max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-16">
                    <div className="inline-block mb-4 sm:mb-6 px-6 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                        <span className="text-blue-300 font-semibold text-sm tracking-wide">PROFESSIONAL COLLISION REPAIR</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-4 sm:mb-6 leading-tight">
                        Accident & Collision Repair
                        <span className="block text-blue-400 mt-2">Rochdale</span>
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-0">
                        Insurance-quality repairs without the insurance hassle. Fast turnaround, transparent pricing, and expert craftsmanship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mt-8 sm:mt-10 px-2 sm:px-0">
                        <a
                            href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-6 sm:px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-base sm:text-lg transition-all shadow-lg hover:scale-105 active:scale-100"
                        >
                            Call Now: {BUSINESS_DETAILS.phone}
                        </a>
                        <Link
                            href="/#estimate-form"
                            className="w-full sm:w-auto min-h-[48px] flex items-center justify-center px-6 sm:px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-lg text-base sm:text-lg transition-all shadow-lg hover:scale-105 active:scale-100"
                        >
                            Get Free Estimate
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-10 md:mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-4 sm:mb-6">
                            Accident & Collision Repair in Rochdale
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="prose prose-base sm:prose-lg md:prose-xl mx-auto text-gray-700 leading-relaxed space-y-4 sm:space-y-6 max-w-none">
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            If your vehicle has been involved in an accident, Car Body Shop provides professional accident and collision repair in Rochdale that restores your car to its pre-accident condition — quickly, affordably, and without the hassle of going through your insurance. Based in Whitworth, Rochdale, our workshop handles everything from minor bumper impacts and door dents through to more significant bodywork damage across multiple panels. Whatever the extent of the damage, our experienced technicians assess every repair thoroughly and provide a clear, honest estimate before any work begins.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                            Accident damage can affect far more than just the appearance of your vehicle. Furthermore, unrepaired bodywork damage can lead to rust, structural weakening, and a reduction in resale value over time. Consequently, getting the repair carried out properly and promptly is always the right decision. At Car Body Shop, we use industry-grade materials, precision colour-matching technology, and an enclosed spray booth to ensure every accident repair meets an insurance-quality standard. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton, making us the trusted choice for collision repair across Greater Manchester.
                        </p>
                    </div>
                </div>
            </section>

            {/* Example Work Section */}
            <section className="py-12 sm:py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">Before & after</h2>
                    <ComparisonSlider
                        before="/gallery/Before_Car_Fender_Dent.webp"
                        after="/gallery/AfteR_Cad_Fender_paint.webp"
                        description="Fender dent and respray — collision repair"
                    />
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-12 sm:py-16 md:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-5 sm:gap-6 md:gap-8">
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Most repairs completed within 2-4 working days. We understand you need your vehicle back quickly.</p>
                        </div>
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Free itemised quotes upfront. Often cheaper than your insurance excess with no premium increase.</p>
                        </div>
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Insurance Quality</h3>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Professional spray booth, computerised colour matching, and 10 years of expertise.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Repair Process Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-4 sm:mb-6">
                            Professional Accident Damage Repair & Panel Restoration
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
                    </div>
                    
                    <div className="space-y-5 sm:space-y-6 md:space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            When a vehicle is involved in a collision, the visible damage is often only part of the story. In fact, panel misalignment, paint cracking beneath the surface, and stress fractures in plastic bumpers are common secondary issues that only become apparent during a proper workshop assessment. At Car Body Shop, our technicians carry out a thorough inspection of every vehicle brought in for accident repair, ensuring that all damage — visible and hidden — is identified and addressed before any paintwork begins. As a result, you receive a complete, lasting repair rather than a quick cosmetic fix.
                        </p>

                        {/* Repair Process Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-8 sm:my-12">
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">1</div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Damage Assessment</h3>
                                    <p className="text-gray-600">Thorough inspection of visible and hidden damage</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">2</div>
                                <div>
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Panel Repair/Replacement</h3>
                                    <p className="text-gray-600">Expert panel beating or replacement where necessary</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">3</div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Surface Preparation</h3>
                                    <p className="text-gray-600">Meticulous prep work for perfect paint adhesion</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">4</div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Colour-Matched Painting</h3>
                                    <p className="text-gray-600">Computerised matching in professional spray booth</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">5</div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Lacquer Protection</h3>
                                    <p className="text-gray-600">Final high-gloss coat for long-term durability</p>
                                </div>
                            </div>
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl border border-blue-100">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl">6</div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Quality Inspection</h3>
                                    <p className="text-gray-600">Final checks before returning your vehicle</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Our accident and collision repair process follows a clear sequence: damage assessment, panel repair or replacement where necessary, surface preparation, priming, colour-matched painting inside our professional spray booth, and a final lacquer coat for long-term protection. Additionally, all paint colours are matched using computerised software linked to your vehicle's manufacturer colour code, ensuring a seamless blend with the surrounding panels. Whether you drive a small city car, a family estate, or a larger SUV, our team has the expertise and the equipment to carry out the repair to the highest standard.
                        </p>
                        
                        <p>
                            Many customers in Rochdale, Oldham, Bury, and across Greater Manchester choose Car Body Shop for accident repair because we offer a straightforward, no-nonsense alternative to going through their insurance. Moreover, paying directly for a repair avoids the risk of premium increases, excess payments, and the administrative burden of managing a claim. Our pricing is transparent and competitive, and in many cases the cost of a direct repair with us is less than the excess on a customer's insurance policy. We always provide a free, itemised quote upfront so you can make an informed decision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
                
                <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-4 sm:mb-6">
                            Why Choose Car Body Shop for Accident Repair?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-gray-200">
                        <p>
                            Choosing the right repairer after an accident matters. At Car Body Shop, we bring ten years of experience in accident damage repair to every job, working from a fully equipped body repair workshop in Whitworth, Rochdale. Our enclosed spray booth, professional panel beating equipment, and computerised colour-matching technology allow us to carry out repairs to an insurance-quality standard — but without the inflated pricing or lengthy waiting times associated with main dealer bodyshops and large repair chains.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">10 Years Experience</h3>
                                        <p className="text-gray-300">Trusted expertise in accident damage repair</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Professional Equipment</h3>
                                        <p className="text-gray-300">Enclosed spray booth & colour-matching tech</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            Fast turnaround is one of our most important commitments to accident repair customers. We understand that being without your vehicle causes real disruption to daily life. Therefore, we work efficiently to complete repairs as quickly as possible — most collision repairs are finished within two to four working days depending on the extent of the damage. Additionally, for customers who cannot easily get to our Rochdale workshop, we offer a convenient collection and delivery service across the local area, including Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.
                        </p>
                        
                        <p>
                            We are honest, straightforward, and genuinely focused on getting your vehicle back to you in the best possible condition. Likewise, we are happy to talk you through the repair process in plain language, explain your options, and help you decide whether a direct payment or an insurance claim is the right route for your specific situation. There are no hidden charges and no surprises. Simply send us photos of the damage via WhatsApp or call us on 07471512557 for a free quote within the hour.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services Grid */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-4 sm:mb-6">Our Complete Service Range</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-4 sm:mb-4 sm:mb-6"></div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-1">
                            Car Body Shop offers a complete range of vehicle bodywork and paint repair services from our Rochdale workshop. Whether you need accident damage restored or general cosmetic repairs carried out, our team has the skills and equipment to deliver a flawless result on every job.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-5 sm:gap-6 md:gap-8">
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Full Car Respray</h3>
                            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-4 sm:mb-6 leading-relaxed">Complete resprays for vehicles requiring full colour restoration or a cosmetic transformation after heavy accident damage.</p>
                            <Link href="/services/full-car-respray-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trade & Motor Dealer Services</h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">Priority accident repair and bodywork services for motor traders, dealerships, and fleet operators across Greater Manchester.</p>
                            <Link href="/services/trade-motor-dealer-bodyshop-services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bumper Repair</h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">Bumper cracks, scuffs, and splits repaired and resprayed — one of the most common results of a low-speed collision.</p>
                            <Link href="/services/bumper-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dent Removal</h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">Panel dents caused by collisions removed using traditional and paintless techniques for a seamless, factory-finish result.</p>
                            <Link href="/services/dent-removal-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Car Scratch Repair</h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">Deep paint scratches and scuffs from accident contact repaired with precision colour matching and high-gloss lacquer.</p>
                            <Link href="/services/car-scratch-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lease Return Repairs</h3>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">Accident damage repaired before your lease vehicle handover date to help you avoid costly end-of-contract penalty charges.</p>
                            <Link href="/services/lease-return-repairs-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="text-center mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-4 sm:mb-6">Locations We Serve</h2>
                        <div className="w-24 h-1.5 bg-white/50 mx-auto rounded-full mb-4 sm:mb-4 sm:mb-6"></div>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-1">
                            Providing professional accident and collision repair services across Greater Manchester
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Rochdale</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">Car Body Shop is based in Whitworth, Rochdale, and carries out accident repairs for customers right across the borough — from the town centre to Littleborough, Milnrow, and beyond. Fast turnaround and free quotes available.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Oldham</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">We regularly carry out accident and collision repairs for customers travelling from Oldham. Furthermore, our collection service means we can pick your vehicle up directly from your Oldham address.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bury</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">Bury customers trust Car Body Shop for honest, high-quality accident damage repair. Our pricing is transparent and our results consistently meet insurance-quality standards.</p></div>

                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Heywood</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">Heywood is just a short distance from our Rochdale workshop, making us the natural first choice for accident repair in the area. Same-day assessments available for Heywood customers.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Middleton</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">Middleton customers rely on Car Body Shop for fast, professional collision repair. Motor traders in Middleton also benefit from our dedicated trade accident repair service.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Manchester</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">We serve accident repair customers from across Manchester and Greater Manchester. Our Rochdale workshop is accessible and our pricing is substantially lower than city-centre repair rates.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 md:hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bolton</h3>
                            </div>
                            <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-4">Bolton customers are welcome at Car Body Shop, and our collection and delivery service makes the process effortless regardless of the distance. Call 07471512557 to arrange your repair.</p></div>
                    </div>
                </div>
            </section>

            {/* Get Free Estimate CTA */}
            <section className="py-10 sm:py-12 md:py-10 sm:py-12 md:py-16 bg-white border-y border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-4 sm:mb-6">Get a free, no-obligation quote. Send us a few photos and we&apos;ll respond within 24 hours.</p>
                    <Link
                        href="/#estimate-form"
                        className="inline-flex min-h-[48px] items-center justify-center px-6 sm:px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-base sm:text-lg transition-all shadow-lg hover:scale-105 active:scale-100 w-full sm:w-auto"
                    >
                        Get Free Estimate
                    </Link>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="text-center mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-8 sm:mb-8 sm:mb-10 md:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-4 sm:mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-4 sm:mb-4 sm:mb-6"></div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 px-1">Everything you need to know about accident and collision repair in Rochdale</p>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden gap-2 py-1">
                                Do I have to use my insurance for accident repair?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>No — you are not legally required to use your insurance for an accident repair. Many customers in Rochdale and across Greater Manchester choose to pay for repairs directly, particularly when the cost is manageable or when they wish to protect their no-claims bonus. Car Body Shop provides free, itemised quotes so you can compare the direct repair cost against your insurance excess before making a decision.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden gap-2 py-1">
                                How long does accident repair take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Most accident and collision repairs are completed within two to four working days, depending on the extent of the damage and the number of panels affected. Minor collision repairs — such as a single bumper or door panel — are often finished within one to two days. We always provide a realistic timeframe upfront and keep you updated throughout the repair process.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden gap-2 py-1">
                                Will the repaired panels match the rest of my car's paintwork?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Car Body Shop uses computerised colour-matching technology and your vehicle's manufacturer paint code to ensure a precise colour match on every repaired panel. Our technicians also blend and feather paint edges carefully to achieve a seamless transition between repaired and original paintwork, even on older vehicles where the existing paint has faded slightly over time.</p>
                            </div>
                        </details>

                        <details className="group bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden gap-2 py-1">
                                Can you repair accident damage without replacing the whole panel?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>In many cases, yes. Our technicians assess each panel individually and determine whether a repair or a replacement is the most appropriate and cost-effective solution. Where the structural integrity of the panel is intact, we can often carry out a full repair and respray without the need for a complete replacement — saving you both time and money.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-base sm:text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden gap-2 py-1">
                                Do you offer accident repair collection and delivery in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Car Body Shop offers a collection and delivery service for accident repair customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton. If you are unable to drive your vehicle or prefer not to travel, simply get in touch to arrange a collection time. We will bring your vehicle to our workshop, carry out the repair, and return it to you once completed.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -mr-48 -mb-48"></div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-6 sm:p-8 md:p-12 lg:p-16 text-center border border-gray-200 shadow-2xl backdrop-blur-sm">
                        <div className="inline-block mb-4 sm:mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-blue-100 rounded-full">
                            <span className="text-blue-700 font-bold text-xs sm:text-sm tracking-wide">GET YOUR FREE QUOTE TODAY</span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-4 sm:mb-6">
                            Get Your Accident Damage Repaired
                        </h2>
                        
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-1">
                            Do not let accident damage sit unrepaired. Car Body Shop offers fast, professional collision repair in Rochdale with honest pricing and an insurance-quality finish. Get in touch today for your free, no-obligation quote.
                        </p>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 sm:mb-8 md:mb-10 border border-gray-200 max-w-2xl mx-auto">
                            <div className="space-y-3 sm:space-y-4 text-left">
                                <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">LOCATION</p>
                                        <p className="text-gray-900 font-bold text-sm sm:text-base break-words">Car Body Shop | Whitworth, Rochdale, OL12 8HN</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">CALL / WHATSAPP</p>
                                        <p className="text-gray-900 font-bold text-sm sm:text-base">07471512557</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">EMAIL</p>
                                        <p className="text-gray-900 font-bold text-sm sm:text-base break-all">carbodyshopltd@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
                            <Link
                                href="/#estimate-form"
                                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white hover:bg-gray-100 text-blue-900 font-bold text-base sm:text-xl rounded-xl sm:rounded-2xl transition-all hover:scale-105 active:scale-100 shadow-xl border-2 border-blue-200"
                            >
                                Get Free Estimate
                            </Link>
                            <a
                                href={`https://wa.me/${BUSINESS_DETAILS.phone.replace(/^0/, '44').replace(/\s/g, '')}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20accident%20repair.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto min-h-[48px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl transition-all hover:scale-105 active:scale-100 shadow-xl flex items-center justify-center gap-3"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Message on WhatsApp
                            </a>
                            <a
                                href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="w-full sm:w-auto min-h-[48px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl transition-all hover:scale-105 active:scale-100 shadow-xl flex items-center justify-center gap-3"
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-8 sm:py-8 sm:py-12 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
                    <p className="mb-4 sm:mb-6">&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">Advice & Tips</Link>
                        <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
