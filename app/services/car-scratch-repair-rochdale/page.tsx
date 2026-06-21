import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Car Scratch Repair Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Expert car scratch repair in Rochdale. All scratch depths treated & colour-matched to a flawless finish. Call Car Body Shop: 07471512557.`,
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
            <section className="relative bg-gray-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-gray-900/80 z-10"></div>
                    <Image
                        src="/hero-bg.jpg"
                        alt="Car Scratch Repair Rochdale | Car Body Shop"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Car Scratch Repair Rochdale | Car Body Shop
                    </h1>
                </div>
            </section>

            <StatsBar />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">Car Scratch Repair in Rochdale</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>If your vehicle has picked up a scratch and you are searching for professional car scratch repair in Rochdale, Car Body Shop is the local expert you can rely on. Based in Whitworth, our body repair workshop treats all types of scratch damage — from light clear-coat scuffs and surface marks through to deep scratches that have cut down to the primer or bare metal. Whatever the depth or length of the scratch, our experienced technicians assess every repair individually and recommend the most effective, most affordable solution to restore your paintwork to a flawless finish.</p><p>Scratches are more than just an eyesore. Furthermore, any scratch that breaks through the clear coat or base coat leaves the underlying metal exposed to moisture, which can lead to rust and corrosion developing over time. Consequently, getting a scratch repaired promptly is always the right decision — both for the appearance and the long-term health of your vehicle's bodywork. At Car Body Shop, we use precision colour-matching technology, professional automotive paints, and an enclosed spray booth to ensure every scratch repair is seamlessly blended into the surrounding paintwork. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.</p>` }} />
                </div>
            </section>

            {/* General Blocks */}
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Deep Scratch Removal & Paint Chip Repair Specialists in Rochdale, Greater Manchester</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Not all car scratches are the same, and the appropriate repair method depends entirely on how deep the scratch has penetrated the paint system. At Car Body Shop, we identify the depth of every scratch before recommending a repair approach. Superficial scratches that have only affected the clear-coat layer — the outermost protective coating on your vehicle's paintwork — can often be treated through machine polishing and paint correction alone, without any need for repainting. This is the fastest and most affordable type of scratch repair, and in many cases it can be completed within a single visit to our Rochdale workshop. Additionally, paint correction restores the gloss and depth of the surrounding paintwork, leaving the whole area looking refreshed.</p><p>For scratches that have cut through the base coat or reached the primer layer, a more comprehensive repair involving repainting is required. In these cases, our technicians carefully feather and prepare the damaged area, apply the appropriate primer, and then repaint using a colour mix produced from your vehicle's manufacturer paint code. The repaired section is then finished with a high-build lacquer coat and polished to blend seamlessly with the surrounding panels. As a result, even deep keying damage, car park scrapes, and road debris marks can be repaired to a standard where the scratch is virtually invisible. Furthermore, all paintwork at Car Body Shop is carried out inside an enclosed spray booth, ensuring a clean, dust-free finish every single time.</p><p>Whether your scratch is on a door panel, a wing, a bonnet, or a bumper, Car Body Shop has the expertise to fix it correctly and cost-effectively. Likewise, our pricing is always transparent — you will receive a free, itemised quote before any work starts, and the final invoice will match it exactly. We are proud to serve scratch repair customers from Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, Bolton, and across Greater Manchester, and our reputation for honest, high-quality work is what keeps our customers coming back.</p>` }} />
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Why Choose Car Body Shop for Scratch Repair in Rochdale?</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop brings ten years of experience in automotive paint repair and scratch restoration to every job. Our workshop in Whitworth, Rochdale, is fully equipped with professional machine polishing tools, computerised colour-matching technology, and a dedicated spray booth — giving us everything we need to treat any scratch, on any vehicle, to the highest possible standard. Furthermore, because we carry out all work in-house rather than subcontracting it elsewhere, we maintain full quality control from the initial assessment right through to the final polish.</p><p>Speed and convenience matter to our customers. Therefore, we prioritise fast turnaround on scratch repairs. Minor clear-coat scratches treated through machine polishing can often be completed on the same day. Deeper scratches requiring paint restoration are typically finished within one to two working days. Moreover, for customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton who cannot make it to our workshop, our collection and delivery service means your vehicle can be collected, repaired, and returned without you needing to travel at all.</p><p>We are a premium but affordable alternative to main dealer scratch repair pricing. In fact, many customers contact us after receiving quotes from dealerships and are surprised by how much lower our rates are for the same quality of work. There are no hidden charges, no pressure, and no upselling — just honest advice and a genuinely excellent repair. Send us photos of the scratch via WhatsApp or call us on 07471512557 and we will have a free quote back to you within the hour.</p>` }} />
                </div>
            </section>
            

            {/* Related Services Grid */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop offers a complete range of vehicle bodywork and paint repair services from our professional workshop in Rochdale. Alongside car scratch repair, our team handles everything from full resprays and accident damage restoration through to dent removal and lease return preparation — all completed to an insurance-quality standard.</p>` }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Full Car Respray</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Complete vehicle resprays for cars requiring full paint restoration — ideal where scratches are part of a more extensive paint deterioration. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">View our Full Car Respray service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Trade & Motor Dealer Bodyshop Services</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Priority scratch repair and paint correction for motor traders, dealerships, and fleet operators across Greater Manchester. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Explore our Trade & Motor Dealer Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Accident & Collision Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Comprehensive accident repair covering deep paint scratches and bodywork damage caused by collisions — restored to pre-accident condition. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">See our Accident & Collision Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Bumper Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bumper scratches, scuffs, and paint chips repaired and colour-matched — one of the most frequent scratch repair requests we receive. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">See our Bumper Repair service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Dent Removal</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Panel dents repaired alongside scratch damage for a comprehensive single-visit bodywork restoration result. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Discover our Dent Removal service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Lease Return Repairs</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Scratches and paint damage repaired before your lease vehicle handover to avoid costly end-of-contract penalty charges. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Read about our Lease Return Repairs in Rochdale.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Locations We Serve</h2>
                        <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Rochdale</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Our workshop is based in Whitworth, Rochdale, and we carry out scratch repairs for customers right across the borough. From clear-coat polishing to deep scratch restoration, we cover it all. Same-day appointments available for minor scratch work. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Book your Car Scratch Repair in Rochdale today.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Oldham</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Oldham customers regularly choose Car Body Shop for reliable, affordable scratch repair. Furthermore, our collection service means we can pick your vehicle up directly from your Oldham address at a time that suits you. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">Oldham customers can also explore our Accident & Collision Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Bury</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bury customers trust Car Body Shop for high-quality scratch repair at competitive prices. Our collection and delivery service covers the Bury area, and most scratch repairs are turned around within one to two days. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">Bury customers can also view our Bumper Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Heywood</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Heywood is just minutes from our Rochdale workshop, making Car Body Shop the most convenient choice for scratch repair in the area. Free no-obligation quotes available, and same-day polish appointments can often be arranged. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Heywood customers can also view our Dent Removal service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Middleton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Middleton customers rely on Car Body Shop for clean, precise scratch repair and paint correction. Motor traders in Middleton also use our service regularly for pre-sale paint preparation and cosmetic touch-ups. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Middleton traders can explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Manchester</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop serves scratch repair customers from across Manchester and Greater Manchester. Our workshop pricing is consistently lower than city-centre bodyshop rates, with the same insurance-quality results. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">Manchester customers can also view our Full Car Respray service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Car Scratch Repair in Bolton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bolton customers are very welcome at Car Body Shop, and our collection and delivery service makes arranging a scratch repair simple and stress-free. Call 07471512557 to get your free quote today. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Bolton customers can also view our Lease Return Repairs service.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions &mdash; Car Scratch Repair in Rochdale</h2>
                    <div className="space-y-4">
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does car scratch repair cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>The cost of car scratch repair in Rochdale depends on the depth, length, and location of the scratch, as well as the repair method required. Minor clear-coat scratches treated through machine polishing typically start from around £50 to £150. Deeper scratches requiring paint repair and lacquer restoration may range from £150 to £400 depending on the panel affected. At Car Body Shop, we provide free, accurate quotes — simply send photos of the scratch via WhatsApp for a price within the hour.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you repair a deep key scratch on my car?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Deep key scratches are one of the most common types of damage we repair at Car Body Shop. Where the scratch has cut through to the primer or bare metal, our technicians carefully prepare the affected area, apply matching primer and basecoat, and finish with a lacquer coat that blends seamlessly into the surrounding paint. The result is a repair that is virtually invisible, even on keying damage that runs across a full panel.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does scratch repair take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Superficial clear-coat scratches treated through machine polishing are often completed on the same day, sometimes within a few hours. Deeper scratches requiring full paint restoration typically take one to two working days depending on the size of the area affected. We always provide a clear timeframe when you book and keep you updated throughout so you know exactly when your vehicle will be ready.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Will the repaired area match the rest of my car's paintwork?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Car Body Shop uses computerised colour-matching software and your vehicle's manufacturer paint code to produce an exact colour match for every scratch repair. Our technicians blend and feather the paint carefully into the surrounding panels to ensure a seamless transition, and the repaired area is finished with a high-gloss lacquer to match the sheen of the original paintwork — even on older vehicles where the existing paint has faded slightly over time.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Is scratch repair worth it before a lease return or car sale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Absolutely. Scratches are one of the first things a lease inspector or potential buyer will notice, and they can significantly affect both the assessed condition of a lease return and the perceived value of a vehicle for sale. Repairing scratches before a handover or sale is almost always more cost-effective than accepting a penalty charge or a reduced offer. Car Body Shop provides fast, affordable scratch repair for lease return and pre-sale preparation across Rochdale and Greater Manchester.</p>` }} />
                        </details>
                        
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 text-center border border-gray-100 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -m-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">Book Your Car Scratch Repair at Car Body Shop Rochdale</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: `<p>Do not let scratches diminish the appearance and value of your vehicle. Car Body Shop offers fast, professional car scratch repair in Rochdale with honest pricing and a flawless finish every time. Get your free, no-obligation quote today.</p><p>📍 Car Body Shop | Whitworth, Rochdale, OL12 8HN<br>📞 Call / WhatsApp: 07471512557<br>📧 carbodyshopltd@gmail.com  |  🌐 www.carbodyshop.org</p>` }} />
                        
                        <div className="flex justify-center relative z-10">
                            <a
                                href={`https://wa.me/${BUSINESS_DETAILS.phone.replace(/^0/, '44').replace(/\s/g, '')}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20a%20repair.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl md:text-2xl transition-transform hover:-translate-y-1 shadow-xl flex items-center gap-3"
                            >
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
