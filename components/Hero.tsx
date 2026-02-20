'use client';

import Link from 'next/link';
import { BUSINESS_DETAILS } from '@/app/constants';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background - simple gradient/overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90 z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Fast & Affordable Car Body Repairs in <span className="text-blue-400">{BUSINESS_DETAILS.city}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto">
                        No Insurance. No Hassle. Cash Repairs Done Right.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-all shadow-lg hover:scale-105"
                        >
                            Call Now: {BUSINESS_DETAILS.phone}
                        </a>
                        <Link
                            href="#estimate-form"
                            className="w-full md:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-lg text-lg transition-all shadow-lg hover:scale-105"
                        >
                            Get Free Estimate
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
