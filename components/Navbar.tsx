'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BUSINESS_DETAILS } from '@/app/constants';
import { motion, AnimatePresence } from 'framer-motion';

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
            setMobileServicesOpen(false); // Reset accordion on close
        }
    }, [isOpen]);

    // Determine if we are on a page that doesn't have a dark hero section at the top
    const forceScrolledStyle = pathname !== '/' && pathname !== '/blog';
    const effectiveScrolled = scrolled || forceScrolledStyle;

    const navLinks = [
        {
            name: 'Services',
            href: '#',
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
        { name: 'Contact', href: '/#estimate-form' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${effectiveScrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50 relative" onClick={() => setIsOpen(false)}>
                    <div className="relative w-12 h-12 md:w-14 md:h-14">
                        <Image
                            src="/logo.png"
                            alt={BUSINESS_DETAILS.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 48px, 56px"
                        />
                    </div>
                    <span className={`font-bold text-xl transition-colors duration-300 ${effectiveScrolled || isOpen ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
                        {BUSINESS_DETAILS.name}
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.dropdown ? (
                            <div key={link.name} className="relative group">
                                <button
                                    className={`font-medium hover:text-blue-500 transition-colors flex items-center gap-1 ${effectiveScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white drop-shadow-sm'}`}
                                >
                                    {link.name}
                                    <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
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
                    <a
                        href={`tel:${BUSINESS_DETAILS.phone}`}
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Call {BUSINESS_DETAILS.phone}
                    </a>
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
                                                <button
                                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    className="flex items-center gap-2 text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                                                >
                                                    {link.name}
                                                    <svg className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
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
                                                onClick={() => setIsOpen(false)}
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
