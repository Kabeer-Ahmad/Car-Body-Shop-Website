import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Minor Accident Repair Rochdale | Same Day, No Claim',
    description: 'Minor accident repair in Rochdale from £150. Small bumps and cosmetic damage fixed same day, no insurance claim needed. Free quote.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/minor-accident-repair-rochdale',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
