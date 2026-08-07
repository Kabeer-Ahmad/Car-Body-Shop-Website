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
                    {/* Social links */}
                    <div className="flex items-center gap-3 mt-5">
                        <a href="https://www.facebook.com/people/Car-Body-Shop-WhitworthRochdale/61588448236004/"
                            target="_blank" rel="noopener noreferrer" aria-label="Car Body Shop on Facebook"
                            className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/carbodyshopltd"
                            target="_blank" rel="noopener noreferrer" aria-label="Car Body Shop on Instagram"
                            className="w-9 h-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="/blog" className="hover:text-white transition-colors">Advice & Tips</Link></li>
                        <li><Link href="/#gallery" className="hover:text-white transition-colors">Our Work</Link></li>
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
                <div className="flex items-center gap-4">
                    <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
