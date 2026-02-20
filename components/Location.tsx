import { BUSINESS_DETAILS } from '@/app/constants';

export default function Location() {
    return (
        <section className="py-16 bg-white" id="location">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Find Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Workshop</h3>
                        <p className="text-gray-600 mb-1">{BUSINESS_DETAILS.name}</p>
                        <p className="text-gray-600 mb-4">{BUSINESS_DETAILS.address}</p>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Service Area</h3>
                        <p className="text-gray-600">
                            Serving {BUSINESS_DETAILS.city} and surrounding areas including:
                            <br />
                            Rochdale, Whitworth, Bacup, Littleborough, Milnrow, and Heywood.
                        </p>

                        <a
                            href={BUSINESS_DETAILS.mapsDirectionLink || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_DETAILS.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-blue-900 font-bold rounded-lg transition-colors border border-gray-300"
                        >
                            Get Directions
                        </a>
                    </div>

                    <div className="h-80 bg-gray-200 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src={BUSINESS_DETAILS.mapsLink}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Car Body Shop Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
