import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Send,
  MessageSquare,
  Phone,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Callout from "../../_components/Callout";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Choose Your Channel",
  description:
    "Select the best messaging platform to connect to your ReplyBase workspace.",
};

const channels = [
  {
    id: "webchat",
    name: "Webchat",
    icon: Globe,
    color: "bg-indigo-600",
    description:
      "Best for websites. A lightweight chat widget that lives on your site.",
    features: ["Instant setup", "Custom styling", "Lead capture forms"],
    href: "/docs/channels/webchat",
    plan: "Free",
  },
  {
    id: "facebook",
    name: "Messenger",
    icon: MessageSquare,
    color: "bg-blue-600",
    description:
      "Best for social presence. Connect your official Facebook Page.",
    features: ["Official API", "Sign in with FB", "Auto-webhooks"],
    href: "/docs/channels/facebook",
    plan: "Free",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: Send,
    color: "bg-sky-500",
    description: "Best for communities. High-speed bots for groups or DMs.",
    features: ["BotFather setup", "Media support", "Fastest delivery"],
    href: "/docs/channels/telegram",
    plan: "Paid",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: Phone,
    color: "bg-green-600",
    description: "Best for global reach. Connect via Meta Cloud API.",
    features: ["Official Business API", "Global popularity", "Raw Meta setup"],
    href: "/docs/channels/whatsapp",
    plan: "Paid",
  },
];

export default function ChooseChannelPage() {
  return (
    <DocLayout
      title="Choose Your Channel"
      description="ReplyBase supports multiple communication platforms. Select the one where your customers are most active to begin your integration."
      videoUrl="https://youtu.be/Ivdb17f7_ns"
      videoTitle="Choose Your Channel at #ReplyBase"
    >
      <Callout type="warning" title="Plan Limits">
        Free plans include <strong>Webchat</strong> and{" "}
        <strong>Facebook Messenger</strong>. Telegram and WhatsApp require a
        paid subscription starting at £29/mo.
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <Link
              key={channel.id}
              href={channel.href}
              className="group bg-slate-800/40 hover:bg-slate-800 border border-slate-700 hover:border-indigo-500/50 rounded-2xl p-6 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`flex items-center justify-center h-10 w-10 rounded-lg ${channel.color} text-white shadow-lg`}
                >
                  <Icon size={20} />
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${channel.plan === "Free" ? "bg-emerald-600/20 text-emerald-400" : "bg-amber-600/20 text-amber-400"}`}
                >
                  {channel.plan}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {channel.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {channel.description}
              </p>
              <ul className="space-y-2 mb-6">
                {channel.features.map((feat) => (
                  <li
                    key={feat}
                    className="text-xs text-slate-500 flex items-center gap-2"
                  >
                    <CheckCircle2 size={12} className="text-indigo-500" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold group-hover:gap-3 transition-all">
                Configure {channel.name} <ArrowRight size={16} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
        <Link
          href="/docs/get-started/account-setup"
          className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={18} /> Step 1: Account Setup
        </Link>
        <span className="text-slate-600 text-sm italic">
          Select a channel above to continue
        </span>
      </div>
    </DocLayout>
  );
}
