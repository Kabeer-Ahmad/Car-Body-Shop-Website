import { getPostBySlugAsync, getPosts, getPostsAsync } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

const GALLERY_COVERS = [
    '/gallery/AfteR_Cad_Fender_paint.webp',
    '/gallery/After_Van_Backdoor_Complete.webp',
    '/gallery/Bumper Lip After.webp',
    '/gallery/AfteR_Rim_Job.webp',
    '/gallery/Middlestage_Car_Fender_Putene.webp',
    '/gallery/Middlestage_Van_backdoor_Putene.webp',
    '/gallery/Before_Car_Fender_Dent.webp',
];

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlugAsync(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | ${BUSINESS_DETAILS.name}`,
        description: post.excerpt,
        alternates: { canonical: `https://www.carbodyshop.org/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.carbodyshop.org/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: [BUSINESS_DETAILS.name],
        },
        twitter: {
            card: 'summary',
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlugAsync(slug);
    if (!post) notFound();

    const allPosts = await getPostsAsync();
    const postIndex = allPosts.findIndex(p => p.slug === slug);
    const coverIndex = Math.max(0, postIndex) % GALLERY_COVERS.length;
    const wordCount = post.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        author: [{ '@type': 'Person', name: post.author }],
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_DETAILS.name,
            logo: { '@type': 'ImageObject', url: 'https://www.carbodyshop.org/logo.png' },
        },
    };

    return (
        <main className="min-h-screen bg-white pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />
            <BlogPostClient
                post={post}
                allPosts={allPosts}
                postIndex={postIndex}
                coverIndex={coverIndex}
                readingTime={readingTime}
            />
            <Footer />
        </main>
    );
}
