'use client';

import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';

export default function TermsPage() {
    return (
        <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
            <LandingNavbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
                    Terms of Service
                </h1>
                <p className="text-slate-400 mb-8">
                    <strong>Last Updated:</strong> December 6, 2025
                </p>

                <div className="space-y-8 text-slate-300">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-slate-400">
                            By accessing or using ReplyBase (the "Service"), you agree to be bound by these Terms of Service.
                            If you disagree with any part of the terms, you may not access the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p className="text-slate-400">
                            ReplyBase is a visual chatbot builder platform. We provide the infrastructure and software to enable you
                            to create automation flows for web, Facebook, and WhatsApp.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. Subscriptions and Payments</h2>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li>The Service is billed on a subscription basis (Monthly).</li>
                            <li>You agree to pay the fees associated with your selected plan (£19, £29, or £49/month).</li>
                            <li>Payments are processed via Stripe.</li>
                            <li>
                                <strong className="text-slate-200">Refunds:</strong> You may cancel your subscription at any time.
                                We do not offer refunds for partial months of service.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Costs (Meta/WhatsApp)</h2>
                        <p className="text-slate-400">
                            You acknowledge that ReplyBase is a software tool. Costs associated with the <strong className="text-slate-200">WhatsApp Business API</strong> or
                            <strong className="text-slate-200">Facebook Ads</strong> are paid directly by you to Meta Platforms, Inc. ReplyBase is not responsible for these third-party charges.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">5. User Accounts & Responsibilities</h2>
                        <p className="mb-4 text-slate-400">
                            You are responsible for safeguarding the password/login used to access the Service. You agree not to use the Service for:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li>Sending spam or unsolicited bulk messages.</li>
                            <li>Illegal activities or promoting illegal acts.</li>
                            <li>Harassing or abusive behavior.</li>
                        </ul>
                        <p className="mt-4 text-slate-400">
                            We reserve the right to terminate accounts that violate these policies without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                        <p className="text-slate-400">
                            In no event shall ReplyBase, nor its directors, employees, or partners, be liable for any indirect, incidental, special,
                            or consequential damages resulting from your use of the Service, including but not limited to loss of data or loss of revenue.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">7. "As Is" Service</h2>
                        <p className="text-slate-400">
                            The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the Service will function
                            uninterrupted, secure, or available at any particular time or location.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">8. Governing Law</h2>
                        <p className="text-slate-400">
                            These Terms shall be governed and construed in accordance with the laws of the <strong className="text-slate-200">United Kingdom</strong>,
                            without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">9. Contact Us</h2>
                        <p className="text-slate-400">
                            If you have any questions about these Terms, please contact us at:
                            <strong className="text-white block mt-1">support@replybase.co.uk</strong>
                        </p>
                    </section>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
}
