import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, 
  Zap, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock,
  Layers,
  CheckCircle2
} from "lucide-react";
import Callout from "../../_components/Callout";

export const metadata: Metadata = {
  title: "WhatsApp Channel Guide",
  description: "Learn how to connect WhatsApp Business to ReplyBase using Cloud API or Third-party providers.",
};

export default function WhatsAppOverviewPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600">
            <Phone size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">WhatsApp Business</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          ReplyBase integrates with the WhatsApp Business Cloud API to provide automated AI conversations, lead capture, and team collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all group">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-green-600/10 text-green-400 mb-4">
            <Zap size={20} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Automated Replies</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Let AI handle common customer enquiries 24/7 without manual intervention.
          </p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all group">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-400 mb-4">
            <MessageCircle size={20} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Lead Enrichment</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            Automatically capture names, emails, and interests directly from WhatsApp conversations.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Choose Your Integration Method</h2>
      <p className="text-slate-400 mb-8">
        ReplyBase supports two ways to connect your WhatsApp number. Choose the one that best fits your technical ability and budget.
      </p>

      <div className="space-y-4 mb-12">
        <Link 
          href="/docs/channels/whatsapp/raw-setup"
          className="block bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 transition-all group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">Meta Cloud API (Raw)</h3>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-600/20 text-indigo-400 font-bold uppercase tracking-wider">Most Cost-Effective</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xl">
                Connect directly to Meta. No monthly provider fees. Best for businesses looking for full control and cost efficiency.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1 text-slate-500"><Clock size={12} /> 20 min setup</span>
                <span className="flex items-center gap-1 text-slate-500"><ShieldCheck size={12} /> Official Meta API</span>
              </div>
            </div>
            <ArrowRight className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>

        <Link 
          href="/docs/channels/whatsapp/managed-setup"
          className="block bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-green-500 hover:bg-slate-800 transition-all group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">360dialog / Twilio</h3>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-600/20 text-green-400 font-bold uppercase tracking-wider">Easier Setup</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xl">
                Connect via managed BSPs (Business Solution Providers). Faster verification and easier onboarding but requires a monthly provider fee.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1 text-slate-500"><Clock size={12} /> 10 min setup</span>
                <span className="flex items-center gap-1 text-slate-500"><Layers size={12} /> Managed Infrastructure</span>
              </div>
            </div>
            <ArrowRight className="text-slate-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Prerequisites</h2>
      <ul className="space-y-4">
        <li className="flex gap-4 p-4 bg-slate-800/20 rounded-xl border border-slate-800">
          <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-white text-sm">WhatsApp Business Account</h4>
            <p className="text-xs text-slate-500 leading-relaxed">You must have a verified Facebook Business Manager account to use production messaging.</p>
          </div>
        </li>
        <li className="flex gap-4 p-4 bg-slate-800/20 rounded-xl border border-slate-800">
          <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-white text-sm">Dedicated Phone Number</h4>
            <p className="text-xs text-slate-500 leading-relaxed">The number cannot be currently used on a standard WhatsApp app (Android/iOS). It must be unregistered first.</p>
          </div>
        </li>
      </ul>

      <Callout type="info" title="Important Policy Note">
        WhatsApp requires businesses to follow their <Link href="https://www.whatsapp.com/legal/business-policy" className="text-indigo-400 hover:underline">Business Policy</Link>. Failure to do so may result in your account being suspended by Meta.
      </Callout>
    </div>
  );
}
