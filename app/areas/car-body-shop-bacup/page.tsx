import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';
import { hoursSentence } from '@/lib/hours';

// Sources: Wikipedia for Bacup's mill-town history, terraces and English
// Heritage protected town centre. Prices from the dent, scratch, bumper and
// lease-return service pages.
const content: AreaPageContent = {
    slug: 'car-body-shop-bacup',
    name: 'Bacup',
    title: 'Car Body Repairs Bacup | Dent, Scratch & Bumper Repair OL13',
    description: 'Car body repairs in Bacup, OL13. Dent removal and scratch repair from £80, bumper repair from £150, resprays from £800. Free collection, cash prices.',
    hero: {
        title: 'Car Body Repairs Bacup',
        highlight: 'Dent Removal, Scratch and Bumper Repair in OL13',
        subtitle: 'Dent removal, scratch repair, bumper repair, accident repair and full resprays for Bacup drivers. Free collection and delivery across Bacup, cash prices with no insurance claim, and same day on most dents, scratches and scuffs.',
        imageAlt: 'Car body repairs for Bacup drivers',
        locationPlaceholder: 'e.g. Bacup, OL13',
    },
    services: {
        title: 'Car Body Repair Services in Bacup',
        subtitle: 'Car body repairs in Bacup for every kind of damage, from paintless dent removal and scratch repair to bumper repair, accident repair and full resprays, with prices from £80.',
    },
    gallery: {
        title: 'Before and After Car Body Repairs for Bacup Drivers',
        subtitle: 'Real dent, scratch and bumper repairs from our workshop. Drag each slider to compare the damage with the finished repair.',
    },
    localSections: [
        {
            eyebrow: 'Bacup Street Parking',
            title: "Dent, Scratch and Alloy Wheel Repair for Bacup's Terraced Streets",
            intro: 'Bacup is one of the best preserved mill towns in England, and English Heritage protects its town centre for its architecture. Its mill-era terraces line the main roads and climb the hillsides, and they were built before cars, so on-street parking is the norm on many Bacup streets. That is where most door dings, scratches, kerbed alloy wheels and bumper scuffs in Bacup come from.',
            table: {
                caption: 'Street-Parking Damage Repair Prices in Bacup',
                headers: ['Repair', 'Typical cause', 'From'],
                rows: [
                    ['Paintless dent removal', 'Door dings on tight streets', '£80'],
                    ['Car scratch repair', 'Passing traffic and pedestrians', '£80'],
                    ['Alloy wheel kerb repair', 'Parking on steep, kerbed streets', '£80'],
                    ['Bumper scuff repair', 'Parallel parking nose to tail', '£150'],
                ],
            },
            outro: 'These are guide starting prices for car body repairs in Bacup and OL13. Send photos on WhatsApp for an exact cash quote within the hour.',
        },
    ],
    why: {
        title: 'Why Bacup Drivers Choose Our Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 car body repairs over 10+ years, including car body repairs in Bacup, OL13 and across the Rossendale valley. Every dent removal, scratch repair and bumper repair gets a fixed cash price before work starts.',
        points: [
            { title: 'Free Collection Across Bacup', text: <>From Bacup town centre, Britannia and <AreaLink name="Stacksteads" />, returned when the car body repair is done.</> },
            { title: 'Same Day Dent and Scratch Repair', text: 'Most dents, scratches and bumper scuffs are repaired the same day.' },
            { title: 'Cash Prices, No Insurance Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every scratch, bumper and respray job is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our booth, not on the street outside your house.' },
            { title: 'Open Seven Days', text: 'Including Friday evenings until 9pm and 11am to 6pm at weekends.' },
        ],
    },
    cta: {
        title: 'Fast, Affordable Car Body Repairs in Bacup',
        subtitle: 'Send photos on WhatsApp for a cash quote on dent removal, scratch repair or bumper repair within the hour, or book free collection from Bacup.',
    },
    faqSubtitle: 'Common questions about car body repairs in Bacup, answered by our team.',
    faqs: [
        {
            question: 'How much does car body repair cost in Bacup?',
            answer: 'Dent removal starts from £80, scratch repair from £80, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'Do you offer paintless dent removal in Bacup?',
            answer: 'Yes. Door dings and small dents with unbroken paint are removed with paintless dent removal from £80, usually the same day, with no filler or repainting.',
        },
        {
            question: 'Can you repair scratches and kerbed alloy wheels in Bacup?',
            answer: 'Yes. Car scratch repair starts from £80 and is colour matched to your paint code. Kerbed alloy wheels are repaired from £80 per wheel.',
        },
        {
            question: 'Do you collect cars from Bacup for repair?',
            answer: 'Yes. Collection and delivery is free from Bacup, Britannia and Stacksteads. We collect the car, carry out the repair and bring it back.',
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
        title: 'Car Body Shop Near Bacup',
        description: 'Our car body shop serving Bacup and Rossendale is at Peel Mill, Market Street, Shawforth OL12 8HN, on the A671 just south of Bacup. Click the map to open us in Google Maps, or book free collection for car body repairs in Bacup.',
    },
};

export const metadata = areaMetadata(content);

export default function BacupPage() {
    return <AreaPage content={content} />;
}
