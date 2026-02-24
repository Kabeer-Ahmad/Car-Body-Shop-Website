import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/blog-data';
import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Blog | Car Body Repair Tips & Advice`,
    description: `Read the latest articles on car body repairs, dent removal, scratch repair costs, and local auto news from ${BUSINESS_DETAILS.name}.`,
    alternates: { canonical: 'https://carbodyshop.org/blog' },
    openGraph: {
        title: `Blog - ${BUSINESS_DETAILS.name}`,
        description: `Car body repair tips, guides, and cost breakdowns from the experts at ${BUSINESS_DETAILS.name}.`,
        url: 'https://carbodyshop.org/blog',
    }
}

export const dynamic = 'force-dynamic';

export default function BlogListing() {
    const blogPosts = getPosts();
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <section className="relative bg-gray-900 text-white min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90 z-0"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8 mt-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Auto Repair <span className="text-blue-400">Blog</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                        Tips, guides, and insights to help you take care of your vehicle's bodywork.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">

                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <div className="text-sm text-blue-600 font-bold mb-3 uppercase tracking-wider">
                                        {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </div>
                                    <h2 className="text-2xl border-b border-gray-100 pb-4 font-extrabold text-gray-900 mb-6 group-hover:text-blue-700 transition-colors leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-8 line-clamp-4 leading-relaxed text-lg">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto font-bold text-blue-600 group-hover:text-blue-800 flex items-center text-lg">
                                        Read Full Article
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800 mt-auto">
                <p>&copy; {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
                <div className="mt-4">
                    <Link href="/" className="hover:text-white transition-colors">Back to Home</Link>
                </div>
            </footer>
        </main>
    );
}
