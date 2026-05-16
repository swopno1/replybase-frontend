import { Metadata } from "next";
import Link from "next/link";
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Zap
} from "lucide-react";
import Callout from "../../_components/Callout";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Facebook Messenger Integration Guide",
  description: "Learn how to connect your Facebook Page to ReplyBase and automate your customer conversations.",
};

export default function FacebookChannelPage() {
  return (
    <DocLayout
      title="Facebook Messenger"
      description="Connect your Facebook Page to ReplyBase to automatically respond to customer enquiries, capture leads, and provide 24/7 support via Messenger."
    >
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-600 text-white font-bold">
            <Zap size={20} />
          </div>
          <h3 className="text-xl font-bold text-white">OAuth Connection (Recommended)</h3>
        </div>
        <p className="text-slate-400 leading-relaxed mb-6">
          The fastest and most reliable way to connect. Just click "Sign In with Facebook" and select your pages. This uses ReplyBase's official app and automatically configures all necessary webhooks.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-500">
          <li className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" />
            2 minute setup
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" />
            Official Meta App
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-green-500" />
            Auto-Webhook
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Setup Instructions</h2>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold">1</div>
          <div>
            <h4 className="font-bold text-white mb-1">Open Integrations</h4>
            <p className="text-slate-400 text-sm">Navigate to the <strong>Integrations</strong> tab in your ReplyBase dashboard and click on <strong>Facebook Messenger</strong>.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold">2</div>
          <div>
            <h4 className="font-bold text-white mb-1">Authorize ReplyBase</h4>
            <p className="text-slate-400 text-sm">Click <strong>Sign In with Facebook</strong>. In the popup, log in and select the Pages you want to connect.</p>
            <Callout type="warning">
              Ensure you check all requested permissions (Pages messaging, Page metadata) or the integration will fail to receive messages.
            </Callout>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold">3</div>
          <div>
            <h4 className="font-bold text-white mb-1">Select and Connect</h4>
            <p className="text-slate-400 text-sm">Once redirected back, find your Page in the list and click <strong>Connect Page</strong>.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Troubleshooting</h2>
        <div className="space-y-4">
          <details className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden group">
            <summary className="p-4 cursor-pointer hover:bg-slate-800/50 transition-colors font-bold text-white flex justify-between items-center">
              Messages are not appearing in ReplyBase
              <ArrowRight size={16} className="text-slate-500 group-open:rotate-90 transition-transform" />
            </summary>
            <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed">
              <p className="mb-2">1. Verify that your Page is successfully connected in the dashboard.</p>
              <p className="mb-2">2. Check if the Page has another Messenger integration (like ManyChat or Zendesk) that might be intercepting messages.</p>
              <p>3. Ensure you have assigned an <strong>Entry Flow</strong> to your Facebook Bot.</p>
            </div>
          </details>
          <details className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden group">
            <summary className="p-4 cursor-pointer hover:bg-slate-800/50 transition-colors font-bold text-white flex justify-between items-center">
              "No Pages Found" error during sign-in
              <ArrowRight size={16} className="text-slate-500 group-open:rotate-90 transition-transform" />
            </summary>
            <div className="p-4 pt-0 text-slate-400 text-sm leading-relaxed">
              This usually happens if you didn't grant the "Manage Pages" permission. Go to your <Link href="https://www.facebook.com/settings?tab=business_tools" className="text-indigo-400 hover:underline">Facebook Business Integrations</Link>, remove ReplyBase, and try connecting again.
            </div>
          </details>
        </div>
      </div>
    </DocLayout>
  );
}
