import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Terminal, 
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Info
} from "lucide-react";
import Callout from "../../../_components/Callout";

export const metadata: Metadata = {
  title: "Raw WhatsApp Cloud API Setup Guide",
  description: "A complete step-by-step guide to connecting ReplyBase via Meta's WhatsApp Cloud API (Raw Integration).",
};

export default function WhatsAppRawSetupPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-green-600">
            <Phone size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Raw WhatsApp Cloud API Setup</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          ReplyBase allows you to connect directly to Meta's Cloud API. This "Raw" integration gives you full control over your WhatsApp Business Account and avoids third-party provider fees.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">How WhatsApp Cloud API Works</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        Unlike standard WhatsApp, the Cloud API sends message data directly from Meta's servers to ReplyBase via <strong>Webhooks</strong>. This allows our AI to respond instantly without needing a physical phone connected.
      </p>

      {/* WhatsApp Workflow Diagram */}
      <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 mb-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 w-full max-w-lg">
            <div className="flex-1 bg-slate-800 border border-slate-700 p-3 rounded-xl text-center">
              <span className="text-xs font-bold text-white">User Phone</span>
            </div>
            <ArrowRight size={16} className="text-slate-600" />
            <div className="flex-1 bg-green-600 border border-green-500 p-3 rounded-xl text-center shadow-lg shadow-green-600/10">
              <span className="text-xs font-bold text-white">Meta Servers</span>
            </div>
          </div>
          
          <div className="h-8 w-0.5 bg-slate-800" />

          <div className="bg-indigo-600 border border-indigo-500 p-4 rounded-2xl text-center w-full max-w-xs shadow-lg shadow-indigo-600/20">
            <span className="text-sm font-bold text-white block">ReplyBase Engine</span>
            <span className="text-[10px] text-indigo-200 uppercase tracking-widest mt-1">Webhook Processing</span>
          </div>

          <div className="h-8 w-0.5 bg-slate-800" />

          <div className="flex items-center gap-4 w-full max-w-lg">
             <div className="flex-1 bg-slate-800 border border-slate-700 p-3 rounded-xl text-center">
              <span className="text-xs font-bold text-white">AI Response</span>
            </div>
            <ArrowLeft size={16} className="text-slate-600" />
            <div className="flex-1 bg-green-600 border border-green-500 p-3 rounded-xl text-center">
              <span className="text-xs font-bold text-white">WhatsApp API</span>
            </div>
          </div>
        </div>
      </div>

      <Callout type="warning" title="Developer Account Required">
        This process requires a **Meta Developer Account** and a verified **Meta Business Suite** account. The setup takes approximately 15-20 minutes.
      </Callout>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-sm">1</span>
          Create a Meta Developer App
        </h2>
        <div className="space-y-4 text-slate-400">
          <p>
            Go to the <Link href="https://developers.facebook.com" className="text-indigo-400 hover:underline inline-flex items-center gap-1">Meta for Developers <ExternalLink size={14} /></Link> portal and log in.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Click <strong>My Apps</strong> and then <strong>Create App</strong>.</li>
            <li>Select <strong>Other</strong> as the app type and click Next.</li>
            <li>Select <strong>Business</strong> as the app type.</li>
            <li>Enter an <strong>App Display Name</strong> (e.g., "ReplyBase Integration").</li>
            <li>Choose your <strong>Business Account</strong> from the dropdown.</li>
            <li>Click <strong>Create App</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-sm">2</span>
          Add WhatsApp Product
        </h2>
        <div className="space-y-4 text-slate-400">
          <p>
            Once your app is created, you will be taken to the dashboard.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scroll down to find <strong>WhatsApp</strong> and click <strong>Set Up</strong>.</li>
            <li>Meta will ask you to select or create a Meta Business Account. Ensure you select the correct one.</li>
            <li>Once finished, you'll be redirected to the <strong>Getting Started</strong> page under the WhatsApp menu.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-sm">3</span>
          Configure Webhooks
        </h2>
        <div className="space-y-4 text-slate-400">
          <p>
            This is the most critical step. Webhooks allow ReplyBase to receive messages in real-time.
          </p>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 my-6">
            <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-4">Copy these values from ReplyBase</h4>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-500 block mb-1">Callback URL</label>
                <div className="flex items-center gap-2">
                  <code className="bg-slate-900 px-3 py-1.5 rounded border border-slate-800 text-sm text-slate-300 flex-1">
                    https://app.replybase.co.uk/api/whatsapp/webhook
                  </code>
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">Verify Token</label>
                <div className="flex items-center gap-2">
                  <code className="bg-slate-900 px-3 py-1.5 rounded border border-slate-800 text-sm text-slate-300 flex-1">
                    [Found in your ReplyBase Channel Settings]
                  </code>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li>In the left menu, go to <strong>WhatsApp {" > "} Configuration</strong>.</li>
            <li>Click <strong>Edit</strong> next to Webhooks.</li>
            <li>Paste the <strong>Callback URL</strong> and <strong>Verify Token</strong> from above.</li>
            <li>Click <strong>Verify and Save</strong>.</li>
            <li>Now click <strong>Manage</strong> next to Webhook Fields.</li>
            <li>Find <strong>messages</strong> in the list and click <strong>Subscribe</strong>. This is mandatory.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-sm">4</span>
          Generate Permanent Access Token
        </h2>
        <Callout type="error" title="Critical Note">
          The "Temporary Access Token" shown on the Getting Started page expires every 24 hours. You <strong>must</strong> generate a Permanent Token for production use.
        </Callout>
        <div className="space-y-4 text-slate-400">
          <p>To generate a permanent token:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Go to your <strong>Business Settings</strong> (business.facebook.com/settings).</li>
            <li>Navigate to <strong>Users {" > "} System Users</strong>.</li>
            <li>Create a new System User (e.g., "ReplyBase_User") with the <strong>Admin</strong> role.</li>
            <li>Click <strong>Add Assets</strong> and assign your Meta App to this user with full control.</li>
            <li>Click <strong>Generate New Token</strong>.</li>
            <li>Select your App and then check these two permissions:
              <ul className="list-circle pl-6 mt-2 space-y-1 text-slate-500">
                <li><code>whatsapp_business_messaging</code></li>
                <li><code>whatsapp_business_management</code></li>
              </ul>
            </li>
            <li>Click Generate. **Copy this token immediately** as Meta will never show it again.</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-sm">5</span>
          Finalize in ReplyBase
        </h2>
        <div className="space-y-4 text-slate-400">
          <p>Now, go back to your ReplyBase Dashboard and complete the connection:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Go to <strong>Channels {" > "} WhatsApp</strong>.</li>
            <li>Select <strong>Meta Cloud API (Raw)</strong>.</li>
            <li>Enter your <strong>Phone Number ID</strong> (found in Meta Dashboard {" > "} WhatsApp {" > "} Getting Started).</li>
            <li>Enter your <strong>WhatsApp Business Account ID</strong> (found in the same place).</li>
            <li>Paste the <strong>Permanent Access Token</strong> you just generated.</li>
            <li>Click <strong>Verify Connection</strong>.</li>
          </ul>
        </div>
      </section>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="text-green-500" />
          Setup Verification
        </h3>
        <p className="text-slate-400 mb-6">
          To ensure everything is working correctly, send a test message to your registered WhatsApp number. You should see:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">1. Meta Received</h4>
            <p className="text-xs text-slate-500">Check the "Webhook Logs" in Meta Dashboard to see if the event was sent.</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 text-sm">2. ReplyBase Captured</h4>
            <p className="text-xs text-slate-500">The message should appear in your "Conversations" tab within 2-3 seconds.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h4 className="font-bold text-white mb-1">Stuck on a step?</h4>
          <p className="text-sm text-slate-400">Our integration experts can guide you through the Meta setup.</p>
        </div>
        <Link href="/contact" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">
          Get Help
        </Link>
      </div>
    </div>
  );
}
