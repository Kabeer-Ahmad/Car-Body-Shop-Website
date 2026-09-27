import { BUSINESS_DETAILS } from '@/app/constants';

/**
 * Live Google Map of the workshop. The whole map is a link to the Google Maps
 * listing, since clicks inside an iframe never reach the page. Fills its
 * parent, so the parent sets the size and shape.
 */
export default function MapEmbed() {
    return (
        <div className="relative w-full h-full min-h-[16rem] group">
            <iframe
                src={BUSINESS_DETAILS.mapsLink}
                title={`${BUSINESS_DETAILS.name} location on Google Maps`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                aria-hidden="true"
            />
            <a
                href={BUSINESS_DETAILS.mapsPlaceLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${BUSINESS_DETAILS.name}, ${BUSINESS_DETAILS.address}, in Google Maps`}
                className="absolute inset-0 flex items-end justify-start p-4 bg-transparent group-hover:bg-black/10 transition-colors"
            >
                <span className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-4 py-2.5 rounded-full shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Open in Google Maps
                </span>
            </a>
        </div>
    );
}
