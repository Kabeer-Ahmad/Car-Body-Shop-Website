import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trade & Motor Dealer Bodyshop Services Rochdale",
    description: "Trade & motor dealer bodyshop services in Rochdale. Priority booking, trade pricing calculator, 1–3 day turnaround for dealers, traders & fleets.",
    alternates: {
        canonical: "https://www.carbodyshop.org/services/trade-motor-dealer-bodyshop-services",
    }
};

export default function TradeBodyshopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
