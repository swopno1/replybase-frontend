import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the ReplyBase Terms of Service — your rights, responsibilities, and our commitments when you use the platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Terms of Service
        </h1>
        <p className="text-slate-400 mb-8">
          <strong>Last Updated:</strong> {lastUpdated}
        </p>

        <div className="space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-400">
              By accessing or using ReplyBase (the &quot;Service&quot;), you
              agree to be bound by these Terms of Service. If you disagree with
              any part of the terms, you may not access the Service. These terms
              apply to all users of the platform, including free and paid
              subscribers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              2. Description of Service
            </h2>
            <p className="text-slate-400">
              ReplyBase is an AI-powered conversation automation platform that
              enables you to create, manage, and deploy chatbots across multiple
              channels including Facebook Messenger, WhatsApp, and web. We
              provide conversation intelligence, lead management, contact
              tracking, and analytics tools to help businesses automate customer
              engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              3. Subscriptions and Payments
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                The Service offers four subscription tiers: Free (£0), Starter
                (£29/month), Pro (£89/month), and Business (£249/month).
              </li>
              <li>
                You agree to pay the fees associated with your selected plan.
              </li>
              <li>
                Paid plans may include a 14-day free trial before monthly
                billing begins.
              </li>
              <li>
                Payments are processed securely via Stripe. We do not store
                credit card information.
              </li>
              <li>Subscriptions auto-renew monthly unless cancelled.</li>
              <li>
                <strong className="text-slate-200">Refunds:</strong> You may
                cancel your subscription at any time through your account
                settings. Cancellations take effect at the end of the current
                billing period. We do not offer refunds for partial months of
                service.
              </li>
              <li>
                <strong className="text-slate-200">Plan Changes:</strong> You
                may upgrade or downgrade your plan at any time. Upgrades take
                effect immediately; downgrades take effect at the next billing
                cycle.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              4. Usage Limits and Fair Use
            </h2>
            <p className="mb-4 text-slate-400">
              Each subscription plan includes specific limits based on your
              tier:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Free:</strong> 1 bot, 100
                daily messages, limited AI features.
              </li>
              <li>
                <strong className="text-slate-200">Starter:</strong> 3 bots,
                1,500 automations per month, 1,000 AI responses per month, CRM
                access, and email support.
              </li>
              <li>
                <strong className="text-slate-200">Pro:</strong> 10 bots, 10,000
                automations per month, 7,500 AI responses per month, CRM access,
                API access, and priority support.
              </li>
              <li>
                <strong className="text-slate-200">Business:</strong> 25 bots,
                40,000 automations per month, 25,000 AI responses per month, CRM
                access, API access, and priority plus support.
              </li>
            </ul>
            <p className="mt-4 text-slate-400">
              If you consistently exceed your plan limits, we reserve the right
              to contact you to upgrade your plan or throttle your service to
              comply with plan limitations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-slate-400 mb-4">
              ReplyBase integrates with third-party services including
              Facebook/Meta, WhatsApp, and payment processors. You acknowledge
              that:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                You are responsible for complying with the terms of service of
                these third-party platforms.
              </li>
              <li>
                Costs associated with{" "}
                <strong className="text-slate-200">
                  WhatsApp Business API
                </strong>{" "}
                or
                <strong className="text-slate-200">
                  Facebook advertising
                </strong>{" "}
                are paid directly by you to Meta Platforms, Inc.
              </li>
              <li>
                ReplyBase is not responsible for these third-party charges,
                service interruptions, or policy changes.
              </li>
              <li>
                Integration functionality depends on third-party API
                availability and may be affected by changes to their services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              6. User Accounts & Responsibilities
            </h2>
            <p className="mb-4 text-slate-400">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account. You
              agree not to use the Service for:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                Sending spam, unsolicited bulk messages, or violating anti-spam
                laws
              </li>
              <li>Illegal activities or promoting illegal acts</li>
              <li>Harassing, abusive, or discriminatory behavior</li>
              <li>Impersonating others or misrepresenting your affiliation</li>
              <li>Distributing malware or engaging in hacking attempts</li>
              <li>Violating intellectual property rights</li>
            </ul>
            <p className="mt-4 text-slate-400">
              We reserve the right to suspend or terminate accounts that violate
              these policies, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              7. Data Ownership and License
            </h2>
            <p className="text-slate-400 mb-4">
              You retain all rights to the content you create using ReplyBase,
              including bot flows, messages, and customer data. By using the
              Service, you grant us a limited license to use, store, and process
              your content solely to provide and improve the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              8. Service Availability and Support
            </h2>
            <p className="text-slate-400 mb-4">
              We strive to provide reliable service with the following SLAs:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>Free: 99% uptime</li>
              <li>Starter: 99.5% uptime, email support</li>
              <li>Pro: 99.9% uptime, 24-hour chat support</li>
              <li>Business: 99.99% uptime, 1-hour phone support</li>
            </ul>
            <p className="mt-4 text-slate-400">
              Scheduled maintenance will be announced in advance when possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-slate-400">
              IN NO EVENT SHALL REPLYBASE, NOR ITS DIRECTORS, EMPLOYEES,
              PARTNERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
              LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES,
              RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICE. OUR TOTAL
              LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS
              PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              10. &quot;As Is&quot; Service
            </h2>
            <p className="text-slate-400">
              The Service is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis without warranties of any kind, either
              express or implied. We do not warrant that the Service will be
              uninterrupted, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              11. AI Service Terms & Acceptable Use
            </h2>
            <p className="text-slate-400 mb-4">
              ReplyBase utilizes advanced Artificial Intelligence and Large
              Language Models to provide its services. By using our AI features,
              you acknowledge and agree that:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-200">Nature of AI:</strong>{" "}
                AI-generated content may occasionally be inaccurate, incomplete,
                or biased. You are responsible for reviewing and validating any
                content generated by your bots.
              </li>
              <li>
                <strong className="text-slate-200">
                  No Professional Advice:
                </strong>{" "}
                AI responses do not constitute professional, legal, or financial
                advice.
              </li>
              <li>
                <strong className="text-slate-200">Acceptable Use:</strong> You
                agree not to use AI features to generate harmful, illegal, or
                deceptive content.
              </li>
              <li>
                <strong className="text-slate-200">Disclaimer:</strong>{" "}
                ReplyBase is not liable for any damages or losses resulting from
                reliance on AI-generated output.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              12. Modifications to Service and Terms
            </h2>
            <p className="text-slate-400">
              We reserve the right to modify or discontinue the Service (or any
              part thereof) with or without notice. We may also update these
              Terms from time to time. Continued use of the Service after
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              13. Termination
            </h2>
            <p className="text-slate-400">
              Either party may terminate this agreement at any time. Upon
              termination, your right to use the Service will immediately cease.
              We will retain your data for 30 days after termination to allow
              data export, after which it will be permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              14. Governing Law
            </h2>
            <p className="text-slate-400">
              These Terms shall be governed and construed in accordance with the
              laws of the{" "}
              <strong className="text-slate-200">United Kingdom</strong>,
              without regard to its conflict of law provisions. Any disputes
              shall be resolved in the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">
              15. Contact Us
            </h2>
            <p className="text-slate-400 mb-4">
              If you have any questions about these Terms, please contact us:
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
                  href="https://wa.me/447822033580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300"
                >
                  +44 7822 033580
                </a>
                <br />
                <strong>Legal:</strong>{" "}
                <a
                  href="mailto:admin@replybase.co.uk"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  admin@replybase.co.uk
                </a>
                <br />
                <strong>Company:</strong> ReplyBase

              </p>
            </div>
          </section>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
