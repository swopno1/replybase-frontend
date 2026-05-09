import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Steps',
  description: 'What to do after setting up your first ReplyBase chatbot channel.',
  alternates: {
    canonical: '/docs/get-started/next-steps',
  },
};



import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import {
  ArrowLeft,
  Sparkles,
  Globe,
  Send,
  MessageSquare,
  CreditCard,
  GitBranch,
  Users,
  BarChart2,
} from "lucide-react";

export default function NextStepsDoc() {
  return (
    <DocLayout
      title="You're Live!"
      description="Your first channel is active. Here's what to explore next"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8 bg-slate-800 border border-slate-700 rounded-xl p-4 not-prose">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm shrink-0">
          ✓
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            Part of: Get Started Guide
          </div>
          <div className="text-slate-400 text-xs">
            Step 5 of 5 — you made it!
          </div>
        </div>
        <Link
          href="/docs/get-started"
          className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs"
        >
          View all steps
        </Link>
      </div>

      {/* Congratulations banner */}
      <div className="not-prose bg-linear-to-r from-indigo-900/40 to-green-900/30 border border-indigo-700/50 rounded-2xl p-8 mb-10 text-center">
        <div className="flex justify-center mb-3">
          <Sparkles size={32} className="text-indigo-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Congratulations — your channel is live!
        </h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          ReplyBase is now capturing leads and replying to customers
          automatically. Every message that comes in will appear in your
          Conversations dashboard.
        </p>
      </div>

      {/* What happens now */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          What Happens From Here
        </h2>
        <div className="not-prose space-y-3">
          {[
            {
              Icon: Users,
              title: "Conversations",
              description:
                "All incoming messages land here. You can read, reply manually, and see the full conversation thread with every visitor.",
              href: "https://app.replybase.co.uk/conversations",
            },
            {
              Icon: Users,
              title: "Contacts",
              description:
                "Every person who messages you gets a Contact record automatically. View their history and identity badges.",
              href: "https://app.replybase.co.uk/contacts",
            },
            {
              Icon: BarChart2,
              title: "Leads",
              description:
                "When a conversation flow captures a lead (name, email, phone), it appears here for easy follow-up.",
              href: "https://app.replybase.co.uk/leads",
            },
          ].map(({ Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="flex items-start gap-4 bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-xl p-4 transition-all"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600/30 shrink-0">
                <Icon size={18} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm mb-1">
                  {title}
                </div>
                <div className="text-slate-400 text-xs">{description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Add another channel */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Add Another Channel
        </h2>
        <p className="text-slate-300 mb-5 text-sm">
          Reach your customers wherever they are. Each channel you add
          multiplies your coverage.
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {[
            {
              name: "Webchat",
              Icon: Globe,
              href: "/docs/get-started/webchat-setup",
              sub: "Embed on your website",
            },
            {
              name: "Telegram",
              Icon: Send,
              href: "/docs/get-started/telegram-setup",
              sub: "Connect via BotFather",
            },
            {
              name: "Facebook",
              Icon: MessageSquare,
              href: "/docs/get-started/facebook-setup",
              sub: "Connect your Page",
            },
            {
              name: "WhatsApp",
              Icon: MessageSquare,
              href: "/docs/whatsapp-delivery",
              sub: "WhatsApp Business (Beta)",
            },
          ].map(({ name, Icon, href, sub }) => (
            <Link
              key={name}
              href={href}
              className="bg-slate-800 border border-slate-700 hover:border-indigo-500/50 p-4 rounded-xl transition-all"
            >
              <Icon size={18} className="text-indigo-400 mb-2" />
              <div className="text-white font-semibold text-sm mb-0.5">
                {name}
              </div>
              <div className="text-slate-500 text-xs">{sub}</div>
            </Link>
          ))}
        </div>

        {/* Free plan upgrade note */}
        <div className="not-prose flex items-start gap-3 bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 text-sm">
          <CreditCard size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <div className="text-slate-300">
            <p className="font-medium text-amber-300 mb-1">
              Free plan — Webchat and Facebook included
            </p>
            <p>
              To connect Telegram or WhatsApp, upgrade to a paid plan. Plans
              start from <strong className="text-white">£29/month</strong> with
              a 14-day free trial.{" "}
              <Link
                href="https://app.replybase.co.uk/billing"
                className="text-indigo-400 hover:text-indigo-300"
              >
                View plans →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Explore more */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Explore More Features
        </h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              Icon: GitBranch,
              title: "Flow Builder",
              description:
                "Build structured conversations with conditions, inputs, and lead capture steps.",
              href: "https://app.replybase.co.uk/flows",
            },
            {
              Icon: BarChart2,
              title: "AI Status",
              description:
                "Monitor your AI engine health and see how many messages are handled automatically.",
              href: "https://app.replybase.co.uk/ai-status",
            },
            {
              Icon: CreditCard,
              title: "Billing",
              description:
                "Review your plan usage, upgrade, and manage your subscription.",
              href: "https://app.replybase.co.uk/billing",
            },
            {
              Icon: Users,
              title: "Workspace Settings",
              description:
                "Manage your account, team access, and workspace preferences.",
              href: "https://app.replybase.co.uk/settings",
            },
          ].map(({ Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="flex items-start gap-3 bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-xl p-4 transition-all"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600/30 shrink-0">
                <Icon size={18} className="text-indigo-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm mb-1">
                  {title}
                </div>
                <div className="text-slate-400 text-xs">{description}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Support */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-xl p-6 text-center">
        <p className="text-white font-semibold mb-2">Need help?</p>
        <p className="text-slate-400 text-sm mb-4">
          Our team is available to help you get the most out of ReplyBase.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Contact Support
        </Link>
      </div>

      {/* Navigation */}
      <div className="not-prose mt-8">
        <Link
          href="/docs/get-started/live-test"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          <ArrowLeft size={16} /> Step 4 — Test Your Channel
        </Link>
      </div>
    </DocLayout>
  );
}
