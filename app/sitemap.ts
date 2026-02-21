import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://carbodyshop.org'; // Replace with actual domain when live
    const blogPosts = getPosts();

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl} /blog/${post.slug} `,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...blogUrls,
    ];
}
