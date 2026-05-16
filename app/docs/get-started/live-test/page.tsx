import { Metadata } from "next";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Globe, 
  Send, 
  Phone,
  Activity
} from "lucide-react";
import Callout from "../../_components/Callout";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Live Test Guide",
  description: "Learn how to verify your channel connection and test your AI chatbot.",
};

export default function LiveTestPage() {
  return (
    <DocLayout
      title="Test Your Channel"
      description="Before going live, it's essential to verify that your connection is stable and your AI responses are behaving as expected."
    >
      <h2 className="text-2xl font-bold text-white mb-6">Verification Checklist</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {[
          "Automated greeting triggers on first message",
          "Conversation appears in real-time in Dashboard",
          "Contact details (Name/ID) are captured correctly",
          "AI responses match your knowledge base tone"
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700">
            <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
            <span className="text-sm text-slate-300">{item}</span>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-indigo-600/10 text-indigo-400">
              <Globe size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">Testing Webchat</h3>
          </div>
          <div className="pl-11 space-y-4 text-slate-400 text-sm">
            <p>The easiest way to test Webchat is via the built-in <strong>Simulator</strong> in your ReplyBase dashboard under <strong>Bots {" > "} [Your Bot] {" > "} Simulator</strong>.</p>
            <Callout type="info">
              Alternatively, open your website where you embedded the script and look for the chat icon in the bottom corner.
            </Callout>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-green-600/10 text-green-400">
              <Phone size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">Testing WhatsApp</h3>
          </div>
          <div className="pl-11 space-y-4 text-slate-400 text-sm">
            <p>Send a message from a personal WhatsApp account to your registered business number.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Verify that the message appears in <strong>Conversations</strong>.</li>
              <li>Check if the <strong>Read Receipt</strong> (blue ticks) works correctly.</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-sky-500/10 text-sky-400">
              <Send size={18} />
            </div>
            <h3 className="text-xl font-bold text-white">Testing Telegram</h3>
          </div>
          <div className="pl-11 space-y-4 text-slate-400 text-sm">
            <p>Open your bot in Telegram and click <strong>Start</strong>. Send a simple enquiry like "What services do you offer?".</p>
          </div>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
        <Link href="/docs/get-started/choose-channel" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm">
          <ArrowLeft size={18} /> Step 3: Configure Channel
        </Link>
        <Link href="/docs/roadmap" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
          You're Live! View Roadmap <ArrowRight size={18} />
        </Link>
      </div>
    </DocLayout>
  );
}
