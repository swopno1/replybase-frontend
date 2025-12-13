'use client';

import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';

export default function PrivacyPage() {
    return (
        <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
            <LandingNavbar />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
                    Privacy Policy
                </h1>
                <p className="text-slate-400 mb-8">
                    <strong>Last Updated:</strong> December 6, 2025
                </p>

                <div className="space-y-8 text-slate-300">
                    <p>
                        Welcome to ReplyBase ("we," "our," or "us"). We are committed to protecting your privacy.
                        This Privacy Policy explains how your personal information is collected, used, and disclosed by ReplyBase.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We collect information to provide our chatbot building services:</p>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li>
                                <strong className="text-slate-200">Account Information:</strong> When you register via Google Login, we collect your name, email address, and profile picture.
                            </li>
                            <li>
                                <strong className="text-slate-200">Payment Information:</strong> We use Stripe to process payments. We do not store your credit card details on our servers.
                            </li>
                            <li>
                                <strong className="text-slate-200">User Content:</strong> Data you upload to the chatbot builder (images, text, flows) is stored on our secure servers.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">2. Facebook & Meta Data (App Review Disclosure)</h2>
                        <p className="mb-4">
                            Our application integrates with the Meta (Facebook) Platform. If you choose to connect your Facebook Page or WhatsApp account,
                            we request the following data permissions:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li>
                                <strong className="text-slate-200">pages_show_list:</strong> To display the Facebook Pages you administer so you can select which one to connect.
                            </li>
                            <li>
                                <strong className="text-slate-200">pages_messaging:</strong> To allow the chatbots you build to read incoming messages and send automated replies on your behalf.
                            </li>
                        </ul>
                        <p className="mt-4">
                            <strong className="text-slate-200">Data Usage:</strong> We do not sell your Facebook data. We only use this data to execute the chatbot automation functions you have configured.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">We use the collected information to:</p>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li>Provide, operate, and maintain our website.</li>
                            <li>Process your subscription payments.</li>
                            <li>Send you emails regarding your account or system updates.</li>
                            <li>Detect and prevent fraud.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">4. Data Storage and Security</h2>
                        <p className="text-slate-400">
                            Your data is hosted on secure Virtual Private Servers (VPS) located in verified data centers.
                            We use industry-standard encryption (SSL) to protect data in transit.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">5. Sharing Information</h2>
                        <p className="mb-4">
                            We do not sell your data. We may share data with trusted third-party service providers solely for the purpose of running the service:
                        </p>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li><strong className="text-slate-200">Stripe:</strong> For payment processing.</li>
                            <li><strong className="text-slate-200">Meta/Facebook:</strong> When you explicitly connect your account for automation.</li>
                            <li><strong className="text-slate-200">Google:</strong> For authentication purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">6. Your Data Rights (GDPR)</h2>
                        <p className="mb-4">If you are a resident of the UK or EEA, you have the right to:</p>
                        <ul className="list-disc ml-6 space-y-2 text-slate-400">
                            <li>Access the personal data we hold about you.</li>
                            <li>Request deletion of your account and data.</li>
                            <li>Object to processing of your data.</li>
                        </ul>
                        <p className="mt-4 text-slate-400">To exercise these rights, please contact us at the email below.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
                        <p className="text-slate-400 mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
                        <p className="text-slate-300">
                            <strong className="text-white">Email:</strong> support@replybase.co.uk<br />
                            <strong className="text-white">Address:</strong> 65 Church Street, Bargoed, Caerphilly CF81 9FF, United Kingdom
                        </p>
                    </section>
                </div>
            </main>

            <LandingFooter />
        </div>
    );
}
