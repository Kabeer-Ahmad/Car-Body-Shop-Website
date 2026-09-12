/**
 * Shared JSON-LD building blocks.
 *
 * The business's name/address/phone (NAP) and geo-coordinates must be
 * identical wherever they appear, per Google's guidance for a multi-location
 * or multi-page AutoBodyShop entity. Centralising them here means a future
 * correction (the geo fix applied when this file was introduced was previously
 * wrong by ~2km, and used the invalid country code "UK" instead of "GB") only
 * has to happen once, instead of drifting across nine separate page files.
 */

export const BUSINESS_ID = 'https://www.carbodyshop.org/#business';

/**
 * The AutoBodyShop node, repeated on every page that references it via
 * `{ "@id": BUSINESS_ID }`. Each page's JSON-LD is parsed independently by
 * search engines, so the @id only resolves to a real entity if this node is
 * present in that same page's own graph — a reference with nothing local to
 * resolve to is inert. Every page below that references BUSINESS_ID also
 * includes businessNode() in its @graph for exactly that reason.
 */
export function businessNode() {
    return {
        '@type': 'AutoBodyShop',
        '@id': BUSINESS_ID,
        name: 'Car Body Shop',
        telephone: '+447471512557',
        email: 'carbodyshopltd@gmail.com',
        url: 'https://www.carbodyshop.org',
        priceRange: '££',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '2 Whitworth',
            addressLocality: 'Rochdale',
            addressRegion: 'Greater Manchester',
            postalCode: 'OL12 8HN',
            addressCountry: 'GB',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 53.684267, longitude: -2.166254 },
    };
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export function breadcrumbList(items: BreadcrumbItem[]) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
