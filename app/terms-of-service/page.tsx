import { BUSINESS_DETAILS } from '@/app/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Terms of Service',
    description: `Terms and conditions for services provided by ${BUSINESS_DETAILS.name}.`,
};

export default function TermsOfService() {
    return (
        <main>
            <Navbar />
            <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
                <div className="max-w-3xl mx-auto px-4 md:px-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                    
                    <div className="prose prose-blue max-w-none text-gray-700">
                        <p className="lead text-lg mb-6">
                            Welcome to {BUSINESS_DETAILS.name}. By accessing our website or using our services, 
                            you agree to be bound by these Terms of Service. Please read them carefully.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Estimates and Quotations</h2>
                        <p className="mb-6">
                            All estimates provided via WhatsApp, email, or our online form based on photographs are provisional. 
                            A final, binding quotation can only be provided upon physical inspection of the vehicle at our workshop. 
                            We reserve the right to amend provisional estimates if further damage is discovered during physical inspection or dismantling.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Booking and Cancellation</h2>
                        <p className="mb-6">
                            When booking your vehicle in for repair, we may require a deposit to secure your slot, particularly if specialized parts need to be ordered. 
                            Cancellations must be made at least 48 hours prior to your scheduled drop-off time. Late cancellations may result in the forfeiture of your deposit.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payment Terms</h2>
                        <p className="mb-6">
                            Payment is due in full upon completion of the repair work and before the vehicle is released. 
                            We accept cash and major bank transfers. All parts remain the property of {BUSINESS_DETAILS.name} until full payment is received.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Guarantee</h2>
                        <p className="mb-6">
                            We pride ourselves on the quality of our workmanship. We offer a guarantee on our paint and body repairs against defective workmanship or materials. 
                            This guarantee does not cover damage caused by subsequent accidents, rust, stone chips, or improper maintenance.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liability</h2>
                        <p className="mb-6">
                            While your vehicle is in our care, it is fully insured against theft or damage. However, we are not responsible for any loss or damage to personal items left inside the vehicle. 
                            Please ensure all valuables are removed before dropping off your car.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions about these Terms, please contact us at:
                            <br />
                            Phone: <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-blue-600 hover:underline">{BUSINESS_DETAILS.phone}</a>
                            <br />
                            Address: {BUSINESS_DETAILS.address}
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
