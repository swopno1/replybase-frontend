import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Send,
  MessageSquare,
  Clock,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Callout from "../_components/Callout";
import DocLayout from "../_components/DocLayout";

export const metadata: Metadata = {
  title: "Quick Start Guide",
  description:
    "Step-by-step guide to setting up your ReplyBase workspace and connecting your first AI chatbot channel.",
};

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
      "Pick where your customers will talk to you: your website, Telegram, or Facebook Messenger.",
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
        href: "/docs/channels/webchat",
        Icon: Globe,
        sub: "Embed on your website",
      },
      {
        name: "Telegram",
        href: "/docs/channels/telegram",
        Icon: Send,
        sub: "Connect via BotFather",
      },
      {
        name: "Facebook",
        href: "/docs/channels/facebook",
        Icon: MessageSquare,
        sub: "Connect your Page",
      },
      {
        name: "WhatsApp",
        href: "/docs/channels/whatsapp",
        Icon: Phone,
        sub: "WhatsApp Cloud API",
      },
    ],
    color: "bg-indigo-600",
  },
  {
    number: "4",
    title: "Test Your Channel",
    time: "5 min",
    description:
      "Send a real test message and verify it appears in your Conversations dashboard.",
    href: "/docs/get-started/live-test",
    cta: "Live Test Guide",
    color: "bg-indigo-600",
  },
];

export default function GetStartedPage() {
  return (
    <DocLayout
      title="Quick Start Guide"
      description="From account creation to your first live AI-powered channel. Follow each step in order — most users are live in under 20 minutes."
    >
      <div className="mt-4 mb-12 flex items-center gap-2">
        <Clock size={16} className="text-slate-500" />
        <span className="text-sm text-slate-500">
          Estimated total time:{" "}
          <span className="text-indigo-400 font-medium">15 – 20 minutes</span>
        </span>
      </div>

      <Callout type="tip" title="Prerequisites">
        Before you start, make sure you have access to the platform (Facebook
        Page, Telegram Account, etc.) you wish to integrate.
      </Callout>

      {/* Steps */}
      <div className="space-y-0 mt-12 relative">
        {/* Vertical line connector */}
        <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-slate-800" />

        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex gap-8 mb-12 last:mb-0 relative"
          >
            {/* Step indicator */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${step.color} text-white font-bold text-sm z-10 border-4 border-slate-900`}
              >
                {step.number}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-baseline justify-between mb-2">
                <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock size={12} /> {step.time}
                </span>
              </div>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-2xl">
                {step.description}
              </p>

              {"channels" in step && step.channels ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {step.channels.map(({ name, href, Icon, sub }) => (
                    <Link
                      key={name}
                      href={href}
                      className="bg-slate-800/40 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/60 p-4 rounded-xl transition-all group"
                    >
                      <Icon
                        size={18}
                        className="text-indigo-400 mb-2 group-hover:text-indigo-300"
                      />
                      <div className="text-white font-bold text-xs mb-1">
                        {name}
                      </div>
                      <div className="text-slate-500 text-[10px] line-clamp-1">
                        {sub}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                step.href && (
                  <Link
                    href={step.href}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 ${step.color} hover:opacity-90 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20`}
                  >
                    {step.cta} <ArrowRight size={16} />
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Completion Card */}
      <div className="mt-20 bg-linear-to-br from-emerald-600/10 to-teal-600/10 border border-emerald-500/20 p-8 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              You&apos;re ready to go!
            </h3>
          </div>
          <p className="text-slate-400 mb-6 max-w-xl">
            Once you&apos;ve completed these steps, your first channel will be
            live and capturing leads automatically. Explore our advanced
            features to further automate your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/features"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
            >
              Explore AI Workflows
            </Link>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
