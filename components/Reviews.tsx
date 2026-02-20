'use client';

import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Sarah Jenkins",
        text: "Saved me a fortune compared to the main dealer. Did my bumper in 2 days. Looks brand new.",
        stars: 5,
    },
    {
        name: "Mike Thompson",
        text: "Excellent service. Texted photos, got a quote, job done. No messing about.",
        stars: 5,
    },
    {
        name: "Ahmed K.",
        text: "Fixed a nasty dent on my lease car before return. Passed inspection no problem. Highly recommend.",
        stars: 5,
    },
    {
        name: "Lisa Wood",
        text: "Honest guys. Told me exactly what could be done within my budget. The finish is perfect.",
        stars: 5,
    },
    {
        name: "David Wright",
        text: "Fast, friendly and local. Will definitely use again for any scratches.",
        stars: 5,
    },
];

// Duplicate reviews to create infinite loop effect
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

export default function Reviews() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden" id="reviews">
            <div className="max-w-full mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 px-4">What Our Customers Say</h2>

                <div className="relative w-full">
                    {/* Gradient Masks for smooth edges */}
                    <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: [0, -1000] }} // Adjust value based on width roughly, or use percentage if confident.
                        // A better way for infinite loop is using a specific duration relative to content. 
                        // Since we don't know exact pixel width easily without refs, we try a large translation.
                        // But specifically for infinite loop, we should translate by -50% if we doubled it?
                        // Actually, let's just animate "x" infinitely.
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            }
                        }}
                        style={{ x: 0 }} // Reset start
                    // Override animate to correct logic: move by the width of one set of items.
                    // For simplicity/reliability in this context without complex measurement logic:
                    // We will animate percentage. If we have 3 sets, moving -33.33% is one full set.
                    // Let's rely on CSS/Framer translation.
                    // Actually, let's calculate exact logic if possible or stick to simple marquee component pattern.
                    >
                        {/* 
                  re-doing the animate prop to be safer.
                  If the container is flex, and we have enough items to overflow screen.
                  We want to move leftwards.
               */}
                    </motion.div>

                    {/* Let's use a simpler clean implementation for the infinite scroll wrapper */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 pl-4"
                            animate={{ x: "-50%" }}
                            transition={{
                                ease: "linear",
                                duration: 50,
                                repeat: Infinity
                            }}
                            style={{ width: "max-content" }}
                        >
                            {[...reviews, ...reviews, ...reviews, ...reviews].map((review, index) => (
                                <div
                                    key={index}
                                    className="w-[300px] md:w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between flex-shrink-0"
                                >
                                    <div className="relative">
                                        {/* Stars */}
                                        <div className="flex text-yellow-400 mb-4 relative z-10">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Quote Icon - Moved to background and made lighter/smaller to avoid clash */}
                                        <svg className="absolute -top-4 -left-3 w-10 h-10 text-blue-50 transform -scale-x-100 z-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                        </svg>

                                        <p className="text-gray-600 italic mb-6 relative z-10 text-lg leading-relaxed">"{review.text}"</p>
                                    </div>

                                    <div className="flex items-center gap-3 mt-4 border-t border-gray-100 pt-4">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold shrink-0">
                                            {review.name.charAt(0)}
                                        </div>
                                        <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
