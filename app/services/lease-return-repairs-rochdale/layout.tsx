import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lease Return Repairs Rochdale | Avoid Dealer Charges',
    description: 'Lease return repairs in Rochdale from £150. Fix damage before inspection and avoid dealer penalty charges. Same day in most cases. Free quote.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/lease-return-repairs-rochdale',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
