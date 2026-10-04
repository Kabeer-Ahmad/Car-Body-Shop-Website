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

/** Everything that differs between area pages. Layout and section order are shared. */
export interface AreaPageContent {
    slug: string;
    name: string;
    /** Full <title>, used as-is (skips the site-wide suffix). */
    title: string;
    description: string;
    hero: { title: string; highlight: string; subtitle: React.ReactNode; imageAlt: string; locationPlaceholder: string };
    services: { title: string; subtitle: string };
    gallery: { title: string; subtitle: string };
    why: { title: string; description: string; points: { title: string; text: React.ReactNode }[] };
    location: { title: string; description: React.ReactNode };
    cta: { title: string; subtitle: string };
    faqs: FaqItem[];
    faqSubtitle: string;
}

const pageUrl = (slug: string) => `${BASE_URL}/areas/${slug}`;

export function areaMetadata(content: AreaPageContent): Metadata {
    const url = pageUrl(content.slug);
    return {
        title: { absolute: content.title },
        description: content.description,
        alternates: { canonical: url },
        openGraph: {
            title: content.title,
            description: content.description,
            url,
            siteName: BUSINESS_DETAILS.name,
            locale: 'en_GB',
            type: 'website',
            images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${BUSINESS_DETAILS.name} serving ${content.name}` }],
        },
        twitter: {
            card: 'summary_large_image',
            title: content.title,
            description: content.description,
            images: ['/og-image.png'],
        },
    };
}

export default function AreaPage({ content }: { content: AreaPageContent }) {
    const url = pageUrl(content.slug);
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            businessNode(),
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: content.title,
                description: content.description,
                about: { '@id': BUSINESS_ID },
            },
            breadcrumbList([
                { name: 'Home', url: `${BASE_URL}/` },
                { name: content.hero.title, url },
            ]),
        ],
    };

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <Hero
                {...content.hero}
                formSubtitle="Free estimate, no obligation. We confirm within the hour."
            />
            <StatsBar />

            <AnimatedSection delay={0.1}>
                <Services {...content.services} ctaLabel={`Call for Free Advice: ${BUSINESS_DETAILS.phoneDisplay}`} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Gallery {...content.gallery} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <WhyChooseUs {...content.why} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <HubEstimator whatsapp={BUSINESS_DETAILS.whatsapp} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Reviews />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <CTA {...content.cta} estimateHref="#estimate-form" />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <FAQ faqs={content.faqs} subtitle={content.faqSubtitle} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <EstimateForm />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Location {...content.location} />
            </AnimatedSection>

            <Footer />
        </main>
    );
}
