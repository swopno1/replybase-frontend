import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { Bot, Zap, BarChart3, Check, X as XIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function LandingPage() {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 -z-10 animate-fade-in"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg motion-safe:animate-fade-in">
              Never Miss Another Lead — Reply Instantly with{" "}
              <span className="text-indigo-500">AI</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto motion-safe:animate-fade-in">
              Capture every lead, reply instantly, and manage your
              conversations—all in one simple platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="https://app.replybase.co.uk/auth/register"
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 block sm:inline-block"
              >
                See Product Demo
              </Link>
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
                    href="/docs/modular-dashboard-guide"
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
                  Launch Webchat and Telegram notifications in minutes.
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
                <p className="text-slate-300 italic mb-4">
                  “ReplyBase helped us double our qualified leads in 3 months.”
                </p>
                <div className="text-slate-400 text-sm">
                  — Real Estate Agency
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700/50 motion-safe:animate-slide-in-up">
                <p className="text-slate-300 italic mb-4">
                  “The onboarding was seamless, and the support team is
                  fantastic.”
                </p>
                <div className="text-slate-400 text-sm">
                  — Financial Services Firm
                </div>
              </div>
              <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700/50 motion-safe:animate-slide-in-up">
                <p className="text-slate-300 italic mb-4">
                  “We love the analytics and automation. Highly recommended!”
                </p>
                <div className="text-slate-400 text-sm">— SaaS Startup</div>
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
              {/* Strategic pricing after the launch campaign: £29 / £89 / £249 */}
              <div className="mt-6 inline-flex items-center gap-2 bg-indigo-900/30 border border-indigo-500/50 rounded-full px-6 py-3">
                <span className="text-indigo-400 font-bold text-lg">
                  🎁 Founding Customer Offer
                </span>
                <span className="text-slate-300 text-sm">
                  • First 20 customers • Cancel anytime
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
                    <td className="p-4 text-center text-white">
                      <div>£19</div>
                      <div className="text-xs text-slate-500 line-through">
                        regular £29
                      </div>
                    </td>
                    <td className="p-4 text-center text-indigo-400 font-bold">
                      <div>£49</div>
                      <div className="text-xs text-slate-500 line-through">
                        regular £89
                      </div>
                    </td>
                    <td className="p-4 text-center text-white">
                      <div>£149</div>
                      <div className="text-xs text-slate-500 line-through">
                        regular £249
                      </div>
                    </td>
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
                    <td className="p-4 text-center text-slate-400">250</td>
                    <td className="p-4 text-center text-slate-400">1,500</td>
                    <td className="p-4 text-center text-slate-400">10,000</td>
                    <td className="p-4 text-center text-slate-400">40,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">
                      AI Responses / Month
                    </td>
                    <td className="p-4 text-center text-slate-400">150</td>
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
                      Telegram, Webchat, Facebook, WhatsApp, Website Forms
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
                        href="https://app.replybase.co.uk/auth/register"
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg"
                      >
                        Get Started
                      </a>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/pricing"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-slate-500">14 days free</p>
                    </td>
                    <td className="p-4 text-center">
                      <a
                        href="https://app.replybase.co.uk/pricing"
                        className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg mb-1"
                      >
                        Start Free Trial
                      </a>
                      <p className="text-xs text-slate-500">14 days free</p>
                    </td>
                    <td className="p-4 text-center">
                      <Link
                        href="/contact"
                        className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-center"
                      >
                        Contact Sales
                      </Link>
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
                href="https://app.replybase.co.uk/pricing"
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
