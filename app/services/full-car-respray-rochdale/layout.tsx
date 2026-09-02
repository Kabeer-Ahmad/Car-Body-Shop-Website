import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Full Car Respray Rochdale | Car Painting & Vehicle Respray Specialists',
    description: 'Restore your vehicle with a professional full car respray in Rochdale. Expert colour matching, showroom-quality paint finishes, and free quotes from trusted specialists.',
    alternates: {
        canonical: 'https://www.carbodyshop.org/services/full-car-respray-rochdale',
    },
    openGraph: {
        title: 'Full Car Respray Rochdale | Car Painting & Vehicle Respray Specialists',
        description: 'Restore your vehicle with a professional full car respray in Rochdale. Expert colour matching, showroom-quality paint finishes, and free quotes from trusted specialists.',
        url: 'https://www.carbodyshop.org/services/full-car-respray-rochdale',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
