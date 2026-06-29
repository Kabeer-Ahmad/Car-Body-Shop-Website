'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_DETAILS } from '@/app/constants';

const services = [
    {
        title: 'Full Car Respray Services',
        description: 'Give your vehicle a flawless, factory-quality finish. Our complete respray services tackle deep scratches, fading, and exact color matching with precision.',
        slug: 'full-car-respray-rochdale',
        image: '/services/full-car-respray.jpg',
    },
    {
        title: 'Trade & Motor Dealer Bodyshop Services',
        description: 'Fast-turnaround fleet and dealer repair services. We keep your commercial vehicles and stock in pristine condition to maximize resale value.',
        slug: 'trade-motor-dealer-bodyshop-services',
        image: '/services/trade-dealer-bodyshop.jpg',
    },
    {
        title: 'Accident & Collision Repair Services',
        description: 'From major structural realignments to minor impact fixes, our team safely restores your vehicle back to manufacturer safety and aesthetic standards.',
        slug: 'accident-collision-repair-rochdale',
        image: '/services/accident-collision-repair.jpg',
    },
    {
        title: 'Bumper Repair Services',
        description: 'Fix scuffs, cracks, and deep scrapes quickly. Our localized bumper repairs eliminate unsightly damage without needing a costly total replacement.',
        slug: 'bumper-repair-rochdale',
        image: '/services/bumper-repair.jpg',
    },
    {
        title: 'Dent Removal Services',
        description: 'Erase unsightly door dings, creases, and hail damage. Our precise dent removal techniques smooth out the panels to seamlessly restore clean body lines.',
        slug: 'dent-removal-rochdale',
        image: '/services/dent-removal.jpg',
    },
    {
        title: 'Car Scratch Repair Services',
        description: "Don't let key scratches or paint scrapes lead to rust. We patch, blend, and polish localized paint damage to match your car's original body paint.",
        slug: 'car-scratch-repair-rochdale',
        image: '/services/car-scratch-repair.jpg',
    },
    {
        title: 'Minor Accident Repair Services',
        description: 'Fast, affordable fixes for everyday scuffs, scrapes, and minor wing damage. Get your car back on the road looking pristine without the long wait times.',
        slug: 'minor-accident-repair-rochdale',
        image: '/services/minor-accident-repair.jpg',
    },
    {
        title: 'Lease Return Repair Services',
        description: 'Avoid hefty penalty charges from your leasing company. We fix standard wear-and-tear, scratches, and wheel scuffs to meet strict return guidelines.',
        slug: 'lease-return-repairs-rochdale',
        image: '/services/lease-return-repairs.jpg',
    },
];


export default function Services() {
    return (
        <section className="py-20 bg-gray-50" id="services">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Auto Body Repair Services Offered in Rochdale</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">
                        Expert car body repairs in Rochdale, from a single dent to a full respray, we restore vehicles to factory condition.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.slug} {...service} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center">
                    <p className="text-gray-500 mb-4">Not sure which service you need?</p>
                    <a
                        href={`tel:${BUSINESS_DETAILS.phone}`}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call for Free Advice — {BUSINESS_DETAILS.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}

// ── Individual Service Card ────────────────────────────────────────────────────
function ServiceCard({ title, description, slug, image }: {
    title: string;
    description: string;
    slug: string;
    image: string;
}) {
    return (
        <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                />
                {/* Fade gradient from transparent → white */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-5 pt-3">
                <h3 className="text-base font-bold mb-2 leading-snug">
                    <Link
                        href={`/services/${slug}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                    >
                        {title}
                    </Link>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {description}
                </p>

                {/* Footer row */}
                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                    <a
                        href={`tel:${BUSINESS_DETAILS.phone}`}
                        className="flex items-center gap-1 text-gray-400 hover:text-blue-600 text-xs transition-colors"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call for service
                    </a>
                </div>
            </div>
        </div>
    );
}

