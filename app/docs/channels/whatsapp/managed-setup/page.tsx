import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  ShieldCheck,
  Zap,
  Globe,
  Terminal
} from "lucide-react";
import Callout from "../../../_components/Callout";

export const metadata: Metadata = {
  title: "Managed WhatsApp Setup (360dialog & Twilio)",
  description: "Learn how to connect ReplyBase via 360dialog or Twilio for a managed WhatsApp Business integration.",
};

export default function ManagedWhatsAppSetupPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600">
            <Phone size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Managed WhatsApp Setup</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          Using a Business Solution Provider (BSP) like <strong>360dialog</strong> or <strong>Twilio</strong> is the easiest way to get your business on WhatsApp. They handle the infrastructure and verification process for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="text-green-400" size={18} />
            360dialog
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Specialized WhatsApp BSP. Recommended for high-volume businesses who want the native WhatsApp experience with easier onboarding.
          </p>
          <Link href="https://hub.360dialog.com" target="_blank" className="text-xs text-indigo-400 hover:underline">360dialog Hub →</Link>
        </div>
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Zap className="text-blue-400" size={18} />
            Twilio
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Best if you already use Twilio for SMS or Voice. Uses the Twilio Sandbox or your own registered Twilio WhatsApp Sender.
          </p>
          <Link href="https://console.twilio.com" target="_blank" className="text-xs text-indigo-400 hover:underline">Twilio Console →</Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Integration Steps</h2>
      
      <section className="space-y-12">
        {/* 360dialog Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded bg-green-600/20 text-green-400 text-[10px] font-bold uppercase">Method A</span>
            <h3 className="text-xl font-bold text-white">Connecting via 360dialog</h3>
          </div>
          
          <div className="space-y-6 ml-4 border-l border-slate-800 pl-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />
              <h4 className="font-bold text-white mb-1">Generate API Key</h4>
              <p className="text-slate-400 text-sm">In your 360dialog Hub, navigate to <strong>WhatsApp Accounts</strong>, select your number, and click <strong>Generate API Key</strong>.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />
              <h4 className="font-bold text-white mb-1">Configure Webhook</h4>
              <p className="text-slate-400 text-sm mb-2">Set your Webhook URL in 360dialog to:</p>
              <code className="block p-3 bg-slate-950 rounded-lg text-indigo-300 text-xs border border-slate-800">https://app.replybase.co.uk/api/whatsapp/webhook</code>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />
              <h4 className="font-bold text-white mb-1">Link to ReplyBase</h4>
              <p className="text-slate-400 text-sm">In ReplyBase, go to <strong>Channels {" > "} WhatsApp</strong>, choose <strong>360dialog</strong>, and enter your <strong>API Key</strong> and <strong>Channel ID</strong>.</p>
            </div>
          </div>
        </div>

        {/* Twilio Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 rounded bg-blue-600/20 text-blue-400 text-[10px] font-bold uppercase">Method B</span>
            <h3 className="text-xl font-bold text-white">Connecting via Twilio</h3>
          </div>
          
          <div className="space-y-6 ml-4 border-l border-slate-800 pl-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />
              <h4 className="font-bold text-white mb-1">Get API Credentials</h4>
              <p className="text-slate-400 text-sm">From your Twilio Console, copy your <strong>Account SID</strong> and <strong>Auth Token</strong>.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />
              <h4 className="font-bold text-white mb-1">Set Sandbox/Sender URL</h4>
              <p className="text-slate-400 text-sm mb-2">In Twilio WhatsApp settings, set the "A message comes in" webhook to:</p>
              <code className="block p-3 bg-slate-950 rounded-lg text-indigo-300 text-xs border border-slate-800">https://app.replybase.co.uk/api/whatsapp/webhook</code>
              <p className="text-[10px] text-slate-500 mt-1">Ensure the HTTP method is set to <strong>POST</strong>.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />
              <h4 className="font-bold text-white mb-1">Link to ReplyBase</h4>
              <p className="text-slate-400 text-sm">In ReplyBase, go to <strong>Channels {" > "} WhatsApp</strong>, choose <strong>Twilio</strong>, and enter your SID, Token, and the <strong>From Number</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-2">Which one should I choose?</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          If you want the lowest possible cost, use the <strong>Meta Cloud API</strong>. If you want the easiest verification process and don't mind a small monthly fee, <strong>360dialog</strong> is our recommended partner for WhatsApp.
        </p>
        <Link href="/docs/channels/whatsapp/raw-setup" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors">
          View Meta Cloud API Guide <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
