"use client";

import LandingNavbar from "@/components/LandingNavbar";
import LandingFooter from "@/components/LandingFooter";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "£0",
    description: "For individuals and testing",
    features: [
      "1 bot",
      "100 daily messages",
      "Basic analytics",
      "Community support",
    ],
  },
  {
    name: "Starter",
    price: "£29",
    description: "For small businesses",
    features: [
      "5 bots",
      "1,000 daily messages",
      "API access (rate limited)",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "£99",
    description: "For growing agencies",
    features: [
      "25 bots",
      "5,000 daily messages",
      "Advanced AI",
      "24h chat support",
    ],
  },
  {
    name: "Business",
    price: "£299",
    description: "For enterprises at scale",
    features: [
      "Unlimited bots",
      "Unlimited messages",
      "Premium AI + custom models",
      "1h phone support",
    ],
  },
];

export default function FeaturesDoc() {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-inter selection:bg-indigo-500/20">
      <LandingNavbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-5xl">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Documentation
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">
            Subscription Features
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            ReplyBase offers four tiers designed for businesses of all sizes.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Plan Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-2xl font-bold text-indigo-400 mb-2">
                    {plan.price}
                    <span className="text-sm text-slate-400">/month</span>
                  </p>
                  <p className="text-sm text-slate-400 mb-4">
                    {plan.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Core Features (All Plans)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Bot management with Typebot integration",
                "Conversation tracking & history",
                "Lead capture and qualification",
                "Contact database with identity tracking",
                "Analytics dashboard",
                "Secure authentication (OIDC)",
              ].map((feature) => (
                <div
                  key={feature}
                  className="bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Upcoming Features
            </h2>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• WhatsApp integration improvements</li>
                <li>• Industry-specific bot templates</li>
                <li>• Email notification system</li>
                <li>• Advanced analytics and segmentation</li>
              </ul>
            </div>
          </section>

          <div className="bg-indigo-900/20 border border-indigo-700/50 p-6 rounded-lg">
            <h3 className="text-white font-bold mb-2">
              Need help choosing a plan?
            </h3>
            <p className="text-slate-300 mb-4">
              Contact our team for guidance based on your usage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </article>
      </main>

      <LandingFooter />
    </div>
  );
}
