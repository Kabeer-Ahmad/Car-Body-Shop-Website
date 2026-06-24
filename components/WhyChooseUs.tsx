import React from 'react';
import Image from 'next/image';
import { BUSINESS_DETAILS } from '@/app/constants';
import ComparisonSlider from './ComparisonSlider';

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
                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-blue-800">
                            {/* Vetted & Approved */}
                            <div className="bg-blue-950/60 px-4 py-2.5 rounded-xl flex items-center gap-3 border border-yellow-500/40 shadow-md">
                                <span className="w-9 h-9 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </span>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wider">Vetted &amp; Approved</span>
                                    <span className="text-xs text-blue-300">Trusted Local Business</span>
                                </div>
                            </div>
                            {/* 100% Guaranteed */}
                            <div className="bg-blue-950/60 px-4 py-2.5 rounded-xl flex items-center gap-3 border border-green-500/40 shadow-md">
                                <span className="w-9 h-9 rounded-full bg-green-400/15 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="6" />
                                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                                    </svg>
                                </span>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">100% Guaranteed</span>
                                    <span className="text-xs text-blue-300">Quality You Can Count On</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Interactive Before/After Image Slider */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-800 flex flex-col">
                        <ComparisonSlider
                            before="/gallery/Before_Car_Fender_Dent.webp"
                            after="/gallery/AfteR_Cad_Fender_paint.webp"
                            description="Fender dent repair & respray"
                            className="relative w-full h-[400px] lg:h-[500px] overflow-hidden cursor-ew-resize select-none group"
                        />
                        <div className="p-4 bg-blue-950/80 border-t border-blue-800 text-center">
                            <span className="text-sm font-semibold text-blue-200">Real Transformation: Fender Dent Repair &amp; Respray (1-2 Days)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
