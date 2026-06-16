import { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Code,
  Smartphone,
  Palette,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Callout from "../../_components/Callout";
import DocLayout from "../../_components/DocLayout";

export const metadata: Metadata = {
  title: "Webchat Integration Guide",
  description: "Learn how to embed and customize the ReplyBase webchat widget on your website.",
};

export default function WebchatChannelPage() {
  return (
    <DocLayout
      title="Webchat Widget"
      description="The ReplyBase webchat widget is a lightweight, customizable chat interface that you can embed on any website. It supports real-time AI conversations, lead capture forms, and custom styling."
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Code size={24} className="text-indigo-400" />
        Installation
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">HTML Snippet</h3>
          <p className="text-slate-400 text-sm mb-4">
            Add this script tag to the <code>&lt;head&gt;</code> or just before the closing <code>&lt;/body&gt;</code> tag of your website.
          </p>
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 relative group">
            <pre className="text-xs text-indigo-300 overflow-x-auto">
{`<script
  src="https://cdn.replybase.co.uk/webchat/v1.js"
  data-public-key="YOUR_PUBLIC_KEY"
  async
></script>`}
            </pre>
            <button className="absolute top-4 right-4 text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-400 px-2 py-1 rounded transition-colors">Copy</button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">React / Next.js Implementation</h3>
          <p className="text-slate-400 text-sm mb-4">
            For modern frameworks, we recommend using a <code>useEffect</code> hook to load the script safely.
          </p>
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
            <pre className="text-xs text-indigo-300 overflow-x-auto">
{`"use client";
import { useEffect } from "react";

export default function WebchatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.replybase.co.uk/webchat/v1.js";
    script.async = true;
    script.setAttribute("data-public-key", "YOUR_PUBLIC_KEY");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}`}
            </pre>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-2">
        <Palette size={24} className="text-indigo-400" />
        Customization
      </h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        You can customize the appearance of the widget directly from the ReplyBase Dashboard or via data attributes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <h4 className="font-bold text-white mb-2 text-sm">Theme Colors</h4>
          <p className="text-xs text-slate-500 mb-3">Match your brand by setting primary and secondary colors.</p>
          <code className="text-[10px] text-indigo-400">data-primary-color="#6366f1"</code>
        </div>
        <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <h4 className="font-bold text-white mb-2 text-sm">Greeting Message</h4>
          <p className="text-xs text-slate-500 mb-3">Change the initial message shown to users.</p>
          <code className="text-[10px] text-indigo-400">data-greeting="Hi there! How can I help?"</code>
        </div>
        <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <h4 className="font-bold text-white mb-2 text-sm">Widget Position</h4>
          <p className="text-xs text-slate-500 mb-3">Choose which corner of the screen the widget appears in.</p>
          <code className="text-[10px] text-indigo-400">data-position="bottom-right"</code>
        </div>
        <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700">
          <h4 className="font-bold text-white mb-2 text-sm">Avatar Image</h4>
          <p className="text-xs text-slate-500 mb-3">Upload a custom logo or assistant photo.</p>
          <code className="text-[10px] text-indigo-400">data-avatar-url="https://..."</code>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-2">
        <Sparkles size={24} className="text-indigo-400" />
        Branding
      </h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        On the <strong className="text-white">Free</strong> and <strong className="text-white">Launch</strong> plans, a subtle <em>"Powered by ReplyBase"</em> link appears at the bottom of the chat panel. This helps visitors discover ReplyBase when they are impressed by the AI and want to add it to their own site.
      </p>

      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-indigo-600/20 flex items-center justify-center">
            <span className="text-indigo-400 text-xs font-bold">i</span>
          </div>
          <div>
            <p className="text-sm text-slate-300 font-semibold mb-1">What visitors see</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A single line at the bottom of the chat panel reading <span className="text-slate-200">"Powered by ReplyBase"</span> with a link to <span className="text-slate-200">replybase.co.uk</span>. It is styled to be subtle — grey text, no logo — and does not interfere with the conversation.
            </p>
          </div>
        </div>
      </div>

      <Callout type="tip" title="Remove the branding">
        Upgrade to the <strong>Grow plan (£49/mo)</strong> or above to remove the "Powered by ReplyBase" footer entirely. Business plan subscribers can also configure their own logo and brand colors via <strong>Settings → Branding</strong>.
      </Callout>

      <h2 className="text-2xl font-bold text-white mt-16 mb-6 flex items-center gap-2">
        <Smartphone size={24} className="text-indigo-400" />
        Mobile Responsiveness
      </h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        The widget automatically scales for mobile devices. When opened on mobile, it expands to take up the full screen for a native chat experience.
      </p>
      
      <Callout type="tip" title="Pro Tip">
        Use the <code>data-mobile-only="true"</code> attribute if you only want the chat widget to appear for mobile visitors.
      </Callout>

      <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">API Reference</h3>
          <p className="text-sm text-slate-500">Deep dive into the webchat Javascript API.</p>
        </div>
        <Link href="/docs/webchat-api-reference" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium">
          View API Docs <ArrowRight size={16} />
        </Link>
      </div>
    </DocLayout>
  );
}
