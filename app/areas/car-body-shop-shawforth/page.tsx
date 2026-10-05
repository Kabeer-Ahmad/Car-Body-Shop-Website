import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';
import { hoursSentence } from '@/lib/hours';

// Sources: Shawforth is a ward of Whitworth, Rossendale, on the River Spodden
// and the A671 (Wikipedia). Elevation ~273 m vs ~130 m in Rochdale town centre
// (EU-DEM 25 m via OpenTopoData). Workshop 0.3 miles from the village centre
// (OSRM routing from the OS Open Names point for Shawforth).
const content: AreaPageContent = {
    slug: 'car-body-shop-shawforth',
    name: 'Shawforth',
    title: 'Car Body Shop Shawforth | Peel Mill, Market Street OL12',
    description: 'Car body shop at Peel Mill, Market Street, Shawforth OL12 8HN. Dents from £80, bumpers from £150, resprays from £800. Drive in for a free assessment.',
    hero: {
        title: 'Car Body Shop Shawforth',
        highlight: 'At Peel Mill, Market Street',
        subtitle: 'Our workshop is in Shawforth itself, at Peel Mill on Market Street (the A671). Drive in for a free assessment or send photos on WhatsApp for a cash price within the hour. Same day on most dents, scratches and scuffs.',
        imageAlt: 'Car Body Shop workshop at Peel Mill, Shawforth',
        locationPlaceholder: 'e.g. Shawforth, OL12',
    },
    services: {
        title: 'Car Body Repair Services in Shawforth',
        subtitle: 'Every repair is done here at Peel Mill, from a single dent to a full respray.',
    },
    gallery: {
        title: 'Repairs Finished at Our Shawforth Workshop',
        subtitle: 'Drag each slider to compare the damage with the finished repair.',
    },
    why: {
        title: 'Why Shawforth Drivers Choose Car Body Shop',
        description: 'We are the body shop in Shawforth, with more than 5,000 repairs completed over 10+ years. Every job gets a fixed cash price before work starts.',
        points: [
            { title: 'Drop Off and Walk Home', text: 'The workshop is under half a mile from the centre of Shawforth. Leave the car with us and we call when it is ready.' },
            { title: 'Same Day on Most Repairs', text: 'Most dents, scratches and bumper scuffs are finished the same day.' },
            { title: 'Free Collection and Delivery', text: <>Across the Whitworth Valley, from <AreaLink name="Facit" /> up to Bacup.</> },
            { title: 'Cash Prices, No Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every repair is matched to your manufacturer paint code in our enclosed spray booth.' },
            { title: 'Photo Quotes Within the Hour', text: 'Send photos on WhatsApp for an itemised cash price.' },
        ],
    },
    location: {
        title: 'Find Our Workshop in Shawforth',
        description: (
            <>
                We are at Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN, on the A671 between <AreaLink name="Whitworth" /> and Bacup. Click the map to open us in Google Maps.
            </>
        ),
    },
    cta: {
        title: 'Book Your Repair in Shawforth',
        subtitle: 'Send photos on WhatsApp for a cash price within the hour, or call to book a free assessment at Peel Mill.',
    },
    localSections: [
        {
            eyebrow: 'Local Roads',
            title: 'Peel Mill Sits Near the Top of the A671',
            intro: 'Market Street (the A671) climbs about 160 metres over the 5.7 miles from Rochdale town centre to our workshop, then peaks at around 307 metres a third of a mile further north before dropping into Bacup. At this height Shawforth runs roughly 1°C colder than Rochdale, at the standard rate air cools with altitude. Here is what that does to a car.',
            points: [
                { title: 'Stone chips', text: 'Gritted winter roads throw stones at bonnets, front bumpers and mirrors.' },
                { title: 'Salt on sills and arches', text: 'Road salt gets into chips and scratches and starts rust on the bare metal.' },
                { title: 'Kerb scuffs on ice', text: 'Low-speed slides on ice scuff bumpers and kerb alloy wheels.' },
            ],
            outro: 'Get chips and scratches sealed before the first frosts and winter salt has no bare metal to work on.',
            table: {
                caption: 'Height Along the A671',
                headers: ['Place', 'Miles from Rochdale', 'Height'],
                rows: [
                    ['Rochdale town centre', '0', '124 m'],
                    [<AreaLink key="h" name="Healey" />, '1.7', '191 m'],
                    [<AreaLink key="w" name="Whitworth" />, '4.0', '227 m'],
                    [<AreaLink key="f" name="Facit" />, '4.5', '240 m'],
                    ['Peel Mill, our workshop', '5.7', '285 m'],
                    ['Summit, north of Shawforth', '6.0', '307 m'],
                    [<AreaLink key="b" name="Bacup" />, '7.7', '256 m'],
                ],
            },
        },
        {
            eyebrow: 'Directions',
            title: 'Getting to Peel Mill From Around the Valley',
            intro: 'Peel Mill is on Market Street, the A671, so most of the valley reaches us along one road. Drive times are without traffic.',
            table: {
                caption: 'Drive Times to Peel Mill',
                headers: ['From', 'Route', 'Drive'],
                rows: [
                    ['Shawforth village', 'Market Street (A671)', '1 min, 0.3 mi'],
                    [<AreaLink key="f" name="Facit" />, 'North on Market Street (A671)', '3 min, 1.2 mi'],
                    [<AreaLink key="w" name="Whitworth" />, 'North on Market Street (A671)', '5 min, 1.8 mi'],
                    [<AreaLink key="b" name="Bacup" />, 'South on Rochdale Road, which becomes Market Street', '5 min, 2.1 mi'],
                    [<AreaLink key="s" name="Stacksteads" />, 'A681 and New Line (A6066) to the A671', '8 min, 3.0 mi'],
                    [<AreaLink key="h" name="Healey" />, 'Whitworth Road, then Market Street (A671)', '10 min, 4.0 mi'],
                    [<AreaLink key="r" name="Rochdale" />, 'Whitworth Road, then Market Street (A671)', '15 min, 5.8 mi'],
                    [<AreaLink key="wa" name="Wardle" />, 'Over Whitworth Rake to Market Street', '18 min, 4.4 mi'],
                ],
            },
            outro: <>Would rather not drive a damaged car? Collection and delivery is free from every place on this list, and from <AreaLink name="Littleborough" />.</>,
        },
    ],
    faqSubtitle: 'Common questions from Shawforth drivers, answered by our team.',
    faqs: [
        {
            question: 'Where is your workshop in Shawforth?',
            answer: `Our workshop is at Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN, on the A671 through the Whitworth Valley. It is open ${hoursSentence()}.`,
        },
        {
            question: 'Can I drop my car off and walk home?',
            answer: 'Yes. The workshop is under half a mile from the centre of Shawforth, so most local drivers drop the car off and walk home, and we call when it is ready. Collection and delivery is also free.',
        },
        {
            question: 'Do you repair stone chips from winter roads?',
            answer: 'Yes. Stone chips and scratches on bonnets, wings and sills are repaired and colour matched to your manufacturer paint code before the bare metal rusts. Send photos on WhatsApp for an exact cash price.',
        },
        {
            question: 'How much does car body repair cost in Shawforth?',
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

export default function ShawforthPage() {
    return <AreaPage content={content} />;
}
