import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'], // Disallow API routes and the internal admin form from being indexed
        },
        sitemap: 'https://www.carbodyshop.org/sitemap.xml',
    };
}
