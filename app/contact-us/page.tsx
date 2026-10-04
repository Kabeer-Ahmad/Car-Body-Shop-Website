'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import AreaLink from '@/components/AreaLink';
import { SERVED_AREAS } from '@/lib/site-routes';
import MapEmbed from '@/components/MapEmbed';

// ── WhatsApp icon path ──────────────────────────────────────────────────────
const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

const HOURS = [
    { day: 'Monday', hours: '8:30 AM – 5:30 PM' },
    { day: 'Tuesday', hours: '8:30 AM – 5:30 PM' },
    { day: 'Wednesday', hours: '8:30 AM – 5:30 PM' },
    { day: 'Thursday', hours: '8:30 AM – 5:30 PM' },
    { day: 'Friday', hours: '8:30 AM – 5:30 PM' },
    { day: 'Saturday', hours: '9:00 AM – 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
];

const AREAS = SERVED_AREAS.map((area) => area.name);

const WHY_US = ['Free Estimates', '5-Star Rated', 'Fast Turnaround', 'Fully Insured', 'Experienced Technicians', 'Premium Paint Systems'];

const FAQS = [
    {
        q: 'How quickly will I receive a quote?',
        a: 'We aim to respond to all enquiries as quickly as possible during business hours. WhatsApp enquiries with photos are usually the fastest way to receive an estimate.',
    },
    {
        q: 'Do I need an appointment?',
        a: 'Appointments are recommended to ensure a technician is available to inspect your vehicle and discuss the best repair options.',
    },
    {
        q: 'Can I send photos for a quote?',
        a: 'Yes. Upload photos using the contact form or send them directly via WhatsApp for a faster estimate.',
    },
    {
        q: 'What areas do you cover?',
        a: 'We welcome customers from Rochdale, Whitworth, Littleborough, Oldham, Bury, Heywood, Milnrow, Middleton and surrounding Greater Manchester areas.',
    },
];

function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-100 rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            >
                <span className="font-bold text-gray-900">{q}</span>
                <svg className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                </div>
            )}
        </div>
    );
}

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [files, setFiles] = useState<FileList | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = fd.get('name') as string;
        const phone = fd.get('phone') as string;
        const vehicle = fd.get('vehicle') as string;
        const service = fd.get('service') as string;
        const description = fd.get('description') as string;

        const msg = encodeURIComponent(
            `Hi, I'd like a free quote.\n\nName: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nService: ${service}\n${description ? `Details: ${description}` : ''}`
        );
        window.open(`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=${msg}`, '_blank');
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ── SECTION 1: HERO ────────────────────────────────────────── */}
            <section className="relative bg-gray-900 pt-28 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 25% 60%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1d4ed8 0%, transparent 40%)' }} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                    {/* Breadcrumb */}
                    <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-gray-300">Contact Us</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        Contact <span className="text-blue-400">Car Body Shop</span> Rochdale
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        Need a quote for car body repairs, dent removal, scratch repairs or a full car respray? Contact our Rochdale workshop today for a free, no-obligation estimate. We usually respond within the hour during business hours.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote.`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-7 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all text-base">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                            Get a Quote via WhatsApp
                        </a>
                        <a href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="flex items-center gap-2.5 px-7 py-4 bg-white hover:bg-blue-50 text-gray-900 font-bold rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all text-base">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call {BUSINESS_DETAILS.phoneDisplay}
                        </a>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: FORM + INFO ─────────────────────────────────── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 xl:gap-16 items-start">

                        {/* ── LEFT COLUMN: Form + Areas We Cover ── */}
                        <div className="flex flex-col gap-5">

                            {/* Form card */}
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Request a Free Estimate</h2>
                                <p className="text-gray-500 mb-8 leading-relaxed">
                                    Complete the form below and we&apos;ll review your enquiry and get back to you as soon as possible. For the fastest response, upload photos of the damage or contact us via WhatsApp.
                                </p>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-extrabold text-gray-900 mb-2">Enquiry Sent!</h3>
                                        <p className="text-gray-500">We&apos;ve opened WhatsApp with your details. We&apos;ll get back to you as soon as possible during business hours.</p>
                                        <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-600 font-semibold text-sm hover:underline">Send another enquiry</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                                                <input name="name" required type="text" placeholder="John Smith"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 placeholder-gray-400 text-sm" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                                                <input name="phone" required type="tel" placeholder="07XXX XXXXXX"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 placeholder-gray-400 text-sm" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                                            <input name="email" type="email" placeholder="john@email.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 placeholder-gray-400 text-sm" />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Vehicle Make &amp; Model <span className="text-red-500">*</span></label>
                                                <input name="vehicle" required type="text" placeholder="BMW 3 Series"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 placeholder-gray-400 text-sm" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Location / Postcode <span className="text-red-500">*</span></label>
                                                <input name="postcode" required type="text" placeholder="Rochdale OL12"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 placeholder-gray-400 text-sm" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Required <span className="text-red-500">*</span></label>
                                            <select name="service" required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 text-sm bg-white appearance-none">
                                                <option value="">Select a service...</option>
                                                <option>Car Body Repair</option>
                                                <option>Dent Removal</option>
                                                <option>Scratch Repair</option>
                                                <option>Bumper Repair</option>
                                                <option>Full Car Respray</option>
                                                <option>Lease Return Repairs</option>
                                                <option>Minor Accident Repairs</option>
                                                <option>Unsure</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Describe the Damage</label>
                                            <textarea name="description" rows={4} placeholder="Tell us about the damage, when it happened, or anything you'd like us to know."
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition text-gray-900 placeholder-gray-400 text-sm resize-none" />
                                        </div>

                                        {/* Photo upload */}
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Upload Photos</label>
                                            <label className="flex flex-col items-center justify-center gap-2 w-full border-2 border-dashed border-gray-200 rounded-xl px-6 py-8 cursor-pointer hover:border-blue-300 hover:bg-blue-50/30 transition-colors">
                                                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm text-gray-500">
                                                    {files && files.length > 0
                                                        ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
                                                        : 'Click to upload up to 10 photos'}
                                                </span>
                                                <span className="text-xs text-gray-400">JPG, PNG, HEIC supported</span>
                                                <input type="file" accept="image/*,.heic" multiple className="sr-only"
                                                    onChange={e => setFiles(e.target.files)} />
                                            </label>
                                            <p className="text-xs text-gray-400 mt-1.5">For the quickest quote, photos help us assess the damage before your visit.</p>
                                        </div>

                                        <button type="submit"
                                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-base">
                                            Get My Free Quote
                                        </button>
                                        <p className="text-center text-xs text-gray-400">
                                            We&apos;ll review your enquiry and respond as soon as possible during business hours.
                                        </p>
                                    </form>
                                )}
                            </div>

                            {/* Areas We Cover — below form */}
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                                <h3 className="text-base font-extrabold text-gray-900 mb-3">Areas We Cover</h3>
                                <p className="text-gray-500 text-sm mb-3">We provide car body repairs across:</p>
                                <div className="flex flex-wrap gap-2">
                                    {AREAS.map(a => (
                                        <AreaLink key={a} name={a} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full" linkClassName="underline decoration-blue-300 underline-offset-2 hover:bg-blue-600 hover:text-white transition-colors" />
                                    ))}
                                </div>
                            </div>

                        </div>{/* end LEFT COLUMN */}

                        {/* ── RIGHT COLUMN: Contact Info + Opening Hours + Why Choose Us ── */}
                        <aside className="flex flex-col gap-5 self-start sticky top-28">

                            {/* Contact Information */}
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                                <h3 className="text-lg font-extrabold text-gray-900 mb-5">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Workshop Address</p>
                                            <p className="text-gray-700 text-sm font-medium leading-relaxed">Car Body Shop<br />Peel Mill, Market Street<br />Shawforth, Rochdale<br />OL12 8HN</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Phone</p>
                                            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">{BUSINESS_DETAILS.phoneDisplay}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">WhatsApp</p>
                                            <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote.`}
                                                target="_blank" rel="noopener noreferrer"
                                                className="text-green-600 font-semibold text-sm hover:text-green-800 transition-colors">
                                                Message us for a quick estimate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                                <h3 className="text-base font-extrabold text-gray-900 mb-4">Opening Hours</h3>
                                <ul className="space-y-2">
                                    {HOURS.map(({ day, hours }) => (
                                        <li key={day} className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500 font-medium">{day}</span>
                                            <span className={`font-semibold ${hours === 'Closed' ? 'text-red-400' : 'text-gray-800'}`}>{hours}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-blue-600 rounded-3xl p-6 text-white">
                                <h3 className="text-base font-extrabold mb-4">Why Choose Us?</h3>
                                <ul className="space-y-2">
                                    {WHY_US.map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-blue-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </aside>{/* end RIGHT COLUMN */}

                    </div>
                </div>
            </section>

            {/* ── SECTION 3: MAP ─────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Visit Our Rochdale Workshop</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Our workshop is conveniently located in <AreaLink name="Whitworth" />, Rochdale, making it easy for customers across Greater Manchester to visit us for inspections, quotations and vehicle repairs.
                        </p>
                        <a href={BUSINESS_DETAILS.mapsDirectionLink} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-md transition-all hover:-translate-y-0.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            Get Directions
                        </a>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80 md:h-[420px]">
                        <MapEmbed />
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: FAQ ─────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {FAQS.map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ──────────────────────────────────────────────── */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-3xl mx-auto px-6 md:px-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Get Your Free Car Body Repair Quote Today</h2>
                    <p className="text-blue-100 leading-relaxed mb-10 text-lg">
                        Whether you need a dent repaired, a bumper restored, a scratch removed or a complete car respray, our experienced team is here to help. Contact Car Body Shop today for a free, no-obligation estimate.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-blue-50 text-blue-700 font-extrabold rounded-2xl shadow-xl transition-all hover:-translate-y-0.5 text-base">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call {BUSINESS_DETAILS.phoneDisplay}
                        </a>
                        <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote.`}
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all text-base">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
