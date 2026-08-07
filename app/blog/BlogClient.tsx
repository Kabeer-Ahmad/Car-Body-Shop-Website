'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import type { BlogPost } from '@/lib/blog-data';

// ─── Deterministic cover image per post ──────────────────────────────────────
// We cycle through our gallery images since posts have no featuredImage field.
const GALLERY_COVERS = [
    '/gallery/AfteR_Cad_Fender_paint.webp',
    '/gallery/After_Van_Backdoor_Complete.webp',
    '/gallery/Bumper Lip After.webp',
    '/gallery/AfteR_Rim_Job.webp',
    '/gallery/Middlestage_Car_Fender_Putene.webp',
    '/gallery/Middlestage_Van_backdoor_Putene.webp',
    '/gallery/Before_Car_Fender_Dent.webp',
];

function coverFor(slug: string, index: number): string {
    return GALLERY_COVERS[index % GALLERY_COVERS.length];
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ─── Search bar component ─────────────────────────────────────────────────────
function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
                </svg>
            </div>
            <input
                type="search"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search articles, tips, repairs..."
                className="w-full pl-14 pr-6 py-4 md:py-5 bg-white text-gray-900 placeholder-gray-400 rounded-2xl shadow-xl text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-transparent"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className="absolute inset-y-0 right-0 flex items-center pr-5 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
}

// ─── Blog card ────────────────────────────────────────────────────────────────
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    const cover = coverFor(post.slug, index);

    return (
        <Link href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">

            {/* Featured image */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient bleed into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
            </div>

            {/* Card body — sits directly below the image gradient, creating a merge effect */}
            <div className="flex flex-col flex-grow px-7 pb-7 -mt-4 relative z-10">
                {/* Date */}
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">
                    {formatDate(post.date)}
                </p>

                {/* Title */}
                <h2 className="text-xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                    Read Full Article
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

// ─── Main client component ────────────────────────────────────────────────────
export default function BlogClient({ posts }: { posts: BlogPost[] }) {
    const [query, setQuery] = useState('');

    const sorted = useMemo(
        () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        [posts]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return sorted;
        return sorted.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            (p.author ?? '').toLowerCase().includes(q)
        );
    }, [sorted, query]);

    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="relative bg-gray-900 text-white overflow-hidden pt-20 pb-24">
                {/* Background texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black" />
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 25% 60%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1d4ed8 0%, transparent 40%)' }} />

                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
                    <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                        Car Body Shop &mdash; Rochdale
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
                        Auto Repair <span className="text-blue-400">Advice &amp; Tips</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        Practical guides, cost breakdowns, and expert advice on car bodywork from our Rochdale workshop.
                    </p>
                    <SearchBar value={query} onChange={setQuery} />
                    {query && (
                        <p className="text-gray-400 text-sm mt-4">
                            {filtered.length === 0
                                ? 'No articles found. Try a different search term.'
                                : `${filtered.length} article${filtered.length === 1 ? '' : 's'} found`}
                        </p>
                    )}
                </div>
            </section>

            {/* ── GRID ─────────────────────────────────────────────────────── */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filtered.map((post, i) => (
                                <BlogCard key={post.slug} post={post} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <svg className="w-14 h-14 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500 text-lg font-medium mb-2">No articles found</p>
                            <p className="text-gray-400 text-sm">Try a different search term or <button onClick={() => setQuery('')} className="text-blue-500 underline">clear the search</button>.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
