/**
 * Single source of truth for the site's non-blog routes.
 *
 * Both `next.config.ts` (redirects) and `app/sitemap.ts` (sitemap) import from
 * here. They previously kept their own private copies of the same slug list,
 * which is how the sitemap ended up advertising 8 URLs that 301-redirect.
 */

export const BASE_URL = 'https://www.carbodyshop.org';

/** Every page under /services. Adding a service page? Add its slug here. */
export const SERVICE_SLUGS = [
    'full-car-respray-rochdale',
    'trade-motor-dealer-bodyshop-services',
    'accident-collision-repair-rochdale',
    'bumper-repair-rochdale',
    'dent-removal-rochdale',
    'car-scratch-repair-rochdale',
    'minor-accident-repair-rochdale',
    'lease-return-repairs-rochdale',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/**
 * Early blog posts that duplicated their matching service page and now
 * permanently redirect to it.
 *
 * These entries still exist in data/posts.json, so they must be filtered out of
 * the sitemap: a sitemap should only ever list canonical, 200-responding URLs.
 * The `ServiceSlug` type means a typo here fails the build rather than silently
 * leaving a redirecting URL in the sitemap.
 */
export const REDIRECTED_BLOG_SLUGS: readonly ServiceSlug[] = [
    'full-car-respray-rochdale',
    'trade-motor-dealer-bodyshop-services',
    'accident-collision-repair-rochdale',
    'bumper-repair-rochdale',
    'dent-removal-rochdale',
    'car-scratch-repair-rochdale',
    'minor-accident-repair-rochdale',
    'lease-return-repairs-rochdale',
];

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export interface PageRoute {
    /** Path appended to BASE_URL. Empty string is the homepage. */
    path: string;
    changeFrequency: ChangeFrequency;
    priority: number;
}

/**
 * Fixed pages that exist as files under app/. A page here can only appear or
 * disappear through a code change, so this list moves with the deploy that adds
 * or removes the route — unlike blog posts, which the admin panel can publish
 * at any time and which the sitemap therefore reads at runtime.
 */
export const PAGE_ROUTES: readonly PageRoute[] = [
    { path: '', changeFrequency: 'daily', priority: 1 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact-us', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
];

export interface ServedArea {
    name: string;
    /** Set once /areas/<slug> exists; the mega menu links it and the sitemap lists it. */
    slug?: string;
    note?: string;
}

/** Every area the business serves. Adding an area page means adding its slug here. */
export const SERVED_AREAS: readonly ServedArea[] = [
    { name: 'Whitworth', slug: 'car-body-shop-whitworth', note: 'Our workshop, Peel Mill, Shawforth' },
    { name: 'Rochdale' },
    { name: 'Littleborough', slug: 'car-body-shop-littleborough', note: 'Free collection, OL15' },
    { name: 'Milnrow' },
    { name: 'Heywood' },
    { name: 'Middleton' },
    { name: 'Bury' },
    { name: 'Oldham' },
    { name: 'Manchester' },
    { name: 'Bolton' },
];

export const AREA_PAGES = SERVED_AREAS.filter(
    (area): area is ServedArea & { slug: string } => Boolean(area.slug),
);
