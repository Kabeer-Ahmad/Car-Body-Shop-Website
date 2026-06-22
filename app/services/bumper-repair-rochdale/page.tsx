import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Bumper Repair Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Expert bumper repair in Rochdale. Scuffs, cracks & dents repaired and colour-matched to a showroom finish. Call Car Body Shop: 07471512557.`,
    openGraph: {
        title: `Bumper Repair Rochdale | Car Body Shop`,
        description: `Expert bumper repair in Rochdale. Scuffs, cracks & dents repaired and colour-matched to a showroom finish. Call Car Body Shop: 07471512557.`,
        url: `https://www.carbodyshop.org/services/bumper-repair-rochdale`,
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
                        alt="Bumper Repair Rochdale | Car Body Shop"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Bumper Repair Rochdale | Car Body Shop
                    </h1>
                </div>
            </section>

            <StatsBar />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">Bumper Repair in Rochdale</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>For expert bumper repair in Rochdale, Car Body Shop is the local specialist that drivers across Greater Manchester trust. Based in Whitworth, our professional body repair workshop handles all types of bumper damage — from light scuffs and paint scrapes through to deep cracks, splits, and impact dents. Whether your bumper has caught a kerb, been clipped in a car park, or taken a knock in low-speed traffic, our experienced technicians can restore it to a factory-fresh condition at a fraction of the cost of a full replacement.</p><p>Bumper damage is by far the most common type of vehicle bodywork repair we carry out. Furthermore, it is also one of the most straightforward to fix when handled by a skilled professional. At Car Body Shop, every bumper repair begins with a thorough assessment of the damage. We then carry out the necessary structural repairs, apply specialist plastic adhesive or body filler where required, and finish with a precisely colour-matched respray inside our enclosed spray booth. Consequently, the repaired bumper is virtually indistinguishable from a brand-new one — and considerably cheaper. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.</p>` }} />
                </div>
            </section>

            {/* General Blocks */}
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Affordable Bumper Scuff, Crack & Dent Repair in Rochdale — No Replacement Needed</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>One of the most common mistakes vehicle owners make after bumper damage is assuming the whole bumper needs to be replaced. In reality, the vast majority of bumper damage — including deep scuffs, hairline cracks, paint chips, and low-impact dents — can be repaired fully without the need for a costly replacement. At Car Body Shop, our technicians are skilled in both plastic bumper repair and painted bumper restoration, using specialist adhesives, flexible body filler, and automotive-grade paint systems to achieve a result that is every bit as strong and presentable as a new bumper. Additionally, repairing rather than replacing is significantly more cost-effective and environmentally responsible.</p><p>The repair process for a damaged bumper at Car Body Shop follows a consistent, quality-controlled sequence. First, we assess the full extent of the damage, checking for any underlying structural issues as well as surface-level scuffs and cracks. Next, we carry out the necessary plastic welding, bonding, or filler work to restore the bumper's shape and strength. The surface is then prepared, primed, and painted inside our enclosed spray booth using a colour mix matched precisely to your vehicle's manufacturer paint code. As a result, the finish is smooth, even, and perfectly matched to the surrounding bodywork. Moreover, the whole process is typically completed within a single working day for most standard bumper repairs.</p><p>Car Body Shop is proud to offer bumper repair services to customers across Rochdale and the wider Greater Manchester area, including Oldham, Bury, Heywood, Middleton, Manchester, and Bolton. In fact, many of our customers come to us after receiving quotes from main dealerships or national repair chains and are pleasantly surprised by how much more competitive our pricing is. We believe in honest, straightforward pricing — you will always receive a full, itemised quote before any work begins, and there are never any hidden charges added afterwards.</p>` }} />
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Why Choose Car Body Shop for Bumper Repair in Rochdale?</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop has been repairing bumpers for drivers across Rochdale and Greater Manchester for over ten years. Our workshop in Whitworth is fully equipped with everything required to carry out a high-quality bumper repair — from plastic welding equipment and specialist flexible primers through to a professional spray booth and computerised colour-matching technology. Therefore, when your bumper leaves our workshop, it looks and performs exactly as it should — repaired to last, not just to look good for a few weeks.</p><p>Speed matters when your car is in for repair. Consequently, we prioritise fast turnaround on all bumper jobs. Most standard bumper repairs — scuffs, minor cracks, and paint damage — are completed within one working day. More complex repairs involving significant splits or structural damage may take two days. Furthermore, for customers who are unable to bring their vehicle to our Rochdale workshop, we offer a collection and delivery service across the local area, including Oldham, Bury, Heywood, Middleton, Manchester, and Bolton, at no extra cost.</p><p>We are a premium but affordable alternative to main dealer repair pricing. Likewise, we are completely transparent about costs from the outset — no inflated quotes, no upselling, and no pressure to opt for a replacement when a repair is perfectly adequate. Simply send us photos of the bumper damage via WhatsApp or call us on 07471512557 and we will provide a free, accurate quote within the hour. Most customers are back on the road in no time, with a bumper that looks as good as new.</p>` }} />
                </div>
            </section>
            

            {/* Related Services Grid */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop provides a full range of vehicle bodywork and paint repair services from our workshop in Rochdale. Alongside bumper repair, we handle everything from full car resprays and accident damage restoration through to dent removal and lease return preparation — all carried out to an insurance-quality standard.</p>` }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Full Car Respray</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Complete vehicle resprays with full colour matching — ideal where bumper damage forms part of wider bodywork restoration. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">View our Full Car Respray service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Trade & Motor Dealer Bodyshop Services</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Priority bumper repair and bodywork services for motor traders, dealerships, and fleet operators across Greater Manchester. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Explore our Trade & Motor Dealer Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Accident & Collision Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Comprehensive accident repair covering all panels including bumpers damaged in collisions — restored to pre-accident condition. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">See our Accident & Collision Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Dent Removal</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Panel dents adjacent to bumper damage repaired using paintless and traditional techniques for a seamless result. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Discover our Dent Removal service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Car Scratch Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Deep or superficial scratches on bumpers and surrounding paintwork repaired with precision colour matching and lacquer. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Find out more about Car Scratch Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Lease Return Repairs</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bumper scuffs and damage repaired before your lease vehicle handover to help avoid costly end-of-contract penalty charges. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Read about our Lease Return Repairs in Rochdale.</a></p>` }} />
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
                                <h3 className="text-xl font-bold">Bumper Repair in Rochdale</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Our workshop is based in Whitworth, Rochdale, and we carry out bumper repairs for customers right across the borough. Same-day turnaround available for standard bumper scuffs and paint damage. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">Book your Bumper Repair in Rochdale today.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Bumper Repair in Oldham</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Oldham customers regularly visit Car Body Shop for fast, affordable bumper repair. Furthermore, our collection service means we can pick your vehicle up from your Oldham address at a time that suits you. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">Oldham customers can also explore our Accident & Collision Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Bumper Repair in Bury</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>We welcome bumper repair customers from Bury who are looking for honest pricing and a showroom-quality finish. Our collection and delivery service covers the Bury area at no additional charge. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">Bury customers can also view our Full Car Respray service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Bumper Repair in Heywood</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Heywood is just minutes from our Rochdale workshop, making Car Body Shop the ideal choice for bumper repair in the area. Fast turnaround and free no-obligation quotes available for Heywood customers. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Heywood customers can also enquire about Dent Removal.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Bumper Repair in Middleton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Middleton customers rely on Car Body Shop for quality bumper repairs at competitive prices. Motor traders in Middleton also benefit from our priority trade booking slots for bumper prep and paintwork. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Middleton traders can explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Bumper Repair in Manchester</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop serves bumper repair customers from across Manchester and Greater Manchester. Our Rochdale workshop offers significantly lower pricing than city-centre bodyshop rates, with no drop in quality. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Manchester customers can also view our Car Scratch Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Bumper Repair in Bolton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bolton customers are very welcome at Car Body Shop, and our collection and delivery service makes the entire process simple and stress-free. Call 07471512557 to arrange your bumper repair from Bolton. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Bolton customers can also view our Lease Return Repairs service.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions — Bumper Repair in Rochdale</h2>
                    <div className="space-y-4">
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does bumper repair cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>The cost of a bumper repair in Rochdale depends on the type and extent of the damage. Light scuffs and paint scrapes typically start from around £150 to £300. More significant damage involving cracks, splits, or deep dents may range from £300 to £600 depending on the work required. At Car Body Shop, we provide free, itemised quotes — simply send photos of your bumper via WhatsApp for an accurate price within the hour.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Is it worth repairing a bumper rather than replacing it?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>In most cases, yes — bumper repair is both more cost-effective and quicker than a full replacement. The vast majority of bumper damage, including scuffs, cracks, and paint chips, can be repaired to a high standard without the need to buy a new bumper. Car Body Shop assesses every job individually and only recommends replacement when the structural damage is too extensive for a repair to be appropriate.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does a bumper repair take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Most standard bumper repairs at Car Body Shop are completed within one working day. More complex repairs involving significant structural damage or multiple areas of paint damage may require two days. We always confirm the expected turnaround time when you book and keep you updated throughout the process so you are never left in the dark.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you colour-match my bumper to the rest of my car?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Car Body Shop uses computerised colour-matching technology and your vehicle's manufacturer paint code to mix the exact shade required for your bumper respray. The repaired bumper is painted inside our enclosed spray booth and finished with a high-gloss lacquer coat, ensuring a seamless match with the surrounding bodywork — even on older vehicles where the original paint has aged slightly.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you repair bumpers for lease vehicles in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Bumper damage is one of the most common issues flagged at lease vehicle inspections. Car Body Shop specialises in lease return repairs, including bumper scuffs, cracks, and paint damage, carried out to the standard required to pass a BVRLA fair wear and tear assessment. We serve lease customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton — with collection and delivery available.</p>` }} />
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

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">Book Your Bumper Repair at Car Body Shop Rochdale</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: `<p>Do not put up with a scuffed or cracked bumper any longer. Car Body Shop offers fast, affordable, and professional bumper repair in Rochdale with a same-day turnaround on most jobs. Get your free quote today.</p><p>📍 Car Body Shop | Whitworth, Rochdale, OL12 8HN<br>📞 Call / WhatsApp: 07471512557<br>📧 carbodyshopltd@gmail.com  |  🌐 www.carbodyshop.org</p>` }} />
                        
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
