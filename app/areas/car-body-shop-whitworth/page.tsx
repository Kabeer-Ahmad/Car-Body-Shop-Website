import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import CTA from '@/components/CTA';
import EstimateForm from '@/components/EstimateForm';
import FAQ, { type FaqItem } from '@/components/FAQ';
import AnimatedSection from '@/components/AnimatedSection';
import { HubEstimator } from '@/app/services/ClientSections';
import { BUSINESS_DETAILS } from '@/app/constants';
import { BASE_URL } from '@/lib/site-routes';
import { breadcrumbList, businessNode, BUSINESS_ID } from '@/lib/schema';

const PAGE_URL = `${BASE_URL}/areas/car-body-shop-whitworth`;
const TITLE = 'Car Body Shop Whitworth | Car Body Repairs, Rochdale OL12';
const DESCRIPTION = 'Car body shop in Whitworth, OL12 8HN. Dent removal from £80, bumper repair from £150, full resprays from £800. Cash prices, same day on most repairs.';

export const metadata: Metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: BUSINESS_DETAILS.name,
        locale: 'en_GB',
        type: 'website',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Car Body Shop workshop in Whitworth' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['/og-image.png'],
    },
};

const FAQS: FaqItem[] = [
    {
        question: 'Where is your car body shop in Whitworth?',
        answer: 'Car Body Shop is in Whitworth, Rochdale, OL12 8HN, between Rochdale and Bacup. The workshop is open Monday to Friday 8:30am to 5:30pm and Saturday 9am to 1pm.',
    },
    {
        question: 'How much does car body repair cost in Whitworth?',
        answer: 'Dent removal starts from £80, scratch repair from £80, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Send photos on WhatsApp for an exact cash price.',
    },
    {
        question: 'How long do car body repairs take?',
        answer: 'Most dents, scratches and bumper scuffs are finished the same day. Cracked bumpers and multi-panel repairs take 1 to 2 days, and a full respray takes 2 to 5 working days.',
    },
    {
        question: 'Do you offer collection and delivery in Whitworth?',
        answer: 'Yes. Collection and delivery is free across Whitworth, Facit, Shawforth and Healey, and across the rest of Rochdale, Littleborough, Milnrow and Heywood.',
    },
    {
        question: 'Do I need to claim on my insurance?',
        answer: 'No. Every repair is priced in cash, so there is no excess to pay and no claim on your policy or your no claims discount.',
    },
    {
        question: 'Can I get a quote without bringing my car in?',
        answer: `Yes. Send clear photos of the damage on WhatsApp to ${BUSINESS_DETAILS.phone} and we reply with an itemised cash price within the hour.`,
    },
];

const WHY_POINTS = [
    { title: 'Same Day on Most Repairs', text: 'Most dents, scratches and bumper scuffs are finished the same day.' },
    { title: 'Cash Prices, No Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
    { title: 'Computer Colour Matching', text: 'Every repair is matched to your manufacturer paint code.' },
    { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our workshop booth, not on a driveway.' },
    { title: 'Photo Quotes Within the Hour', text: 'Send photos on WhatsApp for an itemised cash price.' },
    { title: 'Free Collection and Delivery', text: 'Across Whitworth, Facit, Shawforth, Healey and the rest of OL12.' },
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        businessNode(),
        {
            '@type': 'WebPage',
            '@id': `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: TITLE,
            description: DESCRIPTION,
            about: { '@id': BUSINESS_ID },
        },
        breadcrumbList([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Car Body Shop Whitworth', url: PAGE_URL },
        ]),
    ],
};

export default function WhitworthPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <Hero
                title="Car Body Shop Whitworth"
                highlight="Dent, Scratch, Bumper & Accident Repairs"
                subtitle="Our workshop is in Whitworth, OL12 8HN, between Rochdale and Bacup. Cash prices with no insurance claim, same day on most dents, scratches and scuffs, and free collection and delivery."
                imageAlt="Car body shop workshop in Whitworth, Rochdale"
                formSubtitle="Free estimate, no obligation. We confirm within the hour."
                locationPlaceholder="e.g. Whitworth, OL12"
            />
            <StatsBar />

            <AnimatedSection delay={0.1}>
                <Services
                    title="Car Body Repair Services in Whitworth"
                    subtitle="Every repair is carried out at our Whitworth workshop, from a single dent to a full respray."
                    ctaLabel={`Call for Free Advice: ${BUSINESS_DETAILS.phone}`}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Gallery
                    title="Before and After Repairs From Our Whitworth Workshop"
                    subtitle="Drag each slider to compare the damage with the finished repair."
                />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <WhyChooseUs
                    title="Why Whitworth Drivers Choose Car Body Shop"
                    description="Car Body Shop has repaired vehicles from its Whitworth workshop for over 10 years, with more than 5,000 repairs completed. Every job gets a fixed cash price before work starts."
                    points={WHY_POINTS}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <HubEstimator whatsapp={BUSINESS_DETAILS.whatsapp} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Reviews />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Location
                    title="Car Body Shop in Whitworth, Rochdale"
                    description="Find us in Whitworth, OL12 8HN, between Rochdale and Bacup. Drive in for a free assessment during opening hours, or send photos on WhatsApp first for a cash price."
                />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <CTA
                    title="Car Body Repairs in Whitworth"
                    subtitle="Send photos on WhatsApp for a cash price within the hour, or call to book a free assessment at our Whitworth workshop."
                    estimateHref="#estimate-form"
                />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <FAQ faqs={FAQS} subtitle="Common questions from Whitworth drivers, answered by our team." />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <EstimateForm />
            </AnimatedSection>

            <Footer />
        </main>
    );
}
