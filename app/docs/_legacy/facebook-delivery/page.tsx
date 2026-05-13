import { Metadata } from "next";
import DocLayout from "../../_components/DocLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facebook Messenger Guide",
  description: "Connect your Facebook Page to ReplyBase and automate your customer enquiries on Messenger.",
  alternates: {
    canonical: "/docs/facebook-delivery",
  },
};

export default function FacebookDeliveryDoc() {
  return (
    <DocLayout
      title="Facebook Messenger Reference"
      description="Technical and operational guide for Facebook Messenger automation"
    >
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Channel Overview</h2>
        <p className="text-slate-300 mb-4">
          The Facebook Messenger integration allows ReplyBase to receive and
          reply to messages sent to your Facebook Business Page.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
        <ul className="space-y-2 text-slate-300">
          <li>• A Facebook Business Page</li>
          <li>• Admin access to the Page</li>
          <li>
            • A ReplyBase workspace with a{" "}
            <Link href="/docs/features" className="text-indigo-400">
              compatible plan
            </Link>
          </li>
        </ul>
      </section>

      <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
        <h3 className="text-white font-bold mb-2">Ready to connect?</h3>
        <p className="text-slate-300 mb-4">
          Follow our step-by-step setup guide to connect your Page in minutes.
        </p>
        <Link
          href="/docs/get-started/facebook-setup"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
        >
          Facebook Setup Guide
        </Link>
      </div>
    </DocLayout>
  );
}
