import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import { BUSINESS_DETAILS } from '@/app/constants';
import Link from 'next/link';

export const metadata = {
    title: 'About Us | Our Workshop & Team',
    description: `Learn more about ${BUSINESS_DETAILS.name}, our experienced team, and our commitment to high-quality car body repairs in ${BUSINESS_DETAILS.city}.`,
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/grid-pattern.svg')]"></div>
                <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About {BUSINESS_DETAILS.name}</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                        We are a local, independent body shop dedicated to bringing main-dealer quality repairs to {BUSINESS_DETAILS.city} at fair, honest prices.
                    </p>
                </div>
            </section>

            <StatsBar />

            {/* Intro Video & Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                                Founded with a passion for automotive perfection, {BUSINESS_DETAILS.name} has grown from a small local garage into one of {BUSINESS_DETAILS.city}'s most trusted repair centers. 
                                We understand that a car accident or scratch can be incredibly stressful. Our goal is to make the repair process as smooth, transparent, and affordable as possible.
                            </p>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                We bypass the insurance hassle by offering highly competitive cash prices, meaning you can get your car fixed quickly without risking your no-claims bonus or paying a hefty excess.
                            </p>
                            <Link href="/#estimate-form" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md">
                                Get a Free Quote Today
                            </Link>
                        </div>
                        
                        {/* Video Placeholder */}
                        <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 flex items-center justify-center group cursor-pointer">
                            <span className="text-gray-400 font-medium tracking-widest uppercase mb-12">Intro Video Placeholder</span>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Owner / Workshop Photo */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-col-reverse lg:flex-row-reverse">
                        <div className="lg:order-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Inside Our Workshop</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                We've invested in state-of-the-art equipment, including advanced paint-matching technology and a dedicated spray booth, ensuring a flawless factory finish every time. 
                                Our team is fully trained in the latest SMART repair techniques, allowing us to fix localized damage without replacing entire panels.
                            </p>
                            <div className="flex gap-4">
                                {/* Workshop Photo Placeholder */}
                                <div className="relative h-64 w-full bg-gray-300 rounded-xl overflow-hidden flex items-center justify-center border-2 border-gray-200">
                                    <span className="text-gray-500 font-medium uppercase text-sm">Workshop Photo Placeholder 1</span>
                                </div>
                                <div className="relative h-64 w-full bg-gray-300 rounded-xl overflow-hidden flex items-center justify-center border-2 border-gray-200">
                                    <span className="text-gray-500 font-medium uppercase text-sm">Workshop Photo Placeholder 2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Trust */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Fully Certified & Approved</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
                        {/* Badges Placeholders */}
                        <div className="w-32 h-32 bg-gray-100 rounded-full flex flex-col items-center justify-center border-4 border-gray-200 text-gray-500 p-4">
                            <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-xs font-bold uppercase text-center leading-tight">City & Guilds<br/>Qualified</span>
                        </div>
                        <div className="w-32 h-32 bg-gray-100 rounded-full flex flex-col items-center justify-center border-4 border-gray-200 text-gray-500 p-4">
                            <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-xs font-bold uppercase text-center leading-tight">VDA<br/>Approved</span>
                        </div>
                        <div className="w-32 h-32 bg-gray-100 rounded-full flex flex-col items-center justify-center border-4 border-gray-200 text-gray-500 p-4">
                            <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-xs font-bold uppercase text-center leading-tight">100% Paint<br/>Match</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
