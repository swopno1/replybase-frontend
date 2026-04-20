"use client";

import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Send,
  MessageSquare,
  Zap,
  Clock,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Create Your Account",
    time: "2 min",
    description:
      "Register at app.replybase.co.uk. Your workspace is created automatically — no extra configuration needed.",
    href: "/docs/get-started/account-setup",
    cta: "Account Setup Guide",
    color: "bg-indigo-600",
  },
  {
    number: "2",
    title: "Choose Your Channel",
    time: "2 min",
    description:
      "Pick where your customers will talk to you: your website, Telegram, or Facebook Messenger. Free plan supports one channel.",
    href: "/docs/get-started/choose-channel",
    cta: "Channel Selector Guide",
    color: "bg-indigo-600",
  },
  {
    number: "3",
    title: "Configure Your Channel",
    time: "10 min",
    description:
      "Follow the setup guide for your chosen channel. Each guide takes you through the exact steps inside ReplyBase.",
    channels: [
      {
        name: "Webchat",
        href: "/docs/get-started/webchat-setup",
        Icon: Globe,
        sub: "Embed on your website",
      },
      {
        name: "Telegram",
        href: "/docs/get-started/telegram-setup",
        Icon: Send,
        sub: "Connect via BotFather",
      },
      {
        name: "Facebook",
        href: "/docs/get-started/facebook-setup",
        Icon: MessageSquare,
        sub: "Connect your Page",
      },
    ],
    color: "bg-indigo-600",
  },
  {
    number: "4",
    title: "Test Your Channel",
    time: "5 min",
    description:
      "Send a real test message and verify it appears in your Conversations dashboard with the correct automated reply.",
    href: "/docs/get-started/live-test",
    cta: "Live Test Guide",
    color: "bg-indigo-600",
  },
  {
    number: "✓",
    title: "You're Live!",
    time: "2 min",
    description:
      "Your first channel is live and capturing leads automatically. Explore what to set up next.",
    href: "/docs/get-started/next-steps",
    cta: "See Next Steps",
    color: "bg-green-600",
  },
];

export default function GetStartedPage() {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-10"
        >
          <ArrowLeft size={20} />
          Back to Documentation
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600">
              <Zap size={22} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Get Started</h1>
            </div>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl mt-2">
            From account creation to your first live AI-powered channel. Follow
            each step in order — most users are live in under 20 minutes.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Clock size={16} className="text-slate-500" />
            <span className="text-sm text-slate-500">
              Estimated total time:{" "}
              <span className="text-indigo-400 font-medium">
                15 – 20 minutes
              </span>
            </span>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-5">
              {/* Step indicator + connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${step.color} text-white font-bold text-sm shrink-0 z-10`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-slate-700 my-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-xl font-bold text-white">{step.title}</h2>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock size={12} /> {step.time}
                  </span>
                </div>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step 3 shows channel cards */}
                {"channels" in step && step.channels ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {step.channels.map(({ name, href, Icon, sub }) => (
                      <Link
                        key={name}
                        href={href}
                        className="bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-indigo-500/60 p-4 rounded-xl transition-all group"
                      >
                        <Icon
                          size={20}
                          className="text-indigo-400 mb-2 group-hover:text-indigo-300"
                        />
                        <div className="text-white font-semibold text-sm mb-0.5">
                          {name}
                        </div>
                        <div className="text-slate-500 text-xs">{sub}</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  step.href && (
                    <Link
                      href={step.href}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 ${step.color} hover:opacity-90 text-white rounded-lg text-sm font-medium transition-opacity`}
                    >
                      {step.cta} <ArrowRight size={16} />
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tip */}
        <div className="mt-4 bg-slate-800 border border-slate-700 rounded-xl p-6">
          <p className="text-slate-400 text-sm">
            <span className="text-white font-medium">Free plan:</span> includes
            Webchat and Facebook Messenger. Telegram and WhatsApp require a paid
            plan (from £29/mo). Upgrade any time from{" "}
            <Link
              href="https://app.replybase.co.uk/billing"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Billing
            </Link>
            .
          </p>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
