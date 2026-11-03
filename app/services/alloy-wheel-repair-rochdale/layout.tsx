import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: 'Alloy Wheel Repair Rochdale | Alloy Wheel Refurbishment from £80' },
    description: 'Alloy wheel repair and refurbishment in Rochdale. Kerb scuff repair from £80 per wheel, full alloy refurbs, diamond cut refurbs and cracked alloy wheel repair. Cash prices.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/alloy-wheel-repair-rochdale',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
