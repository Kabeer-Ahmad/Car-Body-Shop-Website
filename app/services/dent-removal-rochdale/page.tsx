import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Dent Removal Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Professional dent removal in Rochdale. Paintless & traditional techniques for all dent sizes. Fast turnaround. Call Car Body Shop: 07471512557.`,
    openGraph: {
        title: `Dent Removal Rochdale | Car Body Shop`,
        description: `Professional dent removal in Rochdale. Paintless & traditional techniques for all dent sizes. Fast turnaround. Call Car Body Shop: 07471512557.`,
        url: `https://carbodyshop.org/services/dent-removal-rochdale`,
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
                        alt="Dent Removal Rochdale | Car Body Shop"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Dent Removal Rochdale | Car Body Shop
                    </h1>
                </div>
            </section>

            <StatsBar />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">Dent Removal in Rochdale</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>If your vehicle has picked up a dent and you are looking for professional dent removal in Rochdale, Car Body Shop is the local specialist with the skills and equipment to fix it properly. Based in Whitworth, our body repair workshop uses a combination of paintless dent repair (PDR) and traditional panel beating techniques to remove dents of all sizes — from minor door dings and car park knocks through to larger panel dents caused by low-speed impacts. In most cases, the repair is completed quickly, cleanly, and at a cost that is far lower than visiting a main dealer or national repair chain.</p><p>A dent on your vehicle does more than affect its appearance. Furthermore, unrepaired dents can compromise the protective paint layer, allowing moisture to reach bare metal and accelerate rust formation over time. Therefore, addressing dent damage promptly is always the sensible choice — both for the long-term condition of the vehicle and for maintaining its resale value. At Car Body Shop, every dent removal job is assessed individually, and our technicians recommend the most appropriate and cost-effective repair method for the specific type and location of the damage. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.</p>` }} />
                </div>
            </section>

            {/* General Blocks */}
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Paintless Dent Repair & Traditional Panel Beating in Rochdale, Greater Manchester</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Not all dents are the same, and not all dents require the same repair method. At Car Body Shop, we use two primary approaches to dent removal — paintless dent repair (PDR) and traditional panel beating with paint restoration — and we choose the right technique based on the size, depth, and location of each individual dent. Paintless dent repair is ideal for smaller dents where the paint surface remains undamaged. Using specialist tools, our technicians carefully manipulate the metal back into its original shape from behind the panel, leaving the factory paintwork completely intact. As a result, PDR is faster, more affordable, and requires no painting whatsoever.</p><p>For larger or more complex dents — particularly those where the paint has cracked, split, or been scraped — traditional panel beating and paint restoration is the appropriate approach. In these cases, our technicians reshape the panel using professional body repair equipment, apply filler where necessary to achieve a perfectly smooth surface, and then prime, paint, and lacquer the repaired area inside our enclosed spray booth. Additionally, all paint colours are matched using computerised colour-matching technology linked to your vehicle's manufacturer paint code, ensuring a seamless, factory-quality result across the repaired panel.</p><p>Car Body Shop is trusted by private customers and motor traders alike across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton for consistent, high-quality dent removal at fair prices. In fact, many customers come to us having been quoted significantly higher prices elsewhere, and are pleasantly surprised by how competitive our rates are without any compromise on the finish. Moreover, because we carry out all work from our own fully equipped workshop — rather than outsourcing to third parties — we are able to maintain full quality control throughout every repair.</p>` }} />
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Why Choose Car Body Shop for Dent Removal in Rochdale?</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop has been removing dents for drivers across Rochdale and Greater Manchester for over ten years. Our workshop in Whitworth is equipped with the full range of tools required for both paintless dent repair and traditional panel restoration — meaning we can handle any dent, on any panel, on any vehicle type. Furthermore, because our technicians are experienced in both methods, they are well-placed to recommend the most efficient and cost-effective approach for your specific repair rather than defaulting to the most expensive option.</p><p>Turnaround time is a priority for every job we take on. Most small to medium dents repaired using the PDR method can be completed within a few hours or on the same day. Traditional panel repairs involving paint restoration are typically completed within one to two working days. Consequently, you will not be left without your vehicle for any longer than is absolutely necessary. Additionally, our collection and delivery service is available for customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton — so you can arrange a repair without even needing to visit our workshop.</p><p>Likewise, our pricing is always transparent. Every customer receives a free, itemised quote before any work begins, and we never add unexpected charges once the job is underway. Whether you need a single door ding removed or multiple panel dents repaired ahead of a lease return or vehicle sale, Car Body Shop delivers a result you will be satisfied with. Send us photos of the dent via WhatsApp or call us on 07471512557 for a free quote within the hour.</p>` }} />
                </div>
            </section>
            

            {/* Related Services Grid */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
                        <div className="prose prose-lg prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: `<p>Alongside dent removal, Car Body Shop offers a comprehensive range of vehicle bodywork and paint repair services from our professional workshop in Rochdale. Whether your vehicle needs a single dent removed or a more extensive programme of bodywork repairs, our team is ready to help.</p>` }} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Full Car Respray</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Complete vehicle resprays for cars requiring full paint restoration — ideal where dent repairs are part of a wider bodywork overhaul. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">View our Full Car Respray service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Trade & Motor Dealer Bodyshop Services</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Priority dent removal and bodywork preparation for motor traders, dealerships, and fleet operators across Greater Manchester. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Explore our Trade & Motor Dealer Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Accident & Collision Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Comprehensive accident repair covering panel dents, structural damage, and paint restoration — returning vehicles to pre-accident condition. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">See our Accident & Collision Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Bumper Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bumper dents, scuffs, and cracks repaired and colour-matched — often completed within a single working day. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">See our Bumper Repair service in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Car Scratch Repair</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Scratches and paint damage around dented areas repaired with precision colour matching and high-gloss lacquer finish. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Find out more about Car Scratch Repair in Rochdale.</a></p>` }} />
                        </div>
                        
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Lease Return Repairs</h3>
                            <div className="prose prose-blue prose-invert text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: `<p>Dents and panel damage repaired before your lease vehicle handover to help you avoid costly end-of-contract penalty charges. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Read about our Lease Return Repairs in Rochdale.</a></p>` }} />
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
                                <h3 className="text-xl font-bold">Dent Removal in Rochdale</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Our workshop is based in Whitworth, Rochdale, and we carry out dent removal for customers right across the borough — from the town centre to Milnrow, Littleborough, and beyond. Same-day PDR available for qualifying dents. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Book your Dent Removal in Rochdale today.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Dent Removal in Oldham</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Oldham customers regularly visit Car Body Shop for fast, professional dent removal. Furthermore, our collection service means we can come to you directly rather than you having to make the trip to our Rochdale workshop. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">Oldham customers can also explore our Accident & Collision Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Dent Removal in Bury</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>We welcome dent removal customers from Bury who need a reliable, fairly priced repair. Our collection and delivery service covers the Bury area, and most dent repairs are turned around within one to two days. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">Bury customers can also view our Bumper Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Dent Removal in Heywood</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Heywood is a short drive from our Rochdale workshop, making us the natural first choice for dent removal in the area. Free quotes available, and same-day PDR appointments can often be accommodated for Heywood customers. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">Heywood customers can also view our Full Car Respray service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Dent Removal in Middleton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Middleton customers trust Car Body Shop for clean, efficient dent removal at competitive prices. Additionally, motor traders in Middleton use our service regularly for pre-sale panel preparation. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Middleton traders can explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Dent Removal in Manchester</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop serves dent removal customers from across Manchester and Greater Manchester. Our pricing is consistently lower than city-centre bodyshop rates — with no reduction in quality or finish. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Manchester customers can also view our Car Scratch Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Dent Removal in Bolton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bolton customers are welcome at Car Body Shop, and our collection and delivery service makes booking a dent repair straightforward regardless of where you are based. Call 07471512557 to get started. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Bolton customers can also view our Lease Return Repairs service.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions — Dent Removal in Rochdale</h2>
                    <div className="space-y-4">
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does dent removal cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>The cost of dent removal in Rochdale depends on the size, depth, and location of the dent, as well as the repair method required. Small door dings and minor dents repaired using the PDR method typically start from around £80 to £150. Larger dents requiring traditional panel repair and paint restoration may range from £200 to £500 or more. At Car Body Shop, we provide free, accurate quotes — simply send photos of the dent via WhatsApp for a price within the hour.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                What is paintless dent repair (PDR) and is it suitable for my car?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Paintless dent repair is a technique that removes dents by carefully massaging the metal back into its original shape from behind the panel, without disturbing the existing paintwork. It is ideal for small to medium dents where the paint surface is fully intact — such as door dings, hail damage, and minor car park knocks. PDR is not suitable for dents where the paint has cracked or where the metal has been stretched significantly. Our technicians will assess your dent and advise on the most appropriate method.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does dent removal take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Paintless dent repair is typically completed within a few hours or on the same day, depending on the size and number of dents being treated. Traditional panel repair and paint restoration usually takes one to two working days. We always confirm the expected turnaround when you book and provide updates throughout the process so you always know when your vehicle will be ready.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Will dent removal affect my car's paintwork?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>If your dent is repaired using the PDR method, there is no impact on your existing paintwork whatsoever — the factory finish is left completely undisturbed. For dents that require traditional panel repair and repainting, our technicians use computerised colour matching and blend the paint carefully into the surrounding panels, achieving a seamless result that is virtually impossible to distinguish from the original factory finish.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can you remove dents from lease vehicles before return?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Dent removal is one of the most commonly requested lease return repairs at Car Body Shop. We repair panel dents and door dings to the standard required to pass a BVRLA fair wear and tear inspection, helping you avoid penalty charges at the end of your lease contract. We serve lease return customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton, with collection and delivery available throughout the area.</p>` }} />
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

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">Book Your Dent Removal at Car Body Shop Rochdale</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: `<p>Do not let a dent drag down the appearance and value of your vehicle. Car Body Shop offers fast, professional dent removal in Rochdale using the best techniques for your specific repair. Get your free, no-obligation quote today.</p><p>📍 Car Body Shop | Whitworth, Rochdale, OL12 8HN<br>📞 Call / WhatsApp: 07471512557<br>📧 carbodyshopltd@gmail.com  |  🌐 www.carbodyshop.org</p>` }} />
                        
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
