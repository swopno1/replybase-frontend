import { Metadata } from "next";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, LayoutGrid } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Workspace Navigation Guide",
  description: "Learn how to navigate the ReplyBase dashboard, from conversations to billing.",
  alternates: {
    canonical: "/docs/modular-dashboard",
  },
};

export default function ModularDashboardDoc() {
  return (
    <div className="max-w-4xl">
      <Link
        href="/docs"
        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Documentation
      </Link>

      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-white mb-4">
          Workspace Navigation Guide
        </h1>
        <p className="text-lg text-slate-400 mb-8">
          Learn where to do what in ReplyBase as a workspace owner or team
          user
        </p>

        <section className="mb-12">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <p className="text-slate-300">
              This guide is focused on practical navigation: where to setup
              sources, monitor conversations, optimize flows, and control
              subscription outcomes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Where To Work In The Dashboard
          </h2>
          <div className="space-y-3">
            {[
              "Inbox and Conversations: monitor unresolved customer messages",
              "Contacts and Leads: track customer records and follow-up status",
              "Bots and Flows: define response behavior and fallback strategy",
              "Channels (Facebook, Telegram, Webchat, WhatsApp): connect and manage individual platform integrations",
              "Activity Log: monitor tenant-wide events and system signals",
              "Billing: monitor plan usage and upgrade only when needed",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
              >
                <LayoutGrid className="text-indigo-400 mt-1" size={18} />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Navigation Best Practices
          </h2>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                • Start each day in Conversations to catch unresolved messages
              </li>
              <li>
                • Review flow performance weekly and refine low-conversion
                steps
              </li>
              <li>• Check source diagnostics before major campaigns</li>
              <li>
                • Review subscription usage before billing cycle boundaries
              </li>
            </ul>
          </div>
        </section>

        <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
          <h3 className="text-white font-bold mb-2">
            Need owner controls guidance?
          </h3>
          <p className="text-slate-300 mb-4">
            Review the workspace owner guide for account-level management and
            security routines.
          </p>
          <Link
            href="/docs/admin-panel"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
          >
            Workspace Owner Guide
          </Link>
        </div>
      </article>
    </div>
  );
}
