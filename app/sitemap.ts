import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://carbodyshopltd.co.uk'; // Replace with actual domain when live

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Since it's a single page site, we mostly just need the root. 
        // If we had other pages like /services, we would validly list them here.
    ];
}
