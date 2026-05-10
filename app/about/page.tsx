import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ReplyBase — Our Mission & Story",
  description:
    "Learn about ReplyBase, the AI-powered conversation platform built to help businesses capture every lead and automate support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About ReplyBase — Our Mission & Story",
    description:
      "Our story, mission, and the team behind the AI conversation automation platform.",
    url: "https://replybase.co.uk/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              About ReplyBase
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-400">
              The AI-powered conversation engine for modern business teams.
            </p>
          </header>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              We believe every customer interaction is an opportunity. Our
              mission is to ensure no business ever misses a lead because they
              were too busy to reply.
            </p>
            <p className="text-slate-300 leading-relaxed">
              ReplyBase combines the speed of AI with the structure of
              professional conversation flows to give businesses a 24/7 sales
              and support team that never sleeps.
            </p>
          </section>

          {/* Platform */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              The Platform
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              ReplyBase was engineered from the ground up to be modular,
              fast, and easy to deploy. From intelligent webchat widgets to
              multi-channel automation, every component is built for
              performance and reliability at scale.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our platform brings together AI-powered responses, a visual
              flow builder, multi-channel delivery, and a built-in CRM —
              everything your team needs to capture, qualify, and convert
              leads automatically.
            </p>
          </section>

          {/* Capabilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              What ReplyBase Does
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "AI Conversation Automation",
                  desc: "Intelligent, context-aware AI responses that engage leads and answer customer questions around the clock.",
                },
                {
                  title: "Multi-Channel Messaging",
                  desc: "Connect with customers on Webchat, Telegram, Facebook Messenger, WhatsApp — all from a single unified inbox.",
                },
                {
                  title: "Visual Flow Builder",
                  desc: "Design custom conversation flows with an intuitive drag-and-drop builder — no coding required.",
                },
                {
                  title: "Built-in CRM & Lead Capture",
                  desc: "Automatically capture, qualify, and organise leads from every conversation across every channel.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5"
                >
                  <h3 className="text-white font-semibold text-base mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Why ReplyBase */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Why Businesses Choose ReplyBase
            </h2>
            <ul className="space-y-3 text-slate-300 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                <span><strong className="text-white">Never miss a lead.</strong> AI responds instantly, 24/7 — even when your team is offline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                <span><strong className="text-white">One platform, every channel.</strong> Manage Webchat, Telegram, Messenger, and WhatsApp in one place.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                <span><strong className="text-white">Easy to set up.</strong> Go live in minutes with pre-built templates and a no-code flow builder.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
                <span><strong className="text-white">Built for growth.</strong> Scales from a single-person business to large enterprise teams without missing a beat.</span>
              </li>
            </ul>
          </section>

          {/* FAQ — AEO signals */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "What is ReplyBase?",
                  a: "ReplyBase is an AI-powered conversation automation platform that helps businesses capture leads, answer customer questions, and automate support across Webchat, Telegram, Facebook Messenger, and WhatsApp.",
                },
                {
                  q: "How does ReplyBase use AI?",
                  a: "ReplyBase uses advanced AI models to understand customer messages and generate context-aware responses. The AI works alongside structured conversation flows so you always stay in control of the customer experience.",
                },
                {
                  q: "What channels does ReplyBase support?",
                  a: "ReplyBase supports Webchat, Telegram, Facebook Messenger, and WhatsApp — with more channels on the roadmap. All conversations are managed from a single unified dashboard.",
                },
                {
                  q: "Do I need technical skills to use ReplyBase?",
                  a: "No. ReplyBase includes a visual, no-code flow builder and pre-built templates so you can design and deploy conversation automations without any programming knowledge.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">{q}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
