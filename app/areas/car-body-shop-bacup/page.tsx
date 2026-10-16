import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';
import { hoursSentence } from '@/lib/hours';

// Sources: OSRM routing from the OS Open Names point for Bacup to Peel Mill,
// Rochdale, Rawtenstall and Burnley town points; EU-DEM 25 m elevations sampled
// along the A671 (Bacup ~256 m, summit ~307 m, Peel Mill ~285 m); Wikipedia for
// Bacup's mill-town history, terraces and English Heritage protected centre.
// Prices from the dent, scratch, bumper and lease-return service pages.
const content: AreaPageContent = {
    slug: 'car-body-shop-bacup',
    name: 'Bacup',
    title: 'Car Body Repairs Bacup | 2.1 Miles Down the A671, OL13',
    description: 'Car body repairs for Bacup, OL13, 2.1 miles down the A671 at Peel Mill. Dents from £80, bumpers from £150, resprays from £800. Free collection.',
    hero: {
        title: 'Car Body Repairs Bacup',
        highlight: 'Five Minutes Over the Top of the A671',
        subtitle: <>Our workshop at Peel Mill, <AreaLink name="Shawforth" /> is 2.1 miles from Bacup town centre, straight down Rochdale Road. Drive over, or we collect your car free and bring it back. Cash prices, no insurance claim.</>,
        imageAlt: 'Car body repair workshop serving Bacup, Rossendale',
        locationPlaceholder: 'e.g. Bacup, OL13',
    },
    services: {
        title: 'Car Body Repair Services for Bacup',
        subtitle: 'Every repair is done at our Peel Mill workshop, from a single door ding to a full respray.',
    },
    gallery: {
        title: 'Recent Repairs From Our Peel Mill Workshop',
        subtitle: 'Drag each slider to compare the damage with the finished repair.',
    },
    why: {
        title: 'Why Bacup Drivers Use Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 repairs over 10+ years. Bacup drivers pay the same fixed cash price whether they drive over or book collection.',
        points: [
            { title: 'Free Collection From OL13', text: <>From Bacup town centre, Britannia and <AreaLink name="Stacksteads" />, returned when the repair is done.</> },
            { title: 'Same Day on Most Repairs', text: 'Most dents, scratches and bumper scuffs are finished the same day.' },
            { title: 'Cash Prices, No Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every repair is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our booth, not on the street outside your house.' },
            { title: 'Open Seven Days', text: 'Including Friday evenings until 9pm and 11am to 6pm at weekends.' },
        ],
    },
    localSections: [
        {
            eyebrow: 'Bacup to Peel Mill',
            title: 'The Nearest Trip Out of Bacup for a Repair',
            intro: <>From Bacup town centre, Rochdale Road (the A671) climbs about 50 metres to the summit at around 307 metres, then drops into <AreaLink name="Shawforth" /> and Peel Mill. That is 2.1 miles. Rawtenstall, Burnley and Rochdale are all at least twice as far.</>,
            points: [
                { title: 'One road, no town traffic', text: 'Bacup to Peel Mill is the A671 all the way, with no town centre to cross.' },
                { title: 'Back the same morning', text: 'Drop the car off and be home within 10 minutes. Most dents, scratches and scuffs are ready the same day.' },
                { title: 'Or do not drive it at all', text: 'We collect from Bacup and bring the car back, free.' },
            ],
            table: {
                caption: 'Drives From Bacup Town Centre',
                headers: ['To', 'Distance', 'Drive'],
                rows: [
                    ['Peel Mill, our workshop', '2.1 mi', '5 min'],
                    ['Rawtenstall', '4.5 mi', '12 min'],
                    ['Burnley', '7.3 mi', '15 min'],
                    [<AreaLink key="r" name="Rochdale">Rochdale town centre</AreaLink>, '7.8 mi', '20 min'],
                ],
            },
        },
        {
            eyebrow: 'Bacup Streets',
            title: 'Mill-Town Terraces, Built Before Cars',
            intro: 'Bacup is one of the best preserved mill towns in England, and English Heritage protects its town centre for its architecture. The terraces that line its main roads and climb its hillsides were built for mill workers in the 1800s, long before cars, so on-street parking is the norm on many streets. That brings its own kind of damage.',
            table: {
                caption: 'Common Street-Parking Damage, Repaired',
                headers: ['Damage', 'Typical cause', 'From'],
                rows: [
                    ['Door ding, paint unbroken', 'Neighbouring doors on tight streets', '£80'],
                    ['Scratch on a door or wing', 'Passing traffic and pedestrians', '£80'],
                    ['Kerbed alloy wheel', 'Parking on steep, kerbed streets', '£80'],
                    ['Bumper scuff or scrape', 'Parallel parking nose to tail', '£150'],
                ],
            },
            outro: 'Prices are guide starting prices. Send photos on WhatsApp for an exact cash price within the hour.',
        },
    ],
    location: {
        title: 'Our Workshop, 2.1 Miles From Bacup',
        description: (
            <>
                Peel Mill, Market Street, <AreaLink name="Shawforth" /> OL12 8HN, five minutes south of Bacup on the A671 towards Rochdale. Click the map to open us in Google Maps.
            </>
        ),
    },
    cta: {
        title: 'Car Body Repairs for Bacup',
        subtitle: 'Send photos on WhatsApp for a cash price within the hour, then drive over or book free collection.',
    },
    faqSubtitle: 'Common questions from Bacup drivers, answered by our team.',
    faqs: [
        {
            question: 'How far is your workshop from Bacup?',
            answer: 'Our workshop at Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN is 2.1 miles south of Bacup town centre on the A671, about a five minute drive.',
        },
        {
            question: 'Do you collect cars from Bacup?',
            answer: 'Yes. Collection and delivery is free from Bacup, Britannia and Stacksteads. We collect the car, repair it at Peel Mill and bring it back.',
        },
        {
            question: 'Can you fix door dings and kerbed alloys from street parking?',
            answer: 'Yes. Small door dings with unbroken paint start from £80 with paintless dent removal, and kerbed alloy wheels from £80. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'When are you open?',
            answer: `We are open ${hoursSentence()}.`,
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

export default function BacupPage() {
    return <AreaPage content={content} />;
}
