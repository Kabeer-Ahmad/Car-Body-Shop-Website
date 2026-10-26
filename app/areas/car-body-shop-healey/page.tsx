import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';
import { hoursSentence } from '@/lib/hours';

// Sources: Wikipedia for the Healey ward boundary, its districts and the
// 2011 census population; postcodes.io for OL12 6 and OL12 9. Prices and
// turnaround from the dent, scratch, bumper and respray service pages.
const content: AreaPageContent = {
    slug: 'car-body-shop-healey',
    name: 'Healey',
    title: 'Car Body Repairs Healey, Rochdale | Dent, Scratch & Bumper Repair OL12',
    description: 'Car body repairs in Healey, Rochdale OL12, covering Shawclough, Syke and Nook Farm. Dent removal and scratch repair from £80, bumper repair from £150. Free collection.',
    hero: {
        title: 'Car Body Repairs Healey',
        highlight: 'Dent Removal, Scratch and Bumper Repair in Rochdale OL12',
        subtitle: 'Dent removal, scratch repair, bumper repair, accident repair and full resprays for Healey drivers in Shawclough, Syke and Nook Farm. Free collection and delivery, cash prices with no insurance claim, and same day on most dents, scratches and scuffs.',
        imageAlt: 'Car body repairs for Healey, Rochdale drivers',
        locationPlaceholder: 'e.g. Healey, OL12',
    },
    services: {
        title: 'Car Body Repair Services in Healey',
        subtitle: 'Car body repairs in Healey for every kind of damage, from paintless dent removal and scratch repair to bumper repair, accident repair and full resprays, with prices from £80.',
    },
    gallery: {
        title: 'Before and After Car Body Repairs for Healey Drivers',
        subtitle: 'Real dent, scratch and bumper repairs from our workshop. Drag each slider to compare the damage with the finished repair.',
    },
    localSections: [
        {
            eyebrow: 'Healey, Rochdale OL12',
            title: 'Car Body Repairs in Shawclough, Syke and Nook Farm',
            intro: 'Healey is the Rochdale ward along Whitworth Road (A671), from Gale Street up to Healey Corner at the Whitworth boundary. It takes in Shawclough, Syke, Nook Farm and the streets around Healey Dell Nature Reserve, home to about 10,400 people across the OL12 6 and OL12 9 postcodes. We collect cars for dent removal, scratch repair and bumper repair from every part of it.',
            table: {
                caption: 'Car Body Repair Prices and Turnaround in Healey',
                headers: ['Repair', 'Turnaround', 'From'],
                rows: [
                    ['Paintless dent removal', 'Same day', '£80'],
                    ['Car scratch repair', 'Same day', '£80'],
                    ['Bumper scuff repair', 'Same day', '£150'],
                    ['Dent repair, filled and painted', '1 to 2 days', '£200'],
                    ['Cracked or split bumper repair', '1 day', '£250'],
                    ['Full car respray', '2 to 5 working days', '£800'],
                ],
            },
            outro: 'These are guide starting prices for car body repairs in Healey and Rochdale OL12. Send photos on WhatsApp for an exact cash quote within the hour.',
        },
    ],
    why: {
        title: 'Why Healey Drivers Choose Our Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 car body repairs over 10+ years, including car body repairs in Healey, Shawclough and across Rochdale. Every dent removal, scratch repair and bumper repair gets a fixed cash price before work starts.',
        points: [
            { title: 'Free Collection Across Healey', text: <>From Shawclough, Syke, Nook Farm and Healey Corner up to <AreaLink name="Whitworth" />, returned when the car body repair is done.</> },
            { title: 'Same Day Dent and Scratch Repair', text: 'Most dents, scratches and bumper scuffs are repaired the same day.' },
            { title: 'Cash Prices, No Insurance Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every scratch, bumper and respray job is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our booth, so the paint cures free of dust and rain.' },
            { title: 'Open Seven Days', text: 'Including Friday evenings until 9pm and 11am to 6pm at weekends.' },
        ],
    },
    cta: {
        title: 'Fast, Affordable Car Body Repairs in Healey',
        subtitle: 'Send photos on WhatsApp for a cash quote on dent removal, scratch repair or bumper repair within the hour, or book free collection from Healey.',
    },
    faqSubtitle: 'Common questions about car body repairs in Healey, Rochdale, answered by our team.',
    faqs: [
        {
            question: 'How much does car body repair cost in Healey?',
            answer: 'Dent removal starts from £80, scratch repair from £80, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'Do you cover Shawclough, Syke and Nook Farm?',
            answer: 'Yes. We collect from every part of Healey, including Shawclough, Syke, Nook Farm, Healey Corner and Whitworth Road, and bring the car back once the repair is done.',
        },
        {
            question: 'Can you repair a cracked or split bumper?',
            answer: 'Yes. Most cracked and split bumpers are repaired with flexible plastic repair materials and colour matched from £250, usually in one day, so the bumper does not need replacing.',
        },
        {
            question: 'Is collection and delivery free from Healey?',
            answer: 'Yes. Collection and delivery is free across Healey and the rest of Rochdale OL12. There is no charge on top of the repair price.',
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
        title: 'Car Body Shop Near Healey, Rochdale',
        description: 'Our car body shop serving Healey and Rochdale is at Peel Mill, Market Street, Shawforth OL12 8HN, on the A671. Click the map to open us in Google Maps, or book free collection for car body repairs in Healey.',
    },
};

export const metadata = areaMetadata(content);

export default function HealeyPage() {
    return <AreaPage content={content} />;
}
