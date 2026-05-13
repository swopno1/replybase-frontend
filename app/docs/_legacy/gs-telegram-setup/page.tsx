import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Telegram Setup Guide',
  description: 'Step-by-step guide to connecting your Telegram bot to ReplyBase.',
  alternates: {
    canonical: '/docs/get-started/telegram-setup',
  },
};



import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function TelegramSetupDoc() {
  return (
    <DocLayout
      title="Step 3 — Set Up Telegram"
      description="Create a Telegram bot via BotFather and connect it to ReplyBase in minutes"
    >
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8 bg-slate-800 border border-slate-700 rounded-xl p-4 not-prose">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm shrink-0">
          3
        </div>
        <div>
          <div className="text-white font-semibold text-sm">
            Part of: Get Started Guide
          </div>
          <div className="text-slate-400 text-xs">
            Step 3 of 5 · ~10 minutes · Telegram path
          </div>
        </div>
        <Link
          href="/docs/get-started"
          className="ml-auto text-indigo-400 hover:text-indigo-300 text-xs"
        >
          View all steps
        </Link>
      </div>

      {/* What you'll do */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">What You Will Do</h2>
        <ul className="space-y-2 text-slate-300">
          {[
            "Create a Telegram bot via @BotFather and get your bot token",
            "Create a bot in ReplyBase and optionally assign a flow",
            "Paste your token into Integrations > Telegram to connect",
            "ReplyBase registers your webhook automatically",
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

      {/* Step A: BotFather */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          A. Create a Telegram Bot via BotFather
        </h2>
        <p className="text-slate-300 mb-4">
          BotFather is the official Telegram bot for creating and managing bots.
          You need a Telegram account to use it.
        </p>
        <ol className="space-y-4 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            <span>
              Open Telegram (mobile or desktop) and search for{" "}
              <strong className="text-white">@BotFather</strong>, or open{" "}
              <Link
                href="https://t.me/BotFather"
                className="text-indigo-400 hover:text-indigo-300"
              >
                t.me/BotFather
              </Link>
              . Tap <strong className="text-white">Start</strong>.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            <span>
              Send the command{" "}
              <code className="bg-slate-700 px-1.5 py-0.5 rounded text-xs">
                /newbot
              </code>
              .
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            <span>
              BotFather asks for a{" "}
              <strong className="text-white">display name</strong> for your bot
              (e.g. &quot;Acme Support&quot;). Type it and send.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            <span>
              BotFather then asks for a{" "}
              <strong className="text-white">username</strong>. It must end in{" "}
              <code className="bg-slate-700 px-1.5 py-0.5 rounded text-xs">
                bot
              </code>{" "}
              (e.g.{" "}
              <code className="bg-slate-700 px-1.5 py-0.5 rounded text-xs">
                acmesupport_bot
              </code>
              ).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              5
            </span>
            <span>
              BotFather replies with a message containing your{" "}
              <strong className="text-white">bot token</strong> — a string that
              looks like{" "}
              <code className="bg-slate-700 px-1.5 py-0.5 rounded text-xs">
                123456:ABCdefGHIjklMNOpqrSTUvwxYZ
              </code>
              . Copy it and keep it safe.
            </span>
          </li>
        </ol>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-5 text-sm text-slate-300">
          <p className="text-white font-medium mb-1">Keep your token private</p>
          <p>
            Anyone with your bot token can control your bot. Do not share it
            publicly or commit it to source control. ReplyBase encrypts your
            token at rest.
          </p>
        </div>
      </section>

      {/* Step B: Create bot in ReplyBase */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          B. Create a Bot in ReplyBase
        </h2>
        <p className="text-slate-300 mb-4">
          You need a ReplyBase bot to link to your Telegram channel. If you
          already have one, skip to step C.
        </p>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Bots</strong> from the sidebar.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">New Bot</strong>, give it a
            name, and save.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Optionally open <strong className="text-white">Flows</strong>,
            create a flow in the builder, and assign it as the bot&apos;s{" "}
            <strong className="text-white">Entry Flow</strong> in bot settings.
            Without this, conversations fall back to AI-only replies.
          </li>
        </ol>
      </section>

      {/* Step C: Connect Telegram */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          C. Connect Telegram in ReplyBase
        </h2>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Integrations</strong> from the
            sidebar and click <strong className="text-white">Telegram</strong>.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Select your bot from the <strong className="text-white">Bot</strong>{" "}
            dropdown.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Paste your BotFather token into the{" "}
            <strong className="text-white">Bot Token</strong> field.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            Click <strong className="text-white">Connect</strong>. ReplyBase
            will:
            <ul className="mt-2 ml-2 space-y-1 text-slate-400 text-sm">
              <li>— validate your token with Telegram</li>
              <li>— create the channel record in your workspace</li>
              <li>— register a webhook at ReplyBase automatically</li>
            </ul>
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              5
            </span>
            The status card updates to show{" "}
            <strong className="text-green-400">Connected</strong> with your bot
            name and last activity timestamp.
          </li>
        </ol>
      </section>

      {/* Troubleshooting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          If Connection Fails
        </h2>
        <div className="space-y-3 text-sm text-slate-300">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">Invalid token error</p>
            <p>
              Double-check the token copied from BotFather. Make sure there are
              no leading or trailing spaces. Tokens do not expire unless
              regenerated via{" "}
              <code className="bg-slate-700 px-1 rounded text-xs">/revoke</code>{" "}
              in BotFather.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
            <p className="text-white font-medium mb-1">
              Webhook registration fails
            </p>
            <p>
              Your ReplyBase app must be reachable from the internet for
              Telegram to deliver messages. If you are testing locally, use a
              tunnel tool like ngrok to expose your local server.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="not-prose flex items-center justify-between gap-4">
        <Link
          href="/docs/get-started/choose-channel"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
        >
          <ArrowLeft size={16} /> Step 2 — Choose Your Channel
        </Link>
        <Link
          href="/docs/get-started/live-test"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Step 4 — Test Your Channel <ArrowRight size={16} />
        </Link>
      </div>
    </DocLayout>
  );
}
