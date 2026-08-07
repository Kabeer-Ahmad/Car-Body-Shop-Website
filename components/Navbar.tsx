'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS_DETAILS } from '@/app/constants';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Determine if we are on a page that doesn't have a dark hero section at the top
    const forceScrolledStyle = pathname !== '/' && pathname !== '/blog';
    const effectiveScrolled = scrolled || forceScrolledStyle;

    const navLinks = [
        {
            name: 'Services',
            href: '/services',
            dropdown: [
                { name: 'Full Car Respray Rochdale', href: '/services/full-car-respray-rochdale' },
                { name: 'Trade & Motor Dealer Bodyshop Services', href: '/services/trade-motor-dealer-bodyshop-services' },
                { name: 'Accident & Collision Repair Rochdale', href: '/services/accident-collision-repair-rochdale' },
                { name: 'Bumper Repair Rochdale', href: '/services/bumper-repair-rochdale' },
                { name: 'Dent Removal Rochdale', href: '/services/dent-removal-rochdale' },
                { name: 'Car Scratch Repair Rochdale', href: '/services/car-scratch-repair-rochdale' },
                { name: 'Minor Accident Repair Rochdale', href: '/services/minor-accident-repair-rochdale' },
                { name: 'Lease Return Repairs Rochdale', href: '/services/lease-return-repairs-rochdale' },
            ]
        },
        { name: 'Gallery', href: '/#gallery' },
        { name: 'Why Us', href: '/#why-us' },
        { name: 'Reviews', href: '/#reviews' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact-us' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${effectiveScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center z-50 relative" onClick={() => {
                    setIsOpen(false);
                    setMobileServicesOpen(false);
                }}>
                <Logo
                    light={!effectiveScrolled && !isOpen}
                    height={50}
                />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.dropdown ? (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`font-medium hover:text-blue-500 transition-colors flex items-center gap-1 ${effectiveScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white drop-shadow-sm'}`}
                                >
                                    {link.name}
                                    <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                <div className="absolute left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="w-72 max-h-[80vh] overflow-y-auto flex flex-col bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-0"
                                            >
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium hover:text-blue-500 transition-colors ${effectiveScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white drop-shadow-sm'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <div className="flex items-center gap-3">
                        <a
                            href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20quote.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a
                            href={`tel:${BUSINESS_DETAILS.phone}`}
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Us
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className={`w-8 h-8 flex flex-col justify-center items-center gap-1.5`}>
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${effectiveScrolled || isOpen ? 'bg-gray-900' : 'bg-white'}`}
                        ></motion.span>
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${effectiveScrolled || isOpen ? 'bg-gray-900' : 'bg-white'}`}
                        ></motion.span>
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${effectiveScrolled || isOpen ? 'bg-gray-900' : 'bg-white'}`}
                        ></motion.span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="md:hidden fixed inset-0 w-full h-screen bg-white z-40 flex flex-col overflow-hidden"
                        >
                            <div className="flex flex-col items-center space-y-6 w-full px-8 h-full overflow-y-auto py-24 pb-12">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="w-full"
                                    >
                                        {link.dropdown ? (
                                            <div className="flex flex-col items-center w-full">
                                                <div className="flex items-center justify-center gap-3">
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setMobileServicesOpen(false);
                                                        }}
                                                        className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                    <button
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        className="p-2 text-gray-800 hover:text-blue-600 transition-colors bg-gray-100 rounded-full"
                                                        aria-label="Toggle Submenu"
                                                    >
                                                        <svg className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <AnimatePresence>
                                                    {mobileServicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden flex flex-col items-center space-y-4 pt-6 w-full text-center"
                                                        >
                                                            {link.dropdown.map((sublink) => (
                                                                <Link
                                                                    key={sublink.name}
                                                                    href={sublink.href}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="text-lg text-gray-600 hover:text-blue-600 block px-4 transition-colors font-medium"
                                                                >
                                                                    {sublink.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setMobileServicesOpen(false);
                                                    }}
                                                    className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors block text-center"
                                                >
                                                {link.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="w-full pt-8 max-w-xs"
                                >
                                    <a
                                        href={`tel:${BUSINESS_DETAILS.phone}`}
                                        className="block w-full text-center px-8 py-4 bg-blue-600 text-white text-xl font-bold rounded-2xl shadow-xl hover:bg-blue-700 transition-colors"
                                    >
                                        Call Us Now
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
