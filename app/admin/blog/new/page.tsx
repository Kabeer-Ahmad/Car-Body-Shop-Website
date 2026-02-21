'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

export default function NewBlogPost() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('Car Body Shop Team');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (!title || !author || !excerpt || !content) {
            setError('Please fill out all fields.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/admin/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    author,
                    excerpt,
                    content
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to save post');
            }

            const { post } = await response.json();

            // Redirect to the new blog post
            router.push(`/blog/${post.slug}`);
            router.refresh();

        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 bg-gray-50/50">
                        <h1 className="text-3xl font-extrabold text-gray-900">Write New Blog Post</h1>
                        <p className="text-gray-500 mt-2">Create and publish a new article using the professional SunEditor.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {error && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-lg font-medium border border-red-100">
                                {error}
                            </div>
                        )}

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">Post Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. 5 Signs Your Car Needs a Respray"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="author" className="block text-sm font-bold text-gray-700 mb-2">Author</label>
                                    <input
                                        type="text"
                                        id="author"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                        placeholder="Author Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="excerpt" className="block text-sm font-bold text-gray-700 mb-2">Short Excerpt (Summary for Cards & SEO)</label>
                                <textarea
                                    id="excerpt"
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="A brief 1-2 sentence summary of the article..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Article Content</label>
                                <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                                    <SunEditor
                                        setContents={content}
                                        onChange={setContent}
                                        setOptions={{
                                            height: '500px',
                                            buttonList: [
                                                ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                                                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                                ['fontColor', 'hiliteColor'],
                                                ['removeFormat'],
                                                ['outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
                                                ['link', 'image', 'video'],
                                                ['fullScreen', 'showBlocks', 'codeView'],
                                                ['preview']
                                            ]
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-200 flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-4 bg-blue-600 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:-translate-y-0.5'
                                    }`}
                            >
                                {isSubmitting ? 'Publishing...' : 'Publish Post'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
