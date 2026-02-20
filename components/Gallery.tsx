'use client';

import ComparisonSlider from './ComparisonSlider';

const galleryItems = [
    {
        id: 1,
        before: "/gallery/Before_Car_Fender_Dent.webp",
        after: "/gallery/AfteR_Cad_Fender_paint.webp",
        description: "Fender dent repair & respray – 1-2 days",
    },
    {
        id: 2,
        before: "/gallery/Before_VAN_Backdoor.webp",
        after: "/gallery/After_Van_Backdoor_Complete.webp",
        description: "Van door restoration – 1-2 days",
    },
    {
        id: 3,
        before: "/gallery/before_Rim_Job.webp",
        after: "/gallery/AfteR_Rim_Job.webp",
        description: "Alloy wheel refurbishment – 1-2 days",
    },
    {
        id: 4,
        before: "/gallery/Bumper%20Lip%20Before.webp",
        after: "/gallery/Bumper%20Lip%20After.webp",
        description: "Bumper lip repair and paint – 1-2 days",
    },
];

export default function Gallery() {
    return (
        <section className="py-20 bg-gray-50" id="gallery">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Recent Work</h2>
                <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Drag the slider to see the transformation.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                            <div className="relative w-full h-fit">
                                <ComparisonSlider before={item.before} after={item.after} />
                            </div>
                            <div className="p-5 bg-white border-t border-gray-100">
                                <p className="font-semibold text-gray-800 text-center">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
