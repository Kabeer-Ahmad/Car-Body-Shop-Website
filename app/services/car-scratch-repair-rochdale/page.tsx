import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Car Scratch Repair Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Expert car scratch repair in Rochdale. All scratch depths treated & colour-matched to a flawless finish. Call Car Body Shop: 07471512557.`,
    alternates: { canonical: 'https://carbodyshop.org/services/car-scratch-repair-rochdale' },
    openGraph: {
        title: `Car Scratch Repair Rochdale | Car Body Shop`,
        description: `Expert car scratch repair in Rochdale. All scratch depths treated & colour-matched to a flawless finish. Call Car Body Shop: 07471512557.`,
        url: `https://carbodyshop.org/services/car-scratch-repair-rochdale`,
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
                        <span className="text-blue-300 font-semibold text-sm tracking-wide">PROFESSIONAL SCRATCH REPAIR</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        Car Scratch Repair
                        <span className="block text-blue-400 mt-2">Rochdale</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        All scratch depths treated and colour-matched to a flawless finish. From light scuffs to deep key scratches.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Car Scratch Repair in Rochdale
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-700 leading-relaxed space-y-6">
                        <p className="text-xl leading-relaxed">
                            If your vehicle has picked up a scratch and you are searching for professional car scratch repair in Rochdale, Car Body Shop is the local expert you can rely on. Based in Whitworth, our body repair workshop treats all types of scratch damage — from light clear-coat scuffs and surface marks through to deep scratches that have cut down to the primer or bare metal. Whatever the depth or length of the scratch, our experienced technicians assess every repair individually and recommend the most effective, most affordable solution to restore your paintwork to a flawless finish.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Scratches are more than just an eyesore. Furthermore, any scratch that breaks through the clear coat or base coat leaves the underlying metal exposed to moisture, which can lead to rust and corrosion developing over time. Consequently, getting a scratch repaired promptly is always the right decision — both for the appearance and the long-term health of your vehicle's bodywork. At Car Body Shop, we use precision colour-matching technology, professional automotive paints, and an enclosed spray booth to ensure every scratch repair is seamlessly blended into the surrounding paintwork. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">All Scratch Types</h3>
                            <p className="text-gray-600 leading-relaxed">From light clear-coat scuffs to deep key scratches — we repair them all.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Perfect Colour Match</h3>
                            <p className="text-gray-600 leading-relaxed">Computerised colour matching ensures invisible, seamless repairs every time.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
                            <p className="text-gray-600 leading-relaxed">Minor scratches often completed same-day. Deep repairs within 1-2 days.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Repair Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Deep Scratch Removal & Paint Chip Repair Specialists
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
                    </div>
                    
                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Not all car scratches are the same, and the appropriate repair method depends entirely on how deep the scratch has penetrated the paint system. At Car Body Shop, we identify the depth of every scratch before recommending a repair approach. Superficial scratches that have only affected the clear-coat layer — the outermost protective coating on your vehicle's paintwork — can often be treated through machine polishing and paint correction alone, without any need for repainting. This is the fastest and most affordable type of scratch repair, and in many cases it can be completed within a single visit to our Rochdale workshop. Additionally, paint correction restores the gloss and depth of the surrounding paintwork, leaving the whole area looking refreshed.
                        </p>

                        {/* Scratch Types */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">Clear-Coat Scratches</h3>
                                        <p className="text-gray-600">Surface level only — machine polishing restores finish</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">Base Coat Scratches</h3>
                                        <p className="text-gray-600">Through to colour layer — requires repainting</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">Primer Scratches</h3>
                                        <p className="text-gray-600">Down to primer layer — full paint restoration needed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">4</div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-2">Deep Key Scratches</h3>
                                        <p className="text-gray-600">To bare metal — comprehensive repair & protection</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            For scratches that have cut through the base coat or reached the primer layer, a more comprehensive repair involving repainting is required. In these cases, our technicians carefully feather and prepare the damaged area, apply the appropriate primer, and then repaint using a colour mix produced from your vehicle's manufacturer paint code. The repaired section is then finished with a high-build lacquer coat and polished to blend seamlessly with the surrounding panels. As a result, even deep keying damage, car park scrapes, and road debris marks can be repaired to a standard where the scratch is virtually invisible. Furthermore, all paintwork at Car Body Shop is carried out inside an enclosed spray booth, ensuring a clean, dust-free finish every single time.
                        </p>
                        
                        <p>
                            Whether your scratch is on a door panel, a wing, a bonnet, or a bumper, Car Body Shop has the expertise to fix it correctly and cost-effectively. Likewise, our pricing is always transparent — you will receive a free, itemised quote before any work starts, and the final invoice will match it exactly. We are proud to serve scratch repair customers from Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, Bolton, and across Greater Manchester, and our reputation for honest, high-quality work is what keeps our customers coming back.
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
                            Why Choose Car Body Shop for Scratch Repair?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6 text-lg leading-relaxed text-gray-200">
                        <p>
                            Car Body Shop brings ten years of experience in automotive paint repair and scratch restoration to every job. Our workshop in Whitworth, Rochdale, is fully equipped with professional machine polishing tools, computerised colour-matching technology, and a dedicated spray booth — giving us everything we need to treat any scratch, on any vehicle, to the highest possible standard. Furthermore, because we carry out all work in-house rather than subcontracting it elsewhere, we maintain full quality control from the initial assessment right through to the final polish.
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
                                        <p className="text-gray-300">Trusted expertise in scratch repair and paint restoration</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">Quality Guarantee</h3>
                                        <p className="text-gray-300">Professional spray booth & precision equipment</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            Speed and convenience matter to our customers. Therefore, we prioritise fast turnaround on scratch repairs. Minor clear-coat scratches treated through machine polishing can often be completed on the same day. Deeper scratches requiring paint restoration are typically finished within one to two working days. Moreover, for customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton who cannot make it to our workshop, our collection and delivery service means your vehicle can be collected, repaired, and returned without you needing to travel at all.
                        </p>
                        
                        <p>
                            We are a premium but affordable alternative to main dealer scratch repair pricing. In fact, many customers contact us after receiving quotes from dealerships and are surprised by how much lower our rates are for the same quality of work. There are no hidden charges, no pressure, and no upselling — just honest advice and a genuinely excellent repair. Send us photos of the scratch via WhatsApp or call us on 07471512557 and we will have a free quote back to you within the hour.
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
                            Car Body Shop offers a complete range of vehicle bodywork and paint repair services from our Rochdale workshop. Alongside car scratch repair, our team handles everything from full resprays and accident damage restoration through to dent removal and lease return preparation — all completed to an insurance-quality standard.
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
                            <p className="text-gray-600 mb-6 leading-relaxed">Complete vehicle resprays for cars requiring full paint restoration — ideal where scratches are part of a more extensive paint deterioration.</p>
                            <Link href="/services/full-car-respray-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trade & Motor Dealer Services</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Priority scratch repair and paint correction for motor traders, dealerships, and fleet operators across Greater Manchester.</p>
                            <Link href="/services/trade-motor-dealer-bodyshop-services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accident & Collision Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive accident repair covering deep paint scratches and bodywork damage caused by collisions — restored to pre-accident condition.</p>
                            <Link href="/services/accident-collision-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bumper Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Bumper scratches, scuffs, and paint chips repaired and colour-matched — one of the most frequent scratch repair requests we receive.</p>
                            <Link href="/services/bumper-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dent Removal</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Panel dents repaired alongside scratch damage for a comprehensive single-visit bodywork restoration result.</p>
                            <Link href="/services/dent-removal-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
</svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lease Return Repairs</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Scratches and paint damage repaired before your lease vehicle handover to avoid costly end-of-contract penalty charges.</p>
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
            <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                
                <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Locations We Serve</h2>
                        <div className="w-24 h-1.5 bg-white/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Providing professional car scratch repair services across Greater Manchester
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
                            <p className="text-blue-50 leading-relaxed mb-4">Our workshop is based in Whitworth, Rochdale, and we carry out scratch repairs for customers right across the borough. From clear-coat polishing to deep scratch restoration, we cover it all. Same-day appointments available for minor scratch work.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Oldham</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Oldham customers regularly choose Car Body Shop for reliable, affordable scratch repair. Furthermore, our collection service means we can pick your vehicle up directly from your Oldham address at a time that suits you.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bury</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Bury customers trust Car Body Shop for high-quality scratch repair at competitive prices. Our collection and delivery service covers the Bury area, and most scratch repairs are turned around within one to two days.</p></div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Heywood</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Heywood is just minutes from our Rochdale workshop, making Car Body Shop the most convenient choice for scratch repair in the area. Free no-obligation quotes available, and same-day polish appointments can often be arranged.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Middleton</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Middleton customers rely on Car Body Shop for clean, precise scratch repair and paint correction. Motor traders in Middleton also use our service regularly for pre-sale paint preparation and cosmetic touch-ups.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Manchester</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Car Body Shop serves scratch repair customers from across Manchester and Greater Manchester. Our workshop pricing is consistently lower than city-centre bodyshop rates, with the same insurance-quality results.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bolton</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Bolton customers are very welcome at Car Body Shop, and our collection and delivery service makes arranging a scratch repair simple and stress-free. Call 07471512557 to get your free quote today.</p></div>
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
                        <p className="text-xl text-gray-600">Everything you need to know about car scratch repair in Rochdale</p>
                    </div>
                    <div className="space-y-4">
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does car scratch repair cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>The cost of car scratch repair in Rochdale depends on the depth, length, and location of the scratch, as well as the repair method required. Minor clear-coat scratches treated through machine polishing typically start from around £50 to £150. Deeper scratches requiring paint repair and lacquer restoration may range from £150 to £400 depending on the panel affected. At Car Body Shop, we provide free, accurate quotes — simply send photos of the scratch via WhatsApp for a price within the hour.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you repair a deep key scratch on my car?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Deep key scratches are one of the most common types of damage we repair at Car Body Shop. Where the scratch has cut through to the primer or bare metal, our technicians carefully prepare the affected area, apply matching primer and basecoat, and finish with a lacquer coat that blends seamlessly into the surrounding paint. The result is a repair that is virtually invisible, even on keying damage that runs across a full panel.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does scratch repair take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Superficial clear-coat scratches treated through machine polishing are often completed on the same day, sometimes within a few hours. Deeper scratches requiring full paint restoration typically take one to two working days depending on the size of the area affected. We always provide a clear timeframe when you book and keep you updated throughout so you know exactly when your vehicle will be ready.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Will the repaired area match the rest of my car's paintwork?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Car Body Shop uses computerised colour-matching software and your vehicle's manufacturer paint code to produce an exact colour match for every scratch repair. Our technicians blend and feather the paint carefully into the surrounding panels to ensure a seamless transition, and the repaired area is finished with a high-gloss lacquer to match the sheen of the original paintwork — even on older vehicles where the existing paint has faded slightly over time.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Is scratch repair worth it before a lease return or car sale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Absolutely. Scratches are one of the first things a lease inspector or potential buyer will notice, and they can significantly affect both the assessed condition of a lease return and the perceived value of a vehicle for sale. Repairing scratches before a handover or sale is almost always more cost-effective than accepting a penalty charge or a reduced offer. Car Body Shop provides fast, affordable scratch repair for lease return and pre-sale preparation across Rochdale and Greater Manchester.</p>
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
                            <span className="text-blue-700 font-bold text-sm tracking-wide">GET YOUR FREE QUOTE TODAY</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Book Your Car Scratch Repair Today
                        </h2>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Do not let scratches diminish the appearance and value of your vehicle. Car Body Shop offers fast, professional car scratch repair in Rochdale with honest pricing and a flawless finish every time. Get your free, no-obligation quote today.
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
                                href={`https://wa.me/${BUSINESS_DETAILS.phone.replace(/^0/, '44').replace(/\s/g, '')}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20scratch%20repair.`}
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
