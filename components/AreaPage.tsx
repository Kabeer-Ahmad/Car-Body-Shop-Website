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
import LocalSection, { type LocalSectionContent } from '@/components/LocalSection';
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
    /** Sections that only make sense for this area: the first under the stats bar, the second after the gallery. */
    localSections?: [LocalSectionContent, LocalSectionContent?];
    /** Keyword headings for the shared sections. Defaults are built from the area name. */
    headings?: Partial<AreaHeadings>;
}

export interface AreaHeadings {
    form: string;
    estimator: string;
    estimatorSubtitle: string;
    reviews: string;
    faq: string;
    estimateForm: string;
}

function defaultHeadings(name: string): AreaHeadings {
    return {
        form: `Book Car Body Repairs in ${name}`,
        estimator: `Car Body Repair Cost Calculator for ${name}`,
        estimatorSubtitle: `Get a guide price for dent removal, scratch repair, bumper repair or a full respray in ${name}. For an exact cash quote, send photos on WhatsApp.`,
        reviews: `Car Body Shop Reviews From Local Drivers`,
        faq: `Car Body Repair FAQs for ${name}`,
        estimateForm: `Get a Free Car Body Repair Quote in ${name}`,
    };
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
    const h = { ...defaultHeadings(content.name), ...content.headings };
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
                formTitle={h.form}
                formSubtitle="Free estimate, no obligation. We confirm within the hour."
            />
            <StatsBar />

            {content.localSections && (
                <AnimatedSection delay={0.1}>
                    <LocalSection section={content.localSections[0]} />
                </AnimatedSection>
            )}

            <AnimatedSection delay={0.1}>
                <Services {...content.services} ctaLabel={`Call for Free Advice: ${BUSINESS_DETAILS.phoneDisplay}`} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Gallery {...content.gallery} />
            </AnimatedSection>

            {content.localSections?.[1] && (
                <AnimatedSection delay={0.1}>
                    <LocalSection section={content.localSections[1]} />
                </AnimatedSection>
            )}

            <AnimatedSection delay={0.1}>
                <WhyChooseUs {...content.why} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <HubEstimator whatsapp={BUSINESS_DETAILS.whatsapp} title={h.estimator} subtitle={h.estimatorSubtitle} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <Reviews title={h.reviews} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <CTA {...content.cta} estimateHref="#estimate-form" />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <FAQ title={h.faq} faqs={content.faqs} subtitle={content.faqSubtitle} />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <EstimateForm title={h.estimateForm} />
            </AnimatedSection>

            {/* Not animated: the map must show even if the fade-in never fires. */}
            <Location {...content.location} />

            <Footer />
        </main>
    );
}
