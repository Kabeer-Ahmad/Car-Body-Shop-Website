import React from 'react';
import Image from 'next/image';
import { BUSINESS_DETAILS } from '@/app/constants';

export default function WhyChooseUs() {
    const reasons = [
        "Fast turnaround times (1-2 days)",
        "Affordable cash pricing - no hidden fees",
        "No insurance hassle or premium hikes",
        "Honest estimates via WhatsApp",
        "Experienced & qualified technicians",
        "Local trusted business in Rochdale",
    ];

    return (
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden" id="why-us">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 opacity-20 transform skew-x-12 translate-x-20"></div>
            <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <p className="text-blue-200 mb-10 text-lg">
                            We pride ourselves on delivering main-dealer quality at local garage prices. 
                            Here's why {BUSINESS_DETAILS.city} drivers trust us.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex items-start space-x-3 bg-blue-800/40 p-4 rounded-xl border border-blue-700/50 hover:bg-blue-800/60 transition-colors">
                                    <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">{reason}</span>
                                </div>
                            ))}
                        </div>
                        {/* Trust Badges Placeholder */}
                        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-blue-800">
                            <div className="bg-blue-950/50 px-4 py-2 rounded-lg flex items-center gap-2 border border-blue-800">
                                <span className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center text-xs font-bold text-white">[LOGO]</span>
                                <span className="text-sm font-semibold text-blue-100">Vetted & Approved</span>
                            </div>
                            <div className="bg-blue-950/50 px-4 py-2 rounded-lg flex items-center gap-2 border border-blue-800">
                                <span className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center text-xs font-bold text-white">[LOGO]</span>
                                <span className="text-sm font-semibold text-blue-100">100% Guaranteed</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Real Workshop Photo Placeholder */}
                    <div className="relative h-96 lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-400 font-medium tracking-widest uppercase">Workshop Image Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
