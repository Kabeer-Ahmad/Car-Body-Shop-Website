import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Car Dent Removal Rochdale | Paintless & Traditional',
    description: 'Car dent removal in Rochdale from £150. Paintless dent removal and traditional repair, same day in most cases. Free quote via WhatsApp.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/dent-removal-rochdale',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
