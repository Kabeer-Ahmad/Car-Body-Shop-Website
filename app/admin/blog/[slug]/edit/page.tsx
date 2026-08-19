'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import BlogPostForm from '@/components/admin/BlogPostForm';

export default function EditBlogPostPage() {
    const router = useRouter();
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : '';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [initialValues, setInitialValues] = useState<{
        title: string;
        author: string;
        excerpt: string;
        content: string;
    } | null>(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!slug) {
            setError('Invalid post URL.');
            setLoading(false);
            return;
        }

        fetch(`/api/admin/blog/${encodeURIComponent(slug)}`)
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || 'Failed to load post');
                setInitialValues({
                    title: data.post.title,
                    author: data.post.author,
                    excerpt: data.post.excerpt,
                    content: data.post.content,
                });
            })
            .catch((err: unknown) => {
                setError(err instanceof Error ? err.message : 'Failed to load post');
            })
            .finally(() => setLoading(false));
    }, [slug]);

    async function handleDelete() {
        if (!initialValues) return;
        if (!confirm(`Delete "${initialValues.title}"? This cannot be undone.`)) return;

        setDeleting(true);
        setError('');

        try {
            const res = await fetch(`/api/admin/blog/${encodeURIComponent(slug)}`, { method: 'DELETE' });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to delete post');

            router.push('/admin/blog');
            router.refresh();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : 'Failed to delete post');
            setDeleting(false);
        }
    }

    if (loading) {
        return <div className="min-h-screen bg-gray-50 pt-28 px-4 text-gray-500">Loading post...</div>;
    }

    if (error && !initialValues) {
        return (
            <div className="min-h-screen bg-gray-50 pt-28 px-4">
                <div className="max-w-xl mx-auto p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">{error}</div>
            </div>
        );
    }

    if (!initialValues) return null;

    return (
        <BlogPostForm
            heading="Edit Blog Post"
            description="Update this article and save your changes."
            submitLabel="Save changes"
            submittingLabel="Saving..."
            slug={slug}
            initialValues={initialValues}
            onSubmit={async (values) => {
                const response = await fetch(`/api/admin/blog/${encodeURIComponent(slug)}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });
                const data = await response.json().catch(() => ({}));
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to update post');
                }
                router.push(`/blog/${data.post.slug}`);
                router.refresh();
            }}
            extraActions={
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="/admin/blog"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                    >
                        Back to list
                    </Link>
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={deleting}
                        className="inline-flex items-center justify-center rounded-lg border border-red-200 px-4 py-3 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                    >
                        {deleting ? 'Deleting...' : 'Delete post'}
                    </button>
                </div>
            }
        />
    );
}
