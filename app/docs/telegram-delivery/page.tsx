"use client";

import Link from "next/link";
import DocLayout from "../_components/DocLayout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TelegramDeliveryDoc() {
  return (
    <DocLayout
      title="Telegram"
      description="Complete reference for configuring, managing, and troubleshooting your Telegram channel in ReplyBase"
    >
      {/* Quick links */}
      <div className="not-prose flex flex-wrap gap-3 mb-8">
        <Link
          href="/docs/get-started/telegram-setup"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          First-time setup guide <ArrowRight size={14} />
        </Link>
        <Link
          href="https://t.me/BotFather"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
        >
          Open @BotFather
        </Link>
        <Link
          href="https://app.replybase.co.uk/integrations/telegram"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
        >
          Open Telegram Integration
        </Link>
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
        <p className="text-slate-300 mb-4">
          The Telegram integration connects a Telegram bot (created via
          @BotFather) to a ReplyBase bot. Incoming messages from Telegram users
          are processed by your bot&apos;s conversation flows and AI fallback,
          with all conversations recorded in your dashboard.
        </p>
        <ul className="space-y-2 text-slate-300">
          {[
            "Webhook-based delivery — Telegram pushes updates to ReplyBase in real time",
            "Flow-first processing with AI fallback for unmatched messages",
            "Full conversation, contact, and lead capture",
            "Activity log with webhook event timestamps and diagnostics",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2
                size={16}
                className="text-indigo-400 mt-1 shrink-0"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Connection details */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          How the Connection Works
        </h2>
        <p className="text-slate-300 mb-4">
          When you connect a Telegram bot in ReplyBase:
        </p>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">1.</span>
            ReplyBase validates your BotFather token against the Telegram API.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">2.</span>A
            channel record is created in your workspace with your encrypted
            token.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">3.</span>
            ReplyBase calls Telegram&apos;s{" "}
            <code className="bg-slate-700 px-1 rounded text-xs">
              setWebhook
            </code>{" "}
            API to register the ReplyBase webhook URL:{" "}
            <code className="bg-slate-700 px-1 rounded text-xs">
              /api/telegram/webhook/[channelId]
            </code>
            .
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">4.</span>
            Telegram sends all bot updates (messages, reactions, etc.) to that
            URL.
          </li>
        </ol>
      </section>

      {/* Managing your connection */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Managing Your Telegram Connection
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">
              Check Connection Status
            </h3>
            <p className="text-slate-300 text-sm">
              Go to{" "}
              <strong className="text-white">Integrations &gt; Telegram</strong>
              . The status card shows:
            </p>
            <ul className="mt-2 space-y-1 text-slate-400 text-sm">
              <li>— Connected / Disconnected status</li>
              <li>— Your bot name and Telegram username</li>
              <li>— Last webhook event received timestamp</li>
              <li>— Last processed message timestamp</li>
            </ul>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Assign a Flow</h3>
            <p className="text-slate-300 text-sm">
              In the Telegram integration page, use the{" "}
              <strong className="text-white">Flow Assignment</strong> panel to
              attach an active flow to the channel. The flow runs for every
              incoming message before AI fallback.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">
              View Activity Logs
            </h3>
            <p className="text-slate-300 text-sm">
              The activity log shows recent webhook events from Telegram,
              including message receipt timestamps, processing status, and any
              delivery errors.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">Disconnect</h3>
            <p className="text-slate-300 text-sm">
              Click <strong className="text-white">Disconnect</strong> in the
              integration page to remove the channel. ReplyBase will attempt to
              deregister the webhook with Telegram automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Flow assignment */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Flow Assignment</h2>
        <p className="text-slate-300 mb-4">
          Telegram messages are processed in this order:
        </p>
        <ol className="space-y-2 text-slate-300">
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">1.</span>
            If the channel has an assigned flow, ReplyBase runs it.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">2.</span>
            If the flow produces a response, that is sent back to the user.
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 font-bold shrink-0">3.</span>
            If the flow does not handle the message (or no flow is assigned),
            ReplyBase falls back to AI-generated responses.
          </li>
        </ol>
      </section>

      {/* Troubleshooting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
        <div className="space-y-3 text-sm">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Bot not responding to messages
            </p>
            <p className="text-slate-300">
              1. Confirm the channel status shows Connected in the dashboard.
              <br />
              2. Check the activity log for recent webhook events — if none
              appear, the webhook may not be registered correctly.
              <br />
              3. Try disconnecting and reconnecting the channel.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Webhook registration fails on connect
            </p>
            <p className="text-slate-300">
              Your ReplyBase app must be publicly accessible. Telegram cannot
              reach localhost. Use a publicly deployed instance for production.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Token changed or revoked
            </p>
            <p className="text-slate-300">
              If you used{" "}
              <code className="bg-slate-700 px-1 rounded">/revoke</code> in
              BotFather to regenerate the token, disconnect the channel in
              ReplyBase and reconnect with the new token.
            </p>
          </div>
        </div>
      </section>

      {/* Related docs */}
      <div className="not-prose bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-white font-bold mb-3">Related Documentation</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/docs/get-started/telegram-setup"
              className="text-indigo-400 hover:text-indigo-300 text-sm"
            >
              → Telegram first-time setup guide
            </Link>
          </li>
          <li>
            <Link
              href="/docs/features"
              className="text-indigo-400 hover:text-indigo-300 text-sm"
            >
              → Plans and channel limits
            </Link>
          </li>
          <li>
            <Link
              href="/docs/modular-dashboard"
              className="text-indigo-400 hover:text-indigo-300 text-sm"
            >
              → Workspace navigation guide
            </Link>
          </li>
        </ul>
      </div>
    </DocLayout>
  );
}
