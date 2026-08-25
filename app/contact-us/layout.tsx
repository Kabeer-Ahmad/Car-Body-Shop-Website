import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Car Body Shop Rochdale',
    description: 'Need a quote for car body repairs, dent removal, scratch repairs or a full car respray? Contact our Rochdale workshop today for a free, no-obligation estimate.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/contact-us',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
