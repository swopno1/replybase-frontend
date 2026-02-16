import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Cookie Policy
        </h1>
        <p className="text-slate-400 mb-8">
          <strong>Last Updated:</strong> {lastUpdated}
        </p>

        <div className="space-y-8 text-slate-300">
          <p>
            This Cookie Policy explains how ReplyBase (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar technologies when you visit our website.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. What are Cookies?
            </h2>
            <p className="text-slate-400">
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. How We Use Cookies
            </h2>
            <p className="mb-4 text-slate-400">
              We use cookies for several reasons, including:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>To provide essential functionality (e.g., authentication, security).</li>
              <li>To remember your preferences and settings.</li>
              <li>To understand how you use our website and improve your experience.</li>
              <li>To measure the effectiveness of our marketing campaigns.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                <p className="text-slate-400">
                  These cookies are necessary for the website to function properly. They enable core features such as security, network management, and accessibility. You cannot opt-out of these cookies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                <p className="text-slate-400">
                  These cookies allow our website to remember choices you make (such as your username or language) and provide enhanced, more personal features.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                <p className="text-slate-400">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website structure and content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. Managing Cookies
            </h2>
            <p className="text-slate-400 mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>See what cookies you&apos;ve got and delete them on an individual basis.</li>
              <li>Block third-party cookies.</li>
              <li>Block cookies from particular sites.</li>
              <li>Block all cookies from being set.</li>
              <li>Delete all cookies when you close your browser.</li>
            </ul>
            <p className="mt-4 text-slate-400">
              Please note that if you choose to block or delete cookies, some features of our website may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. Changes to This Policy
            </h2>
            <p className="text-slate-400">
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. Contact Us
            </h2>
            <p className="text-slate-400">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a
                href="mailto:privacy@replybase.co.uk"
                className="text-indigo-400 hover:text-indigo-300"
              >
                privacy@replybase.co.uk
              </a>.
            </p>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
