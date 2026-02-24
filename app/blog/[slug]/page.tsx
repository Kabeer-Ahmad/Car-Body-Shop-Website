import { getPostBySlug, getPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import ReadingProgress from '@/components/ReadingProgress';
import ShareButtons from '@/components/ShareButtons';
import 'suneditor/dist/css/suneditor.min.css';

export async function generateStaticParams() {
    return getPosts().map((post) => ({
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
        alternates: { canonical: `https://carbodyshop.org/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://carbodyshop.org/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: [BUSINESS_DETAILS.name],
        },
        twitter: {
            card: 'summary',
            title: post.title,
            description: post.excerpt,
        }
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Calculate reading time estimated at 200 words per minute (stripping html tags for accurate count)
    const wordCount = post.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    // Get up to 2 random articles for "Read Next", excluding current post
    const relatedPosts = [...getPosts()]
        .filter(p => p.slug !== slug)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    // We can add JSON-LD specifically for the Article here
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
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
            <ReadingProgress />
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center mb-6 md:mb-8 transition-colors w-fit">
                    <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    Back to Blog
                </Link>

                <header className="mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-100 pb-8">
                        <div className="flex flex-wrap items-center text-sm md:text-base text-gray-500 gap-y-3">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </div>
                            <span className="mx-3 hidden sm:inline">•</span>
                            <div className="flex items-center w-full sm:w-auto mt-2 sm:mt-0">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {post.author}
                            </div>
                            <span className="mx-3 hidden sm:inline">•</span>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {readingTime} min read
                            </div>
                        </div>

                        <ShareButtons url={`https://carbodyshop.org/blog/${post.slug}`} title={post.title} />
                    </div>

                    {/* Cover image removed for better reading experience */}
                </header>

                {/* Wrapping the content in sun-editor-editable applies the exact same CSS as the editor */}
                <div
                    className="sun-editor-editable !p-0 !bg-transparent text-gray-800 leading-relaxed text-base md:text-lg prose prose-blue max-w-none prose-img:rounded-xl prose-img:shadow-md"
                    style={{ fontFamily: 'inherit' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-12 border-t border-gray-100">
                    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6 border border-gray-100 mb-16">
                        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The team at {BUSINESS_DETAILS.name} brings decades of experience in auto body repair. We are passionate about restoring vehicles to their former glory safely, swiftly, and affordably.
                            </p>
                        </div>
                    </div>

                    {relatedPosts.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-4">Read Next</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedPosts.map(related => (
                                    <Link href={`/blog/${related.slug}`} key={related.slug} className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                                        <h4 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{related.title}</h4>
                                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{related.excerpt}</p>
                                        <div className="text-blue-600 font-bold text-sm tracking-wide flex items-center mt-auto">
                                            Read Article
                                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

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
