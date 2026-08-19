'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

export async function uploadEmbeddedImages(html: string, slug: string): Promise<string> {
    const imgRegex = /<img[^>]+src="(data:image\/[^;]+;base64,[^"]+)"[^>]*>/g;
    let result = html;
    const matches = [...html.matchAll(imgRegex)];

    for (const match of matches) {
        const dataUrl = match[1];
        const blob = await fetch(dataUrl).then((res) => res.blob());
        const form = new FormData();
        form.append('file', blob, 'upload.jpg');
        form.append('slug', slug);

        const res = await fetch('/api/admin/blog/image', { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Failed to upload an image from the editor.');
        }

        result = result.replace(dataUrl, data.url);
    }

    return result;
}

export function slugifyTitle(title: string) {
    return title
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

export type BlogPostFormValues = {
    title: string;
    author: string;
    excerpt: string;
    content: string;
};

type BlogPostFormProps = {
    heading: string;
    description: string;
    submitLabel: string;
    submittingLabel: string;
    slug?: string;
    initialValues?: Partial<BlogPostFormValues>;
    onSubmit: (values: BlogPostFormValues) => Promise<void>;
    extraActions?: React.ReactNode;
};

export default function BlogPostForm({
    heading,
    description,
    submitLabel,
    submittingLabel,
    slug,
    initialValues,
    onSubmit,
    extraActions,
}: BlogPostFormProps) {
    const [title, setTitle] = useState(initialValues?.title ?? '');
    const [author, setAuthor] = useState(initialValues?.author ?? 'Car Body Shop Team');
    const [excerpt, setExcerpt] = useState(initialValues?.excerpt ?? '');
    const [content, setContent] = useState(initialValues?.content ?? '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setStatus('');

        const trimmedTitle = title.trim();
        const trimmedAuthor = author.trim();
        const trimmedExcerpt = excerpt.trim();
        const trimmedContent = content.trim();

        if (!trimmedTitle || !trimmedAuthor || !trimmedExcerpt || !trimmedContent) {
            setError('Please fill out all fields.');
            setIsSubmitting(false);
            return;
        }

        try {
            setStatus('Uploading images...');
            const imageSlug = slug ?? slugifyTitle(trimmedTitle);
            const contentWithUrls = await uploadEmbeddedImages(trimmedContent, imageSlug);

            setStatus(submittingLabel.includes('Publish') ? 'Publishing post...' : 'Saving changes...');
            await onSubmit({
                title: trimmedTitle,
                author: trimmedAuthor,
                excerpt: trimmedExcerpt,
                content: contentWithUrls,
            });
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
            setIsSubmitting(false);
            setStatus('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8 border-b border-gray-200 bg-gray-50/50">
                        <h1 className="text-3xl font-extrabold text-gray-900">{heading}</h1>
                        <p className="text-gray-500 mt-2">{description}</p>
                        {slug && (
                            <p className="mt-2 text-sm text-gray-400">
                                URL: <span className="font-mono text-gray-600">/blog/{slug}</span>
                            </p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        {error && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-lg font-medium border border-red-100">
                                {error}
                            </div>
                        )}

                        {status && (
                            <div className="p-4 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-100">
                                {status}
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

                        <div className="pt-6 border-t border-gray-200 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                            {extraActions}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-4 bg-blue-600 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg sm:ml-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:-translate-y-0.5'
                                    }`}
                            >
                                {isSubmitting ? submittingLabel : submitLabel}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
