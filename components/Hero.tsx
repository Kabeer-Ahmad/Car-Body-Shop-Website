'use client';

import Image from 'next/image';
import { BUSINESS_DETAILS } from '@/app/constants';
import { motion } from 'framer-motion';

interface HeroProps {
    title?: string;
    highlight?: string;
    subtitle?: string;
    imageAlt?: string;
    formSubtitle?: string;
    locationPlaceholder?: string;
}

export default function Hero({
    title = 'Car Body Repair Rochdale',
    highlight = 'Expert Car Body Shop & Accident Repairs',
    subtitle = 'Professional car body repair and vehicle bodywork services in Rochdale. From dents and scratches to accident repairs and full resprays, we restore your vehicle to showroom condition.',
    imageAlt = 'CBS Car Body Shop Workshop',
    formSubtitle = 'Free estimate — no obligation. We\'ll confirm within the hour.',
    locationPlaceholder = 'e.g. Rochdale, OL12',
}: HeroProps = {}) {
    return (
        <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-20">

            {/* ── Background Photo ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-v2.jpg"
                    alt={imageAlt}
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-gray-900/70 to-black/75" />
            </div>

            {/* ── Content Grid ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT: Headline + CTAs + Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
                            {title}<br />
                            <span className="text-blue-400">{highlight}</span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-300 mb-6 font-light leading-relaxed max-w-lg">
                            {subtitle}
                        </p>

                        {/* CTA Buttons */}
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
                            <a
                                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-5 text-sm font-medium text-gray-300">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                5-Star Rated
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Fully Insured
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                10+ Years Experience
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                                </svg>
                                Overnight Repairs
                            </div>
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
                                <p className="text-gray-300 text-sm">{formSubtitle}</p>
                            </div>
                            <BookingForm whatsapp={BUSINESS_DETAILS.whatsapp} locationPlaceholder={locationPlaceholder} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// ── Booking Form Component ────────────────────────────────────────────────────
export function BookingForm({ whatsapp, locationPlaceholder = 'e.g. Rochdale, OL12' }: { whatsapp: string; locationPlaceholder?: string }) {
    const services = [
        'Dent Removal',
        'Car Scratch Repair',
        'Bumper Repair',
        'Full Car Respray',
        'Accident & Collision Repair',
        'Minor Accident Repair',
        'Lease Return Repairs',
        'Trade / Dealer Bodyshop',
        'Other',
    ];

    const times = [
        '08:30 – 09:30', '09:30 – 10:30', '10:30 – 11:30',
        '11:30 – 12:30', '13:00 – 14:00', '14:00 – 15:00',
        '15:00 – 16:00', '16:00 – 17:00',
    ];

    const today = new Date().toISOString().split('T')[0];

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const msg = [
            `👋 Hi, I'd like to book an appointment:`,
            ``,
            `📛 Name: ${fd.get('name')}`,
            `🚗 Vehicle: ${fd.get('vehicle')}`,
            `🔧 Service Needed: ${fd.get('service')}`,
            `📍 Location: ${fd.get('location')}`,
            `📅 Preferred Date: ${fd.get('date')}`,
            `🕐 Preferred Time: ${fd.get('time')}`,
        ].join('\n');
        window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    }

    const input = 'w-full bg-white/10 border border-white/25 text-white placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all';
    const label = 'block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wide';

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name + Vehicle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="hf-name" className={label}>Your Name</label>
                    <input id="hf-name" name="name" type="text" required placeholder="e.g. John Smith" className={input} />
                </div>
                <div>
                    <label htmlFor="hf-vehicle" className={label}>Your Vehicle</label>
                    <input id="hf-vehicle" name="vehicle" type="text" required placeholder="e.g. BMW 3 Series" className={input} />
                </div>
            </div>

            {/* Service */}
            <div>
                <label htmlFor="hf-service" className={label}>What needs help?</label>
                <select id="hf-service" name="service" required defaultValue="" className={input + ' appearance-none cursor-pointer'}>
                    <option value="" disabled className="bg-gray-800">Select a service…</option>
                    {services.map(s => (
                        <option key={s} value={s} className="bg-gray-800">{s}</option>
                    ))}
                </select>
            </div>

            {/* Location */}
            <div>
                <label htmlFor="hf-location" className={label}>Your Location / Postcode</label>
                <input id="hf-location" name="location" type="text" required placeholder={locationPlaceholder} className={input} />
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="hf-date" className={label}>Preferred Date</label>
                    <input id="hf-date" name="date" type="date" required min={today} className={input + ' [color-scheme:dark]'} />
                </div>
                <div>
                    <label htmlFor="hf-time" className={label}>Preferred Time</label>
                    <select id="hf-time" name="time" required defaultValue="" className={input + ' appearance-none cursor-pointer'}>
                        <option value="" disabled className="bg-gray-800">Select a slot…</option>
                        {times.map(t => (
                            <option key={t} value={t} className="bg-gray-800">{t}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-base transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Book via WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400 pt-1">
                Opens WhatsApp with your details pre-filled. We confirm same day.
            </p>
        </form>
    );
}
