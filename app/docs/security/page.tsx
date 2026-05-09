import { Metadata } from "next";
import DocLayout from "../_components/DocLayout";

export const metadata: Metadata = {
  title: "Security Model",
  description: "Learn about ReplyBase security posture, data encryption, and GDPR compliance.",
  alternates: {
    canonical: "/docs/security",
  },
};

export default function SecurityDoc() {
  return (
    <DocLayout
      title="Security Model"
      description="Data protection, encryption, and privacy standards at ReplyBase"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
        <p className="text-slate-300 mb-4">
          ReplyBase is built with security as a core principle. We use
          industry-standard encryption and security practices to ensure your
          business data and customer conversations remain private and secure.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Data Encryption</h2>
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <ul className="space-y-4 text-slate-300">
            <li>
              <strong className="text-white block mb-1">In Transit</strong>
              All data transmitted between our servers and your users is
              encrypted using TLS 1.2 or higher.
            </li>
            <li>
              <strong className="text-white block mb-1">At Rest</strong>
              Sensitive data, including API keys and customer records, is
              encrypted at rest using AES-256 encryption.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-2">GDPR</h3>
            <p className="text-sm text-slate-400">
              We are fully compliant with the General Data Protection Regulation
              (GDPR). You have full control over your data, including the
              ability to export or delete it at any time.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-2">CCPA</h3>
            <p className="text-sm text-slate-400">
              We respect the California Consumer Privacy Act (CCPA) and provide
              the same level of data protection and rights to all our users
              globally.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
        <h3 className="text-white font-bold mb-2">Have security questions?</h3>
        <p className="text-slate-300 mb-4">
          Our security team is happy to provide more details about our
          infrastructure and data handling practices.
        </p>
        <a
          href="mailto:security@replybase.co.uk"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
        >
          Contact Security Team
        </a>
      </div>
    </DocLayout>
  );
}
