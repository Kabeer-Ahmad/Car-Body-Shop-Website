'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type PostSummary = {
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
};

export default function AdminBlogListPage() {
    const router = useRouter();
    const [posts, setPosts] = useState<PostSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/admin/blog')
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Failed to load posts');
                setPosts(data.posts);
            })
            .catch((err: unknown) => {
                setError(err instanceof Error ? err.message : 'Failed to load posts');
            })
            .finally(() => setLoading(false));
    }, []);

    async function handleDelete(slug: string, title: string) {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

        setDeletingSlug(slug);
        setError('');

        try {
            const res = await fetch(`/api/admin/blog/${encodeURIComponent(slug)}`, { method: 'DELETE' });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to delete post');

            setPosts((current) => current.filter((post) => post.slug !== slug));
            router.refresh();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Failed to delete post');
        } finally {
            setDeletingSlug(null);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">Manage Blog Posts</h1>
                        <p className="text-gray-500 mt-2">Edit or delete existing articles.</p>
                    </div>
                    <Link
                        href="/admin/blog/new"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700"
                    >
                        Write new post
                    </Link>
                </div>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg font-medium border border-red-100">
                        {error}
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {loading ? (
                        <div className="p-8 text-gray-500">Loading posts...</div>
                    ) : posts.length === 0 ? (
                        <div className="p-8 text-gray-500">No blog posts yet.</div>
                    ) : (
                        <ul className="divide-y divide-gray-100">
                            {posts.map((post) => (
                                <li key={post.slug} className="p-5 sm:p-6">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="min-w-0">
                                            <h2 className="text-lg font-bold text-gray-900">{post.title}</h2>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {post.date} · {post.author}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                                            <p className="mt-2 text-xs font-mono text-gray-400">/blog/{post.slug}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                href={`/admin/blog/${post.slug}/edit`}
                                                className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => handleDelete(post.slug, post.title)}
                                                disabled={deletingSlug === post.slug}
                                                className="inline-flex items-center justify-center rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                                            >
                                                {deletingSlug === post.slug ? 'Deleting...' : 'Delete'}
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
