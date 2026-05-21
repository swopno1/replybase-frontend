import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { DataDeletionForm } from "@/components/DataDeletionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ReplyBase collects, uses, and protects your personal data. GDPR & CCPA compliant — your privacy is our priority.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "April 17, 2026";

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 mb-8">
          <strong>Last Updated:</strong> {lastUpdated}
        </p>

        <div className="space-y-8 text-slate-300">
          <p>
            Welcome to ReplyBase (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). We are committed to protecting your privacy. This
            Privacy Policy explains how your personal information is collected,
            used, and disclosed by ReplyBase, an AI-powered conversation
            management platform.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information to provide our conversation automation
              services:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Account Information:</strong>{" "}
                When you register (via Google, Facebook, or email), we collect
                your name, email address, and profile picture.
              </li>
              <li>
                <strong className="text-slate-200">Payment Information:</strong>{" "}
                We use Stripe to process payments. We do not store your credit
                card details on our servers. Only subscription status and
                transaction IDs are retained.
              </li>
              <li>
                <strong className="text-slate-200">Conversation Data:</strong>{" "}
                Messages exchanged through your bots, contact information, lead
                data, and conversation analytics.
              </li>
              <li>
                <strong className="text-slate-200">Bot Configuration:</strong>{" "}
                Your bot flows, settings, channel connections, and automation
                rules.
              </li>
              <li>
                <strong className="text-slate-200">Usage Analytics:</strong> How
                you interact with our platform, feature usage, and performance
                metrics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. AI Data Processing
            </h2>
            <p className="mb-4">
              ReplyBase uses third-party AI providers (such as OpenAI and
              Anthropic) to power our automated conversation features.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">
                  Real-time Processing:
                </strong>{" "}
                Conversation data is sent to these providers in real-time to
                generate intelligent responses.
              </li>
              <li>
                <strong className="text-slate-200">No Model Training:</strong>{" "}
                We ensure that our agreements with AI providers prohibit the use
                of your data or your customers&apos; data for training their
                global models.
              </li>
              <li>
                <strong className="text-slate-200">Data Minimization:</strong>{" "}
                We only send the minimum necessary context to AI providers to
                fulfill the specific automation request.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. Facebook & Meta Data (App Review Disclosure)
            </h2>
            <p className="mb-4">
              Our application integrates with the Meta (Facebook) Platform. If
              you choose to connect your Facebook Page or WhatsApp account, we
              request the following data permissions:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">pages_show_list:</strong> To
                display the Facebook Pages you administer so you can select
                which one to connect.
              </li>
              <li>
                <strong className="text-slate-200">pages_messaging:</strong> To
                send and receive messages on behalf of your connected Pages,
                enabling automated replies and human agent responses.
              </li>
              <li>
                <strong className="text-slate-200">
                  pages_manage_metadata:
                </strong>{" "}
                To subscribe your Page to webhook events so our system receives
                and processes incoming messages in real time.
              </li>
              <li>
                <strong className="text-slate-200">
                  whatsapp_business_messaging:
                </strong>{" "}
                To send and receive WhatsApp messages through your Business
                Account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3b. Meta Data Deletion
            </h2>
            <p className="mb-4">
              If you disconnect ReplyBase from your Facebook account or request
              data deletion, we will remove all associated Page access tokens,
              connected Page records, conversation history, and contact data
              from our systems. You can trigger this at any time via:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                The &quot;Disconnect All&quot; button in{" "}
                <strong className="text-slate-200">
                  Integrations → Facebook
                </strong>{" "}
                (also revokes app permissions from facebook.com/settings)
              </li>
              <li>The data deletion request form below (section 6)</li>
              <li>
                The Meta-initiated deletion callback at{" "}
                <code className="text-slate-300 bg-slate-800 px-1 rounded text-xs">
                  app.replybase.co.uk/api/facebook/data-deletion
                </code>{" "}
                — when you remove ReplyBase from{" "}
                <em>Facebook Settings → Business Integrations</em>, Meta
                automatically notifies this endpoint and we begin immediate
                deletion.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. Newsletter & Marketing
            </h2>
            <p className="mb-4">
              If you choose to subscribe to our newsletter, we collect your
              email address to send you updates, product news, and marketing
              communications.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Consent:</strong> We only
                send marketing emails to users who have explicitly opted in.
              </li>
              <li>
                <strong className="text-slate-200">Unsubscribe:</strong> You can
                opt-out of marketing communications at any time by clicking the
                &quot;unsubscribe&quot; link in our emails.
              </li>
              <li>
                <strong className="text-slate-200">
                  Third-party Services:
                </strong>{" "}
                We may use reputable third-party email service providers to
                manage and deliver our newsletter.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                To provide, maintain, and improve our conversation automation
                services
              </li>
              <li>To process your subscription payments and manage billing</li>
              <li>
                To send and receive messages on your behalf through connected
                channels
              </li>
              <li>
                To analyze conversation patterns and provide analytics insights
              </li>
              <li>
                To send you service updates, security alerts, and support
                messages
              </li>
              <li>
                To detect, prevent, and address technical issues or fraudulent
                activity
              </li>
              <li>
                To comply with legal obligations and enforce our Terms of
                Service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. Data Retention and Deletion
            </h2>
            <p className="mb-4">
              We retain your data as long as your account is active. You can
              request data deletion at any time:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>Via account settings in your dashboard</li>
              <li>By contacting admin@replybase.co.uk</li>
            </ul>
            <p className="mt-6 mb-4 text-slate-400">
              In accordance with GDPR, you have the right to request deletion of
              your personal data. You can submit a request directly below:
            </p>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
              <DataDeletionForm />
            </div>
            <p className="mt-4 text-slate-400">
              Upon deletion request, we will remove your personal data within 30
              days, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. Data Sharing and Third Parties
            </h2>
            <p className="mb-4">
              We share your data only in the following circumstances:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Payment Processing:</strong>{" "}
                Stripe processes payments on our behalf (PCI DSS compliant).
              </li>
              <li>
                <strong className="text-slate-200">AI Processing:</strong>{" "}
                Third-party AI providers for conversation automation.
              </li>
              <li>
                <strong className="text-slate-200">Messaging Platforms:</strong>{" "}
                Facebook/Meta and WhatsApp for message delivery.
              </li>
              <li>
                <strong className="text-slate-200">Service Providers:</strong>{" "}
                Cloud hosting (for infrastructure), email services (for
                notifications).
              </li>
              <li>
                <strong className="text-slate-200">Legal Requirements:</strong>{" "}
                When required by law or to protect our rights.
              </li>
            </ul>
            <p className="mt-4 text-slate-400">
              <strong>
                We do not sell your personal data to third parties.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. Data Storage and Security
            </h2>
            <p className="text-slate-400">
              We implement industry-standard security measures including
              encryption in transit (HTTPS/TLS), secure authentication (OAuth
              2.0/OIDC), and regular security audits. Your data is hosted on
              secure servers in verified data centers. However, no system is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              9. Your Rights (GDPR Compliance)
            </h2>
            <p className="mb-4">
              If you are in the EU/UK, you have the following rights:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Access:</strong> Request a
                copy of your personal data
              </li>
              <li>
                <strong className="text-slate-200">Rectification:</strong>{" "}
                Correct inaccurate data
              </li>
              <li>
                <strong className="text-slate-200">Erasure:</strong> Request
                deletion of your data
              </li>
              <li>
                <strong className="text-slate-200">Portability:</strong> Export
                your data in a machine-readable format
              </li>
              <li>
                <strong className="text-slate-200">Object:</strong> Object to
                certain data processing
              </li>
            </ul>
            <p className="mt-4 text-slate-400">
              To exercise these rights, contact us at admin@replybase.co.uk
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              10. Cookies and Tracking
            </h2>
            <p className="text-slate-400">
              We use essential cookies for authentication and session
              management. Functional cookies help us remember your preferences.
              Analytics cookies (optional) help us understand how you use our
              platform. You can manage cookie preferences through our cookie
              consent banner or view our dedicated{" "}
              <a
                href="/cookie-policy"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              11. Children&apos;s Privacy
            </h2>
            <p className="text-slate-400">
              Our service is not intended for users under 16 years of age. We do
              not knowingly collect personal information from children under 16.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              12. Changes to This Policy
            </h2>
            <p className="text-slate-400">
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes via email or through a notice on
              our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              13. Contact Us
            </h2>
            <p className="text-slate-400 mb-4">
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="text-slate-300">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:admin@replybase.co.uk"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  admin@replybase.co.uk
                </a>
                <br />
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/447453383642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  +44 7453 383642
                </a>
                <br />
                <strong>Support:</strong>{" "}
                <a
                  href="mailto:admin@replybase.co.uk"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  admin@replybase.co.uk
                </a>
                <br />
                <strong>Address:</strong> ReplyBase

              </p>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
