'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog-data';
import { BUSINESS_DETAILS } from '@/app/constants';
import 'suneditor/dist/css/suneditor.min.css';

// ─── Types ────────────────────────────────────────────────────────────────────
interface TocItem { id: string; text: string; level: number; }

// ─── Helpers ──────────────────────────────────────────────────────────────────
const GALLERY_COVERS = [
    '/gallery/AfteR_Cad_Fender_paint.webp',
    '/gallery/After_Van_Backdoor_Complete.webp',
    '/gallery/Bumper Lip After.webp',
    '/gallery/AfteR_Rim_Job.webp',
    '/gallery/Middlestage_Car_Fender_Putene.webp',
    '/gallery/Middlestage_Van_backdoor_Putene.webp',
    '/gallery/Before_Car_Fender_Dent.webp',
];

function coverFor(index: number) { return GALLERY_COVERS[index % GALLERY_COVERS.length]; }

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function authorInitials(name: string) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

// Inject stable IDs into headings + extract ToC
function processContent(html: string): { processed: string; toc: TocItem[] } {
    const toc: TocItem[] = [];
    let idx = 0;
    const processed = html.replace(/<(h[2-4])([^>]*)>(.*?)<\/h[2-4]>/gi, (_, tag, attrs, inner) => {
        const text = inner.replace(/<[^>]+>/g, '').trim();
        const id = `h-${idx++}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
        toc.push({ id, text, level: parseInt(tag[1]) });
        return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
    });
    return { processed, toc };
}

// ─── Reading progress bar ─────────────────────────────────────────────────────
function ReadingProgressBar() {
    const [pct, setPct] = useState(0);
    useEffect(() => {
        const fn = () => {
            const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
        };
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);
    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
            <div className="h-full bg-blue-600 transition-[width] duration-75" style={{ width: `${pct}%` }} />
        </div>
    );
}

// ─── Table of Contents ────────────────────────────────────────────────────────
function TableOfContents({ toc }: { toc: TocItem[] }) {
    const [active, setActive] = useState('');

    useEffect(() => {
        if (!toc.length) return;
        const observer = new IntersectionObserver(
            entries => {
                for (const e of entries) if (e.isIntersecting) { setActive(e.target.id); break; }
            },
            { rootMargin: '-15% 0px -75% 0px' }
        );
        toc.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, [toc]);

    if (!toc.length) return null;

    return (
        <nav aria-label="Table of contents" className="text-sm">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-4">On This Page</p>
            <ul className="space-y-0.5">
                {toc.map(({ id, text, level }) => (
                    <li key={id} style={{ paddingLeft: `${(level - 2) * 10}px` }}>
                        <a href={`#${id}`}
                            onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                            className={`block py-1.5 pl-3 leading-snug border-l-2 transition-all duration-150 ${active === id
                                ? 'border-blue-500 text-blue-600 font-semibold'
                                : 'border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// ─── Sticky CTA ───────────────────────────────────────────────────────────────
function StickyCta() {
    const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-blue-600 rounded-2xl p-5 text-white shadow-lg">
                <p className="text-blue-200 text-[11px] font-bold uppercase tracking-widest mb-2">Free Quote</p>
                <p className="text-lg font-extrabold leading-snug mb-1">Need a repair?</p>
                <p className="text-blue-100 text-sm leading-relaxed mb-5">
                    Send photos of your damage and get a cash price within the hour.
                </p>
                <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20repair%20quote.`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors shadow mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={WA_PATH} /></svg>
                    WhatsApp Us
                </a>
                <a href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                </a>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">Why Choose Us</p>
                <ul className="space-y-2.5">
                    {['Proper workshop, not a van', 'Computer colour matching', 'Same day on most repairs', '10+ years experience', 'Free collection & delivery'].map(t => (
                        <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {t}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">Our Services</p>
                <ul className="space-y-2">
                    {[
                        { label: 'Bumper Repair', href: '/services/bumper-repair-rochdale' },
                        { label: 'Dent Removal', href: '/services/dent-removal-rochdale' },
                        { label: 'Scratch Repair', href: '/services/car-scratch-repair-rochdale' },
                        { label: 'Full Car Respray', href: '/services/full-car-respray-rochdale' },
                        { label: 'Lease Return Repairs', href: '/services/lease-return-repairs-rochdale' },
                    ].map(({ label, href }) => (
                        <li key={href}>
                            <Link href={href} className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// ─── Related posts ────────────────────────────────────────────────────────────
function RelatedPosts({ posts, currentIndex }: { posts: BlogPost[]; currentIndex: number }) {
    if (posts.length <= 1) return null;
    const related: BlogPost[] = [];
    related.push(posts[(currentIndex + 1) % posts.length]);
    if (posts.length > 2) related.push(posts[(currentIndex + 2) % posts.length]);

    return (
        <div className="mt-16 pt-10 border-t border-gray-100">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((r, i) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`}
                        className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                        <div className="relative h-32 overflow-hidden">
                            <img src={coverFor(i + 1)} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-5">
                            <p className="text-blue-500 text-[11px] font-bold uppercase tracking-widest mb-1">
                                {new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                            <h4 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{r.title}</h4>
                            <p className="text-gray-400 text-sm line-clamp-2">{r.excerpt}</p>
                            <span className="inline-flex items-center gap-1.5 mt-3 text-blue-600 font-bold text-sm group-hover:gap-2.5 transition-all">
                                Read Article
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function BlogPostClient({
    post, allPosts, postIndex, coverIndex, readingTime,
}: {
    post: BlogPost; allPosts: BlogPost[]; postIndex: number; coverIndex: number; readingTime: number;
}) {
    const { processed, toc } = processContent(post.content);
    const initials = authorInitials(post.author);

    return (
        <>
            <ReadingProgressBar />

            {/* ─────────────────────────────────────────────────────────────
                HERO — white background, editorial layout (matches reference)
            ───────────────────────────────────────────────────────────────── */}
            <div className="bg-white border-b border-gray-100 pt-8 pb-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12">

                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <span className="text-gray-300">/</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span className="text-gray-300">/</span>
                        <span className="text-gray-600 font-medium line-clamp-1 max-w-xs md:max-w-md">{post.title}</span>
                    </nav>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight mb-8 max-w-4xl">
                        {post.title}
                    </h1>

                    {/* Featured image */}
                    <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden bg-gray-100">
                        <img
                            src={coverFor(coverIndex)}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Author + meta row — below the image */}
                    <div className="flex items-center gap-3 pt-5 mt-5 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 select-none">
                            {initials}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm">{post.author}</p>
                            <p className="text-gray-400 text-sm">
                                {formatDate(post.date)}
                                <span className="mx-1.5">·</span>
                                {readingTime} min read
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                THREE-COLUMN BODY
                Left:  sticky ToC (220px)
                Centre: article content
                Right: sticky CTA (260px)
            ───────────────────────────────────────────────────────────────── */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_260px] gap-10 xl:gap-14">
                        {/* LEFT — ToC: self-start collapses the column to content height, sticky then works */}
                        <aside className="hidden lg:block self-start sticky top-28">
                            <TableOfContents toc={toc} />
                        </aside>

                        {/* CENTRE — article */}
                        <article className="min-w-0">
                            <Link href="/blog"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm mb-8 transition-colors">
                                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                                Back to Blog
                            </Link>

                            <div
                                className="sun-editor-editable !p-0 !bg-transparent blog-content"
                                style={{ fontFamily: 'inherit' }}
                                dangerouslySetInnerHTML={{ __html: processed }}
                            />

                            {/* Author box */}
                            <div className="mt-14 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-5">
                                <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-base flex-shrink-0">
                                    {initials}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">{post.author}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        The team at {BUSINESS_DETAILS.name} brings decades of experience in auto body repair. Restoring vehicles to their best, safely, swiftly, and affordably.
                                    </p>
                                </div>
                            </div>

                            <RelatedPosts posts={allPosts} currentIndex={postIndex} />

                            {/* Bottom CTA */}
                            <div className="mt-14 bg-blue-600 rounded-3xl p-8 text-white text-center">
                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Car Body Shop Rochdale</p>
                                <h3 className="text-2xl font-extrabold mb-2">Ready for a repair?</h3>
                                <p className="text-blue-100 mb-6 text-sm">Cash prices. Often same day. Free collection and delivery across Greater Manchester.</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-3">
                                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20repair%20quote.`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors">
                                        WhatsApp for a Quote
                                    </a>
                                    <a href={`tel:${BUSINESS_DETAILS.phone}`}
                                        className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-colors">
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* RIGHT — CTA: same pattern, self-start + sticky */}
                        <aside className="hidden lg:block self-start sticky top-28">
                            <StickyCta />
                        </aside>
                    </div>
                </div>
            </div>

            {/* Mobile sticky bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t border-gray-200 bg-white shadow-xl">
                <a href={`tel:${BUSINESS_DETAILS.phone}`}
                    className="flex-1 bg-blue-600 text-white font-bold py-4 flex items-center justify-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call
                </a>
                <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}?text=Hi%2C%20I'd%20like%20a%20free%20quote.`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white font-bold py-4 flex items-center justify-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                </a>
            </div>
        </>
    );
}
