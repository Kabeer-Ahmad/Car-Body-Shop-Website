import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://carbodyshop.org';
    const blogPosts = getPosts();

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const serviceSlugs = [
        'full-car-respray-rochdale',
        'trade-motor-dealer-bodyshop-services',
        'accident-collision-repair-rochdale',
        'bumper-repair-rochdale',
        'dent-removal-rochdale',
        'car-scratch-repair-rochdale',
        'minor-accident-repair-rochdale',
        'lease-return-repairs-rochdale'
    ];

    const serviceUrls = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
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
        ...serviceUrls,
    ];
}
