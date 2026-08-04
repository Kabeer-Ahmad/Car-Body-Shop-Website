import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Car Body Shop Rochdale',
    description: 'Car Body Shop privacy policy. How we collect, use, and protect your personal information in accordance with UK GDPR and the Data Protection Act 2018.',
    alternates: { canonical: 'https://www.carbodyshop.org/privacy-policy' },
};

const SECTIONS = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'information-we-collect', label: 'Information We Collect' },
    { id: 'how-we-use', label: 'How We Use Your Information' },
    { id: 'lawful-basis', label: 'Lawful Basis for Processing' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'storage', label: 'How We Store Your Information' },
    { id: 'retention', label: 'How Long We Keep Your Information' },
    { id: 'sharing', label: 'Sharing Your Information' },
    { id: 'transfers', label: 'International Transfers' },
    { id: 'your-rights', label: 'Your Privacy Rights' },
    { id: 'third-party', label: 'Third-Party Websites' },
    { id: 'children', label: "Children's Privacy" },
    { id: 'security', label: 'Data Security' },
    { id: 'changes', label: 'Changes to This Policy' },
    { id: 'contact', label: 'Contact Us' },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
    return (
        <h2 id={id} className="text-2xl font-extrabold text-blue-700 mt-12 mb-4 pb-3 border-b-2 border-blue-100 scroll-mt-28">
            {children}
        </h2>
    );
}

