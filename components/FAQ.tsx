'use client';

import { useState } from 'react';

export interface FaqItem {
    question: string;
    answer: string;
}

const DEFAULT_FAQS: FaqItem[] = [
    {
        question: 'How Much Does Car Body Repair Cost?',
        answer: 'The cost of car body repair depends on the extent of the damage, the parts affected, and the repair method required. Minor scratches and dents are typically less expensive than major accident damage repairs. Contact Car Body Shop Rochdale for a free, no-obligation quote.',
    },
    {
        question: 'How Long Does Car Body Repair Take?',
        answer: 'Most minor car body repairs can be completed within a day, while larger repairs involving multiple panels or accident damage may take several days. At Car Body Shop Rochdale, we provide an accurate timeframe after inspecting your vehicle.',
    },
    {
        question: 'Can Dents, Scratches, and Bumper Damage Be Repaired?',
        answer: 'Yes. Our technicians repair dents, scratches, scuffs, bumper damage, paintwork defects, and accident-related bodywork issues. Car Body Shop Rochdale uses professional repair techniques to restore your vehicle\'s appearance and value.',
    },
    {
        question: 'Are Mobile Car Body Repairs Any Good?',
        answer: 'Mobile car body repairs can be suitable for minor cosmetic damage. However, more complex repairs often require specialist equipment and controlled workshop conditions. For the highest-quality finish, Car Body Shop Rochdale recommends professional workshop-based repairs.',
    },
    {
        question: 'Do I Need a Quote Before Booking a Car Body Repair?',
        answer: 'Yes. A professional assessment helps determine the repair method, timeframe, and cost. Car Body Shop Rochdale offers free estimates and expert advice to help you choose the most effective repair solution for your vehicle.',
    },
];

interface FAQProps {
    faqs?: FaqItem[];
    subtitle?: string;
}

export default function FAQ({
    faqs = DEFAULT_FAQS,
    subtitle = 'Common questions about car body repair in Rochdale, answered by our team.',
}: FAQProps = {}) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="py-20 bg-white" id="faq">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-3xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        FAQs
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 text-base max-w-xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-200 ${
                                    isOpen
                                        ? 'border-blue-200 bg-blue-50 shadow-md'
                                        : 'border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/40'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-base font-semibold leading-snug ${isOpen ? 'text-blue-700' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isOpen ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-400'
                                    }`}>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
