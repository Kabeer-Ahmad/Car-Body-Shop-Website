import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Car Body Shop Rochdale',
    description: 'Car Body Shop is a trusted car body repair shop in Whitworth, Rochdale, providing expert repairs for dents, scratches, bumpers, accident damage and full car resprays.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/about',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
