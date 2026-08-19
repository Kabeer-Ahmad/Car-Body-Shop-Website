'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BlogPostForm from '@/components/admin/BlogPostForm';

export default function NewBlogPost() {
    const router = useRouter();

    return (
        <BlogPostForm
            heading="Write New Blog Post"
            description="Create and publish a new article using the professional SunEditor."
            submitLabel="Publish Post"
            submittingLabel="Publishing..."
            onSubmit={async (values) => {
                const response = await fetch('/api/admin/blog', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });
                const data = await response.json().catch(() => ({}));
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to save post');
                }
                router.push(`/blog/${data.post.slug}`);
                router.refresh();
            }}
            extraActions={
                <Link
                    href="/admin/blog"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Manage posts
                </Link>
            }
        />
    );
}
