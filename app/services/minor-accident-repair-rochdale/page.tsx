import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Minor Accident Repair Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Fast, affordable minor accident repair in Rochdale. Scuffs, dents & paint damage fixed to an insurance-quality finish. Call 07471512557 today.`,
    openGraph: {
        title: `Minor Accident Repair Rochdale | Car Body Shop`,
        description: `Fast, affordable minor accident repair in Rochdale. Scuffs, dents & paint damage fixed to an insurance-quality finish. Call 07471512557 today.`,
        url: `https://carbodyshop.org/services/minor-accident-repair-rochdale`,
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
                        alt="Minor Accident Repair Rochdale | Car Body Shop"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Minor Accident Repair Rochdale | Car Body Shop
                    </h1>
                </div>
            </section>

            <StatsBar />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">Minor Accident Repair in Rochdale</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>If your vehicle has been involved in a low-speed collision and you need professional minor accident repair in Rochdale, Car Body Shop is ready to help. Based in Whitworth, our fully equipped body repair workshop specialises in fixing the kind of everyday accident damage that most drivers encounter at some point — car park scrapes, reversing knocks, gate post clips, and minor road collisions. These incidents might seem small, but the resulting scuffs, dents, and paint damage can look unsightly and, if left untreated, can deteriorate further over time. Our experienced technicians restore your vehicle quickly and to an insurance-quality standard, without the need to make a claim.</p><p>Minor accident damage is the most common type of bodywork repair we carry out at Car Body Shop, and it is also one of the most cost-effective to address. Furthermore, acting quickly after an accident — however minor — prevents paint damage from developing into rust and stops small dents from worsening under normal driving conditions. Consequently, a prompt repair protects both the appearance and the long-term value of your vehicle. At Car Body Shop, every minor accident repair begins with a thorough, honest assessment of the damage, followed by a free, itemised quote before any work begins. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.</p>` }} />
                </div>
            </section>

            {/* General Blocks */}
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Fast & Affordable Minor Collision Repair Without the Insurance Hassle in Rochdale</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>One of the most important decisions you face after a minor accident is whether to go through your insurance or pay for the repair directly. In many cases, the cost of a minor accident repair at Car Body Shop is comparable to — or even lower than — the excess on your insurance policy. Moreover, making a claim for minor damage can affect your no-claims bonus and lead to increased premiums at your next renewal. For these reasons, a growing number of drivers in Rochdale, Oldham, Bury, and across Greater Manchester choose to pay directly for minor accident repairs rather than involve their insurer. At Car Body Shop, we make this process simple — a quick WhatsApp photo, a fast free quote, and a repair that is typically completed within one to two working days.</p><p>The types of minor accident damage we repair on a daily basis include bumper scuffs and cracks from low-speed rear or front impacts, door edge damage from car park collisions, wing and quarter panel dents from gate posts or bollards, paint scrapes from side-swipes in narrow roads, and scratches caused by contact with hedges, walls, or other vehicles. Additionally, we frequently repair damage caused by reversing incidents — one of the most common causes of minor vehicle bodywork damage in the UK. In every case, our technicians assess the full extent of the damage before beginning work, ensuring nothing is missed and the repair covers everything needed for a complete, lasting result.</p><p>All minor accident repairs at Car Body Shop are carried out to the same high standard as our full insurance repair work. As a result, every repaired panel is colour-matched using computerised technology, painted inside our enclosed spray booth, and finished with a professional lacquer coat for a result that is seamless, durable, and indistinguishable from the original factory finish. Likewise, our transparent pricing means there are never any unexpected charges — what we quote is what you pay. We are proud to be the trusted choice for minor accident repair across Rochdale and the wider Greater Manchester area.</p>` }} />
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Why Choose Car Body Shop for Minor Accident Repair in Rochdale?</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>At Car Body Shop, we understand that minor accident damage — even when it looks straightforward — needs to be handled properly to achieve a result that lasts. Our workshop in Whitworth, Rochdale, is fully equipped with professional panel repair tools, a computerised colour-matching system, and a dedicated spray booth, giving us everything we need to carry out any minor accident repair to an insurance-quality standard. Furthermore, with ten years of experience in automotive bodywork and paint repair, our technicians have seen and fixed every type of minor collision damage imaginable.</p><p>Fast turnaround is central to everything we do. Therefore, most minor accident repairs — including single-panel dents, bumper damage, and paint scrapes — are completed within one to two working days. Same-day repairs are available for minor cosmetic damage when pre-booked. Additionally, our collection and delivery service is available for customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton, so you do not need to be without your vehicle any longer than absolutely necessary.</p><p>We are a genuinely affordable alternative to main dealer accident repair pricing, and we are completely honest about costs from the outset. In fact, many customers tell us they were quoted two or three times more for the same repair elsewhere before finding Car Body Shop. There is no pressure, no upselling, and no hidden charges — just a straightforward, high-quality repair at a fair price. Send us photos of the damage via WhatsApp or call us on 07471512557 for a free quote back within the hour.</p>` }} />
                </div>
            </section>
            

            {/* Related Services Grid */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop offers a full range of vehicle bodywork and paint repair services from our Rochdale workshop. Whether you need a minor accident repair or a more comprehensive programme of bodywork restoration, our team has the skills and equipment to deliver a consistently high-quality result on every job.</p>` }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Full Car Respray</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Complete vehicle resprays for cars where minor accident damage forms part of a wider paint restoration requirement. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">View our Full Car Respray service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Trade & Motor Dealer Bodyshop Services</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Priority minor accident repair for motor traders, dealerships, and fleet operators across Greater Manchester. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Explore our Trade & Motor Dealer Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Accident & Collision Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>More extensive accident and collision repair covering multiple panels and structural bodywork damage — restored to pre-accident condition. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">See our Accident & Collision Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Bumper Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bumper scuffs, cracks, and dents from minor collisions repaired and colour-matched — often the first point of contact in a low-speed accident. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">See our Bumper Repair service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Dent Removal</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Panel dents caused by minor impacts removed using paintless and traditional techniques for a clean, seamless result. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Discover our Dent Removal service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Car Scratch Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Paint scratches and scuffs caused by minor accidents repaired with precision colour matching and a professional lacquer finish. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Find out more about Car Scratch Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Lease Return Repairs</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Minor accident damage repaired before your lease vehicle handover to help avoid costly end-of-contract penalty charges. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Read about our Lease Return Repairs in Rochdale.</a></p>` }} />
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
                                <h3 className="text-xl font-bold">Minor Accident Repair in Rochdale</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Our workshop is based in Whitworth, Rochdale, and we carry out minor accident repairs for customers right across the borough. Fast turnaround, honest pricing, and free quotes available every day. <a href="https://www.carbodyshop.org/blog/minor-accident-repair-rochdale">Book your Minor Accident Repair in Rochdale today.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Minor Accident Repair in Oldham</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Oldham customers trust Car Body Shop for fast, reliable minor accident repair. Furthermore, our collection service means we can pick your vehicle up from your Oldham address so you do not need to travel. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">Oldham customers can also explore our full Accident & Collision Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Minor Accident Repair in Bury</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bury customers choose Car Body Shop for minor accident repairs that are completed to a high standard at a genuinely competitive price. Collection and delivery available across the Bury area. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">Bury customers can also view our Bumper Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Minor Accident Repair in Heywood</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Heywood is just minutes from our Rochdale workshop, making Car Body Shop the most convenient choice for minor accident repair in the area. Same-day assessments and fast free quotes available. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Heywood customers can also view our Dent Removal service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Minor Accident Repair in Middleton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Middleton customers rely on Car Body Shop for prompt, professional minor accident repair at fair prices. Motor traders in Middleton also use our trade repair service for pre-sale damage restoration. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Middleton traders can explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Minor Accident Repair in Manchester</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>We serve minor accident repair customers from across Manchester and Greater Manchester. Our Rochdale workshop pricing is significantly lower than city-centre bodyshop rates, with no compromise on quality. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Manchester customers can also view our Car Scratch Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Minor Accident Repair in Bolton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bolton customers are very welcome at Car Body Shop, and our collection and delivery service removes all the hassle from arranging a minor accident repair. Call 07471512557 to get your free quote. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">Bolton customers can also view our Full Car Respray service.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions — Minor Accident Repair in Rochdale</h2>
                    <div className="space-y-4">
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does minor accident repair cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>The cost of minor accident repair in Rochdale depends on the type and extent of the damage — the panels affected, the depth of any paint damage, and whether any dent removal or structural repair is required. As a general guide, minor repairs involving a single panel typically start from around £150 to £400. At Car Body Shop, we provide free, accurate, itemised quotes — simply send photos of the damage via WhatsApp and we will have a price back to you within the hour.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Is it better to pay for minor accident repair directly or go through insurance?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>In many cases, paying directly is the more cost-effective option for minor accident damage. If the repair cost is similar to or lower than your insurance excess, there is no financial benefit to making a claim — and claiming can affect your no-claims bonus, leading to higher premiums at renewal. Car Body Shop provides honest, transparent quotes so you can make an informed comparison between the direct repair cost and the potential insurance route before deciding.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does minor accident repair take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Most minor accident repairs are completed within one to two working days at Car Body Shop. Single-panel repairs involving light paint damage or small dents are often finished within a day. More involved repairs covering multiple areas may take two days. We always confirm the expected turnaround when you book and provide updates throughout, so you always know when your vehicle will be ready.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you repair minor accident damage on a lease or finance vehicle?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Car Body Shop regularly carries out minor accident repairs on lease and finance vehicles, returning them to the condition required for handover at the end of the contract. Addressing minor accident damage before your scheduled return date is almost always more cost-effective than accepting the penalty charges applied by leasing companies. We serve lease and finance customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you offer collection and delivery for minor accident repairs in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Car Body Shop offers a collection and delivery service for minor accident repair customers throughout Rochdale and the surrounding Greater Manchester area. If you are unable to bring your vehicle to our workshop in Whitworth, simply get in touch and we will arrange to collect it at a convenient time, carry out the repair, and return it to you once the work is complete. Call 07471512557 or send a WhatsApp message to get started.</p>` }} />
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

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">Book Your Minor Accident Repair at Car Body Shop Rochdale</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: `<p>Do not let minor accident damage go untreated. Car Body Shop offers fast, professional minor accident repair in Rochdale with honest pricing and an insurance-quality finish on every job. Get your free, no-obligation quote today.</p><p>📍 Car Body Shop | Whitworth, Rochdale, OL12 8HN<br>📞 Call / WhatsApp: 07471512557<br>📧 carbodyshopltd@gmail.com  |  🌐 www.carbodyshop.org</p>` }} />
                        
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
