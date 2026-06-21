import { BUSINESS_DETAILS } from '@/app/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy',
    description: `Privacy Policy for ${BUSINESS_DETAILS.name}. Learn how we protect your personal data in compliance with UK GDPR.`,
};

export default function PrivacyPolicy() {
    return (
        <main>
            <Navbar />
            <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 md:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                    
                    <div className="prose prose-blue max-w-none text-gray-700">
                        <p className="lead text-lg mb-6">
                            At {BUSINESS_DETAILS.name}, we are committed to protecting and respecting your privacy. 
                            This policy explains when and why we collect personal information, how we use it, 
                            and how we keep it secure in compliance with the UK General Data Protection Regulation (UK GDPR).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                        <p>We obtain information about you when you use our website, specifically when you contact us for an estimate or use our contact forms. The personal information we collect might include your:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Vehicle details (make, model, registration)</li>
                            <li>Photographs of vehicle damage</li>
                            <li>IP address and details of which pages you access</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                        <p>We may use your information to:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Provide you with an accurate estimate for repair work.</li>
                            <li>Contact you regarding your inquiry or estimate.</li>
                            <li>Carry out our obligations arising from any contracts entered into by you and us.</li>
                            <li>Seek your views or comments on the services we provide.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Who Has Access to Your Information?</h2>
                        <p className="mb-6">
                            We will not sell or rent your information to third parties. We will not share your information with third parties for marketing purposes. 
                            Your data is strictly used by our team at {BUSINESS_DETAILS.name} to process your requests and provide our services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Security Precautions</h2>
                        <p className="mb-6">
                            When you give us personal information, we take steps to ensure that it's treated securely. 
                            Any sensitive information (such as photos of damage and contact details) is encrypted and protected. 
                            Non-sensitive details (your email address etc.) are transmitted normally over the Internet, and this can never be guaranteed to be 100% secure.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
                        <p className="mb-6">
                            You have the right to ask for a copy of the information {BUSINESS_DETAILS.name} holds about you. 
                            You also have the right to request the deletion of your personal data at any time. 
                            If you wish to exercise these rights, please contact us at <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-blue-600 hover:underline">{BUSINESS_DETAILS.phone}</a>.
                        </p>

                        <p className="text-sm text-gray-500 mt-12 pt-6 border-t border-gray-100">
                            Last updated: {new Date().toLocaleDateString('en-GB')}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
