import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Terms of Service | Car Body Shop Rochdale',
    description: 'Terms of Service for Car Body Shop. Read our website terms, quotation policy, intellectual property rights, and governing law under England and Wales.',
    alternates: { canonical: 'https://www.carbodyshop.org/terms-of-service' },
};

const SECTIONS = [
    { id: 'about-us', label: 'About Us' },
    { id: 'website-use', label: 'Website Use' },
    { id: 'vehicle-repair-info', label: 'Vehicle Repair Information' },
    { id: 'quotations', label: 'Quotations' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'accuracy', label: 'Accuracy of Information' },
    { id: 'third-party-links', label: 'Third-Party Links' },
    { id: 'availability', label: 'Availability of the Website' },
    { id: 'liability', label: 'Limitation of Liability' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'changes', label: 'Changes to These Terms' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'contact', label: 'Contact Us' },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id} className="text-2xl font-extrabold text-blue-700 mt-12 mb-4 pb-3 border-b-2 border-blue-100 scroll-mt-28">
            {children}
        </h2>
    );
}

function P({ children }: { children: React.ReactNode }) {
    return <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;
}

function UL({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 mb-5">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

function Divider() {
    return <div className="border-t border-gray-100 my-2" />;
}

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <div className="bg-gray-900 pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-gray-300">Terms of Service</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-400">Last Updated: August 2026</p>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-14 items-start">

                    {/* Sticky ToC */}
                    <aside className="hidden lg:block self-start sticky top-28">
                        <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-4">Contents</p>
                        <ul className="space-y-1">
                            {SECTIONS.map(({ id, label }) => (
                                <li key={id}>
                                    <a href={`#${id}`}
                                        className="block text-sm py-1.5 pl-3 border-l-2 border-transparent text-gray-400 hover:text-blue-600 hover:border-blue-400 transition-all leading-snug">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Terms content */}
                    <article className="min-w-0 max-w-3xl">

                        {/* Intro card */}
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Welcome to Car Body Shop. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website,{' '}
                                <a href="https://www.carbodyshop.org" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">carbodyshop.org</a> (&quot;Website&quot;).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                By accessing or using this Website, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our Website.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                These Terms apply to your use of the Website only. Any quotation, repair work or other services provided by Car Body Shop may be subject to separate service terms.
                            </p>
                        </div>

                        {/* ABOUT US */}
                        <H2 id="about-us">About Us</H2>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-5">
                            <p className="text-gray-700 text-sm"><strong>Business Name:</strong> Car Body Shop</p>
                            <p className="text-gray-700 text-sm mt-1"><strong>Website:</strong> carbodyshop.org</p>
                        </div>
                        <P>Throughout these Terms, &quot;we&quot;, &quot;our&quot; and &quot;us&quot; refer to Car Body Shop, and &quot;you&quot; refers to any visitor or user of this Website.</P>
                        <Divider />

                        {/* WEBSITE USE */}
                        <H2 id="website-use">Website Use</H2>
                        <P>You may use this Website solely for lawful purposes and in accordance with these Terms. You agree not to:</P>
                        <UL items={[
                            'Use the Website in any way that breaches applicable UK laws or regulations.',
                            'Attempt to gain unauthorised access to our Website, servers or systems.',
                            'Interfere with the operation or security of the Website.',
                            'Introduce viruses, malware or any other harmful software.',
                            'Use automated tools, bots or scraping software to extract Website content without our written permission.',
                            'Use this Website in any way that could damage, disable or impair its functionality.',
                        ]} />
                        <P>We reserve the right to suspend or restrict access where these Terms are breached.</P>
                        <Divider />

                        {/* VEHICLE REPAIR INFORMATION */}
                        <H2 id="vehicle-repair-info">Vehicle Repair Information</H2>
                        <P>The information published on this Website is provided for general guidance only.</P>
                        <P>Repair methods, estimated costs, completion times and service descriptions are intended as general information and should not be treated as a guaranteed quotation or professional assessment.</P>
                        <P>Every repair is different. Final recommendations, pricing and timescales will depend on the condition of the vehicle following inspection.</P>
                        <Divider />

                        {/* QUOTATIONS */}
                        <H2 id="quotations">Quotations</H2>
                        <P>Any quotation provided through our Website, contact form, telephone or WhatsApp is an estimate based on the information available at the time.</P>
                        <P>Final pricing may change if additional damage, corrosion, previous repairs or other issues are identified during inspection or repair.</P>
                        <P>No quotation becomes contractually binding until accepted by both parties.</P>
                        <Divider />

                        {/* APPOINTMENTS */}
                        <H2 id="appointments">Appointments</H2>
                        <P>Appointment requests submitted through this Website do not constitute confirmed bookings.</P>
                        <P>Appointments are only confirmed after they have been accepted by Car Body Shop.</P>
                        <P>While we make every effort to meet agreed appointment times, circumstances outside our control may occasionally require appointments to be rescheduled.</P>
                        <Divider />

                        {/* INTELLECTUAL PROPERTY */}
                        <H2 id="intellectual-property">Intellectual Property</H2>
                        <P>Unless otherwise stated, all content on this Website is owned by or licensed to Car Body Shop. This includes, but is not limited to:</P>
                        <UL items={[
                            'Text',
                            'Images',
                            'Graphics',
                            'Logos',
                            'Branding',
                            'Website design',
                            'Videos',
                            'Before and after photographs',
                        ]} />
                        <P>You may not reproduce, copy, modify, distribute or commercially exploit any Website content without our prior written permission.</P>
                        <P>You may print or download pages for your own personal, non-commercial use only.</P>
                        <Divider />

                        {/* ACCURACY */}
                        <H2 id="accuracy">Accuracy of Information</H2>
                        <P>We aim to ensure all information on this Website is accurate and up to date.</P>
                        <P>However, we do not guarantee that all content will always be complete, accurate or current.</P>
                        <P>We reserve the right to update, amend or remove Website content at any time without prior notice.</P>
                        <Divider />

                        {/* THIRD-PARTY LINKS */}
                        <H2 id="third-party-links">Third-Party Links</H2>
                        <P>This Website may include links to third-party websites for your convenience.</P>
                        <P>We do not control or endorse external websites and accept no responsibility for their content, availability or privacy practices.</P>
                        <P>Your use of any third-party website is entirely at your own risk.</P>
                        <Divider />

                        {/* AVAILABILITY */}
                        <H2 id="availability">Availability of the Website</H2>
                        <P>We make reasonable efforts to keep this Website available at all times.</P>
                        <P>However, we do not guarantee uninterrupted access and may suspend, withdraw or modify the Website without notice for maintenance, updates or operational reasons.</P>
                        <P>We shall not be liable for any loss resulting from temporary unavailability.</P>
                        <Divider />

                        {/* LIABILITY */}
                        <H2 id="liability">Limitation of Liability</H2>
                        <P>To the fullest extent permitted by law, Car Body Shop shall not be liable for any indirect, incidental or consequential loss arising from your use of this Website.</P>
                        <P>Nothing in these Terms excludes or limits liability for:</P>
                        <UL items={[
                            'Death or personal injury caused by negligence.',
                            'Fraud or fraudulent misrepresentation.',
                            'Any liability that cannot legally be excluded under the laws of England and Wales.',
                        ]} />
                        <Divider />

                        {/* PRIVACY */}
                        <H2 id="privacy">Privacy</H2>
                        <P>
                            Your use of this Website is also governed by our{' '}
                            <Link href="/privacy-policy" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors underline underline-offset-2">
                                Privacy Policy
                            </Link>
                            , which explains how we collect, use and protect your personal information.
                        </P>
                        <Divider />

                        {/* COOKIES */}
                        <H2 id="cookies">Cookies</H2>
                        <P>This Website may use cookies and similar technologies to improve functionality and user experience. For more information, please refer to our Privacy Policy or Cookie Policy where applicable.</P>
                        <Divider />

                        {/* CHANGES */}
                        <H2 id="changes">Changes to These Terms</H2>
                        <P>We may revise these Terms from time to time to reflect changes in our business, legal requirements or Website functionality.</P>
                        <P>Updated versions will be published on this page with a revised &quot;Last Updated&quot; date.</P>
                        <P>Continued use of the Website following any changes constitutes acceptance of the updated Terms.</P>
                        <Divider />

                        {/* GOVERNING LAW */}
                        <H2 id="governing-law">Governing Law</H2>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-5">
                            <p className="text-gray-700 text-sm leading-relaxed">
                                These Terms shall be governed by and interpreted in accordance with the laws of <strong>England and Wales</strong>. Any dispute arising from or relating to these Terms or your use of this Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                            </p>
                        </div>
                        <Divider />

                        {/* CONTACT */}
                        <H2 id="contact">Contact Us</H2>
                        <P>If you have any questions regarding these Terms of Service or your use of this Website, please contact us using the details below. We will respond as soon as reasonably possible.</P>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-5">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Location</p>
                                        <p className="text-gray-700 text-sm font-medium">Peel Mill, Market Street, Shawforth, Rochdale OL12 8HN</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Phone</p>
                                        <a href="tel:07471512557" className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">07471 512 557</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm leading-relaxed">
                            Thank you for visiting Car Body Shop. By using our website, you agree to these Terms of Service.
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
