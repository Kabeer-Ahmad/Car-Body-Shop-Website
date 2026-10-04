import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';

const content: AreaPageContent = {
    slug: 'car-body-shop-whitworth',
    name: 'Whitworth',
    title: 'Car Body Shop Whitworth | Car Body Repairs, Rochdale OL12',
    description: 'Car body shop at Peel Mill, Shawforth, Whitworth OL12 8HN. Dents from £80, bumpers from £150, resprays from £800. Cash prices, same day on most repairs.',
    hero: {
        title: 'Car Body Shop Whitworth',
        highlight: 'Dent, Scratch, Bumper & Accident Repairs',
        subtitle: <>Our workshop is at Peel Mill, Market Street, <AreaLink name="Shawforth" />, in Whitworth between Rochdale and Bacup. Cash prices with no insurance claim, same day on most dents, scratches and scuffs, and free collection and delivery.</>,
        imageAlt: 'Car body shop workshop in Whitworth, Rochdale',
        locationPlaceholder: 'e.g. Whitworth, OL12',
    },
    services: {
        title: 'Car Body Repair Services in Whitworth',
        subtitle: 'Every repair is carried out at our Whitworth workshop, from a single dent to a full respray.',
    },
    gallery: {
        title: 'Before and After Repairs From Our Whitworth Workshop',
        subtitle: 'Drag each slider to compare the damage with the finished repair.',
    },
    why: {
        title: 'Why Whitworth Drivers Choose Car Body Shop',
        description: 'Car Body Shop has repaired vehicles from its Whitworth workshop for over 10 years, with more than 5,000 repairs completed. Every job gets a fixed cash price before work starts.',
        points: [
            { title: 'Same Day on Most Repairs', text: 'Most dents, scratches and bumper scuffs are finished the same day.' },
            { title: 'Cash Prices, No Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every repair is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our workshop booth, not on a driveway.' },
            { title: 'Photo Quotes Within the Hour', text: 'Send photos on WhatsApp for an itemised cash price.' },
            { title: 'Free Collection and Delivery', text: <>Across Whitworth, <AreaLink name="Facit" />, <AreaLink name="Shawforth" />, Healey and the rest of OL12.</> },
        ],
    },
    location: {
        title: 'Car Body Shop in Whitworth, Rochdale',
        description: <>Find us at Peel Mill, Market Street, <AreaLink name="Shawforth" /> OL12 8HN, between Rochdale and Bacup. Click the map to open us in Google Maps. Drive in for a free assessment during opening hours, or send photos on WhatsApp first for a cash price.</>,
    },
    cta: {
        title: 'Car Body Repairs in Whitworth',
        subtitle: 'Send photos on WhatsApp for a cash price within the hour, or call to book a free assessment at our Whitworth workshop.',
    },
    faqSubtitle: 'Common questions from Whitworth drivers, answered by our team.',
    faqs: [
        {
            question: 'Where is your car body shop in Whitworth?',
            answer: 'Car Body Shop is at Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN, on the Whitworth side between Rochdale and Bacup. The workshop is open Monday to Friday 8:30am to 5:30pm and Saturday 9am to 1pm.',
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
            answer: `Yes. Send clear photos of the damage on WhatsApp to ${BUSINESS_DETAILS.whatsappDisplay} and we reply with an itemised cash price within the hour.`,
        },
    ],
};

export const metadata = areaMetadata(content);

export default function WhitworthPage() {
    return <AreaPage content={content} />;
}
