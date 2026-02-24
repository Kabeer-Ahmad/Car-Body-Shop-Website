import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: `Dent Removal Rochdale | Car Body Shop | ${BUSINESS_DETAILS.name}`,
    description: `Professional dent removal in Rochdale. Paintless & traditional techniques for all dent sizes. Fast turnaround. Call Car Body Shop: 07471512557.`,
    alternates: { canonical: 'https://carbodyshop.org/services/dent-removal-rochdale' },
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
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.1),transparent_50%)]"></div>
                </div>

                <div className="relative z-20 max-w-6xl mx-auto text-center px-4 md:px-8 py-16">
                    <div className="inline-block mb-6 px-6 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
                        <span className="text-blue-300 font-semibold text-sm tracking-wide">EXPERT DENT REMOVAL</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        Dent Removal
                        <span className="block text-blue-400 mt-2">Rochdale</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        Paintless & traditional techniques for all dent sizes. Fast turnaround and factory-finish results.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
                <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Dent Removal in Rochdale
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="prose prose-lg md:prose-xl mx-auto text-gray-700 leading-relaxed space-y-6">
                        <p className="text-xl leading-relaxed">
                            If your vehicle has picked up a dent and you are looking for professional dent removal in Rochdale, Car Body Shop is the local specialist with the skills and equipment to fix it properly. Based in Whitworth, our body repair workshop uses a combination of paintless dent repair (PDR) and traditional panel beating techniques to remove dents of all sizes — from minor door dings and car park knocks through to larger panel dents caused by low-speed impacts. In most cases, the repair is completed quickly, cleanly, and at a cost that is far lower than visiting a main dealer or national repair chain.
                        </p>
                        <p className="text-lg leading-relaxed">
                            A dent on your vehicle does more than affect its appearance. Furthermore, unrepaired dents can compromise the protective paint layer, allowing moisture to reach bare metal and accelerate rust formation over time. Therefore, addressing dent damage promptly is always the sensible choice — both for the long-term condition of the vehicle and for maintaining its resale value. At Car Body Shop, every dent removal job is assessed individually, and our technicians recommend the most appropriate and cost-effective repair method for the specific type and location of the damage. We serve customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Paintless Dent Repair</h3>
                            <p className="text-gray-600 leading-relaxed">Original paint preserved — faster, more affordable, and environmentally friendly.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Same-Day Service</h3>
                            <p className="text-gray-600 leading-relaxed">Most PDR repairs completed within hours. Traditional repairs within 1-2 days.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
                            <p className="text-gray-600 leading-relaxed">Significantly cheaper than main dealer pricing with the same quality results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Repair Process Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 md:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Paintless Dent Repair & Traditional Panel Beating
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-8"></div>
                    </div>
                    
                    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Not all dents are the same, and not all dents require the same repair method. At Car Body Shop, we use two primary approaches to dent removal — paintless dent repair (PDR) and traditional panel beating with paint restoration — and we choose the right technique based on the size, depth, and location of each individual dent. Paintless dent repair is ideal for smaller dents where the paint surface remains undamaged. Using specialist tools, our technicians carefully manipulate the metal back into its original shape from behind the panel, leaving the factory paintwork completely intact. As a result, PDR is faster, more affordable, and requires no painting whatsoever.
                        </p>

                        {/* Repair Methods Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-200 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900">Paintless Dent Repair (PDR)</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Best For:</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Small to medium dents</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>No paint damage</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>No cracked lacquer</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Benefits:</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Faster repair (hours not days)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Lower cost</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Original paint preserved</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pt-4 border-t border-blue-200">
                                        <p className="font-bold text-blue-700">Typical cost: £200–£500</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900">Traditional Dent Repair</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Needed When:</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Paint is damaged</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Panel is creased</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Metal is stretched</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Process Involves:</h4>
                                        <ul className="space-y-2 text-gray-600">
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Filling & sanding</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Repainting</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>Colour blending</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pt-4 border-t border-orange-200">
                                        <p className="font-bold text-orange-700">Typical cost: £400–£800</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            For larger or more complex dents — particularly those where the paint has cracked, split, or been scraped — traditional panel beating and paint restoration is the appropriate approach. In these cases, our technicians reshape the panel using professional body repair equipment, apply filler where necessary to achieve a perfectly smooth surface, and then prime, paint, and lacquer the repaired area inside our enclosed spray booth. Additionally, all paint colours are matched using computerised colour-matching technology linked to your vehicle's manufacturer paint code, ensuring a seamless, factory-quality result across the repaired panel.
                        </p>
                        
                        <p>
                            Car Body Shop is trusted by private customers and motor traders alike across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton for consistent, high-quality dent removal at fair prices. In fact, many customers come to us having been quoted significantly higher prices elsewhere, and are pleasantly surprised by how competitive our rates are without any compromise on the finish. Moreover, because we carry out all work from our own fully equipped workshop — rather than outsourcing to third parties — we are able to maintain full quality control throughout every repair.
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
                            Why Choose Car Body Shop for Dent Removal?
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="space-y-6 text-lg leading-relaxed text-gray-200">
                        <p>
                            Choosing the right repairer for dent removal matters. At Car Body Shop, we bring ten years of experience in panel repair and paintless dent removal to every job, working from a fully equipped body repair workshop in Whitworth, Rochdale. Our combination of traditional panel beating skills and modern PDR techniques allows us to handle dents of all sizes and complexities — from minor door dings through to larger panel dents caused by low-speed collisions.
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
                                        <p className="text-gray-300">Trusted expertise in dent removal and panel repair</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">PDR & Traditional Methods</h3>
                                        <p className="text-gray-300">We choose the best technique for your specific dent</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>
                            Fast turnaround is one of our most important commitments to dent removal customers. We understand that being without your vehicle causes real disruption to daily life. Therefore, we work efficiently to complete repairs as quickly as possible — most paintless dent repairs are finished within a few hours, while traditional dent repairs requiring paint are typically completed within one to two working days. Additionally, for customers who cannot easily get to our Rochdale workshop, we offer a convenient collection and delivery service across the local area, including Oldham, Bury, Heywood, Middleton, Manchester, and Bolton.
                        </p>
                        
                        <p>
                            We are honest, straightforward, and genuinely focused on getting your vehicle back to you in the best possible condition. Likewise, we are happy to talk you through the repair process in plain language, explain your options, and help you decide whether paintless dent repair or traditional panel repair is the right approach for your specific dent. There are no hidden charges and no surprises. Simply send us photos of the damage via WhatsApp or call us on 07471512557 for a free quote within the hour.
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
                            Car Body Shop offers a complete range of vehicle bodywork and paint repair services from our Rochdale workshop. Whether you need dent removal or general cosmetic repairs carried out, our team has the skills and equipment to deliver a flawless result on every job.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Accident & Collision Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Professional accident damage repair including dent removal, panel beating, and full resprays for collision-damaged vehicles.</p>
                            <Link href="/services/accident-collision-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Car Respray</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Complete resprays for vehicles requiring full colour restoration or a cosmetic transformation.</p>
                            <Link href="/services/full-car-respray-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
                            <p className="text-gray-600 mb-6 leading-relaxed">Bumper cracks, scuffs, and splits repaired and resprayed — often the cause of minor dents and panel damage.</p>
                            <Link href="/services/bumper-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Car Scratch Repair</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Deep paint scratches and scuffs repaired with precision colour matching and high-gloss lacquer.</p>
                            <Link href="/services/car-scratch-repair-rochdale" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trade & Motor Dealer Services</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">Priority dent removal and bodywork services for motor traders, dealerships, and fleet operators.</p>
                            <Link href="/services/trade-motor-dealer-bodyshop-services" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
                            <p className="text-gray-600 mb-6 leading-relaxed">Dent removal before your lease vehicle handover date to help you avoid costly end-of-contract penalty charges.</p>
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
                            Providing professional dent removal services across Greater Manchester
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
                            <p className="text-blue-50 leading-relaxed mb-4">Car Body Shop is based in Whitworth, Rochdale, and carries out dent removal for customers right across the borough — from the town centre to Littleborough, Milnrow, and beyond. Fast turnaround and free quotes available.</p></div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Oldham</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">We regularly carry out dent removal for customers travelling from Oldham. Furthermore, our collection service means we can pick your vehicle up directly from your Oldham address.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bury</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Bury customers trust Car Body Shop for honest, high-quality dent removal. Our pricing is transparent and our results consistently meet insurance-quality standards.</p></div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Heywood</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Heywood is just a short distance from our Rochdale workshop, making us the natural first choice for dent removal in the area. Same-day assessments available for Heywood customers.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Middleton</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Middleton customers rely on Car Body Shop for fast, professional dent removal. Motor traders in Middleton also benefit from our dedicated trade repair service.</p></div>

                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Manchester</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">We serve dent removal customers from across Manchester and Greater Manchester. Our Rochdale workshop is accessible and our pricing is substantially lower than city-centre repair rates.</p></div>
                        
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Bolton</h3>
                            </div>
                            <p className="text-blue-50 leading-relaxed mb-4">Bolton customers are welcome at Car Body Shop, and our collection and delivery service makes the process effortless regardless of the distance. Call 07471512557 to arrange your repair.</p></div>
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
                        <p className="text-xl text-gray-600">Everything you need to know about dent removal in Rochdale</p>
                    </div>
                    <div className="space-y-4">
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                What is paintless dent repair (PDR)?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Paintless dent repair is a technique that removes dents without the need for repainting. Using specialist tools, our technicians carefully manipulate the metal back into its original shape from behind the panel, leaving the factory paintwork completely intact. PDR is faster, more affordable, and environmentally friendly compared to traditional dent repair methods.</p>
                            </div>
                        </details>

                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Can all dents be repaired using paintless dent repair?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>No — paintless dent repair is only suitable for dents where the paint surface remains undamaged and the metal has not been creased or stretched. If the paint has cracked, split, or been scraped, or if the dent is particularly deep or complex, traditional panel beating and repainting is the appropriate approach. Our technicians assess every dent individually and recommend the most suitable repair method.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How long does dent removal take at Car Body Shop?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Most paintless dent repairs are completed within a few hours, often on the same day. Traditional dent repairs requiring paint are typically finished within one to two working days, depending on the extent of the damage and the number of panels affected. We always provide a realistic timeframe upfront and keep you updated throughout the repair process.</p>
                            </div>
                        </details>

                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                How much does dent removal cost in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Paintless dent repair typically costs between £200 and £500, depending on the size and location of the dent. Traditional dent repair with paint restoration typically costs between £400 and £800. The exact cost depends on the extent of the damage, the number of panels affected, and the repair method required. We always provide a free, itemised quote upfront so you know exactly what to expect.</p>
                            </div>
                        </details>
                        
                        <details className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg hover:border-blue-200">
                            <summary className="font-bold text-xl text-gray-900 group-open:text-blue-700 flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                                Do you offer dent removal collection and delivery in Rochdale?
                                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 group-open:text-blue-600 transition-all flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
                                <p>Yes. Car Body Shop offers a collection and delivery service for dent removal customers across Rochdale, Oldham, Bury, Heywood, Middleton, Manchester, and Bolton. If you are unable to drive your vehicle or prefer not to travel, simply get in touch to arrange a collection time. We will bring your vehicle to our workshop, carry out the repair, and return it to you once completed.</p>
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
                            Get Your Dent Removed Today
                        </h2>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Do not let dents sit unrepaired. Car Body Shop offers fast, professional dent removal in Rochdale with honest pricing and an insurance-quality finish. Get in touch today for your free, no-obligation quote.
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
                                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote%20for%20dent%20removal.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp Quote
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
