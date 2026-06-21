import Link from "next/link";
import {
  Check,
  Zap,
  Shield,
  Send,
  Globe,
  MessageSquare,
  TrendingUp,
  X as XIcon,
} from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import FoundingPromoModal from "@/components/FoundingPromoModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReplyBase",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Capture every lead, reply instantly, and manage your conversations—all in one simple platform.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
  publisher: {
    "@type": "Organization",
    name: "ReplyBase",
    url: "https://replybase.co.uk",
    logo: "https://replybase.co.uk/image/logo.png",
  },
};

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground antialiased selection:bg-indigo-500/20 font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingNavbar />
      <FoundingPromoModal />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg motion-safe:animate-fade-in">
                Never Miss Another{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  Lead
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto motion-safe:animate-fade-in">
                Reply instantly to every enquiry and turn more messages into
                paying customers—all in one simple platform.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 motion-safe:animate-fade-in">
                <Link
                  href="/#pricing"
                  className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  Start 14-Day Free Trial
                </Link>
                <Link
                  href="#features"
                  className="w-full sm:w-auto border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 block sm:inline-block"
                >
                  See How It Works
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground motion-safe:animate-fade-in">
                14-day free trial • No credit card required to start • Cancel
                anytime
              </p>
            </div>
          </div>
        </section>

        {/* Messaging Channels Section */}
        <section id="channels" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 motion-safe:animate-fade-in">
                Every Lead Captured, No Matter the Channel
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Connect your business where your customers are. One unified
                platform to manage all your conversations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Globe,
                  name: "Webchat",
                  status: "Live",
                  color: "text-blue-400",
                },
                {
                  icon: MessageSquare,
                  name: "Facebook",
                  status: "Live",
                  color: "text-indigo-500",
                },
                {
                  icon: Send,
                  name: "Telegram",
                  status: "Live",
                  color: "text-sky-400",
                },
                {
                  icon: MessageSquare,
                  name: "WhatsApp",
                  status: "Beta",
                  color: "text-green-500",
                },
              ].map((channel) => (
                <div
                  key={channel.name}
                  className="flex flex-col items-center p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 motion-safe:animate-fade-in"
                >
                  <channel.icon className={`h-10 w-10 mb-4 ${channel.color}`} />
                  <span className="text-white font-semibold">
                    {channel.name}
                  </span>
                  <span className="text-muted-foreground mt-1 uppercase tracking-wider text-[10px]">
                    {channel.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                Built for Fast-Growing Businesses
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Replace manual replies with automated precision. ReplyBase gives
                you the tools to capture, qualify, and convert leads 24/7.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Instant AI Replies",
                  desc: "Automatically answer common questions and handle first-level support with conversational AI.",
                },
                {
                  icon: TrendingUp,
                  title: "Lead Qualification",
                  desc: "Automatically qualify leads based on your specific criteria before they even hit your inbox.",
                },
                {
                  icon: MessageSquare,
                  title: "Visual Flow Builder",
                  desc: "Design complex conversation paths with a simple drag-and-drop builder—no coding required.",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "Your data is encrypted and protected. We prioritse privacy and security for all your conversations.",
                },
                {
                  icon: Globe,
                  title: "Multi-Channel Support",
                  desc: "Respond to enquiries from Webchat, Telegram, Facebook, and more from one central dashboard.",
                },
                {
                  icon: Check,
                  title: "CRM Integration",
                  desc: "Sync your leads directly to your favorite CRM tools and keep your sales pipeline updated.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300 group motion-safe:animate-fade-in"
                >
                  <div className="h-12 w-12 rounded-lg bg-indigo-600/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-indigo-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow-First Section */}
        <section className="py-20 bg-linear-to-b from-slate-900 to-indigo-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="motion-safe:animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                  Visual Conversation Builder
                </h2>
                <p className="mt-6 text-slate-300 text-lg leading-relaxed">
                  Building a chatbot shouldn&apos;t be hard. Our visual builder
                  lets you design conversational flows that feel natural and get
                  results.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Drag-and-drop nodes to create logic",
                    "Collect name, email, and custom fields",
                    "Set up conditional branching based on user input",
                    "Live preview your flow before publishing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative motion-safe:animate-slide-in-right">
                <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl p-4 md:p-8">
                  {/* Mock builder UI */}
                  <div className="flex gap-4">
                    <div className="w-1/3 space-y-4">
                      <div className="bg-slate-700 h-12 rounded-lg animate-pulse" />
                      <div className="bg-slate-700 h-12 rounded-lg animate-pulse" />
                      <div className="bg-slate-700 h-12 rounded-lg animate-pulse" />
                    </div>
                    <div className="flex-1 bg-slate-900 rounded-lg border border-slate-700 p-4 h-64 flex flex-col items-center justify-center relative">
                      <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg mb-4">
                        Welcome Node
                      </div>
                      <div className="w-0.5 h-12 bg-slate-700" />
                      <div className="bg-slate-800 border border-indigo-500/50 text-white px-4 py-2 rounded-lg">
                        Qualify Lead
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Channel Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white motion-safe:animate-fade-in">
                Go Beyond Webchat
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                ReplyBase integrates directly with the platforms your customers
                use every day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Webchat Widget",
                  icon: Globe,
                  desc: "A sleek, customizable widget for your website.",
                },
                {
                  title: "Facebook Messenger",
                  icon: MessageSquare,
                  desc: "Connect your FB Page and reply instantly to messages.",
                },
                {
                  title: "Telegram Bot",
                  icon: Send,
                  desc: "Automate your Telegram channel conversations.",
                },
                {
                  title: "WhatsApp",
                  icon: MessageSquare,
                  desc: "Business Cloud API support for professional messaging.",
                },
              ].map((channel) => (
                <div
                  key={channel.title}
                  className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 motion-safe:animate-fade-in"
                >
                  <channel.icon className="h-8 w-8 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {channel.desc}
                  </p>
                </div>
              ))}
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
                  Launch Webchat, Facebook Messenger, and website lead capture
                  in minutes. WhatsApp and Telegram coming soon.
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
                <p className="text-muted-foreground text-center">
                  Track, nurture, and convert leads from a unified dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "GDPR Compliant", icon: Shield },
                { title: "End-to-End Encryption", icon: Shield },
                { title: "Secure Cloud Hosting", icon: Globe },
                { title: "24/7 Monitoring", icon: TrendingUp },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <item.icon className="h-5 w-5 text-green-500" />
                  <span className="text-white font-medium">{item.title}</span>
                </div>
              ))}
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
                    href="/docs/get-started"
                    className="text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Quick Start guide
                  </Link>
                  .
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">
                  Is my data secure?
                </h3>
                <p className="text-muted-foreground">
                  Yes. See our{" "}
                  <Link
                    href="/docs/security"
                    className="text-indigo-400 hover:text-indigo-300 font-medium"
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
                    href="/terms"
                    className="text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Terms of Service
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
                    className="text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Contact our team
                  </Link>{" "}
                  for any help or questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-slate-400 max-w-3xl mx-auto text-lg">
                Start free, upgrade as you grow. All paid plans include a 14-day
                free trial.
              </p>
            </div>

            {/* Plan Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
              {/* Launch Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 relative group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Perfect for solopreneurs getting started with lead
                    automation.
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-white">
                      £29
                    </span>
                    <span className="text-slate-400 text-sm ml-2">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>1,000 AI Responses / mo</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>1,500 Automations / mo</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>2 active AI Assistants</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Webchat, Facebook or WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Email alerts & Standard Support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://app.replybase.co.uk/auth/claim?plan=launch&source=pricing_cards"
                  className="block w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-center font-semibold transition-colors duration-300"
                >
                  Start 14-Day Trial
                </a>
              </div>

              {/* Grow Card */}
              <div className="bg-slate-900 border-2 border-indigo-600/30 rounded-3xl p-8 flex flex-col justify-between relative hover:border-indigo-600/60 transition-all duration-300 shadow-xl shadow-indigo-600/5 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Grow</h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Ideal for growing businesses running multi-channel
                    campaigns.
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-white">
                      £49
                    </span>
                    <span className="text-slate-400 text-sm ml-2">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-white">
                        3,500 AI Responses / mo
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-white">
                        5,000 Automations / mo
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>5 active AI Assistants</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Webchat, Facebook + WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Lead Scoring & Priority Support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://app.replybase.co.uk/auth/claim?plan=grow&source=pricing_cards"
                  className="block w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-center font-semibold shadow-lg shadow-indigo-600/20 transition-all duration-300 transform group-hover:scale-[1.03]"
                >
                  Start 14-Day Trial
                </a>
              </div>

              {/* Scale Card */}
              <div className="bg-slate-900 border-2 border-purple-500/30 rounded-3xl p-8 flex flex-col justify-between relative hover:border-purple-500/60 transition-all duration-300 shadow-xl shadow-purple-500/5 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    For high-volume SMBs and teams needing advanced AI.
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-white">
                      £89
                    </span>
                    <span className="text-slate-400 text-sm ml-2">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-white">
                        7,500 AI Responses / mo
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-semibold text-white">
                        10,000 Automations / mo
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>10 active AI Assistants</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>Webchat, FB, WhatsApp, Telegram</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>CRM syncing & Team Access</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://app.replybase.co.uk/auth/claim?plan=scale&source=pricing_cards"
                  className="block w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-center font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300 transform group-hover:scale-[1.03]"
                >
                  Start 14-Day Trial
                </a>
              </div>

              {/* Business Card */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 relative group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Business
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                    Full scale lead operations with custom integrations.
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-white">
                      £249
                    </span>
                    <span className="text-slate-400 text-sm ml-2">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>25,000 AI Responses / mo</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>40,000 Automations / mo</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>25 active AI Assistants</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>API key access & Outgoing Webhooks</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>White-Label Branding & SLA support</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://app.replybase.co.uk/auth/claim?plan=business&source=pricing_cards"
                  className="block w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-center font-semibold transition-colors duration-300"
                >
                  Start Business Trial
                </a>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Compare All Plan Features
              </h3>
              <p className="text-slate-400 text-sm">
                Detailed limit configurations across all plans.
              </p>
            </div>

            <div className="overflow-x-auto mb-16">
              <table className="w-full text-left border-collapse bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 text-sm">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="p-4 text-white font-bold border-b border-slate-700">
                      Feature
                    </th>
                    <th className="p-4 text-white font-bold border-b border-slate-700 text-center">
                      Free
                    </th>
                    <th className="p-4 text-white font-bold border-b border-slate-700 text-center">
                      Launch
                    </th>
                    <th className="p-4 text-white font-bold border-b border-slate-700 text-center">
                      Grow
                    </th>
                    <th className="p-4 text-white font-bold border-b border-slate-700 text-center">
                      Scale
                    </th>
                    <th className="p-4 text-white font-bold border-b border-slate-700 text-center">
                      Business
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Monthly Price
                    </td>
                    <td className="p-4 text-center text-slate-400">£0</td>
                    <td className="p-4 text-center text-slate-400">£29</td>
                    <td className="p-4 text-center text-slate-400">£49</td>
                    <td className="p-4 text-center text-slate-400">£89</td>
                    <td className="p-4 text-center text-slate-400">£249</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      AI Responses / Month
                    </td>
                    <td className="p-4 text-center text-slate-400">100</td>
                    <td className="p-4 text-center text-slate-400">1,000</td>
                    <td className="p-4 text-center text-slate-400">3,500</td>
                    <td className="p-4 text-center text-slate-400">7,500</td>
                    <td className="p-4 text-center text-slate-400">25,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Monthly Automations
                    </td>
                    <td className="p-4 text-center text-slate-400">200</td>
                    <td className="p-4 text-center text-slate-400">1,500</td>
                    <td className="p-4 text-center text-slate-400">5,000</td>
                    <td className="p-4 text-center text-slate-400">10,000</td>
                    <td className="p-4 text-center text-slate-400">40,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">AI Overage</td>
                    <td className="p-4 text-center text-slate-400">Upgrade</td>
                    <td className="p-4 text-center text-slate-400">£12 / 1k</td>
                    <td className="p-4 text-center text-slate-400">£10 / 1k</td>
                    <td className="p-4 text-center text-slate-400">£8 / 1k</td>
                    <td className="p-4 text-center text-slate-400">£6 / 1k</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Bots (Assistants)
                    </td>
                    <td className="p-4 text-center text-slate-400">1</td>
                    <td className="p-4 text-center text-slate-400">2</td>
                    <td className="p-4 text-center text-slate-400">5</td>
                    <td className="p-4 text-center text-slate-400">10</td>
                    <td className="p-4 text-center text-slate-400">25</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      Supported Channels
                    </td>
                    <td className="p-4 text-center text-slate-400 text-xs">
                      Webchat, Facebook, Website Forms
                    </td>
                    <td className="p-4 text-center text-slate-400 text-xs">
                      Webchat, Facebook or WhatsApp
                    </td>
                    <td className="p-4 text-center text-slate-400 text-xs">
                      Webchat, Facebook + WhatsApp
                    </td>
                    <td className="p-4 text-center text-slate-400 text-xs">
                      Webchat, FB, WhatsApp, Telegram
                    </td>
                    <td className="p-4 text-center text-slate-400 text-xs">
                      All channels + Custom Integrations
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
                    <td className="p-4 text-center text-slate-400">
                      Standard Email
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Priority Email
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Priority Chat
                    </td>
                    <td className="p-4 text-center text-slate-400">
                      Dedicated SLA
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Action</td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/register?plan=free&source=pricing_table_free"
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-center"
                      >
                        Get Started
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/claim?plan=launch&source=pricing_table_launch"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1 text-center"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-muted-foreground">
                        14 days free
                      </p>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/claim?plan=grow&source=pricing_table_grow"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1 text-center"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-muted-foreground">
                        14 days free
                      </p>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/claim?plan=scale&source=pricing_table_scale"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1 text-center"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-muted-foreground">
                        14 days free
                      </p>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/auth/claim?plan=business&source=pricing_table_business"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-2 text-center"
                      >
                        Start Business Trial
                      </a>
                      <Link
                        href="/contact"
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-center"
                      >
                        Talk to Specialist
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground">
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
            <p className="text-muted-foreground text-sm mb-6">
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
