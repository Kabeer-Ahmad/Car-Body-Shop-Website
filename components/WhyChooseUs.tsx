export default function WhyChooseUs() {
    const reasons = [
        "Fast turnaround times (1-2 days)",
        "Affordable cash pricing - no hidden fees",
        "No insurance hassle or premium hikes",
        "Honest estimates via WhatsApp",
        "Experienced & qualified technicians",
        "Local trusted business in Rochdale",
    ];

    return (
        <section className="py-16 bg-blue-900 text-white" id="why-us">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-blue-800/50 p-4 rounded-lg">
                            <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium text-lg">{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
