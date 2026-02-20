import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Disallow API routes from being indexed
        },
        sitemap: 'https://carbodyshopltd.co.uk/sitemap.xml',
    };
}
