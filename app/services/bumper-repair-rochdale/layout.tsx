import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bumper Repair Rochdale | Scuffs, Cracks & Scrapes Fixed',
    description: 'Car bumper repair in Rochdale from £150. Scuffs, scratches, cracks and plastic bumper damage repaired and colour-matched. Same day turnaround, cash prices.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/bumper-repair-rochdale',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
