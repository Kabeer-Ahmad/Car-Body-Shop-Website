import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Car Scratch Repair Rochdale | Paint Damage Fixed',
    description: 'Car scratch repair in Rochdale from £150. Colour matched, same day in most cases. Proper workshop, not a van on your driveway. Free quote.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/car-scratch-repair-rochdale',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
