import { MetadataRoute } from 'next';
import { getPostsAsync } from '@/lib/blog-data';
import { BASE_URL, PAGE_ROUTES, REDIRECTED_BLOG_SLUGS, SERVICE_SLUGS } from '@/lib/site-routes';

/**
 * Blog posts are published through the admin panel, which writes data/posts.json
 * directly to GitHub — so a post can be created or removed without a redeploy.
 * Reading the post list at request time (getPostsAsync) and revalidating hourly
 * means the sitemap picks those changes up on its own.
 *
 * Fixed pages come from PAGE_ROUTES instead, because a page can only appear or
 * disappear via a code change, which ships with its own deploy.
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const pageUrls = PAGE_ROUTES.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    const serviceUrls = SERVICE_SLUGS.map((slug) => ({
        url: `${BASE_URL}/services/${slug}`,
        lastModified: now,
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }));

    // Skip posts that permanently redirect to their service page — listing a
    // redirecting URL wastes crawl budget and sends a mixed canonical signal.
    const redirected = new Set<string>(REDIRECTED_BLOG_SLUGS);
    const posts = await getPostsAsync();

    const blogUrls = posts
        .filter((post) => !redirected.has(post.slug))
        .map((post) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

    return [...pageUrls, ...serviceUrls, ...blogUrls];
}
