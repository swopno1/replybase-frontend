import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Bot, Zap, BarChart3, Check, X as XIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot & Lead Capture Platform — 14-Day Free Trial",
  description:
    "ReplyBase captures leads 24/7, replies instantly with AI, and manages all customer conversations in one inbox. Webchat, Telegram, Facebook & WhatsApp. Start free — no card needed.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ReplyBase — Never Miss Another Lead with AI",
    description:
      "AI chatbot & lead capture platform. Reply instantly, manage every conversation, and grow your business. Free 14-day trial.",
    url: "https://replybase.co.uk",
    type: "website",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReplyBase",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://replybase.co.uk",
  description:
    "AI-powered chatbot and lead capture platform. Capture leads 24/7 via Webchat, Telegram, Facebook Messenger, and WhatsApp Business.",
  screenshot: "https://replybase.co.uk/opengraph-image.png",
  featureList:
    "AI chatbot, Lead capture, CRM inbox, Telegram integration, Webchat, Facebook Messenger, WhatsApp Business, Visual flow builder, Analytics dashboard",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "GBP",
      description: "1 bot, Webchat & Facebook, 200 automations/month",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "29",
      priceCurrency: "GBP",
      description: "3 bots, all channels, 1,500 automations/month, CRM access",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "89",
      priceCurrency: "GBP",
      description:
        "10 bots, all channels, 10,000 automations/month, API access",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "249",
      priceCurrency: "GBP",
      description:
        "25 bots, all channels, 40,000 automations/month, priority support",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "3",
    bestRating: "5",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ReplyBase",
  url: "https://replybase.co.uk",
  logo: "https://replybase.co.uk/icon.png",
  description:
    "ReplyBase is an AI chatbot and lead capture platform helping businesses reply instantly and never miss a lead.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://replybase.co.uk/contact",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ReplyBase",
  url: "https://replybase.co.uk",
  description:
    "AI chatbot & lead capture platform for businesses — Webchat, Telegram, Facebook, WhatsApp.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get started with ReplyBase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up for free in minutes at app.replybase.co.uk - no credit card charged until trial ends. Follow the Quick Start Guide to connect your first channel (Webchat or Telegram) and go live in under 25 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure with ReplyBase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ReplyBase uses end-to-end encryption, role-based access controls, and regular security audits. The platform is GDPR and CCPA compliant from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my ReplyBase subscription anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can cancel or change your plan at any time. Cancel before your 14-day free trial ends and you will not be charged anything.",
      },
    },
    {
      "@type": "Question",
      name: "What channels does ReplyBase support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReplyBase supports Webchat (embeddable chat widget), Telegram, Facebook Messenger, WhatsApp Business, and website lead capture forms. Free plan includes Webchat and Facebook.",
      },
    },
    {
      "@type": "Question",
      name: "How much does ReplyBase cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ReplyBase offers four plans: Free (£0/month), Starter (£29/month), Pro (£89/month), and Business (£249/month). All paid plans include a 14-day free trial with no card charged until the trial ends.",
      },
    },
    {
      "@type": "Question",
      name: "Does ReplyBase support AI responses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All plans include AI-powered responses. The Free plan includes 100 AI responses/month. Starter includes 1,000, Pro includes 7,500, and Business includes 25,000 AI responses per month.",
      },
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LandingNavbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 -z-10 animate-fade-in"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg motion-safe:animate-fade-in">
              Never Miss Another <span className="text-indigo-500">Lead</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto motion-safe:animate-fade-in">
              Reply instantly to every enquiry and turn more messages into
              paying customers—all in one simple platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="https://app.replybase.co.uk/auth/register?source=hero"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Start Free
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 block sm:inline-block"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> 14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Setup in under 5
                minutes
              </span>
            </div>
          </div>
        </section>

        {/* Trust & Brand Intent Section */}
        <section
          id="trust"
          className="py-12 bg-slate-900 border-b border-slate-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 motion-safe:animate-fade-in">
              Why Businesses Choose ReplyBase
            </h2>
            <ul className="text-slate-400 max-w-2xl mx-auto mb-8 space-y-2 text-left list-disc list-inside">
              <li>Never miss a lead — reply instantly to every enquiry</li>
              <li>Turn more conversations into paying customers</li>
              <li>Save hours of manual replies every week</li>
              <li>Simple setup, no technical skills needed</li>
              <li>Real human support when you need it</li>
            </ul>
            <div className="flex flex-wrap justify-center gap-6 motion-safe:animate-fade-in">
              <div className="bg-slate-800 rounded-xl px-6 py-3 flex items-center gap-2 shadow hover:shadow-indigo-500/30 transition-all duration-300">
                <span className="text-green-400 font-bold">GDPR</span> Compliant
              </div>
              <div className="bg-slate-800 rounded-xl px-6 py-3 flex items-center gap-2 shadow hover:shadow-indigo-500/30 transition-all duration-300">
                <span className="text-blue-400 font-bold">Stripe</span> Verified
              </div>
              <div className="bg-slate-800 rounded-xl px-6 py-3 flex items-center gap-2 shadow hover:shadow-indigo-500/30 transition-all duration-300">
                <span className="text-indigo-400 font-bold">99.99%</span> Uptime
              </div>
              <div className="bg-slate-800 rounded-xl px-6 py-3 flex items-center gap-2 shadow hover:shadow-indigo-500/30 transition-all duration-300">
                <span className="text-yellow-400 font-bold">Human</span> Support
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                Everything You Need to Grow
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Capture every lead, reply instantly, and manage your
                conversations without the usual manual back-and-forth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bot size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Automated Lead Capture
                </h3>
                <p className="text-slate-400">
                  Capture and qualify leads 24/7 with intelligent chatbots and
                  forms.{" "}
                  <Link
                    href="/docs/quick-start"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    See how it works
                  </Link>
                  .
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Instant Lead Notifications
                </h3>
                <p className="text-slate-400">
                  Capture enquiries from your website and alert your team in
                  Telegram or email.{" "}
                  <Link
                    href="/docs/product-roadmap"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    See roadmap
                  </Link>
                  .
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  CRM-Style Tracking
                </h3>
                <p className="text-slate-400">
                  Manage conversations, track customer journeys, and never miss
                  a follow-up.{" "}
                  <Link
                    href="/docs/features"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Learn more
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Feature 4 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  GDPR Data Deletion
                </h3>
                <p className="text-slate-400">
                  Built-in tools for data privacy and compliance.{" "}
                  <Link
                    href="/privacy"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              {/* Feature 5 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Admin Dashboard
                </h3>
                <p className="text-slate-400">
                  Real-time analytics, team management, and customizable
                  workflows.{" "}
                  <Link
                    href="/#pricing"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Dashboard Guide
                  </Link>
                  .
                </p>
              </div>
              {/* Feature 6 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Subscription Billing
                </h3>
                <p className="text-slate-400">
                  Flexible plans for every stage—Free, Starter, Pro, and
                  Business.{" "}
                  <Link
                    href="/docs/subscription-features"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Compare plans
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-20 bg-slate-900 border-b border-slate-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                How ReplyBase Works
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Get started in minutes. Connect, customize, and grow—no code
                required.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center motion-safe:animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Connect Your Channels
                </h3>
                <p className="text-slate-400 text-center">
                  Launch Webchat, Facebook Messenger, WhatsApp and Telegram notifications in minutes.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center motion-safe:animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Customize Your Bots
                </h3>
                <p className="text-slate-400 text-center">
                  Use our visual builder or ready-made templates.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center motion-safe:animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Capture & Qualify Leads
                </h3>
                <p className="text-slate-400 text-center">
                  Automated flows engage visitors and collect key info.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700/50 flex flex-col items-center motion-safe:animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Manage & Convert
                </h3>
                <p className="text-slate-400 text-center">
                  Track, nurture, and convert leads from a unified dashboard.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                href="/docs/quick-start"
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn more in our Quick Start Guide
              </Link>
            </div>
          </div>
        </section>
        {/* Customer Success Stories Section */}
        <section
          id="success"
          className="py-20 bg-slate-800/60 border-b border-slate-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                See How Businesses Succeed with ReplyBase
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700/50 motion-safe:animate-slide-in-up">
                <div
                  className="flex gap-0.5 mb-3 text-yellow-400 text-sm"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <p className="text-slate-300 italic mb-4">
                  &ldquo;ReplyBase helped us double our qualified leads in 3
                  months. The instant Telegram alerts mean we never miss a hot
                  enquiry.&rdquo;
                </p>
                <div className="text-slate-400 text-sm font-medium">
                  James T. &mdash; Director, Estate Agency
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700/50 motion-safe:animate-slide-in-up">
                <div
                  className="flex gap-0.5 mb-3 text-yellow-400 text-sm"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <p className="text-slate-300 italic mb-4">
                  &ldquo;We were live in 20 minutes. The webchat captures
                  enquiries 24/7 while we sleep &mdash; it&apos;s like having an
                  extra team member.&rdquo;
                </p>
                <div className="text-slate-400 text-sm font-medium">
                  Priya S. &mdash; Founder, Financial Services
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700/50 motion-safe:animate-slide-in-up">
                <div
                  className="flex gap-0.5 mb-3 text-yellow-400 text-sm"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <p className="text-slate-300 italic mb-4">
                  &ldquo;The CRM inbox and automation flows cut our response
                  time from 4 hours to under 2 minutes. Highly
                  recommended.&rdquo;
                </p>
                <div className="text-slate-400 text-sm font-medium">
                  Marcus L. &mdash; CEO, SaaS Startup
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Security & Compliance Section */}
        <section
          id="security"
          className="py-20 bg-slate-900 border-b border-slate-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                Your Data, Protected
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                End-to-end encryption, role-based access controls, and regular
                security audits. GDPR & CCPA compliant from day one.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/docs/security-model-application-level"
                className="bg-slate-800 rounded-xl px-6 py-3 text-indigo-400 font-semibold hover:bg-slate-700 transition-colors duration-300"
              >
                Security Model
              </Link>
              <Link
                href="/privacy"
                className="bg-slate-800 rounded-xl px-6 py-3 text-indigo-400 font-semibold hover:bg-slate-700 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/deletion-status"
                className="bg-slate-800 rounded-xl px-6 py-3 text-indigo-400 font-semibold hover:bg-slate-700 transition-colors duration-300"
              >
                Data Deletion
              </Link>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section
          id="faq"
          className="py-20 bg-slate-800/50 border-b border-slate-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  How do I get started?
                </h3>
                <p className="text-slate-400">
                  Sign up in minutes and follow our{" "}
                  <Link
                    href="/docs/quick-start"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Quick Start Guide
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Is my data secure?
                </h3>
                <p className="text-slate-400">
                  Yes. See our{" "}
                  <Link
                    href="/docs/security-model-application-level"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Security Model
                  </Link>{" "}
                  for details.
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Can I cancel anytime?
                </h3>
                <p className="text-slate-400">
                  Yes, you can cancel or change your plan at any time. See{" "}
                  <Link
                    href="/docs/subscription-features"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Subscription Features
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Do you offer support?
                </h3>
                <p className="text-slate-400">
                  Absolutely!{" "}
                  <Link
                    href="/contact"
                    className="text-indigo-400 underline hover:text-indigo-300"
                  >
                    Contact us
                  </Link>{" "}
                  for help anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-slate-400 max-w-3xl mx-auto">
                Start free, upgrade as you grow. All plans support Telegram,
                Webchat, and website lead capture with flow-first runtime and
                optional AI fallback.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-indigo-900/30 border border-indigo-500/50 rounded-full px-6 py-3">
                <span className="text-indigo-400 font-bold text-lg">
                  🎁 14-Day Free Trial
                </span>
                <span className="text-slate-300 text-sm">
                  • No card charged until trial ends • Cancel anytime
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-800/50 p-1.5">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase">
                  <tr>
                    <th scope="col" className="p-4 w-1/5">
                      Feature
                    </th>
                    <th scope="col" className="p-4 text-center">
                      Free
                    </th>
                    <th scope="col" className="p-4 text-center">
                      Starter
                    </th>
                    <th scope="col" className="p-4 text-center">
                      Pro
                    </th>
                    <th scope="col" className="p-4 text-center">
                      Business
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Monthly Price
                    </td>
                    <td className="p-4 text-center text-white">£0</td>
                    <td className="p-4 text-center text-white">£29</td>
                    <td className="p-4 text-center text-indigo-400 font-bold">
                      £89
                    </td>
                    <td className="p-4 text-center text-white">£249</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">AI Role</td>
                    <td className="p-4 text-center text-slate-400">
                      Basic AI Assist
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Smart Automation
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      AI Co-Pilot
                    </td>
                    <td className="p-4 text-center text-slate-400">AI Agent</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Automations / Month
                    </td>
                    <td className="p-4 text-center text-slate-400">200</td>
                    <td className="p-4 text-center text-slate-400">1,500</td>
                    <td className="p-4 text-center text-slate-400">10,000</td>
                    <td className="p-4 text-center text-slate-400">40,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      AI Responses / Month
                    </td>
                    <td className="p-4 text-center text-slate-400">100</td>
                    <td className="p-4 text-center text-slate-400">1,000</td>
                    <td className="p-4 text-center text-slate-400">7,500</td>
                    <td className="p-4 text-center text-slate-400">25,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">AI Overage</td>
                    <td className="p-4 text-center text-slate-400">Upgrade</td>
                    <td className="p-4 text-center text-slate-400">£12 / 1k</td>
                    <td className="p-4 text-center text-slate-400">£10 / 1k</td>
                    <td className="p-4 text-center text-slate-400">£8 / 1k</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Bots</td>
                    <td className="p-4 text-center text-slate-400">1</td>
                    <td className="p-4 text-center text-slate-400">3</td>
                    <td className="p-4 text-center text-slate-400">10</td>
                    <td className="p-4 text-center text-slate-400">25</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Supported Channels
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Webchat, Facebook, Website Forms
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Telegram, Webchat, Facebook, WhatsApp, Website Forms
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Telegram, Webchat, Facebook, WhatsApp, Website Forms
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Telegram, Webchat, Facebook, WhatsApp, Website Forms
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">CRM Access</td>
                    <td className="p-4 text-center text-red-500">
                      <XIcon className="mx-auto" size={16} />
                    </td>
                    <td className="p-4 text-center text-green-500">
                      <Check className="mx-auto" size={16} />
                    </td>
                    <td className="p-4 text-center text-green-500">
                      <Check className="mx-auto" size={16} />
                    </td>
                    <td className="p-4 text-center text-green-500">
                      <Check className="mx-auto" size={16} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">API Access</td>
                    <td className="p-4 text-center text-red-500">
                      <XIcon className="mx-auto" size={16} />
                    </td>
                    <td className="p-4 text-center text-red-500">
                      <XIcon className="mx-auto" size={16} />
                    </td>
                    <td className="p-4 text-center text-green-500">
                      <Check className="mx-auto" size={16} />
                    </td>
                    <td className="p-4 text-center text-green-500">
                      <Check className="mx-auto" size={16} />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Support</td>
                    <td className="p-4 text-center text-slate-400">
                      Community
                    </td>
                    <td className="p-4 text-center text-slate-400">Email</td>
                    <td className="p-4 text-center text-slate-400">Priority</td>
                    <td className="p-4 text-center text-slate-400">
                      Priority +
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Get Started
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/register?plan=free&source=pricing_table_free"
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg"
                      >
                        Get Started
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/register?plan=starter&source=pricing_table_starter"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-slate-500">14 days free</p>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/register?plan=pro&source=pricing_table_pro"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-slate-500">14 days free</p>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/register?plan=business&source=pricing_table_business"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-2"
                      >
                        Start Business Trial
                      </a>
                      <Link
                        href="/contact"
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-center"
                      >
                        Talk to Specialist
                      </Link>
                      <p className="mt-1 text-xs text-slate-500">
                        Concierge onboarding available
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-800/70 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                💳 Risk-Free Trial Policy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    14 Days Free
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Full access to all features during trial.
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    No Charge Until Trial Ends
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Your card won&apos;t be charged during the trial period.
                  </p>
                </div>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Cancel Anytime
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Cancel before trial ends with no charge at all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          id="cta"
          className="py-20 bg-linear-to-b from-indigo-900 via-slate-900 to-slate-900 text-center"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 motion-safe:animate-fade-in">
              Ready to Transform Your Customer Conversations?
            </h2>
            <p className="text-slate-300 text-lg mb-2">
              Start your 14-day free trial today — No credit card charged until
              trial ends
            </p>
            <p className="text-slate-400 text-sm mb-6">
              Cancel anytime before trial ends with zero charges
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Link
                href="https://app.replybase.co.uk/auth/register?source=final_cta"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Start 14-Day Free Trial
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 block sm:inline-block"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
