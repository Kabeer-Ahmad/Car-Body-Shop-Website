import { getPostBySlug, blogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | ${BUSINESS_DETAILS.name}`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://carbodyshop.org/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: [BUSINESS_DETAILS.name],
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        }
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // We can add JSON-LD specifically for the Article here
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [
            `https://carbodyshop.org${post.coverImage}`
        ],
        "datePublished": post.date,
        "dateModified": post.date,
        "author": [{
            "@type": "Person",
            "name": post.author,
        }],
        "publisher": {
            "@type": "Organization",
            "name": BUSINESS_DETAILS.name,
            "logo": {
                "@type": "ImageObject",
                "url": "https://carbodyshop.org/logo.png"
            }
        }
    };

    return (
        <main className="min-h-screen bg-white pt-20">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="max-w-4xl mx-auto px-4 md:px-8 py-16">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center mb-8 transition-colors w-fit">
                    <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Back to Blog
                </Link>

                <header className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-gray-500 mb-8 border-b border-gray-100 pb-8">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        <span className="mx-4">•</span>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {post.author}
                        </div>
                    </div>

                    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-md bg-gray-100 mb-12">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div
                    className="prose prose-lg md:prose-xl prose-blue max-w-none text-gray-700 
                    prose-headings:font-bold prose-headings:text-gray-900 
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:leading-relaxed prose-p:mb-6
                    prose-li:my-2 prose-ul:my-6
                    prose-strong:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-gray-100 bg-blue-50 -mx-4 md:-mx-8 px-4 md:px-8 pb-12 rounded-b-3xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a repair?</h3>
                        <p className="text-gray-600 mb-8">
                            Get a fast, free estimate for your vehicle directly on WhatsApp or via our form.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href={`tel:${BUSINESS_DETAILS.phone}`}
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md"
                            >
                                Call Now
                            </a>
                            <Link
                                href="/#estimate-form"
                                className="px-8 py-3 bg-white hover:bg-gray-50 text-blue-900 border border-gray-200 font-bold rounded-lg transition-colors shadow-sm"
                            >
                                Get Online Estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
