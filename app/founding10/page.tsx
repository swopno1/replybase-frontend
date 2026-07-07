import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Founding10Form from "./Founding10Form";

export const metadata: Metadata = {
  title: "Founding 10 Programme — ReplyBase",
  description:
    "Apply to become one of our 10 Founding Businesses. Receive 6 months free, personal onboarding, and direct access to the founder.",
  alternates: {
    canonical: "/founding10",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Become One of Our Founding 10 Businesses — ReplyBase",
    description:
      "Help shape the future of ReplyBase and receive 6 months completely FREE. Apply now — only 10 spots available.",
    url: "https://replybase.co.uk/founding10",
    type: "website",
  },
};

const benefits = [
  "6 Months Completely FREE",
  "Personal One-to-One Onboarding",
  "Priority Support",
  "Direct Access to the Founder",
  "Help Shape the Future of ReplyBase",
  "Exclusive Founding Partner Pricing After the Programme",
];

const criteria = [
  "You receive enquiries through Facebook Messenger or your website.",
  "You sometimes can't reply immediately.",
  "You want to improve customer response times.",
  "You're happy to provide honest feedback while using ReplyBase.",
];

export default function Founding10Page() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 antialiased">
      {/* Minimal header — logo only, no nav */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image/logo.png"
              alt="ReplyBase"
              width={36}
              height={36}
              className="h-9 w-auto bg-white rounded-full"
              priority
            />
            <span className="font-bold text-lg text-white">ReplyBase</span>
          </Link>
          <span className="text-xs text-slate-500 hidden sm:block">
            Founding 10 Programme — Only 10 Spots Available
          </span>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-indigo-600/8 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Limited to 10 UK Businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              🚀 Become One of Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Founding 10 Businesses
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Help shape the future of ReplyBase while receiving{" "}
              <span className="text-white font-semibold">6 months completely FREE</span>.
              We&apos;re looking for just 10 UK businesses to work directly with us.
            </p>
            <div className="mt-10">
              <a
                href="#apply"
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-xl shadow-indigo-500/30 text-base"
              >
                Apply Now — It&apos;s Free
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-slate-800/30 border-y border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              As a Founding 10 Business you&apos;ll receive:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-600/20 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is ReplyBase */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What Is ReplyBase?</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              ReplyBase is an AI-powered platform that helps businesses instantly respond to customer
              enquiries, capture leads and keep conversations moving—even when you&apos;re busy.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              Whether enquiries come through{" "}
              <span className="text-white font-medium">Facebook Messenger</span> or your{" "}
              <span className="text-white font-medium">website</span>, ReplyBase helps ensure every
              customer receives a fast response.
            </p>
          </div>
        </section>

        {/* Why We're Doing This */}
        <section className="py-16 bg-slate-800/20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-linear-to-br from-indigo-600/10 to-purple-600/5 border border-indigo-500/20 rounded-2xl p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why We&apos;re Doing This</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Rather than simply selling software, we want to work closely with 10 businesses who
                are willing to use ReplyBase in their day-to-day business and provide honest feedback.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                Your feedback will{" "}
                <span className="text-white font-semibold">directly influence</span> future updates
                and improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Is ReplyBase Right For You? */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Is ReplyBase Right For You?
            </h2>
            <p className="text-center text-slate-400 mb-8">This programme is ideal if:</p>
            <div className="space-y-3">
              {criteria.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-slate-800/30 border border-slate-700/40 rounded-xl px-5 py-4"
                >
                  <span className="text-indigo-400 text-lg leading-none mt-0.5">✅</span>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 bg-slate-800/20 border-t border-slate-800">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                Applications Open
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Apply Now</h2>
              <p className="text-slate-400">
                Fill in the form below and I&apos;ll personally review your application.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
              <Founding10Form />
            </div>
          </div>
        </section>

        {/* Testimonials placeholder — hidden until content available */}
        {/* Uncomment and populate when testimonials are ready
        <section className="py-16 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Trusted By UK Businesses</h2>
          </div>
        </section>
        */}
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-slate-800 py-8 mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ReplyBase. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-slate-400 transition-colors">
              replybase.co.uk
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
