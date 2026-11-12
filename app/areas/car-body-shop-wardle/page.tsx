import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';
import { hoursSentence } from '@/lib/hours';

// Sources: Wikipedia (Wardle, Greater Manchester) for the population, Watergrove
// Reservoir, Brown Wardle Hill, Smallbridge and Dearnley; postcodes.io for the
// OL12 9 sector and the Wardle, Shore & West Littleborough ward. Prices and
// turnaround from the dent, scratch, bumper, alloy wheel and respray service pages.
const content: AreaPageContent = {
    slug: 'car-body-shop-wardle',
    name: 'Wardle',
    title: 'Car Body Repairs Wardle, Rochdale | Dent, Scratch & Bumper Repair OL12',
    description: 'Car body repairs in Wardle, Rochdale OL12 9, covering Smallbridge and Dearnley. Dent removal and scratch repair from £80, bumper repair from £150. Cash prices.',
    hero: {
        title: 'Car Body Repairs Wardle',
        highlight: 'Dent, Scratch and Bumper Repair',
        subtitle: 'Dent removal, scratch repair, bumper repair, accident repair and full resprays for Wardle drivers in the village, Smallbridge and Dearnley. Cash prices with no insurance claim, and same day on most dents, scratches and scuffs.',
        imageAlt: 'Car body repairs for Wardle, Rochdale drivers',
        locationPlaceholder: 'e.g. Wardle, OL12',
    },
    services: {
        title: 'Car Body Repair Services in Wardle',
        subtitle: 'Car body repairs in Wardle for every kind of damage, from paintless dent removal and scratch repair to bumper repair, accident repair, alloy wheel repair and full resprays, with prices from £80.',
    },
    gallery: {
        title: 'Before and After Car Body Repairs for Wardle Drivers',
        subtitle: 'Real dent, scratch and bumper repairs from our workshop. Drag each slider to compare the damage with the finished repair.',
    },
    localSections: [
        {
            eyebrow: 'Wardle, Rochdale OL12 9',
            title: 'Car Body Repairs in Wardle Village, Smallbridge and Dearnley',
            intro: 'Wardle is the village in the South Pennine foothills between Rochdale and Littleborough, below Watergrove Reservoir and Brown Wardle Hill. It takes in the old village square, the edges of Smallbridge and Dearnley, and the streets around Wardle Academy, home to about 7,100 people in the OL12 9 postcode. We carry out dent removal, scratch repair, bumper repair and alloy wheel repair for drivers in every part of it.',
            table: {
                caption: 'Car Body Repair Prices and Turnaround in Wardle',
                headers: ['Repair', 'Turnaround', 'From'],
                rows: [
                    ['Paintless dent removal', 'Same day', '£80'],
                    ['Car scratch repair', 'Same day', '£80'],
                    ['Alloy wheel scuff repair', 'Same day', '£80 per wheel'],
                    ['Bumper scuff repair', 'Same day', '£150'],
                    ['Dent repair, filled and painted', '1 to 2 days', '£200'],
                    ['Cracked or split bumper repair', '1 day', '£250'],
                    ['Full car respray', '2 to 5 working days', '£800'],
                ],
            },
            outro: 'These are guide starting prices for car body repairs in Wardle and Rochdale OL12. Send photos on WhatsApp for an exact cash quote within the hour.',
        },
    ],
    why: {
        title: 'Why Wardle Drivers Choose Our Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 car body repairs over 10+ years, including car body repairs in Wardle, Smallbridge and across Rochdale. Every dent removal, scratch repair and bumper repair gets a fixed cash price before work starts.',
        points: [
            { title: 'Serving All of Wardle', text: <>Car body repairs for Wardle village, Smallbridge and Dearnley, across to <AreaLink name="Littleborough" />.</> },
            { title: 'Same Day Dent and Scratch Repair', text: 'Most dents, scratches and bumper scuffs are repaired the same day.' },
            { title: 'Cash Prices, No Insurance Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every scratch, bumper and respray job is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our booth, so the paint cures free of dust and rain.' },
            { title: 'Open Seven Days', text: 'Including Friday evenings until 9pm and 11am to 6pm at weekends.' },
        ],
    },
    cta: {
        title: 'Fast, Affordable Car Body Repairs in Wardle',
        subtitle: 'Send photos on WhatsApp for a cash quote on dent removal, scratch repair or bumper repair within the hour, or call to book your car in.',
    },
    faqSubtitle: 'Common questions about car body repairs in Wardle, Rochdale, answered by our team.',
    faqs: [
        {
            question: 'How much does car body repair cost in Wardle?',
            answer: 'Dent removal starts from £80, scratch repair from £80, alloy wheel scuff repair from £80 per wheel, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'Do you cover Smallbridge and Dearnley?',
            answer: 'Yes. We repair cars for drivers in every part of Wardle, including the village, Smallbridge, Dearnley and the roads up towards Watergrove Reservoir.',
        },
        {
            question: 'Can you repair a cracked or split bumper?',
            answer: 'Yes. Most cracked and split bumpers are repaired with flexible plastic repair materials and colour matched from £250, usually in one day, so the bumper does not need replacing.',
        },
        {
            question: 'How long does car body repair take?',
            answer: 'Most dents, scratches and bumper scuffs are finished the same day. Cracked bumpers and multi-panel repairs take 1 to 2 days, and a full respray takes 2 to 5 working days.',
        },
        {
            question: 'Do I need to claim on my insurance for car body repairs?',
            answer: `No. Every repair is priced in cash, so there is no excess to pay and no claim on your policy. We are open ${hoursSentence()}. Call ${BUSINESS_DETAILS.phoneDisplay} or WhatsApp ${BUSINESS_DETAILS.whatsappDisplay} for a price.`,
        },
    ],
    location: {
        title: 'Car Body Shop Near Wardle, Rochdale',
        description: 'Our car body shop serving Wardle and Rochdale is at Peel Mill, Market Street, Shawforth OL12 8HN, on the A671. Click the map to open us in Google Maps, or call to book car body repairs in Wardle.',
    },
};

export const metadata = areaMetadata(content);

export default function WardlePage() {
    return <AreaPage content={content} />;
}
