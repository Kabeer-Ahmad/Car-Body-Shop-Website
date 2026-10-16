import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';
import { hoursSentence } from '@/lib/hours';

// Sources: Wikipedia for Lee Quarry, Newchurch Road and Waterbarn. Prices
// from the dent, scratch, bumper and minor accident service pages.
const content: AreaPageContent = {
    slug: 'car-body-shop-stacksteads',
    name: 'Stacksteads',
    title: 'Car Body Repairs Stacksteads | Dent, Scratch & Bumper Repair OL13',
    description: 'Car body repairs in Stacksteads, OL13. Dent removal and scratch repair from £80, bumper repair from £150, resprays from £800. Free collection, cash prices.',
    hero: {
        title: 'Car Body Repairs Stacksteads',
        highlight: 'Dent Removal, Scratch and Bumper Repair in OL13',
        subtitle: 'Dent removal, scratch repair, bumper repair, accident repair and full resprays for Stacksteads drivers. Free collection and delivery across Stacksteads, cash prices with no insurance claim, and same day on most dents, scratches and scuffs.',
        imageAlt: 'Car body repairs for Stacksteads drivers',
        locationPlaceholder: 'e.g. Stacksteads, OL13',
    },
    services: {
        title: 'Car Body Repair Services in Stacksteads',
        subtitle: 'Car body repairs in Stacksteads for every kind of damage, from paintless dent removal and scratch repair to bumper repair, accident repair and full resprays, with prices from £80.',
    },
    gallery: {
        title: 'Before and After Car Body Repairs for Stacksteads Drivers',
        subtitle: 'Real dent, scratch and bumper repairs from our workshop. Drag each slider to compare the damage with the finished repair.',
    },
    localSections: [
        {
            eyebrow: 'Lee Quarry Bike Rack Damage',
            title: 'Rear Bumper Scratch and Tailgate Dent Repair in Stacksteads',
            intro: 'Lee Quarry, the former working quarry above Stacksteads, is now a mountain bike trail. Cars that carry bikes there pick up the same damage: tow bar bike racks rub and scuff the rear bumper, pedals and handlebars scratch the tailgate during loading, and a bike dropped against the boot lid leaves a dent. Each one is a quick car body repair in Stacksteads.',
            table: {
                caption: 'Bike Rack Damage Repair Prices in Stacksteads',
                headers: ['Repair', 'Typical cause', 'From'],
                rows: [
                    ['Tailgate scratch repair, clear coat', 'Pedals and handlebars when loading', '£80'],
                    ['Tailgate scratch repair, colour matched', 'Scratches through to the colour coat', '£150'],
                    ['Paintless dent removal, boot lid', 'A bike falling against the tailgate', '£80'],
                    ['Rear bumper scuff repair', 'Tow bar bike rack rubbing the bumper', '£150'],
                    ['Rear bumper scratch repair, colour matched', 'Rack straps and wheel trays', '£200'],
                ],
            },
            outro: 'These are guide starting prices for car body repairs in Stacksteads and OL13. Send photos on WhatsApp for an exact cash quote within the hour.',
        },
    ],
    why: {
        title: 'Why Stacksteads Drivers Choose Our Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 car body repairs over 10+ years, including car body repairs in Stacksteads, OL13 and across the Rossendale valley. Every dent removal, scratch repair and bumper repair gets a fixed cash price before work starts.',
        points: [
            { title: 'Free Collection Across Stacksteads', text: <>From Newchurch Road, Waterbarn and the streets towards <AreaLink name="Bacup" />, returned when the car body repair is done.</> },
            { title: 'Same Day Dent and Scratch Repair', text: 'Most dents, scratches and bumper scuffs are repaired the same day.' },
            { title: 'Cash Prices, No Insurance Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every scratch, bumper and respray job is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our booth, so the paint cures free of dust and rain.' },
            { title: 'Open Seven Days', text: 'Including Friday evenings until 9pm and 11am to 6pm at weekends.' },
        ],
    },
    cta: {
        title: 'Fast, Affordable Car Body Repairs in Stacksteads',
        subtitle: 'Send photos on WhatsApp for a cash quote on dent removal, scratch repair or bumper repair within the hour, or book free collection from Stacksteads.',
    },
    faqSubtitle: 'Common questions about car body repairs in Stacksteads, answered by our team.',
    faqs: [
        {
            question: 'How much does car body repair cost in Stacksteads?',
            answer: 'Dent removal starts from £80, scratch repair from £80, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'Can you repair a rear bumper scuffed by a bike rack?',
            answer: 'Yes. Light scuffs on the rear bumper start from £150 and colour matched bumper scratch repair from £200, usually finished the same day.',
        },
        {
            question: 'Can you remove a dent from my tailgate or boot lid?',
            answer: 'Yes. If the paint is unbroken, paintless dent removal starts from £80 with no filler or repainting. Dents with chipped paint are repaired and colour matched from £180.',
        },
        {
            question: 'Do you collect cars from Stacksteads for repair?',
            answer: 'Yes. Collection and delivery is free from anywhere in Stacksteads and Bacup. We collect the car, carry out the repair and bring it back.',
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
        title: 'Car Body Shop Near Stacksteads',
        description: 'Our car body shop serving Stacksteads and Rossendale is at Peel Mill, Market Street, Shawforth OL12 8HN, on the A671. Click the map to open us in Google Maps, or book free collection for car body repairs in Stacksteads.',
    },
};

export const metadata = areaMetadata(content);

export default function StacksteadsPage() {
    return <AreaPage content={content} />;
}
