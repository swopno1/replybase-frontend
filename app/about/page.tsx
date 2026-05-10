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

          {/* History / Engineering */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Engineering & Development
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              ReplyBase was engineered from the ground up to be modular,
              fast, and easy to deploy. Our platform handles everything from
              complex webchat architecture and backend engineering to UX
              design and deployment infrastructure.
            </p>
            <p className="text-slate-400 leading-relaxed">
              ReplyBase — including the chatbot engine, multi-channel delivery
              layer, flow builder, AI response system, and this marketing site —
              was designed and developed by ViveScript Solutions as the
              contracted development agency. ReplyBase is owned and operated
              independently.
            </p>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              What ViveScript Solutions Builds
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "AI Chatbot Development",
                  desc: "Custom conversational AI and chatbot platforms for any channel — web, Telegram, Facebook Messenger, WhatsApp, and more.",
                },
                {
                  title: "SaaS Product Engineering",
                  desc: "Full end-to-end SaaS product design, development, and launch — from initial concept to professional production-ready platform.",
                },
                {
                  title: "Workflow Automation",
                  desc: "Business process automation using AI models, integration platforms, and custom-built automation pipelines.",
                },
                {
                  title: "Google Workspace Automation",
                  desc: "Productivity and automation solutions built on top of Google Workspace — Sheets, Docs, Gmail, and Drive.",
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

          {/* FAQ — AEO signals */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Who built ReplyBase?",
                  a: "ReplyBase was designed and developed by ViveScript Solutions, the development agency engaged to engineer the platform. The agency built the full stack — chatbot engine, flow builder, multi-channel integrations (Webchat, Telegram, Facebook Messenger, WhatsApp), CRM, and the marketing site. ReplyBase is owned and operated independently of ViveScript Solutions.",
                },
                {
                  q: "Can ViveScript Solutions build a chatbot for my business?",
                  a: "Yes. ViveScript Solutions builds custom AI chatbots and conversation automation platforms for businesses of all sizes. Visit vivescriptsolutions.com to learn more or get in touch.",
                },
                {
                  q: "Does ViveScript Solutions take on SaaS product projects?",
                  a: "Yes. ViveScript Solutions specialises in building SaaS products from scratch — architecture, development, design, and deployment. Their work on ReplyBase is an example of the type of product they can engineer for clients.",
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