function H3({ children }: { children: React.ReactNode }) {
    return <h3 className="text-lg font-bold text-blue-600 mt-6 mb-2">{children}</h3>;
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

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <div className="bg-gray-900 pt-28 pb-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-gray-300">Privacy Policy</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
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

                    {/* Policy content */}
                    <article className="min-w-0 max-w-3xl">

                        {/* Intro card */}
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
                            <P>
                                Car Body Shop (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website or contact us.
                            </P>
                            <P>
                                We process personal data in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong>, the <strong>Data Protection Act 2018</strong>, and other applicable UK privacy laws.
                            </P>
                            <p className="text-gray-600 leading-relaxed">By using our website, you agree to the practices described in this Privacy Policy.</p>
                        </div>

                        <H2 id="who-we-are">Who We Are</H2>
                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-5">
                            <p className="text-gray-700 text-sm"><strong>Business Name:</strong> Car Body Shop</p>
                            <p className="text-gray-700 text-sm mt-1"><strong>Website:</strong> carbodyshop.org</p>
                        </div>
                        <P>Car Body Shop is the data controller responsible for the personal information collected through this website.</P>
                        <P>If you have any questions about this Privacy Policy or how we process your personal data, please contact us using the contact form available on our website.</P>
                        <Divider />

                        <H2 id="information-we-collect">Information We Collect</H2>
                        <P>We only collect personal information that you voluntarily provide when submitting an enquiry through our website. Depending on your enquiry, this may include:</P>
                        <UL items={['Full name', 'Vehicle information', 'Location or postcode', 'Preferred appointment date', 'Details about your vehicle or repair requirements', 'Any additional information you choose to include']} />
                        <P>We do not intentionally collect special category personal data or sensitive personal information.</P>
                        <Divider />

                        <H2 id="how-we-use">How We Use Your Information</H2>
                        <P>We use the information you provide to:</P>
                        <UL items={['Respond to your enquiries.', 'Provide quotations for our services.', 'Arrange inspections or appointments.', 'Communicate regarding your vehicle repair.', 'Improve our customer service.', 'Maintain records of customer enquiries where necessary.']} />
                        <P>We do not sell, rent, or trade your personal information to third parties.</P>
                        <Divider />

                        <H2 id="lawful-basis">Our Lawful Basis for Processing</H2>
                        <P>Under UK GDPR, we process your personal information on one or more of the following lawful bases:</P>
                        <H3>Legitimate Interests</H3>
                        <P>To respond to enquiries, provide quotations, communicate with customers, and manage our business efficiently.</P>
                        <H3>Contract</H3>
                        <P>Where processing is necessary to provide services requested by you or to take steps before entering into a contract.</P>
                        <H3>Legal Obligation</H3>
                        <P>Where we are required to retain or disclose information to comply with applicable laws or legal requirements.</P>
                        <Divider />

                        <H2 id="cookies">Cookies</H2>
                        <P>Our website may use cookies and similar technologies to improve your browsing experience and understand how visitors use our website. Cookies may include:</P>
                        <UL items={['Essential cookies required for website functionality.', 'Performance and analytics cookies that help us improve our website.']} />
                        <P>Where required by law, you will be asked to provide consent before non-essential cookies are stored on your device. You can manage or disable cookies through your browser settings.</P>
                        <Divider />

                        <H2 id="analytics">Analytics</H2>
                        <P>We may use website analytics tools to understand how visitors interact with our website. These tools may collect anonymised information such as:</P>
                        <UL items={['Pages visited', 'Time spent on the website', 'Device type', 'Browser type', 'General location based on IP address']} />
                        <P>This information helps us improve the performance and usability of our website. Analytics data is not used to identify individual visitors.</P>
                        <Divider />

                        <H2 id="storage">How We Store Your Information</H2>
                        <P>We take appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction.</P>
                        <P>While we take reasonable steps to safeguard your information, no internet transmission or electronic storage system can be guaranteed to be completely secure.</P>
                        <Divider />

                        <H2 id="retention">How Long We Keep Your Information</H2>
                        <P>We retain personal information only for as long as reasonably necessary to:</P>
                        <UL items={['Respond to your enquiry.', 'Provide our services.', 'Comply with legal, regulatory, or accounting obligations.', 'Resolve disputes where required.']} />
                        <P>When your information is no longer needed, it will be securely deleted or anonymised.</P>
                        <Divider />

                        <H2 id="sharing">Sharing Your Information</H2>
                        <P>We do not sell your personal information. We may share your information only where necessary with:</P>
                        <UL items={['Professional advisers.', 'IT service providers who help operate our website.', 'Website hosting providers.', 'Law enforcement or regulatory authorities where required by law.']} />
                        <P>Any third-party providers processing data on our behalf are required to protect your information in accordance with applicable data protection legislation.</P>
                        <Divider />

                        <H2 id="transfers">International Transfers</H2>
                        <P>We aim to store and process personal information within the United Kingdom or countries providing an adequate level of data protection.</P>
                        <P>Where personal information is transferred internationally, appropriate safeguards will be implemented in accordance with UK GDPR.</P>
                        <Divider />

                        <H2 id="your-rights">Your Privacy Rights</H2>
                        <P>Under UK data protection law, you may have the right to:</P>
                        <UL items={['Request access to your personal information.', 'Request correction of inaccurate information.', 'Request deletion of your personal information.', 'Request restriction of processing.', 'Object to certain processing activities.', 'Request transfer of your personal information where applicable.', 'Withdraw consent where processing relies on consent.']} />
                        <P>If you wish to exercise any of these rights, please contact us using our website contact form.</P>
                        <Divider />

                        <H2 id="third-party">Third-Party Websites</H2>
                        <P>Our website may contain links to third-party websites for your convenience. We are not responsible for the privacy practices or content of external websites. We encourage you to review their privacy policies before providing personal information.</P>
                        <Divider />

                        <H2 id="children">Children&apos;s Privacy</H2>
                        <P>Our website is intended for individuals aged 18 or over seeking vehicle repair services. We do not knowingly collect personal information from children. If we become aware that information has been submitted by a child, we will delete it promptly.</P>
                        <Divider />

                        <H2 id="security">Data Security</H2>
                        <P>We implement appropriate security measures designed to protect personal information from unauthorised access, misuse, loss, or disclosure. Access to personal information is limited to authorised individuals who require it for legitimate business purposes.</P>
                        <Divider />

                        <H2 id="changes">Changes to This Privacy Policy</H2>
                        <P>We may update this Privacy Policy from time to time to reflect changes in legal requirements, business practices, or website functionality. Any updates will be published on this page with a revised &quot;Last Updated&quot; date.</P>
                        <Divider />

                        <H2 id="contact">Contact Us</H2>
                        <P>If you have any questions about this Privacy Policy or how your personal information is handled, please contact us using the details below or the contact form available on our website.</P>

                        {/* Contact details card */}
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
                                        <p className="text-gray-700 text-sm font-medium">Whitworth, Rochdale, OL12 8HN</p>
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

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-4">
                            <p className="text-gray-700 text-sm leading-relaxed">
                                If you are not satisfied with our response, you have the right to lodge a complaint with the{' '}
                                <strong>Information Commissioner&apos;s Office (ICO)</strong>, the UK&apos;s independent authority for data protection.
                            </p>
                            <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-3 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                                ico.org.uk
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        <div className="mt-14 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm leading-relaxed">
                            Thank you for trusting Car Body Shop with your information. We are committed to protecting your privacy and handling your personal data responsibly.
                        </div>
                    </article>
                </div>
            </div>

            <Footer />
        </main>
    );
}
