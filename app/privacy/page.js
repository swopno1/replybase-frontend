'use client';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4 text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-4 text-gray-800">
                <p>
                    Welcome to InvestorHints ("we", "our", "us"). We are committed to protecting your privacy
                    and your data. This Privacy Policy explains how we handle your information when you use our
                    chatbot automation services.
                </p>

                <h2 className="text-xl font-semibold mt-6">1. Data We Collect</h2>
                <ul className="list-disc pl-5">
                    <li><strong>Account Information:</strong> Name, Email, and Company Name.</li>
                    <li><strong>Facebook Data:</strong> Page ID, Page Name, and Access Tokens (stored encrypted).</li>
                    <li><strong>Messages:</strong> We process messages sent to your connected pages to trigger automation flows.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6">2. How We Use Data</h2>
                <p>
                    We use your data solely to provide the automation service. We do not sell your data
                    to third parties. Access tokens are used strictly to send and receive messages on your behalf.
                </p>

                <h2 className="text-xl font-semibold mt-6">3. Data Retention</h2>
                <p>
                    You may request deletion of your data at any time via the Facebook App Settings or
                    by contacting us directly.
                </p>

                <h2 className="text-xl font-semibold mt-6">4. Contact Us</h2>
                <p>If you have questions, please contact support@investorhints.com.</p>
            </div>
        </div>
    );
}