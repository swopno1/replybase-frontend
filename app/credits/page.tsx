import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits — ReplyBase Built by ViveScript Solutions",
  description:
    "ReplyBase — the AI chatbot and conversation automation platform — was designed and developed by ViveScript Solutions, a specialist software and AI automation agency commissioned to build the product.",
  keywords: [
    "ViveScript Solutions",
    "ReplyBase developer",
    "AI chatbot development agency",
    "chatbot builder UK",
    "AI automation agency",
    "workflow engineering",
    "SaaS development agency",
    "Next.js development",
    "chatbot software development",
    "who built ReplyBase",
  ],
  alternates: {
    canonical: "/credits",
  },
  openGraph: {
    title: "Credits — ReplyBase Built by ViveScript Solutions",
    description:
      "ReplyBase was designed and developed by ViveScript Solutions — the development agency commissioned to engineer the platform.",
    url: "https://replybase.co.uk/credits",
    siteName: "ReplyBase",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Credits — ReplyBase Built by ViveScript Solutions",
    description:
      "ReplyBase was designed and developed by ViveScript Solutions — the agency behind the engineering, AI automation, and chatbot development.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://replybase.co.uk/credits",
      url: "https://replybase.co.uk/credits",
      name: "Credits — ReplyBase Built by ViveScript Solutions",
      description:
        "ReplyBase was designed and developed by ViveScript Solutions, the development agency commissioned to engineer the platform.",
      inLanguage: "en-GB",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://replybase.co.uk",
        name: "ReplyBase",
        url: "https://replybase.co.uk",
      },
      about: {
        "@type": "Organization",
        "@id": "https://www.vivescriptsolutions.com/#organization",
        name: "ViveScript Solutions",
        url: "https://www.vivescriptsolutions.com/",
        description:
          "ViveScript Solutions is a software and AI automation agency specialising in SaaS product development, chatbot engineering, workflow automation, and AI-powered business tools.",
        knowsAbout: [
          "AI Automation",
          "Chatbot Development",
          "SaaS Engineering",
          "Workflow Automation",
          "Next.js Development",
          "Conversational AI",
          "Google Workspace Automation",
        ],
        sameAs: ["https://www.vivescriptsolutions.com/"],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.vivescriptsolutions.com/#organization",
      name: "ViveScript Solutions",
      alternateName: "ViveScript",
      url: "https://www.vivescriptsolutions.com/",
      description:
        "ViveScript Solutions is a specialist AI automation and SaaS development agency. Services include chatbot development, workflow engineering, AI-powered SaaS products, and business automation.",
      knowsAbout: [
        "AI Automation",
        "Chatbot Development",
        "SaaS Product Engineering",
        "Workflow Engineering",
        "Google Workspace Automation",
        "Next.js",
        "Conversational AI Platforms",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ViveScript Solutions Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Chatbot Development",
              description:
                "Custom AI chatbot and conversational automation solutions for businesses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SaaS Product Engineering",
              description:
                "End-to-end design and development of software-as-a-service products.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Workflow Automation",
              description:
                "Business process automation using AI and modern integration platforms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Workspace Automation",
              description:
                "Productivity and automation solutions built on Google Workspace.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who built ReplyBase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ReplyBase was designed and developed by ViveScript Solutions — the development agency engaged to build the platform. ViveScript Solutions engineered the full stack including the chatbot engine, flow builder, multi-channel integrations (Webchat, Telegram, Facebook Messenger, WhatsApp), and the marketing site. ReplyBase is owned and operated independently of ViveScript Solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Who developed the ReplyBase chatbot platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The ReplyBase chatbot and conversation automation platform was developed by ViveScript Solutions (vivescriptsolutions.com), a software agency specialising in AI automation, chatbot development, and SaaS engineering.",
          },
        },
        {
          "@type": "Question",
          name: "What does ViveScript Solutions do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ViveScript Solutions is an AI automation and software development agency. Their services include AI chatbot development, SaaS product engineering, workflow automation, Google Workspace automation, and web development. ViveScript Solutions was the development agency behind the ReplyBase platform.",
          },
        },
        {
          "@type": "Question",
          name: "Can ViveScript Solutions build a chatbot or SaaS product for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ViveScript Solutions builds custom AI chatbots, conversation automation platforms, and SaaS products for businesses. You can learn more and get in touch at vivescriptsolutions.com.",
          },
        },
      ],
    },
  ],
};

export default function CreditsPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          {/* Page header */}
          <header className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              Credits
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Built by ViveScript Solutions
            </h1>
            <p className="text-lg text-slate-400">
              ReplyBase was designed and developed by{" "}
              <a
                href="https://www.vivescriptsolutions.com/"
                target="_blank"
                rel="noopener"
                className="text-white font-semibold hover:text-indigo-300 transition-colors"
              >
                ViveScript Solutions
              </a>
              , the development agency commissioned to engineer the platform.
            </p>
          </header>

          {/* About ViveScript */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              About ViveScript Solutions
            </h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              ViveScript Solutions is a software and AI automation agency with
              deep expertise in building conversational AI platforms, SaaS
              products, and business workflow automation. The team handles
              everything from product architecture and backend engineering to UX
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

          {/* CTA */}
          <div className="bg-slate-800/60 border border-indigo-700/30 rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-sm mb-1">
              Need a chatbot, automation system, or SaaS product?
            </p>
            <p className="text-white font-bold text-xl mb-5">
              Work with ViveScript Solutions
            </p>
            <a
              href="https://www.vivescriptsolutions.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-colors"
            >
              Visit vivescriptsolutions.com
            </a>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
