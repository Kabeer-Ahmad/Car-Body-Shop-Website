import AreaPage, { areaMetadata, type AreaPageContent } from '@/components/AreaPage';
import AreaLink from '@/components/AreaLink';
import { BUSINESS_DETAILS } from '@/app/constants';

// Distances and drive times: OSRM routing from Littleborough centre, Smithy
// Bridge, Hollingworth Lake and Summit to the OL12 8HN workshop (7.2-10.6 miles,
// 19-24 minutes).
const content: AreaPageContent = {
    slug: 'car-body-shop-littleborough',
    name: 'Littleborough',
    title: 'Car Body Repairs Littleborough | Free Collection, OL15',
    description: 'Car body repairs for Littleborough, OL15, with free collection and delivery. Dents from £80, bumpers from £150, resprays from £800. Cash prices.',
    hero: {
        title: 'Car Body Repairs Littleborough',
        highlight: 'Free Collection and Delivery Across OL15',
        subtitle: 'Our workshop at Peel Mill, Shawforth is about 20 minutes from Littleborough. We collect your car free of charge, repair it and bring it back, with cash prices and no insurance claim.',
        imageAlt: 'Car body repair workshop serving Littleborough',
        locationPlaceholder: 'e.g. Littleborough, OL15',
    },
    services: {
        title: 'Car Body Repair Services for Littleborough',
        subtitle: 'Every repair is carried out in our enclosed workshop, from a single dent to a full respray, with free collection from Littleborough.',
    },
    gallery: {
        title: 'Before and After Car Body Repairs',
        subtitle: 'Drag each slider to compare the damage with the finished repair.',
    },
    why: {
        title: 'Why Littleborough Drivers Use Car Body Shop',
        description: 'Car Body Shop has completed more than 5,000 repairs over 10+ years. Littleborough customers pay the same fixed cash prices as drivers who visit the workshop, with collection and return included free.',
        points: [
            { title: 'Free Collection and Delivery', text: 'From Littleborough, Smithy Bridge, Summit and Hollingworth Lake, returned when the repair is done.' },
            { title: 'Same Day on Most Repairs', text: 'Most dents, scratches and bumper scuffs are finished the same day.' },
            { title: 'Cash Prices, No Claim', text: 'A fixed price before work starts, with no excess and no claim on your policy.' },
            { title: 'Computer Colour Matching', text: 'Every repair is matched to your manufacturer paint code.' },
            { title: 'Enclosed Spray Booth', text: 'Panels are primed and painted inside our workshop booth, not on a driveway.' },
            { title: 'Photo Quotes Within the Hour', text: 'Send photos on WhatsApp for an itemised cash price.' },
        ],
    },
    location: {
        title: 'Our Workshop, 20 Minutes From Littleborough',
        description: (
            <>
                Our <AreaLink name="Whitworth">Whitworth workshop</AreaLink> at Peel Mill, Market Street, Shawforth OL12 8HN is around 8 miles from Littleborough centre. Book free collection, or drive over for a free assessment. Click the map to open us in Google Maps.
            </>
        ),
    },
    cta: {
        title: 'Car Body Repairs for Littleborough',
        subtitle: 'Send photos on WhatsApp for a cash price within the hour, then book free collection from Littleborough.',
    },
    faqSubtitle: 'Common questions from Littleborough drivers, answered by our team.',
    faqs: [
        {
            question: 'Do you collect cars from Littleborough?',
            answer: 'Yes. Collection and delivery is free across Littleborough, including Smithy Bridge, Summit and Hollingworth Lake. We collect the car, repair it at our workshop and bring it back.',
        },
        {
            question: 'How far is your workshop from Littleborough?',
            answer: 'Our workshop at Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN is around 8 miles from Littleborough centre, about a 20 minute drive.',
        },
        {
            question: 'How much does car body repair cost in Littleborough?',
            answer: 'Dent removal starts from £80, scratch repair from £80, bumper repair from £150, minor accident repair from £150 and a full respray from £800. Collection and delivery is included at no extra cost.',
        },
        {
            question: 'How long do car body repairs take?',
            answer: 'Most dents, scratches and bumper scuffs are finished the same day. Cracked bumpers and multi-panel repairs take 1 to 2 days, and a full respray takes 2 to 5 working days.',
        },
        {
            question: 'Do I need to claim on my insurance?',
            answer: 'No. Every repair is priced in cash, so there is no excess to pay and no claim on your policy or your no claims discount.',
        },
        {
            question: 'Can I get a quote without bringing my car in?',
            answer: `Yes. Send clear photos of the damage on WhatsApp to ${BUSINESS_DETAILS.phone} and we reply with an itemised cash price within the hour.`,
        },
    ],
};

export const metadata = areaMetadata(content);

export default function LittleboroughPage() {
    return <AreaPage content={content} />;
}
