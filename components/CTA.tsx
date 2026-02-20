import Link from 'next/link';
import { BUSINESS_DETAILS } from '@/app/constants';

export default function CTA() {
    return (
        <section className="py-20 bg-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Your Car Fixed Fast?</h2>
                <p className="text-xl text-blue-100 mb-10">
                    Don't stress. We'll get you back on the road looking good as new.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href={`tel:${BUSINESS_DETAILS.phone}`}
                        className="w-full md:w-auto px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-bold rounded-lg text-xl transition-colors shadow-lg"
                    >
                        Call Now
                    </a>
                    <a
                        href="/#estimate-form"
                        className="w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg text-xl transition-colors"
                    >
                        Get Free Estimate
                    </a>
                </div>
            </div>
        </section>
    );
}
