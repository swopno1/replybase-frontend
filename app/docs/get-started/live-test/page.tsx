"use client";

import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Send,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

export default function LiveTestDoc() {
  return (
    <DocLayout
      title="Step 4 — Test Your Channel"
      description="Send a real message and verify it flows through your bot correctly before going live"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8 bg-slate-800 border border-slate-700 rounded-xl p-4 not-prose">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm shrink-0">
          4
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            Part of: Get Started Guide
          </div>
          <div className="text-slate-400 text-xs">Step 4 of 5 · ~5 minutes</div>
        </div>
        <Link
          href="/docs/get-started"
          className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs"
        >
          View all steps
        </Link>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">What to Verify</h2>
        <p className="text-slate-300 mb-4">
          After every channel setup, confirm these four outcomes before
          considering yourself live:
        </p>
        <div className="not-prose space-y-2">
          {[
            "Your test message triggers an automated reply",
            "The conversation appears in Conversations in the dashboard",
            "A new Contact record is created or updated",
            "If your flow has a lead step, a Lead record appears in Leads",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-400 text-xs font-bold shrink-0">
                {i + 1}
              </span>
              <span className="text-slate-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Webchat testing */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600/30">
            <Globe size={18} className="text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Testing Webchat</h2>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3">
          Option 1 — Built-in Test Widget
        </h3>
        <p className="text-slate-300 mb-4">
          The fastest way to test without touching your website.
        </p>
        <ol className="space-y-3 text-slate-300 mb-5">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Go to{" "}
            <strong className="text-white">Integrations &gt; Web Chat</strong>.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">Test Widget</strong>. A preview
            chat opens in the dashboard.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Type a message. You should see a reply from your bot almost
            immediately.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            Open <strong className="text-white">Conversations</strong> in the
            sidebar — your test conversation should appear there.
          </li>
        </ol>

        <h3 className="text-lg font-semibold text-white mb-3">
          Option 2 — Test on Your Website
        </h3>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Add the embed snippet to a page on your site (see{" "}
            <Link
              href="/docs/get-started/webchat-setup"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Webchat Setup
            </Link>
            ).
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Open that page in your browser. The chat widget icon should appear
            in the bottom corner.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Click the icon, type a test message, and confirm you get a reply.
          </li>
        </ol>

        <div className="not-prose mt-4 flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm">
          <AlertCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
          <p className="text-slate-300">
            If the widget does not appear, check that your domain is in the{" "}
            <strong className="text-white">Allowed Domains</strong> list and
            that the script tag was added to the correct part of the page.
          </p>
        </div>
      </section>

      {/* Telegram testing */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600/30">
            <Send size={18} className="text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">Testing Telegram</h2>
        </div>

        <ol className="space-y-3 text-slate-300 mb-4">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open Telegram and search for your bot by its username (the one you
            created with BotFather).
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Tap <strong className="text-white">Start</strong> if this is your
            first time opening the bot.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Send a message like &quot;Hi&quot; or &quot;Hello&quot;.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            Your bot should reply. Check{" "}
            <strong className="text-white">Conversations</strong> in the
            ReplyBase dashboard to confirm the message was received.
          </li>
        </ol>

        <div className="not-prose flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm">
          <AlertCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
          <p className="text-slate-300">
            No reply after 30 seconds? Check{" "}
            <strong className="text-white">Integrations &gt; Telegram</strong>{" "}
            for connection status and recent webhook activity logs.
          </p>
        </div>
      </section>

      {/* Facebook testing */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600/30">
            <MessageSquare size={18} className="text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Testing Facebook Messenger
          </h2>
        </div>

        <ol className="space-y-3 text-slate-300 mb-4">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open Facebook Messenger and search for your Page by name, or go
            directly to your Page and click{" "}
            <strong className="text-white">Send Message</strong>.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Send a test message (e.g. &quot;Hello&quot;).
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Your bot should reply automatically. Confirm the conversation
            appears in <strong className="text-white">Conversations</strong> in
            ReplyBase.
          </li>
        </ol>

        <div className="not-prose flex items-start gap-3 bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm">
          <AlertCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
          <p className="text-slate-300">
            Note: while your Facebook app is in development mode, only people
            listed as app testers or developers in your Meta app settings will
            receive replies. Once your app is live, all Messenger users get
            replies.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="not-prose flex items-center justify-between gap-4">
        <Link
          href="/docs/get-started/choose-channel"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          <ArrowLeft size={16} /> Back to Channel Setup
        </Link>
        <Link
          href="/docs/get-started/next-steps"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Step 5 — You&apos;re Live! <ArrowRight size={16} />
        </Link>
      </div>
    </DocLayout>
  );
}
