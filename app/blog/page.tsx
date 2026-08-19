import { getPostsAsync } from '@/lib/blog-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BUSINESS_DETAILS } from '@/app/constants';
import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: `Blog | Car Body Repair Tips & Advice`,
    description: `Read the latest articles on car body repairs, dent removal, scratch repair costs, and local auto news from ${BUSINESS_DETAILS.name}.`,
    alternates: { canonical: 'https://www.carbodyshop.org/blog' },
    openGraph: {
        title: `Blog - ${BUSINESS_DETAILS.name}`,
        description: `Car body repair tips, guides, and cost breakdowns from the experts at ${BUSINESS_DETAILS.name}.`,
        url: 'https://www.carbodyshop.org/blog',
    },
};

export const dynamic = 'force-dynamic';

export default async function BlogListing() {
    const posts = await getPostsAsync();
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <BlogClient posts={posts} />
            <Footer />
        </main>
    );
}
