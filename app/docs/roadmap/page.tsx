"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, CheckCircle, Circle, Clock } from "lucide-react";
import Link from "next/link";

export default function RoadmapDoc() {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-4xl">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Documentation
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">
            Product Roadmap
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            Our vision for the future of ReplyBase
          </p>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-12">
            <p className="text-white font-semibold mb-2">
              Current Status: MVP Phase Complete ✅
            </p>
            <p className="text-slate-300 text-sm">
              ReplyBase has successfully launched with core features including
              multi-channel bot management, conversation intelligence, lead
              capture, and subscription billing. We&apos;re now focused on
              expanding integrations and enhancing user experience.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              ✅ Completed Features
            </h2>
            <div className="space-y-3">
              {[
                "User Authentication & Multi-tenancy (Google, Facebook, Email)",
                "Bot Management System with Typebot integration",
                "Facebook Messenger Integration",
                "Conversation Intelligence & CRM",
                "Lead Management & Qualification",
                "Stripe Subscription & Billing (4 pricing tiers)",
                "Admin Dashboard with Analytics",
                "Contact Database & Activity Audit Log",
                "Health Monitoring & Execution Logs",
                "Production Docker Deployment",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <CheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              🚀 Q1 2026 (Current Quarter)
            </h2>
            <p className="text-slate-400 mb-4">
              Focus: Platform stability, WhatsApp integration, and user
              experience
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "WhatsApp Business Integration",
                  status: "in-progress",
                },
                {
                  title: "Industry-Specific Bot Templates",
                  status: "in-progress",
                },
                {
                  title: "Email Notification System (SendGrid)",
                  status: "planned",
                },
                { title: "Mobile-Responsive Dashboard", status: "planned" },
                { title: "Onboarding Wizard for New Users", status: "planned" },
                { title: "Video Message Support", status: "planned" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <Clock
                    className="text-yellow-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div className="flex-1">
                    <span className="text-slate-300">{feature.title}</span>
                    <span
                      className={`ml-3 text-xs px-2 py-1 rounded ${
                        feature.status === "in-progress"
                          ? "bg-yellow-900/30 text-yellow-400"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {feature.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">📅 Q2 2026</h2>
            <p className="text-slate-400 mb-4">
              Focus: Advanced integrations and analytics
            </p>
            <div className="space-y-3">
              {[
                "Instagram Direct Message Integration",
                "Advanced Sentiment Analysis",
                "Customer Segmentation Tools",
                "Bulk Contact Import/Export",
                "Predictive Analytics Dashboard",
                "A/B Testing for Bot Flows",
                "Custom API Webhooks",
                "Team Collaboration Features",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <Circle
                    className="text-slate-500 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-slate-400">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              📅 Q3-Q4 2026
            </h2>
            <p className="text-slate-400 mb-4">
              Focus: Enterprise features and global expansion
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-white font-bold mb-3">New Channels</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Telegram Integration</li>
                  <li>• LinkedIn Messaging</li>
                  <li>• TikTok Business Messages</li>
                  <li>• Twitter/X Direct Messages</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-white font-bold mb-3">
                  Enterprise Features
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• SSO/SAML Integration</li>
                  <li>• Custom Domains</li>
                  <li>• White-Label Options</li>
                  <li>• Advanced Reporting</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-white font-bold mb-3">AI & Automation</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• GPT-4 Integration</li>
                  <li>• Auto-response Learning</li>
                  <li>• Quality Scoring System</li>
                  <li>• Smart Routing</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-white font-bold mb-3">Mobile & Apps</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• iOS Mobile App</li>
                  <li>• Android Mobile App</li>
                  <li>• Push Notifications</li>
                  <li>• Offline Mode</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              🔮 Future Vision (2027+)
            </h2>
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-700/50 p-6 rounded-lg">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span>
                    <strong className="text-white">Voice & Video Calls:</strong>{" "}
                    Handle voice conversations with AI-powered speech
                    recognition
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span>
                    <strong className="text-white">
                      Multi-Language Support:
                    </strong>{" "}
                    Auto-translation for global reach
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span>
                    <strong className="text-white">
                      Blockchain Integration:
                    </strong>{" "}
                    Decentralized data storage and verification
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span>
                    <strong className="text-white">Custom ML Models:</strong>{" "}
                    Train your own conversation models
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold mt-1">•</span>
                  <span>
                    <strong className="text-white">Marketplace:</strong>{" "}
                    Buy/sell bot templates and integrations
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              📊 Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  10K+
                </div>
                <div className="text-sm text-slate-400">
                  Active Users by Q4 2026
                </div>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  1M+
                </div>
                <div className="text-sm text-slate-400">
                  Messages Processed Monthly
                </div>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-slate-400">Platform Uptime</div>
              </div>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Want to Influence Our Roadmap?
            </h3>
            <p className="text-slate-300 mb-4">
              We value customer feedback! If you have feature requests or
              suggestions, please reach out to us.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Submit Feature Request
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
