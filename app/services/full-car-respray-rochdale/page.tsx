import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Full Car Respray in Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Looking for a full car respray in Rochdale? Car Body Shop delivers expert colour matching & a flawless finish. Call 07471512557 for a free quote.`,
    openGraph: {
        title: `Full Car Respray in Rochdale | Car Body Shop`,
        description: `Looking for a full car respray in Rochdale? Car Body Shop delivers expert colour matching & a flawless finish. Call 07471512557 for a free quote.`,
        url: `https://carbodyshop.org/services/full-car-respray-rochdale`,
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
                        alt="Full Car Respray in Rochdale | Car Body Shop"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Full Car Respray in Rochdale | Car Body Shop
                    </h1>
                </div>
            </section>

            <StatsBar />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">Full Car Respray in Rochdale</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>If you are searching for a full car respray in Rochdale, Car Body Shop is the local specialist you can trust. Based in Whitworth, our professional body repair workshop delivers flawless paintwork for all makes and models — from everyday hatchbacks and family saloons through to prestige vehicles and commercial vans. Whether your car has suffered accident damage, heavy surface corrosion, or you simply want a brand-new colour, our team provides a factory-quality finish at a price that is fair and transparent.</p><p>A full car respray is one of the most effective investments you can make in your vehicle. Furthermore, a properly applied paint system provides lasting protection against rust, UV fading, and general wear. At Car Body Shop, we use industry-grade primer, basecoat, and lacquer — matched precisely to your manufacturer colour code — and complete all paintwork inside an enclosed spray booth to guarantee a smooth, dust-free result. Consequently, the finish is not only visually impressive but also highly durable. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton, making us the go-to choice for car respray across Greater Manchester.</p>` }} />
                </div>
            </section>

            {/* General Blocks */}
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Expert Car Respray &amp; Bodywork Restoration in Rochdale, Greater Manchester</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Choosing the right body repair workshop for a full car respray is important. The difference between a budget job and a professional finish comes down to preparation, materials, and environment. At Car Body Shop, all paintwork is carried out inside our fully enclosed spray booth — a controlled environment that eliminates contamination from dust, insects, and moisture. As a result, you get a consistent, glass-smooth finish that simply cannot be replicated in an open workspace.</p><p>Our technicians are experienced in working with all automotive paint systems, including water-based and solvent-based paints, metallic and pearl finishes, and specialist colours for prestige vehicles. Additionally, we use computerised colour-matching software to ensure the exact manufacturer shade is reproduced — even on older vehicles where the original paint has faded slightly. Every respray is finished with a high-build lacquer to provide long-term protection and a deep, showroom-quality shine.</p><p>Car Body Shop has earned a strong reputation across Rochdale and Greater Manchester for honest pricing, fast turnaround, and consistently high-quality results. In fact, the majority of our new customers come through word-of-mouth recommendation from existing clients — which tells you everything you need to know about the standard of our work. Whether you are a private individual, a motor trader, or a fleet operator, we treat every vehicle with the same level of care and attention.</p>` }} />
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Why Choose Car Body Shop in Rochdale?</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop offers something that larger national chains simply cannot match — a personal, workshop-based service where your vehicle is looked after by the same experienced technician from start to finish. We have ten years of hands-on experience in automotive refinishing, and every job is backed by our commitment to quality. Therefore, when your vehicle leaves our workshop, it leaves looking exactly as it should.</p><p>Fast turnaround is central to what we do. Most full car resprays are completed within two to five working days, and minor jobs can often be turned around even faster. Moreover, we offer a convenient collection and delivery service for customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton — so you do not need to disrupt your schedule to benefit from our service.</p><p>We are proud to be a premium but affordable alternative to main dealer bodyshops. Our pricing is honest, our estimates are itemised, and there are never any hidden charges. Likewise, we are happy to provide free advice on the most cost-effective approach for your specific repair before you commit to anything. Simply call us on 07471512557 or send photos of your vehicle via WhatsApp for a no-obligation quote within the hour.</p>` }} />
                </div>
            </section>
            

            {/* Related Services Grid */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: `<p>Alongside our full car respray service, Car Body Shop offers a complete range of vehicle bodywork and paint solutions from our workshop in Rochdale. Each of the following services is available as a standalone booking, and our team is happy to combine work where needed to save you time and money.</p>` }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Trade &amp; Motor Dealer Bodyshop Services</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Priority bodyshop services for motor traders, dealers, and fleet operators across Greater Manchester. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Accident &amp; Collision Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Professional accident repair restoring your vehicle to its pre-accident condition — no insurance hassle required. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">View our Accident &amp; Collision Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Bumper Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Scuffs, cracks, and splits on all bumper types repaired and resprayed to a factory finish. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">See our Bumper Repair service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Dent Removal</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Traditional and paintless dent removal techniques for all sizes of dent, often without disturbing existing paintwork. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Discover Dent Removal in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Car Scratch Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Deep or superficial scratch removal with precise colour matching and high-gloss lacquer for a seamless blend. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Find out more about Car Scratch Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Lease Return Repairs</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Scuffs, dents, and scratches repaired before your handover date to help you avoid costly end-of-lease penalty charges. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Read about our Lease Return Repairs in Rochdale.</a></p>` }} />
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
                                <h3 className="text-xl font-bold">Full Car Respray in Rochdale</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Our workshop is based in Whitworth, making us ideally placed to serve the whole of the Rochdale borough. From the town centre through to Littleborough, Milnrow, and Heywood, we are your local car respray specialists. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">Book your Full Car Respray in Rochdale today.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Full Car Respray in Oldham</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Oldham customers regularly travel to our Rochdale workshop for a full respray and bodywork restoration. Additionally, our collection service means you do not even need to make the journey yourself. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">Oldham customers can also explore our Accident Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Full Car Respray in Bury</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>We welcome customers from Bury looking for a professional car respray at a fair price. Furthermore, our collection and delivery service covers the Bury area at no extra charge. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Bury residents can also view our Dent Removal</a> and <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">Bumper Repair services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Full Car Respray in Heywood</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Heywood is just a short drive from our workshop, making us the natural first choice for car resprays in the area. Same-day quotes available for Heywood customers. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Heywood customers can also enquire about Lease Return Repairs.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Full Car Respray in Middleton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Middleton customers are well within our service area. Motor traders in Middleton also benefit from our dedicated trade bodyshop service and priority booking slots. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Middleton traders can explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Full Car Respray in Manchester</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>We serve customers from across Manchester and Greater Manchester. Our pricing is consistently lower than city-centre bodyshop rates — with no compromise on quality. Manchester customers can book a <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">Full Car Respray</a> or <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Scratch Repair here.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Full Car Respray in Bolton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bolton customers are welcome at Car Body Shop, and our collection and delivery service makes the process effortless. Call 07471512557 to arrange a booking from Bolton. <a href="https://www.carbodyshop.org/blog/minor-accident-repair-rochdale">Bolton residents can also view our Minor Accident Repair service.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions — Full Car Respray in Rochdale</h2>
                    <div className="space-y-4">
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does a full car respray cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>The cost of a full car respray in Rochdale depends on the size of the vehicle, the condition of the existing paintwork, and the preparation work required. As a general guide, prices typically start from around £800 for a standard-sized car. At Car Body Shop, we provide free, itemised quotes — send us photos on WhatsApp for an accurate price within the hour.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does a full car respray take?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Most full car resprays at Car Body Shop are completed within two to five working days. The exact timescale depends on the amount of surface preparation needed and the number of panels being resprayed. We always provide a realistic timeframe upfront and keep you updated throughout the process.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do I need to go through my insurance for a car respray?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>No — you are not required to use your insurance. Many customers prefer to pay directly, particularly where the damage is cosmetic or where they want to avoid any impact on their no-claims bonus. Car Body Shop offers straightforward cash pricing with no hidden fees, making it easy to assess whether a direct payment makes more sense than an insurance claim.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you match my car's original paint colour exactly?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. We use computerised colour-matching technology and your vehicle's manufacturer paint code to mix the precise factory shade. Even on older vehicles where the original colour has faded, our technicians blend and feather the paint edges to ensure a consistent, seamless finish across all panels.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you offer car respray services near Oldham and Bury?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Car Body Shop serves customers across the wider Greater Manchester area, including Oldham, Bury, Heywood, Middleton, Manchester, and Bolton. We also offer a collection and delivery service, so customers in these areas can benefit from our full car respray service without needing to travel to our Rochdale workshop.</p>` }} />
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

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">Get a Free Quote for Your Full Car Respray in Rochdale</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: `<p>Ready to restore your vehicle's finish? Call or WhatsApp Car Body Shop today for a fast, free, no-obligation quote. We are based in Whitworth, Rochdale, and serve customers across Greater Manchester.</p><p>📍 Car Body Shop | Whitworth, Rochdale, OL12 8HN<br>📞 Call / WhatsApp: 07471512557<br>📧 carbodyshopltd@gmail.com  |  🌐 www.carbodyshop.org</p>` }} />
                        
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
