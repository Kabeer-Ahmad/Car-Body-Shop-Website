import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import { BUSINESS_DETAILS } from '@/app/constants';
import { HubEstimator, HubFaq, HubHero, HubReviews } from './ClientSections';

export const metadata: Metadata = {
    title: 'Car Body Repairs Rochdale | Auto Body Shop | Car Body Shop',
    description: 'All car body repair services in Rochdale under one roof. Resprays, dents, scratches, bumpers and accident repair. Cash prices, no insurance needed.',
};

export default function ServicesHubPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HubHero />
            <ServiceGrid />
            <HubEstimator whatsapp={BUSINESS_DETAILS.whatsapp} />
            <Gallery />
            <WhyChooseUsHub />
            <AboutHub />
            <HowItWorks />
            <HubReviews />
            <AreasCovered />
            <HubFaq />
            <ContactHub whatsapp={BUSINESS_DETAILS.whatsapp} />
            <Footer />
        </main>
    );
}

function ServiceGrid() {
    const services = [
        { title: 'Full Car Respray', desc: 'Complete resprays and colour changes with factory-matched paint.', href: '/services/full-car-respray-rochdale', image: '/services/full-car-respray.jpg' },
        { title: 'Accident & Collision Repair', desc: 'Collision damage restored to pre-accident condition. No insurance needed.', href: '/services/accident-collision-repair-rochdale', image: '/services/accident-collision-repair.jpg' },
        { title: 'Bumper Repair', desc: 'Scuffs, cracks and splits repaired and colour-matched.', href: '/services/bumper-repair-rochdale', image: '/services/bumper-repair.jpg' },
        { title: 'Dent Removal', desc: 'Dents and dings pulled and refinished, paintless where possible.', href: '/services/dent-removal-rochdale', image: '/services/dent-removal.jpg' },
        { title: 'Car Scratch Repair', desc: 'Deep scratches and paint damage corrected and blended.', href: '/services/car-scratch-repair-rochdale', image: '/services/car-scratch-repair.jpg' },
        { title: 'Minor Accident Repair', desc: 'Fast, affordable fixes for bumps and cosmetic damage.', href: '/services/minor-accident-repair-rochdale', image: '/services/minor-accident-repair.jpg' },
        { title: 'Lease Return Repairs', desc: 'Repairs before handover to avoid end-of-lease charges.', href: '/services/lease-return-repairs-rochdale', image: '/services/lease-return-repairs.jpg' },
        { title: 'Trade & Motor Dealer Bodyshop', desc: 'Priority slots and trade pricing for dealers and fleets.', href: '/services/trade-motor-dealer-bodyshop-services', image: '/services/trade-dealer-bodyshop.jpg' },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Car Body Repair Services</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        From a single scratch to a full respray, we handle every car bodywork repair in-house at our Rochdale workshop.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map(s => (
                        <div key={s.title} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-200 flex-shrink-0">
                                <Image
                                    src={s.image}
                                    alt={s.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col flex-1 p-5 pt-3">
                                <h3 className="text-base font-bold mb-2 leading-snug">
                                    <Link
                                        href={s.href}
                                        className="text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        {s.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                                    {s.desc}
                                </p>

                                {/* Footer row */}
                                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                                    <Link
                                        href={s.href}
                                        className="flex items-center gap-1 text-gray-400 hover:text-blue-600 text-xs transition-colors"
                                    >
                                        Learn More
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhyChooseUsHub() {
    const reasons = [
        'Every service in-house. One workshop for all car body repairs, no outsourcing.',
        'No insurance needed. Cash prices, no excess, no premium hikes.',
        'Fast turnaround. Most repairs done in 1 to 4 days.',
        'Honest quotes via WhatsApp. Send photos, get a price fast.',
        'Enclosed spray booth and computer colour matching.',
        'Free collection and delivery across Greater Manchester.',
        'Local, trusted and 10+ years in Rochdale.',
    ];
    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Why Choose Car Body Shop?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reasons.map((r, i) => (
                        <div key={i} className="flex items-start gap-4 bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                            <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            <p className="font-semibold text-gray-200 leading-snug">{r}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutHub() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">About Car Body Shop</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Car Body Shop is a family-run bodyshop based in Whitworth, Rochdale, with over ten years of experience repairing cars for drivers across Greater Manchester. We handle every type of car body repair in-house, from minor scratches to full resprays and accident damage.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Our approach is simple. Honest cash pricing, no insurance hassle, and a finish that matches factory standard every time.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-100">
                            {[
                                ['5,000+', 'Repairs Completed'],
                                ['10+', 'Years Experience'],
                                ['5.0', 'Average Rating'],
                                ['100%', 'Satisfaction Guarantee'],
                            ].map(([val, label]) => (
                                <div key={label}>
                                    <p className="text-2xl font-extrabold text-blue-600 mb-1">{val}</p>
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                        <Image src="/services/full-car-respray.jpg" alt="Car Body Shop Workshop Rochdale" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-16">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { title: '1. Send Photos', desc: 'WhatsApp us photos of the damage. We reply within the hour with a cash price.', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                        { title: '2. Book It In', desc: 'Drop off at our Whitworth workshop, or we collect from you free.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                        { title: '3. Collect Your Car', desc: 'Most repairs are ready in 1 to 4 days, finished to factory standard.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 shadow-xl shadow-blue-200">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed max-w-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AreasCovered() {
    const areas = ['Rochdale', 'Whitworth', 'Littleborough', 'Heywood', 'Oldham', 'Bury', 'Milnrow', 'Middleton', 'Manchester', 'Bolton'];
    return (
        <section className="py-24 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-800 border border-gray-700 shadow-2xl">
                        <iframe
                            title="Car Body Shop Rochdale location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2365.9!2d-2.1608!3d53.6452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba77b4d1d1c4b%3A0x7b3e2e2e2e2e2e2e!2sWhitworth%2C%20Rochdale!5e0!3m2!1sen!2suk!4v1700000000000"
                            className="w-full h-full border-0 opacity-80"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-3xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Areas We Cover</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">Free collection and delivery available across all areas, so your car comes to us and returns to you.</p>
                        <div className="flex flex-wrap gap-3">
                            {areas.map(a => (
                                <span key={a} className="px-4 py-2 rounded-full text-sm font-semibold bg-gray-800 border border-gray-700 text-gray-300">
                                    📍 {a}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactHub({ whatsapp }: { whatsapp: string }) {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Car Body Shop</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">Upload 1 to 3 photos of the damage for the most accurate price. We usually reply within the hour.</p>
                        
                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div><p className="font-bold text-gray-900">Address</p><p className="text-gray-500 text-sm">Whitworth, Rochdale, OL12 8HN</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div><p className="font-bold text-gray-900">Phone</p><p className="text-gray-500 text-sm">{BUSINESS_DETAILS.phone}</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div><p className="font-bold text-gray-900">Hours</p><p className="text-gray-500 text-sm">Mon-Fri 8:30am-5:30pm | Sat 9:00am-1:00pm | Sun Closed</p></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 rounded-r-3xl transform skew-x-12 translate-x-10 pointer-events-none"></div>
                        <h3 className="text-2xl font-bold text-white mb-6">Get a Free Estimate</h3>
                        {/* We will build the client form in ClientSections.tsx */}
                        <HubContactForm whatsapp={whatsapp} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Client proxy for the form
import { HubContactForm } from './ClientSections';
