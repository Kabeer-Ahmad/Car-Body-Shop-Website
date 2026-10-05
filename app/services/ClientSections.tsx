'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reviews from '@/components/Reviews';
import { motion } from 'framer-motion';
import { BUSINESS_DETAILS } from '@/app/constants';
import { BookingForm } from '@/components/Hero';

// Export Reviews so we don't need a separate wrapper if we don't want to change it
export { Reviews as HubReviews };

export function HubHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-gray-900">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg" // High quality background
                    alt="Car body repair services in Rochdale"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT: Headline + CTAs + Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-semibold text-sm mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            Expert Auto Body Shop in Rochdale
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            Car Body Repair Services in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Rochdale</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed font-medium">
                            Every car bodywork service under one roof. Cash prices, no insurance needed, 1-4 day turnaround. Serving Rochdale, Oldham, Bury and Greater Manchester.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </a>
                            <Link
                                href="#services"
                                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-lg backdrop-blur-sm transition-all border border-white/20 hover:border-white/40 text-center flex items-center justify-center"
                            >
                                View Our Services
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                ['5.0', 'Star Rating'],
                                ['1-4 Day', 'Turnaround'],
                                ['Cash', 'Prices'],
                                ['Free', 'Quote'],
                            ].map(([val, label]) => (
                                <div key={label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col justify-center items-center text-center">
                                    <p className="text-xl md:text-2xl font-black text-white mb-1">{val}</p>
                                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 md:p-8 shadow-2xl">
                            <div className="mb-5">
                                <h2 className="text-2xl font-extrabold text-white mb-1">Book Your Appointment</h2>
                                <p className="text-gray-300 text-sm">Free estimate, no obligation. We&apos;ll confirm within the hour.</p>
                            </div>
                            <BookingForm whatsapp={BUSINESS_DETAILS.whatsapp} />
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Curved bottom separator */}
            <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden z-20">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-gray-50 drop-shadow-sm">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.74,189.36,109.74,233.19,102.26,278.49,81.42,321.39,56.44Z" fill="currentColor"></path>
                </svg>
            </div>
        </section>
    );
}



export function HubFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: 'Can you repair my car without going through insurance?', a: 'Yes. Most of our customers prefer to pay cash to avoid losing their no-claims bonus and paying high excesses. Our cash prices are often lower than your insurance excess.' },
        { q: 'How long does a typical repair take?', a: 'Most repairs, including bumper scuffs, dents, and scratches, take 1 to 3 days. Full resprays and heavy accident damage can take 1 to 2 weeks depending on parts.' },
        { q: 'Do you offer a courtesy car?', a: 'We do not currently offer courtesy cars. However, we provide a free collection and delivery service across Greater Manchester so you are not left stranded.' },
        { q: 'Do you guarantee your paintwork?', a: 'Yes, all our paintwork and repairs come with a standard bodyshop guarantee. We use a professional enclosed spray booth and computerised colour matching.' },
        { q: 'Can you match my cars exact paint colour?', a: 'Yes. We use a computerised spectrophotometer to scan your cars current paint, ensuring a perfect match even if the paint has naturally faded over time.' },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Car Body Repair FAQs</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === i ? 'border-blue-500 shadow-md ring-1 ring-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-bold text-gray-900 text-lg pr-8">{faq.q}</span>
                                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function HubContactForm({ whatsapp }: { whatsapp: string }) {
    const [type, setType] = useState('Scuff / Scratch');
    const services = ['Scuff / Scratch', 'Dent Repair', 'Bumper Repair', 'Accident Damage', 'Full Respray', 'Other'];
    return (
        <form className="space-y-5" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);
            const text = `Hi, I need a quote for ${data.service}. Name: ${data.name}. Details: ${data.details}`;
            window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
        }}>
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="John Doe" />
            </div>
            
            <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300">Service Needed</label>
                <select id="service" name="service" value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none">
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="details" className="block text-sm font-medium text-gray-300">Vehicle Details & Damage</label>
                <textarea id="details" name="details" rows={3} required className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none" placeholder="BMW 3 Series. Deep scratch on the passenger side door..." />
            </div>

            <button type="submit" className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                Message via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">We usually reply within the hour</p>
        </form>
    );
}

export function HubEstimator({ whatsapp }: { whatsapp: string }) {
    const basePricing = {
        'Full Respray': 1200,
        'Accident Repair': 150,
        'Bumper Repair': 150,
        'Dent Removal': 80,
        'Scratch Repair': 90,
        'Alloy Wheel Refurb': 60
    };

    const [serviceType, setServiceType] = useState<keyof typeof basePricing>('Bumper Repair');
    const [size, setSize] = useState('Medium');
    const [panels, setPanels] = useState(1);
    
    // Some logic to calculate a range
    const base = basePricing[serviceType];
    const multiplier = size === 'Small' ? 0.9 : size === 'Large' ? 1.2 : size === 'Van/4x4' ? 1.4 : 1;
    const estMin = Math.round(base * multiplier * panels);
    const estMax = Math.round(estMin * 1.3);

    return (
        <section className="py-24 bg-white relative overflow-hidden" id="calculator">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-20 z-0"></div>
            
            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                            Instant Calculator
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Get an Instant Repair Estimate
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Use our tool to get a rough guide price for your car body repair. For an exact quote, just send us a few photos on WhatsApp.
                        </p>
                        
                        <div className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">1. Service Type</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {(Object.keys(basePricing) as Array<keyof typeof basePricing>).map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setServiceType(t)}
                                            className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all border ${serviceType === t ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {serviceType !== 'Full Respray' && (
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-3">2. How many panels are damaged?</label>
                                    <input 
                                        type="range" 
                                        min="1" max="5" 
                                        value={panels} 
                                        onChange={(e) => setPanels(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2 px-1 font-medium">
                                        <span>1 Panel</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5+ Panels</span>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">{serviceType === 'Full Respray' ? '2. Vehicle Size' : '3. Vehicle Size'}</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {['Small', 'Medium', 'Large', 'Van/4x4'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`py-2 px-2 rounded-xl text-sm font-semibold transition-all border ${size === s ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl relative text-center flex flex-col items-center justify-center">
                        <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-4">Estimated Range</p>
                        <div className="text-5xl md:text-6xl font-black text-white mb-6">
                            £{estMin} <span className="text-3xl md:text-4xl text-gray-500 font-bold">-</span> £{estMax}
                        </div>
                        <p className="text-gray-400 text-sm mb-10 max-w-sm">
                            *This is a rough estimate. For a fixed cash price, send us photos of the damage.
                        </p>
                        <a
                            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote.%20My%20estimate%20was%20%C2%A3${estMin}-%C2%A3${estMax}%20for%20${serviceType}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-2xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Get an Exact Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
