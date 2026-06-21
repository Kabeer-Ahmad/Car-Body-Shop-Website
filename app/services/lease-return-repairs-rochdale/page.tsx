import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Lease Return Repairs in Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Avoid end-of-lease penalty charges with professional lease return repairs in Rochdale. Fast turnaround & fair pricing. Call Car Body Shop: 07471512557.`,
    openGraph: {
        title: `Lease Return Repairs in Rochdale | Car Body Shop`,
        description: `Avoid end-of-lease penalty charges with professional lease return repairs in Rochdale. Fast turnaround & fair pricing. Call Car Body Shop: 07471512557.`,
        url: `https://carbodyshop.org/services/lease-return-repairs-rochdale`,
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
                        alt="Lease Return Repairs in Rochdale | Car Body Shop"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        priority
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Lease Return Repairs in Rochdale | Car Body Shop
                    </h1>
                </div>
            </section>

            <StatsBar />

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 border-b-4 border-blue-600 pb-4 inline-block">Our Services</h2>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-600 leading-relaxed font-medium prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop offers a comprehensive range of vehicle bodywork and paint repair services from our workshop in Rochdale. All of our services are available for lease return preparation, and our team is experienced in assessing and repairing exactly the type of damage that typically attracts penalty charges at the end of a lease contract.</p><h3>Full Car Respray</h3><p>Complete vehicle resprays for lease cars requiring full paint restoration — available where extensive surface damage or colour deterioration has occurred. <a href="https://www.carbodyshop.org/blog/full-car-respray-rochdale">View our Full Car Respray service in Rochdale.</a></p><h3>Trade & Motor Dealer Bodyshop Services</h3><p>Fleet and lease preparation services for motor traders, dealerships, and fleet operators managing multiple vehicle returns across Greater Manchester. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Explore our Trade & Motor Dealer Bodyshop Services.</a></p><h3>Accident & Collision Repair</h3><p>Accident damage on lease vehicles repaired to pre-accident condition before the scheduled return date — avoiding assessor charges. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">See our Accident & Collision Repair in Rochdale.</a></p><h3>Bumper Repair</h3><p>Bumper scuffs, cracks, and paint chips — among the most common lease return damage items — repaired and colour-matched within a day. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">See our Bumper Repair service in Rochdale.</a></p><h3>Dent Removal</h3><p>Panel dents and door dings on lease vehicles removed using paintless and traditional techniques ahead of your handover inspection. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Discover our Dent Removal service in Rochdale.</a></p><h3>Car Scratch Repair</h3><p>Scratches and paint marks on lease vehicles repaired with precision colour matching — essential for passing a BVRLA fair wear and tear inspection. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Find out more about Car Scratch Repair in Rochdale.</a></p><h3>Minor Accident Repair</h3><p>Minor collision damage repaired before lease return — a straightforward way to avoid disproportionate end-of-contract penalty charges. <a href="https://www.carbodyshop.org/blog/minor-accident-repair-rochdale">Read about our Minor Accident Repair in Rochdale.</a></p>` }} />
                </div>
            </section>

            {/* General Blocks */}
            
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">BVRLA Fair Wear & Tear Lease Return Preparation Across Rochdale & Greater Manchester</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>When a lease vehicle is returned at the end of a contract, it is assessed against the BVRLA (British Vehicle Rental and Leasing Association) fair wear and tear standard. This standard defines what condition a vehicle is reasonably expected to be in at the end of a lease, taking into account its age and mileage. Any damage that falls outside these guidelines — including notable scuffs, deep scratches, bumper cracks, and panel dents — is classified as chargeable damage, and the leasing company will apply repair costs accordingly. In fact, the rates charged by leasing company approved repairers are typically much higher than those of an independent bodyshop. Therefore, having the damage repaired at Car Body Shop before your return date is almost always the more sensible financial choice.</p><p>The types of damage most commonly flagged during lease vehicle inspections include bumper scuffs and chips from everyday parking, door edge scratches from car parks, minor dents from low-speed impacts, tyre kerbing marks, and small paint chips on bonnets and side panels. Additionally, interior scuffs on door trims and seat bolsters are frequently charged, though these fall outside our bodywork services. At Car Body Shop, we focus on all external bodywork and paint damage, and our technicians are experienced in identifying and repairing precisely the items that assessors look for. Moreover, because we work to the BVRLA standard on every lease return job, you can be confident that the repairs we carry out will meet the required inspection criteria.</p><p>Car Body Shop is trusted by private lease customers and fleet managers alike across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton for reliable, affordable lease return preparation. Likewise, for fleet operators managing multiple vehicle returns, we offer flexible scheduling and competitive trade pricing to ensure all vehicles are prepared on time and to the required standard. Whether you are returning one vehicle or an entire fleet, our team is ready to help. Simply send us photos of the damage via WhatsApp or call us on 07471512557 for a free, itemised quote within the hour.</p>` }} />
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-6">Why Choose Car Body Shop for Lease Return Repairs in Rochdale?</h2>
                    <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed prose-p:mb-6" dangerouslySetInnerHTML={{ __html: `<p>Car Body Shop has helped hundreds of lease customers across Greater Manchester avoid unnecessary end-of-contract charges by carrying out professional, targeted repairs before the vehicle is collected. Our workshop in Whitworth, Rochdale, is fully equipped to handle all types of lease return damage — from light paint correction and scratch removal through to bumper repairs, dent removal, and panel resprays. Furthermore, our ten years of experience in automotive bodywork means our technicians know exactly what level of repair is required to meet BVRLA fair wear and tear standards, and they work accordingly.</p><p>Fast turnaround is particularly important for lease return repairs, as customers often leave it until relatively close to their handover date. Therefore, we prioritise lease return jobs and aim to complete all work within one to three working days depending on the scope of repairs required. Additionally, our collection and delivery service is available for lease return customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton, making the whole process as straightforward and stress-free as possible even if your return date is approaching quickly.</p><p>Our pricing for lease return repairs is transparent, competitive, and always communicated upfront. In fact, the cost of having damage repaired at Car Body Shop before your return is routinely lower than the penalty charges you would face if the damage were left for the leasing company's assessor to price. There are no hidden fees, no inflated estimates, and no surprises. Consequently, booking a lease return repair with us is a straightforward decision that almost always saves you money. Call us on 07471512557 or message us on WhatsApp to get started with a free quote today.</p>` }} />
                </div>
            </section>
            

            {/* Related Services Grid */}
            

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
                                <h3 className="text-xl font-bold">Lease Return Repairs in Rochdale</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Our workshop is based in Whitworth, Rochdale, and we prepare lease vehicles for return for customers right across the borough. Fast turnaround, BVRLA-standard repairs, and free quotes available. <a href="https://www.carbodyshop.org/blog/lease-return-repairs-rochdale">Book your Lease Return Repair in Rochdale today.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Lease Return Repairs in Oldham</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Oldham lease customers trust Car Body Shop to prepare their vehicles for return quickly and at a fair price. Furthermore, our collection service means we can pick your vehicle up directly from your Oldham address. <a href="https://www.carbodyshop.org/blog/car-scratch-repair-rochdale">Oldham customers can also explore our Car Scratch Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Lease Return Repairs in Bury</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bury customers choose Car Body Shop for reliable, affordable lease return preparation. We cover all common lease damage items and our collection and delivery service covers the Bury area at no extra charge. <a href="https://www.carbodyshop.org/blog/bumper-repair-rochdale">Bury customers can also view our Bumper Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Lease Return Repairs in Heywood</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Heywood is just a short drive from our Rochdale workshop, making us the natural first choice for lease return repairs in the area. Same-day assessments available and fast free quotes provided. <a href="https://www.carbodyshop.org/blog/dent-removal-rochdale">Heywood customers can also view our Dent Removal service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Lease Return Repairs in Middleton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Middleton lease and fleet customers rely on Car Body Shop for prompt, professional lease return preparation. We also offer fleet pricing for businesses managing multiple vehicle returns from Middleton. <a href="https://www.carbodyshop.org/blog/trade-bodyshop-services">Middleton fleet operators can explore our Trade Bodyshop Services.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Lease Return Repairs in Manchester</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>We serve lease return repair customers from across Manchester and Greater Manchester. Our Rochdale workshop pricing is significantly lower than city-centre bodyshop rates, with no compromise on repair quality. <a href="https://www.carbodyshop.org/blog/minor-accident-repair-rochdale">Manchester customers can also view our Minor Accident Repair service.</a></p>` }} />
                        </div>
                        
                        <div className="bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/50 hover:bg-blue-700 transition-colors shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <svg className="w-6 h-6 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <h3 className="text-xl font-bold">Lease Return Repairs in Bolton</h3>
                            </div>
                            <div className="prose prose-sm prose-invert text-blue-50 font-light" dangerouslySetInnerHTML={{ __html: `<p>Bolton lease customers are very welcome at Car Body Shop, and our collection and delivery service makes the process effortless regardless of your location. Call 07471512557 to arrange your repair today. <a href="https://www.carbodyshop.org/blog/accident-collision-repair-rochdale">Bolton customers can also view our Accident & Collision Repair service.</a></p>` }} />
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions &mdash; Lease Return Repairs in Rochdale</h2>
                    <div className="space-y-4">
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much do lease return repairs cost at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>The cost of lease return repairs at Car Body Shop depends on the number and type of damage items that need to be addressed. Individual repairs such as a bumper scuff or a minor scratch typically start from around £80 to £300. Multiple repairs carried out in a single visit are often more cost-effective. In every case, we provide a free, itemised quote before any work begins — simply send photos of the damage via WhatsApp and we will have a price back to you within the hour.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Is it cheaper to repair lease damage myself or let the leasing company charge me?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>In the vast majority of cases, repairing damage independently before your lease return is significantly cheaper than accepting the charges applied by a leasing company. Leasing company approved repairers charge premium rates, and admin fees are often added on top. Having the work carried out at Car Body Shop beforehand typically costs a fraction of what you would be charged at collection. We provide honest, transparent pricing so you can make a direct comparison before deciding.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                What types of damage are charged on lease vehicle returns?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Damage charged on lease vehicle returns typically includes bumper scuffs and cracks, panel dents and scratches, deep paint chips on bonnets and doors, tyre kerbing damage, broken or cracked mirrors, and wheel damage. The BVRLA fair wear and tear standard defines acceptable levels of minor surface marks based on the vehicle's age and mileage, and anything beyond these guidelines is classified as chargeable damage. Car Body Shop repairs all of these common damage types to the standard required for a clean handover.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How far in advance should I book lease return repairs?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>We recommend booking your lease return repairs at least one to two weeks before your scheduled handover date. This gives us sufficient time to assess the damage, carry out all necessary repairs, and return the vehicle to you with time to spare. However, if your return date is imminent, contact us as soon as possible — we will always do our best to accommodate urgent lease return repairs, and our collection and delivery service can help speed up the process.</p>` }} />
                        </details>
                        
                        <details className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer transition-all hover:shadow-md hover:border-blue-200">
                            <summary className="font-bold text-lg md:text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you carry out lease return repairs for fleet vehicles in Greater Manchester?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </summary>
                            <div className="mt-4 text-gray-600 prose prose-lg" dangerouslySetInnerHTML={{ __html: `<p>Yes. Car Body Shop carries out lease return repairs for fleet vehicles and company cars across Greater Manchester, including Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton. We offer flexible scheduling and competitive fleet pricing for businesses managing multiple vehicle returns. Additionally, our collection and delivery service means fleet managers can send vehicles directly to our Rochdale workshop without disrupting daily operations. Call 07471512557 to discuss your fleet requirements.</p>` }} />
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

                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">Book Your Lease Return Repair at Car Body Shop Rochdale</h2>
                        <div className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto relative z-10 font-light" dangerouslySetInnerHTML={{ __html: `<p>Do not hand your lease vehicle back with damage and face an inflated penalty charge. Car Body Shop offers fast, professional lease return repairs in Rochdale at a price that will almost certainly save you money. Get your free, no-obligation quote today.</p><p>📍 Car Body Shop | Whitworth, Rochdale, OL12 8HN<br>📞 Call / WhatsApp: 07471512557<br>📧 carbodyshopltd@gmail.com  |  🌐 www.carbodyshop.org</p>` }} />
                        
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
