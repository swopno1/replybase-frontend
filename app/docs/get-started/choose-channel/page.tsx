import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Choose Your Channel',
  description: 'How to select the right messaging channel for your business on ReplyBase.',
  alternates: {
    canonical: '/docs/get-started/choose-channel',
  },
};



import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Send,
  MessageSquare,
  Lock,
} from "lucide-react";

const channels = [
  {
    id: "webchat",
    name: "Webchat",
    Icon: Globe,
    tagline: "Embed a chat widget on your website",
    description:
      "Best for businesses with an existing website. Visitors chat directly from your site without leaving — great for lead capture, FAQs, and sales enquiries.",
    requirements: ["A website you can add a script tag to"],
    href: "/docs/get-started/webchat-setup",
    badge: null,
  },
  {
    id: "telegram",
    name: "Telegram",
    Icon: Send,
    tagline: "Connect a Telegram bot to your workspace",
    description:
      "Best for audiences who already use Telegram. You create a bot via BotFather, paste the token into ReplyBase, and your bot is live in minutes.",
    requirements: ["A Telegram account", "Access to @BotFather on Telegram"],
    href: "/docs/get-started/telegram-setup",
    badge: null,
  },
  {
    id: "facebook",
    name: "Facebook Messenger",
    Icon: MessageSquare,
    tagline: "Connect a Facebook Page to your workspace",
    description:
      "Best for businesses with an active Facebook Page. Customers message you on Messenger and ReplyBase handles the reply automatically.",
    requirements: ["A Facebook account", "Admin access to a Facebook Page"],
    href: "/docs/get-started/facebook-setup",
    badge: null,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    Icon: MessageSquare,
    tagline: "WhatsApp Business integration — Beta",
    description:
      "Connect your WhatsApp Business number via Meta Cloud API. Handle customer enquiries on the world's most popular messaging app.",
    requirements: ["A Meta Developer account", "A WhatsApp Business number"],
    href: "/docs/whatsapp-delivery",
    badge: "Beta",
  },
];

export default function ChooseChannelDoc() {
  return (
    <DocLayout
      title="Step 2 — Choose Your Channel"
      description="Pick the platform where your customers will reach you first"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8 bg-slate-800 border border-slate-700 rounded-xl p-4 not-prose">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm shrink-0">
          2
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            Part of: Get Started Guide
          </div>
          <div className="text-slate-400 text-xs">Step 2 of 5 · ~2 minutes</div>
        </div>
        <Link
          href="/docs/get-started"
          className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs"
        >
          View all steps
        </Link>
      </div>

      {/* Free plan note */}
      <div className="not-prose flex items-start gap-3 bg-amber-900/20 border border-amber-700/40 rounded-xl p-4 mb-8">
        <Lock size={18} className="text-amber-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-amber-300 font-semibold text-sm mb-1">
            Free plan — Webchat and Facebook only
          </p>
          <p className="text-slate-400 text-sm">
            The Free plan includes Webchat and Facebook Messenger. Telegram and
            WhatsApp require a paid plan (from £29/mo). You can upgrade at any
            time from Billing &gt; Plans.
          </p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-2">
          Where To Find Integrations
        </h2>
        <p className="text-slate-300 mb-4">
          In the dashboard, open{" "}
          <strong className="text-white">Integrations</strong> from the left
          sidebar. You will see a card for each available channel. Click any
          channel card to open its setup page.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5">
          Available Channels
        </h2>
        <div className="not-prose space-y-4">
          {channels.map(
            ({
              id,
              name,
              Icon,
              tagline,
              description,
              requirements,
              href,
              badge,
            }) => (
              <div
                key={id}
                className={`bg-slate-800 border rounded-xl p-5 ${
                  badge
                    ? "border-slate-700 opacity-60"
                    : "border-slate-700 hover:border-indigo-500/50"
                } transition-all`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600/30">
                      <Icon size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{name}</div>
                      <div className="text-slate-400 text-xs">{tagline}</div>
                    </div>
                  </div>
                  {badge && (
                    <span className="text-xs px-2 py-1 bg-slate-700 text-slate-400 rounded-full font-medium shrink-0">
                      {badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-300 text-sm mb-3">{description}</p>
                {requirements.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-slate-500 mb-1 font-medium">
                      You will need:
                    </p>
                    <ul className="space-y-1">
                      {requirements.map((req) => (
                        <li
                          key={req}
                          className="text-slate-400 text-xs flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {href ? (
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Set Up {name} <ArrowRight size={14} />
                  </Link>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors"
                  >
                    Join Waitlist
                  </Link>
                )}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">
          Not Sure Which to Pick?
        </h2>
        <div className="space-y-3 text-slate-300 text-sm">
          <p>
            <strong className="text-white">Webchat</strong> — start here if you
            have a website and want to capture leads from visitors immediately.
            No third-party apps needed by your customers.
          </p>
          <p>
            <strong className="text-white">Telegram</strong> — start here if
            your audience already uses Telegram, or if you want a fast no-code
            bot that requires no website changes.
          </p>
          <p>
            <strong className="text-white">Facebook Messenger</strong> — start
            here if you run campaigns through Facebook and want enquiries
            handled automatically from your Page.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="not-prose flex items-center justify-between gap-4 mt-10">
        <Link
          href="/docs/get-started/account-setup"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          <ArrowLeft size={16} /> Step 1 — Account Setup
        </Link>
        <span className="text-slate-600 text-sm">
          Then follow your channel&apos;s setup guide above →
        </span>
      </div>
    </DocLayout>
  );
}
