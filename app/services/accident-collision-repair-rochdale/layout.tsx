import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accident & Collision Repair Rochdale | Car Body Shop',
    description: 'Car accident repair in Rochdale from £150. No insurance needed. Cash prices, 2-4 day turnaround and free quote within the hour.',
    openGraph: {
        title: 'Accident & Collision Repair Rochdale | Car Body Shop',
        description: 'Car accident repair in Rochdale from £150. No insurance needed. Cash prices, 2-4 day turnaround and free quote within the hour.',
        url: 'https://www.carbodyshop.org/services/accident-collision-repair-rochdale',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
