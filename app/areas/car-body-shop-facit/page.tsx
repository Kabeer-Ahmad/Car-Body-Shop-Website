import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';

// Sources: OSRM routing (Facit OS Open Names point to the OL12 8HN workshop,
// and to Rochdale town centre); EU-DEM 25 m elevations sampled along the A671
// (Facit ~240 m, Peel Mill ~285 m, rising all the way); Wikipedia for Facit
// railway station (1870 to 1947 passengers, goods to 1963) and the Facit and
// Shawforth ward of Rossendale Borough Council. Walking time assumes 3 mph.
const content: AreaPageContent = {
    slug: 'car-body-shop-facit',
    name: 'Facit',
    title: 'Car Body Repairs Facit | 1.2 Miles Up Market Street',
    description: 'Car body repairs for Facit, OL12, at Peel Mill 1.2 miles up Market Street. Dents from £80, bumpers from £150, resprays from £800. Free collection.',
    hero: {
        title: 'Car Body Repairs Facit',
        highlight: '1.2 Miles Up Market Street',
        subtitle: <>Our workshop at Peel Mill, <AreaLink name="Shawforth" /> is three minutes from Facit, straight up Market Street (the A671). Drive in, or we collect your car free and bring it back. Cash prices, no insurance claim.</>,
        imageAlt: 'Car body repair workshop serving Facit, Whitworth',
        locationPlaceholder: 'e.g. Facit, OL12',
    },
    services: {
        title: 'Car Body Repair Services for Facit',
        subtitle: 'Every repair is done at our Peel Mill workshop, from a single dent to a full respray.',
    },
    gallery: {
        title: 'Recent Repairs From Our Peel Mill Workshop',
        subtitle: 'Drag each slider to compare the damage with the finished repair.',
    },
    why: {
        title: 'Why Facit Drivers Use Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 repairs over 10+ years. Facit drivers pay the same fixed cash price whether they drive in or book collection.',
        points: [
            { title: 'In Your Own Ward', text: 'Facit and Shawforth make up one Rossendale council ward, and Peel Mill is in it.' },
            { title: 'Cash Prices, No Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every repair is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our booth, not on a driveway.' },
            { title: 'Kerbed Alloys Refurbished', text: 'Scuffed and kerbed alloy wheels repaired and refinished.' },
            { title: 'Open Seven Days', text: 'Until 7pm Monday to Thursday, until 9pm on Friday, and 11am to 6pm at weekends.' },
        ],
    },
    localSections: [
        {
            eyebrow: 'Facit to Peel Mill',
            title: 'Closer Than Any Trip Into Rochdale',
            intro: 'From Facit, Peel Mill is 1.2 miles up one road. Rochdale town centre is 4.5 miles the other way. Facit drivers heading north on the A671 pass our door.',
            points: [
                { title: 'Drop off on your way past', text: 'Leave the car as you pass and pick it up on the way back. Most dents, scratches and bumper scuffs are ready the same day.' },
                { title: 'Walk home downhill', text: 'Market Street drops about 45 metres from Peel Mill to Facit, so the 25 minute walk back is downhill all the way.' },
                { title: 'Or stay put', text: 'We collect from Facit and bring the car back, free.' },
            ],
            table: {
                caption: 'Trips From Facit',
                headers: ['Trip', 'Distance', 'Time'],
                rows: [
                    ['Drive to Peel Mill', '1.2 mi', '3 min'],
                    ['Drive to Rochdale town centre', '4.5 mi', '12 min'],
                    ['Walk home from Peel Mill', '1.2 mi', 'About 25 min'],
                ],
            },
        },
        {
            eyebrow: 'Valley History',
            title: 'No Train Since 1947, So the Car Has to Work',
            intro: 'Facit station opened in 1870 on the Rochdale to Bacup line and closed to passengers in 1947, with goods trains running until 1963. Since then the valley has moved on the A671. A damaged car still needs to get you about, so we keep it off the road for as little time as possible.',
            points: [
                { title: 'Price before you book', text: 'Send photos on WhatsApp and know the cash price before the car leaves your drive.' },
                { title: 'Booked around you', text: 'Pick a drop-off slot that fits your week, including weekends and Friday evenings.' },
                { title: 'Same day on most repairs', text: 'Dents, scratches and bumper scuffs are usually finished the same day.' },
                { title: 'Collected and returned', text: 'Free collection from Facit means no lift needed to or from the workshop.' },
            ],
        },
    ],
    location: {
        title: 'Our Workshop, 1.2 Miles From Facit',
        description: (
            <>
                Peel Mill, Market Street, <AreaLink name="Shawforth" /> OL12 8HN, three minutes north of Facit on the A671 towards Bacup. Click the map to open us in Google Maps.
            </>
        ),
    },
    cta: {
        title: 'Car Body Repairs for Facit',
        subtitle: 'Send photos on WhatsApp for a cash price within the hour, then drive up or book free collection.',
    },
    faqSubtitle: 'Common questions from Facit drivers, answered by our team.',
    faqs: [
        {
            question: 'How far is your workshop from Facit?',
            answer: 'Our workshop at Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN is 1.2 miles north of Facit on the A671, about a three minute drive.',
        },
        {
            question: 'Do you collect cars from Facit?',
            answer: 'Yes. Collection and delivery is free from Facit and across the Whitworth Valley. We collect the car, repair it at Peel Mill and bring it back.',
        },
        {
            question: 'Can I drop my car off and walk home to Facit?',
            answer: 'Yes. It is 1.2 miles, roughly a 25 minute walk, and downhill all the way from Peel Mill to Facit.',
        },
        {
            question: 'How much does car body repair cost in Facit?',
            answer: 'Dent removal starts from £80, scratch repair from £80, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'How long do car body repairs take?',
            answer: 'Most dents, scratches and bumper scuffs are finished the same day. Cracked bumpers and multi-panel repairs take 1 to 2 days, and a full respray takes 2 to 5 working days.',
        },
        {
            question: 'Do I need to claim on my insurance?',
            answer: `No. Every repair is priced in cash, so there is no excess to pay and no claim on your policy. Call ${BUSINESS_DETAILS.phoneDisplay} or WhatsApp ${BUSINESS_DETAILS.whatsappDisplay} for a price.`,
        },
    ],
};

export const metadata = areaMetadata(content);

export default function FacitPage() {
    return <AreaPage content={content} />;
}
