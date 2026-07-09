import Link from 'next/link';
import { BUSINESS_DETAILS } from '@/app/constants';
import Logo from '@/components/Logo';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Column 1: Business Identity */}
                <div className="flex flex-col">
                    <Link href="/" className="flex items-center mb-4 inline-block w-max" aria-label="Car Body Shop Home">
                        <Logo light={true} height={68} />
                    </Link>
                    <p className="text-sm leading-relaxed mb-6">
                        Fast, affordable, and high-quality car body repairs in Rochdale. Cash prices, no insurance hassle. Get back on the road looking brand new.
                    </p>
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="font-semibold text-gray-300 ml-1">5.0 Average Rating</span>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Advice & Tips</Link></li>
                        <li><Link href="/#gallery" className="hover:text-white transition-colors">Our Work</Link></li>
                        <li><Link href="/#estimate-form" className="hover:text-white transition-colors">Get an Estimate</Link></li>
                    </ul>
                </div>

                {/* Column 3: Services & Areas */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services/bumper-repair-rochdale" className="hover:text-white transition-colors">Bumper Repair</Link></li>
                        <li><Link href="/services/car-scratch-repair-rochdale" className="hover:text-white transition-colors">Scratch Repair</Link></li>
                        <li><Link href="/services/dent-removal-rochdale" className="hover:text-white transition-colors">Dent Removal</Link></li>
                        <li><Link href="/services/full-car-respray-rochdale" className="hover:text-white transition-colors">Full Car Respray</Link></li>
                        <li><Link href="/services/lease-return-repairs-rochdale" className="hover:text-white transition-colors">Lease Returns</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact & Hours */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg mb-4">Contact & Hours</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                            <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{BUSINESS_DETAILS.address}</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="hover:text-white transition-colors">{BUSINESS_DETAILS.phone}</a>
                        </li>
                        <li className="flex items-start gap-2 mt-2">
                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p>Mon - Fri: 8:30 AM - 5:30 PM</p>
                                <p>Saturday: 9:00 AM - 1:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <p>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
