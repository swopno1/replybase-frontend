"use client";

import Link from "next/link";
import DocLayout from "../../_components/DocLayout";
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export default function WebchatSetupDoc() {
  return (
    <DocLayout
      title="Step 3 — Set Up Webchat"
      description="Create a bot, assign a flow, and embed ReplyBase webchat on your website"
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
            Step 3 of 5 · ~10 minutes · Webchat path
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
            "Create a bot in ReplyBase",
            "Optionally build a conversation flow and assign it to your bot",
            "Open Integrations > Web Chat and link your bot",
            "Copy your embed snippet and add it to your website",
            "Set allowed domains so only your site can load the widget",
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

      {/* Step A: Create a bot */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">A. Create a Bot</h2>
        <p className="text-slate-300 mb-4">
          Every channel in ReplyBase is powered by a bot. You need at least one
          bot before connecting webchat.
        </p>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Bots</strong> from the left
            sidebar.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">New Bot</strong>.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Give your bot a name (e.g. "Website Assistant") and save.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            Your bot is created and appears in the Bots list.
          </li>
        </ol>
      </section>

      {/* Step B: Assign an Entry Flow (optional but recommended) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          B. Build and Assign a Flow{" "}
          <span className="text-slate-500 text-base font-normal">
            (Recommended)
          </span>
        </h2>
        <p className="text-slate-300 mb-4">
          Without a flow, webchat falls back to AI-generated replies. Flows let
          you define a structured conversation with specific steps, questions,
          and lead capture.
        </p>
        <ol className="space-y-3 text-slate-300 mb-5">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Flows</strong> from the sidebar.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Click <strong className="text-white">New Flow</strong>, name it, and
            click <strong className="text-white">Launch Builder</strong> to
            design your conversation.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Once done, <strong className="text-white">activate</strong> the flow
            and close the builder.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            Go to your bot's settings page (Bots → select your bot) and set the{" "}
            <strong className="text-white">Entry Flow</strong> to the flow you
            just created.
          </li>
        </ol>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300">
          <p className="text-white font-medium mb-1">
            Builder access requires an active subscription
          </p>
          <p>
            The Flow Builder is launched through ReplyBase which checks your
            subscription before granting access. Free plan users can access
            builder features within the free tier limits.
          </p>
        </div>
      </section>

      {/* Step C: Connect webchat */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          C. Connect Webchat to Your Bot
        </h2>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            Open <strong className="text-white">Integrations</strong> from the
            sidebar, then click <strong className="text-white">Web Chat</strong>
            .
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
            A <strong className="text-white">Public Key</strong> is generated
            for your webchat site. Copy it — you will need it for the embed
            snippet.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              4
            </span>
            Scroll down to the{" "}
            <strong className="text-white">Embed Snippet</strong> section. The
            snippet is auto-generated with your Public Key.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              5
            </span>
            Copy the snippet and add it to the{" "}
            <code className="bg-slate-700 px-1 rounded text-xs">
              &lt;body&gt;
            </code>{" "}
            of every page on your website where you want the chat widget to
            appear.
          </li>
        </ol>
      </section>

      {/* Step D: Set allowed domains */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          D. Set Allowed Domains
        </h2>
        <p className="text-slate-300 mb-4">
          Restrict which websites can load your webchat widget. This prevents
          others from embedding your widget on sites you don&apos;t control.
        </p>
        <ol className="space-y-3 text-slate-300">
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              1
            </span>
            In Integrations &gt; Web Chat, find the{" "}
            <strong className="text-white">Allowed Domains</strong> section.
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              2
            </span>
            Add your website domain (e.g.{" "}
            <code className="bg-slate-700 px-1 rounded text-xs">
              https://yoursite.com
            </code>
            ).
          </li>
          <li className="flex gap-3">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-bold shrink-0 mt-0.5">
              3
            </span>
            Save. Only requests from this domain will be accepted.
          </li>
        </ol>
        <div className="not-prose flex items-start gap-3 bg-amber-900/20 border border-amber-700/40 rounded-lg p-4 mt-4 text-sm">
          <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="text-slate-300">
            If you skip this step, the widget will work but any website can
            embed it. Always set allowed domains in production.
          </p>
        </div>
      </section>

      {/* What the embed looks like */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Embed Snippet Reference
        </h2>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 overflow-x-auto">
          <pre>{`<script
  src="https://app.replybase.co.uk/embed/replybase-webchat.js"
  data-public-key="YOUR_PUBLIC_KEY"
  data-title="Chat with us"
  data-primary-color="#6366f1"
  data-position="right"
  defer
></script>`}</pre>
        </div>
        <p className="text-slate-400 text-sm mt-3">
          Replace{" "}
          <code className="bg-slate-700 px-1 rounded text-xs">
            YOUR_PUBLIC_KEY
          </code>{" "}
          with the key shown in your Integrations &gt; Web Chat page. Additional
          display options are available — see the{" "}
          <Link
            href="/docs/webchat-embed"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Webchat Embed Reference
          </Link>
          .
        </p>
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
