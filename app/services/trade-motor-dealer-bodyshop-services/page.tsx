import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Trade & Motor Dealer Bodyshop Services | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Trusted trade bodyshop services in Greater Manchester. Fast turnaround, dealer prep & priority slots for motor traders. Call Car Body Shop: 07471512557.`,
    openGraph: {
        title: `Trade & Motor Dealer Bodyshop Services | Car Body Shop`,
        description: `Trusted trade bodyshop services in Greater Manchester. Fast turnaround, dealer prep & priority slots for motor traders. Call Car Body Shop: 07471512557.`,
        url: `https://carbodyshop.org/services/trade-motor-dealer-bodyshop-services`,
        type: 'website',
    },
};

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
                </div>

                <div className="relative z-20 max-w-6xl mx-auto text-center px-4 md:px-8 py-16">
                    <div className="inline-block mb-6 px-6 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                        <span className="text-blue-300 font-semibold text-sm tracking-wide">TRADE BODYSHOP SERVICES</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        Trade & Motor Dealer
                        <span className="block text-blue-400 mt-2">Bodyshop Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Priority slots, trade pricing, and fast turnaround for motor dealers and fleet operators across Greater Manchester.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Trade & Motor Dealer Bodyshop Services in Greater Manchester
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-700 leading-relaxed space-y-6">
                        <p className="text-xl leading-relaxed">
                            If you are a motor trader, car dealership, or fleet operator looking for reliable trade bodyshop services in Greater Manchester, Car Body Shop is the specialist partner you need. Based in Whitworth, Rochdale, our fully equipped body repair workshop provides a dedicated trade service for businesses that need vehicles prepared, repaired, and returned to a retail-ready standard quickly, consistently, and at a competitive price. We understand the pressures of running a forecourt, and therefore we work around your schedule — not the other way around.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Our trade and motor dealer bodyshop services cover everything from dealer preparation and cosmetic paint touch-ups through to full panel resprays, accident damage repair, and scratch removal. Furthermore, every vehicle is treated with the same care and precision that we apply to our retail work — because we know that the condition of your stock directly reflects the reputation of your business. Car Body Shop is trusted by independent traders and established dealerships across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Priority Slots</h3>
                            <p className="text-gray-600 leading-relaxed">Dedicated booking slots for trade customers. Most jobs completed within 1-3 working days.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Trade Pricing</h3>
                            <p className="text-gray-600 leading-relaxed">Competitive trade rates and volume discounts. Trade accounts available with flexible invoicing.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Showroom Quality</h3>
                            <p className="text-gray-600 leading-relaxed">Professional spray booth, computerised colour matching, and 10 years of trade experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Trusted Trade Bodyshop Partner for Motor Dealers Across Rochdale & Greater Manchester
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
                    </div>
                    
                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Running a used car business or motor dealership means your vehicles need to look immaculate before they go on display. Consequently, having a trusted trade bodyshop partner on hand is not a luxury — it is a necessity. Car Body Shop works directly with independent traders and dealerships across Greater Manchester, providing fast, high-quality bodywork repairs and dealer preparation services that keep your stock moving. From minor paint touch-ups and alloy wheel refurbishments to full panel resprays and accident damage restoration, we handle every aspect of vehicle cosmetic preparation.
                        </p>

                        <p>
                            Speed and consistency are the two things our trade partners value most. Therefore, we offer priority booking slots specifically for trade customers, ensuring your vehicles are not sitting in a queue behind retail jobs. Additionally, our turnaround times are among the fastest in the region — most trade repairs and dealer preparation work is completed within one to three working days, and same-day turnaround is available for minor cosmetic work when pre-booked.
                        </p>

                        <p>
                            Car Body Shop is also a popular choice for fleet operators and leasing companies based in Rochdale, Oldham, Bury, and across Greater Manchester. In fact, our lease return repair service is specifically designed to help fleet managers get vehicles back on the road or returned to leasing companies in the best possible condition, avoiding unnecessary damage charges. Whether you manage five vehicles or fifty, we can accommodate your requirements with flexible scheduling and consistent, high-quality results every time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
                
                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Why Choose Car Body Shop for Trade Bodyshop Services?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6 text-lg leading-relaxed text-gray-200">
                        <p>
                            Trade customers choose Car Body Shop because we combine the quality of a main dealer bodyshop with the flexibility, speed, and pricing of an independent specialist. Our workshop in Whitworth, Rochdale, is fully equipped with a professional spray booth, computerised colour-matching technology, and all the tooling required to carry out everything from cosmetic touch-ups to full vehicle resprays. As a result, you get a consistent, showroom-quality finish on every vehicle, every time — without the main dealer price tag.
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
                                        <p className="text-gray-300">Trusted by motor traders across Greater Manchester</p>
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
                            We have been working with local motor traders and dealerships for over ten years, and our reputation in the trade is built on reliability, honesty, and quality. Furthermore, we understand that time is money in the motor trade. Therefore, we are committed to meeting agreed turnaround deadlines and keeping you informed of progress throughout. There are no nasty surprises, no inflated invoices, and no vehicles sitting idle in our workshop longer than necessary.
                        </p>
                        
                        <p>
                            Likewise, our pricing structure for trade customers is straightforward and competitive. We are happy to discuss volume discounts and ongoing trade accounts for businesses that require regular bodyshop support. Additionally, our WhatsApp quoting service means you can send photos of a vehicle and receive a trade price within the hour — saving you time and allowing you to factor repair costs into your buying decisions on the spot.
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Services Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Complete Service Range</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Alongside our dedicated trade bodyshop offering, Car Body Shop provides a full range of vehicle body repair and paintwork services.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Car Respray</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Complete vehicle resprays with full colour matching and lacquer finish — ideal for pre-sale preparation or cosmetic restoration.</p>
                            <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accident & Collision Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Professional accident repair restoring vehicles to pre-accident condition — fast turnaround available for trade accounts.</p>
                            <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bumper Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Scuffs, cracks, and paint damage on all bumper types repaired and colour-matched to a showroom finish.</p>
                            <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dent Removal</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Paintless and traditional dent removal techniques keeping your vehicles looking their best before they hit the forecourt.</p>
                            <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Car Scratch Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Deep and superficial scratch removal with precise colour matching — essential for maintaining retail-ready vehicle presentation.</p>
                            <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lease Return Repairs</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Repairs carried out before vehicle handover to avoid costly end-of-lease penalty charges — available for fleet and leasing companies.</p>
                            <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                
                <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Locations We Serve</h2>
                        <div className="w-24 h-1.5 bg-white/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Providing professional trade bodyshop services for motor dealers and fleet operators across Greater Manchester
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Rochdale</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Our workshop is based in Whitworth, Rochdale, making us ideally situated for motor traders and dealerships operating across the borough. Priority slots and trade pricing available.</p>
                            <a href="https://www.carbodyshop.org/blog/trade-motor-dealer-bodyshop-services" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                Book Trade Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Oldham</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">We work regularly with motor traders based in Oldham, providing dealer preparation, paint repairs, and accident damage restoration. Our collection service covers the Oldham area directly.</p>
                            <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bury</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Bury-based dealerships and independent traders trust Car Body Shop for consistent, fast trade bodyshop services. Furthermore, our flexible booking system works around your operational schedule.</p>
                            <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Heywood</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Heywood motor traders benefit from our close proximity and fast turnaround times. From dealer prep to full resprays, we keep your stock retail-ready at all times.</p>
                            <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Middleton</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Motor traders in Middleton regularly use Car Body Shop for pre-sale preparation, scratch repair, and paint correction. Trade accounts and volume pricing available on request.</p>
                            <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Manchester</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">We serve dealerships and traders from across Manchester and Greater Manchester. Our pricing is significantly lower than city-centre trade bodyshop rates, with no reduction in quality.</p>
                            <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bolton</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Bolton-based motor traders are welcome at Car Body Shop. Our collection and delivery service makes it easy to send vehicles directly from your Bolton site to our Rochdale workshop.</p>
                            <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale" className="text-white font-semibold hover:text-blue-200 inline-flex items-center gap-2">
                                View Services
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600">Everything you need to know about trade bodyshop services</p>
                    </div>
                    <div className="space-y-4">
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you offer trade accounts for motor dealers?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Car Body Shop offers trade accounts for motor dealers, independent traders, and fleet operators across Greater Manchester. Trade accounts include competitive pricing, priority booking slots, and flexible invoicing arrangements. Call us on 07471512557 or email carbodyshopltd@gmail.com to discuss setting up a trade account.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How quickly can you turn around trade repair jobs?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Most trade repairs and dealer preparation work is completed within one to three working days. Minor cosmetic repairs, scratch touch-ups, and small dent removals can often be turned around on the same day when pre-booked. We discuss timescales upfront so you can plan your forecourt preparation accordingly.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you handle high volumes of vehicles for a motor dealership?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Car Body Shop regularly works with dealerships and traders who require multiple vehicles to be prepared at the same time. We are happy to discuss volume arrangements and prioritise scheduling to ensure your stock is ready when you need it. Contact us to talk through your requirements.</p>
                            </div>
                        </details>

                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you offer collection and delivery for trade customers?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. We offer a collection and delivery service for trade customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton. This means you can send vehicles directly from your site without any disruption to your daily operations. Simply book a collection slot and we will take care of the rest.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                What types of trade bodyshop work do you carry out?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Car Body Shop carries out a full range of trade bodyshop work, including dealer preparation, full car resprays, single-panel paint repairs, scratch and scuff removal, dent removal, bumper repairs, alloy wheel refurbishment, and accident damage restoration. Additionally, we provide lease return repairs for fleet and leasing companies. Every job is completed to an insurance-quality standard.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 -mr-48 -mb-48"></div>
                
                <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-[3rem] p-12 md:p-16 text-center border border-gray-200 shadow-2xl backdrop-blur-sm">
                        <div className="inline-block mb-6 px-6 py-2 bg-blue-100 rounded-full">
                            <span className="text-blue-700 font-bold text-sm tracking-wide">SET UP YOUR TRADE ACCOUNT TODAY</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Partner with Car Body Shop
                        </h2>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Ready to work with a bodyshop partner you can rely on? Car Body Shop offers trade-focused service, competitive pricing, and fast turnaround for motor dealers and fleet operators across Greater Manchester.
                        </p>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl mb-10 border border-gray-200 max-w-2xl mx-auto">
                            <div className="space-y-4 text-left">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">LOCATION</p>
                                        <p className="text-gray-900 font-bold">Car Body Shop | Whitworth, Rochdale, OL12 8HN</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">CALL / WHATSAPP</p>
                                        <p className="text-gray-900 font-bold">07471512557</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold">EMAIL</p>
                                        <p className="text-gray-900 font-bold">carbodyshopltd@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href={`https://wa.me/${BUSINESS_DETAILS.phone.replace(/^0/, '44').replace(/\s/g, '')}?text=Hi%2C%20I'd%20like%20to%20discuss%20trade%20bodyshop%20services.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Message on WhatsApp
                            </a>
                            <a
                                href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                            >
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
                    <p className="mb-6">&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
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
