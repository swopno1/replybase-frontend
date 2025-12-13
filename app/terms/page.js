'use client';

export default function Terms() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <div className="space-y-4 text-gray-800">
                <p>
                    By accessing and using the InvestorHints platform, you agree to comply with these Terms of Service.
                </p>

                <h2 className="text-xl font-semibold mt-6">1. Acceptable Use</h2>
                <p>
                    You agree not to use our automation tools for spamming, harassment, or any illegal activities.
                    You must comply with Meta's Platform Terms and Messaging Policies.
                </p>

                <h2 className="text-xl font-semibold mt-6">2. Liability</h2>
                <p>
                    Our service is provided "as is". We are not liable for any disruptions in service or
                    actions taken by third-party platforms (e.g., Facebook blocking your page).
                </p>

                <h2 className="text-xl font-semibold mt-6">3. Termination</h2>
                <p>
                    We reserve the right to terminate access to any user who violates these terms or
                    misuses the platform.
                </p>
            </div>
        </div>
    );
}