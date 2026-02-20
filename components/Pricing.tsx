import Link from 'next/link';

export default function Pricing() {
    return (
        <section className="py-16 bg-white" id="pricing">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Typical Repair Ranges</h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    Every dent is different. These are guide prices to give you an idea of our affordable rates.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                        <h3 className="font-bold text-gray-800 text-lg mb-2">Small Scuff / Scratch</h3>
                        <p className="text-3xl font-bold text-blue-600">£200 – £400</p>
                        <p className="text-sm text-gray-500 mt-2">Perfect for bumper corners & panels</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-blue-100 shadow-sm text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                        <h3 className="font-bold text-gray-800 text-lg mb-2">Dent Repair</h3>
                        <p className="text-3xl font-bold text-blue-600">£200 – £800</p>
                        <p className="text-sm text-gray-500 mt-2">Dents pulled and painted</p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                        <h3 className="font-bold text-gray-800 text-lg mb-2">Bumper Respray</h3>
                        <p className="text-3xl font-bold text-blue-600">£150 – £800</p>
                        <p className="text-sm text-gray-500 mt-2">Full bumper refurbishment</p>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                    <p className="text-lg text-blue-900 font-medium mb-4">
                        "Final price depends on the damage. Send us photos for an accurate quote in minutes."
                    </p>
                    <a
                        href="/#estimate-form"
                        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                    >
                        Get Accurate Quote
                    </a>
                </div>
            </div>
        </section>
    );
}
