'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function EstimateForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

    useEffect(() => {
        // Cleanup previews to avoid memory leaks
        return () => {
            previews.forEach(url => URL.revokeObjectURL(url));
        };
    }, [previews]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);

            // Combine with existing files but limit to 3 total
            const combinedFiles = [...selectedFiles, ...newFiles].slice(0, 3);
            setSelectedFiles(combinedFiles);

            // Generate previews
            const newPreviews = combinedFiles.map(file => URL.createObjectURL(file));
            // Revoke old previews
            previews.forEach(url => URL.revokeObjectURL(url));
            setPreviews(newPreviews);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);

        // Update previews
        const newPreviews = newFiles.map(file => URL.createObjectURL(file));
        // Revoke old previews
        previews.forEach(url => URL.revokeObjectURL(url));
        setPreviews(newPreviews);

        // Reset file input value to allow re-selecting the same file if needed
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        // Remove the default 'photos' entry from the inputs (which might be empty or partial)
        formData.delete('photos');

        // Append our managed files
        selectedFiles.forEach(file => {
            formData.append('photos', file);
        });

        try {
            const response = await fetch('/api/estimate', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitted(true);
                // Reset form
                e.currentTarget.reset();
                setSelectedFiles([]);
                setPreviews([]);
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong. Please try again or call us.');
            }
        } catch (err) {
            setError('Failed to send request. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section className="py-16 bg-white" id="estimate-form">
                <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 shadow-sm">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-green-800 mb-4">Message Sent!</h2>
                        <p className="text-gray-700 mb-6">
                            Thanks for getting in touch. We've received your details and photos. We'll examine them and get back to you shortly with a quote.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Send Another Request
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white" id="estimate-form">
            <div className="max-w-2xl mx-auto px-4 md:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get a Free Estimate</h2>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        Upload 1-3 photos of the damage for the most accurate price. We usually reply within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50"
                            placeholder="John Smith"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50"
                            placeholder="07700 900000"
                        />
                    </div>

                    <div>
                        <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-700 mb-1">
                            Vehicle Details <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="vehicle"
                            name="vehicle"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50"
                            placeholder="e.g. Audi A3 2018 Black"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
                            Description of Damage
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50"
                            placeholder="E.g. Scrape on rear bumper passenger side..."
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Upload Photos (Max 3)
                        </label>

                        {/* Previews Grid */}
                        {previews.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                {previews.map((preview, index) => (
                                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                                        <Image
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                                            aria-label="Remove photo"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {selectedFiles.length < 3 && (
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer relative">
                                <input
                                    id="photos"
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    onChange={handleFileChange}
                                    ref={fileInputRef}
                                />
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400 group-hover:text-blue-500 transition-colors"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="text-sm text-gray-600">
                                        <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG up to 10MB
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg shadow-md transition-all transform hover:-translate-y-0.5 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            'Send Estimate Request'
                        )}
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        By submitting this form, you agree to being contacted regarding your estimate.
                    </p>
                </form>
            </div>
        </section>
    );
}
