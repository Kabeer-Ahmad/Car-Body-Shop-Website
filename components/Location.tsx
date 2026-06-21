import { BUSINESS_DETAILS } from '@/app/constants';

export default function Location() {
    return (
        <section className="py-16 bg-white" id="location">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Find Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Workshop</h3>
                            <p className="text-gray-600 mb-1 font-medium">{BUSINESS_DETAILS.name}</p>
                            <p className="text-gray-600">{BUSINESS_DETAILS.address}</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                            <ul className="text-gray-600 space-y-1">
                                <li className="flex justify-between max-w-xs mx-auto md:mx-0"><span>Monday - Friday:</span> <span className="font-medium">8:30 AM - 5:30 PM</span></li>
                                <li className="flex justify-between max-w-xs mx-auto md:mx-0"><span>Saturday:</span> <span className="font-medium">9:00 AM - 1:00 PM</span></li>
                                <li className="flex justify-between max-w-xs mx-auto md:mx-0"><span>Sunday:</span> <span className="font-medium">Closed</span></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Service Area</h3>
                            <p className="text-gray-600 mb-2">Serving {BUSINESS_DETAILS.city} and surrounding areas including:</p>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {['Rochdale', 'Whitworth', 'Bacup', 'Littleborough', 'Milnrow', 'Heywood', 'Bury', 'Oldham'].map((area) => (
                                    <span key={area} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

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
