import { Metadata } from "next";
import { 
  Code2, 
  Settings, 
  MessageSquare, 
  Eye, 
  Terminal, 
  Zap,
  Globe,
  Database
} from "lucide-react";
import Callout from "../_components/Callout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webchat API Reference",
  description: "Complete technical reference for the ReplyBase Webchat client-side API, methods, and events.",
};

export default function WebchatApiReferencePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600">
            <Code2 size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Webchat API Reference</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          Control the ReplyBase Webchat widget programmatically. Use our JavaScript API to identify users, pass custom context, and trigger widget behavior from your own application.
        </p>
      </div>

      <Callout type="info" title="Global Object">
        The API is available via the global <code>window.ReplyBase</code> object. Ensure the widget script is loaded before calling these methods.
      </Callout>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Eye className="text-indigo-400" size={24} />
          Visibility Controls
        </h2>
        <p className="text-slate-400 mb-6">Methods to control the visibility and state of the chat widget.</p>
        
        <div className="space-y-4">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
            <code className="text-indigo-400 font-mono text-sm block mb-2">ReplyBase('open')</code>
            <p className="text-sm text-slate-400">Opens the chat widget programmatically.</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
            <code className="text-indigo-400 font-mono text-sm block mb-2">ReplyBase('close')</code>
            <p className="text-sm text-slate-400">Closes the chat widget.</p>
          </div>
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
            <code className="text-indigo-400 font-mono text-sm block mb-2">ReplyBase('toggle')</code>
            <p className="text-sm text-slate-400">Toggles the widget state between open and closed.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Database className="text-indigo-400" size={24} />
          User & Context API
        </h2>
        <p className="text-slate-400 mb-6">Pass data from your application into ReplyBase to personalize the AI experience.</p>
        
        <div className="space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
              <Terminal size={16} className="text-slate-500" />
              identify
            </h4>
            <p className="text-sm text-slate-400 mb-4">Associates a conversation with a specific user in your database.</p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <pre className="text-xs text-indigo-300 overflow-x-auto">
{`ReplyBase('identify', {
  externalId: 'user_12345',
  email: 'customer@example.com',
  name: 'John Doe'
});`}
              </pre>
            </div>
          </div>

          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
              <Terminal size={16} className="text-slate-500" />
              setContext
            </h4>
            <p className="text-sm text-slate-400 mb-4">Passes arbitrary data to the AI. This data is added to the system prompt context.</p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <pre className="text-xs text-indigo-300 overflow-x-auto">
{`ReplyBase('setContext', {
  plan: 'premium',
  last_order_id: 'ORD-9921',
  is_verified: true
});`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="text-indigo-400" size={24} />
          Event Listeners
        </h2>
        <p className="text-slate-400 mb-6">Subscribe to widget events to trigger actions in your own UI.</p>
        
        <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <pre className="text-xs text-indigo-300 overflow-x-auto">
{`ReplyBase('on', 'message_received', (data) => {
  console.log('User sent a message:', data.text);
});

ReplyBase('on', 'widget_opened', () => {
  // Pause your own site's notifications or trackers
});`}
            </pre>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-xs p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-white block mb-1">widget_opened</span>
              <span className="text-slate-500">Triggered when the chat window opens.</span>
            </div>
            <div className="text-xs p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-white block mb-1">widget_closed</span>
              <span className="text-slate-500">Triggered when the chat window closes.</span>
            </div>
            <div className="text-xs p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-white block mb-1">message_sent</span>
              <span className="text-slate-500">Triggered when the user sends a message.</span>
            </div>
            <div className="text-xs p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-white block mb-1">lead_captured</span>
              <span className="text-slate-500">Triggered when the AI successfully captures an email or phone.</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-white mb-2">Advanced Customization</h3>
        <p className="text-slate-400 text-sm mb-6">
          Need to white-label the widget or implement custom CSS overrides? Our Enterprise plan offers full access to the Webchat source and custom branding.
        </p>
        <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 font-bold text-sm">
          Inquire About Enterprise →
        </Link>
      </div>
    </div>
  );
}
