"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";
import { Clock, Bell } from "lucide-react";

export default function WhatsAppDeliveryDoc() {
  return (
    <DocLayout
      title="WhatsApp"
      description="WhatsApp Business integration for ReplyBase — coming soon"
    >
      {/* Coming soon banner */}
      <div className="not-prose bg-linear-to-r from-slate-800 to-slate-800/60 border border-slate-700 rounded-2xl p-8 mb-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-700">
            <Clock size={26} className="text-slate-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Coming Soon</h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
          WhatsApp Business Cloud API integration is currently in development.
          When it launches, you will be able to connect your WhatsApp Business
          number directly to ReplyBase and handle conversations the same way you
          do with Webchat and Telegram today.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Bell size={16} /> Join the waitlist
        </Link>
      </div>

      {/* What to expect */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What to Expect</h2>
        <p className="text-slate-300 mb-4">
          The WhatsApp integration will follow the same pattern as Telegram and
          Webchat:
        </p>
        <ul className="space-y-2 text-slate-300">
          {[
            "Connect your WhatsApp Business number via Meta Cloud API",
            "Assign a ReplyBase bot and conversation flow",
            "Automatically reply to WhatsApp messages 24/7",
            "Full conversation, contact, and lead capture in the dashboard",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Already available */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Available Channels Today
        </h2>
        <p className="text-slate-300 mb-4 text-sm">
          While you wait, these channels are fully available right now:
        </p>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              name: "Webchat",
              href: "/docs/webchat-embed",
              desc: "Embed on your website",
            },
            {
              name: "Telegram",
              href: "/docs/telegram-delivery",
              desc: "Connect via BotFather",
            },
            {
              name: "Facebook",
              href: "/docs/facebook-delivery",
              desc: "Connect your Page",
            },
          ].map(({ name, href, desc }) => (
            <Link
              key={name}
              href={href}
              className="bg-slate-800 border border-slate-700 hover:border-indigo-500/50 p-4 rounded-xl transition-all text-center"
            >
              <div className="text-white font-semibold text-sm mb-1">
                {name}
              </div>
              <div className="text-slate-500 text-xs">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Get started */}
      <div className="not-prose bg-indigo-900/20 border border-indigo-700/50 rounded-xl p-6">
        <p className="text-white font-semibold mb-1">
          Start with another channel while you wait
        </p>
        <p className="text-slate-400 text-sm mb-4">
          Get your business live on Webchat, Telegram, or Facebook Messenger
          today. Adding WhatsApp later takes only a few minutes.
        </p>
        <Link
          href="/docs/get-started"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Get Started Guide
        </Link>
      </div>
    </DocLayout>
  );
}
