"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  Zap,
  MessageSquare,
  Globe,
  Send,
  ArrowRight,
  Shield,
  Clock,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const SIGNUP_URL =
  "https://app.replybase.co.uk/auth/register?source=fb_ad_demo&plan=grow";

const CHAT_MESSAGES = [
  { from: "visitor", text: "Hi, do you have availability this week?" },
  { from: "bot", text: "Hi! Yes, we have slots available. Can I get your name and the best way to reach you?" },
  { from: "visitor", text: "Sure, I'm Sarah — sarah@email.com" },
  { from: "bot", text: "Thanks Sarah! I've saved your details. A member of our team will confirm your slot within the hour. ✅" },
];

function AnimatedChat() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= CHAT_MESSAGES.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 800 : 1400
    );
    return () => clearTimeout(timer);
  }, [visibleCount]);

  useEffect(() => {
    const reset = setTimeout(() => setVisibleCount(0), 9000);
    return () => clearTimeout(reset);
  }, [visibleCount === CHAT_MESSAGES.length]);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-800 border-b border-slate-700">
        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
          RB
        </div>
        <div>
          <p className="text-white text-sm font-semibold">ReplyBase Bot</p>
          <p className="text-green-400 text-xs flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
            Always online
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider bg-indigo-600/20 text-indigo-400 px-2 py-0.5 rounded-full">
            Facebook Messenger
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 min-h-[220px]">
        {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "visitor" ? "justify-start" : "justify-end"} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                msg.from === "visitor"
                  ? "bg-slate-700 text-slate-100 rounded-tl-sm"
                  : "bg-indigo-600 text-white rounded-tr-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {visibleCount > 0 && visibleCount < CHAT_MESSAGES.length && (
          <div className="flex justify-end">
            <div className="bg-indigo-600/30 px-4 py-2 rounded-2xl rounded-tr-sm">
              <div className="flex gap-1 items-center">
                <span className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lead captured notification */}
      {visibleCount >= CHAT_MESSAGES.length && (
        <div className="mx-4 mb-4 flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 animate-fade-in">
          <div className="h-7 w-7 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
            <Check className="h-4 w-4 text-green-400" />
          </div>
          <div>
            <p className="text-green-400 text-sm font-semibold">Lead captured — Sarah</p>
            <p className="text-slate-400 text-xs">Saved to CRM · Email alert sent</p>
          </div>
        </div>
      )}
    </div>
  );
}

function FlowPreview() {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-5 shadow-xl">
      <p className="text-slate-400 text-xs uppercase tracking-wider mb-4 font-semibold">
        Flow Builder — drag &amp; drop
      </p>
      <div className="flex flex-col items-center gap-0">
        {[
          { label: "Welcome Message", color: "bg-indigo-600", icon: MessageSquare },
          { label: "Ask for Name + Email", color: "bg-purple-600", icon: Send },
          { label: "Qualify Lead", color: "bg-blue-600", icon: TrendingUp },
          { label: "Notify Your Team", color: "bg-green-600", icon: Zap },
        ].map((node, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`flex items-center gap-2 ${node.color} text-white px-5 py-2.5 rounded-xl text-sm font-medium w-56 justify-center`}>
              <node.icon className="h-4 w-4" />
              {node.label}
            </div>
            {i < 3 && (
              <div className="flex flex-col items-center my-1">
                <div className="w-0.5 h-3 bg-slate-600" />
                <ChevronRight className="h-3 w-3 text-slate-500 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-slate-500 text-xs mt-4">No code · Takes 3 minutes to build</p>
    </div>
  );
}

export default function DemoPage() {
  return (
    <div className="bg-background text-foreground antialiased min-h-screen">

      {/* Minimal ad navbar — no exit links */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/image/logo.png"
              alt="ReplyBase"
              width={36}
              height={36}
              className="h-9 w-auto bg-white rounded-full"
            />
            <span className="font-bold text-lg text-white">ReplyBase</span>
          </Link>
          <a
            href={SIGNUP_URL}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            Start Free — No Card Needed
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <Zap className="h-3.5 w-3.5" />
                Replies in under 3 seconds · 24/7
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Stop Losing Leads While{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                  You&apos;re Busy
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                ReplyBase automatically replies to every Facebook message, webchat enquiry, and WhatsApp message — capturing leads and booking appointments while you focus on your business.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={SIGNUP_URL}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 text-lg"
                >
                  Start My Free Trial
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                14-day free trial · No credit card required · Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-slate-800/40 border-y border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Every unanswered message is a lost customer
              </h2>
              <p className="mt-3 text-slate-400 max-w-xl mx-auto">
                53% of customers expect a reply within an hour. Most small businesses can&apos;t keep up — and leads quietly go to a competitor who replied faster.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { stat: "53%", label: "of people leave if no reply within 1 hour", icon: Clock, color: "text-red-400" },
                { stat: "3 sec", label: "average ReplyBase response time, any hour", icon: Zap, color: "text-indigo-400" },
                { stat: "24/7", label: "your bot works nights, weekends, and holidays", icon: TrendingUp, color: "text-green-400" },
              ].map((item) => (
                <div key={item.stat} className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center">
                  <item.icon className={`h-7 w-7 mx-auto mb-3 ${item.color}`} />
                  <p className={`text-3xl font-extrabold mb-1 ${item.color}`}>{item.stat}</p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Live Demo ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                See it in action
              </h2>
              <p className="mt-3 text-slate-400 max-w-lg mx-auto">
                A customer messages your Facebook page. ReplyBase replies instantly, captures their details, and notifies your team — all automatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-indigo-400" />
                  Live conversation replay
                </p>
                <AnimatedChat />
                <p className="mt-3 text-xs text-slate-500 text-center">
                  Replays every 9 seconds · Works identically on WhatsApp, Telegram &amp; Webchat
                </p>
              </div>
              <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-indigo-400" />
                  The flow that powers it
                </p>
                <FlowPreview />
                <p className="mt-3 text-xs text-slate-500 text-center">
                  You build this once. It runs forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How Easy It Is ── */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Up and running in under 15 minutes
              </h2>
              <p className="mt-3 text-slate-400 max-w-lg mx-auto">
                No developers. No integrations to figure out. Three steps and your bot is live.
              </p>
            </div>

            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-indigo-600/50 via-purple-600/50 to-green-600/50" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Connect your channels",
                    desc: "Link your Facebook Page, website webchat, or WhatsApp in a few clicks. No tech skills needed.",
                    icon: Globe,
                    color: "bg-indigo-600",
                    channels: ["Facebook", "Webchat", "WhatsApp", "Telegram"],
                  },
                  {
                    step: "2",
                    title: "Build your conversation",
                    desc: "Use our drag-and-drop flow builder or pick a ready-made template. Customise the messages to match your business.",
                    icon: Zap,
                    color: "bg-purple-600",
                    channels: ["Templates", "Drag & Drop", "AI Replies", "Conditions"],
                  },
                  {
                    step: "3",
                    title: "Go live & watch leads roll in",
                    desc: "Publish your bot. Every new enquiry gets replied to instantly and appears in your ReplyBase inbox.",
                    icon: TrendingUp,
                    color: "bg-green-600",
                    channels: ["Unified Inbox", "Lead CRM", "Email Alerts", "Team Notifications"],
                  },
                ].map((item) => (
                  <div key={item.step} className="relative bg-slate-800 border border-slate-700 rounded-2xl p-7 flex flex-col">
                    <div className={`h-11 w-11 rounded-full ${item.color} text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-lg`}>
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.channels.map((ch) => (
                        <span key={ch} className="text-xs text-slate-300 bg-slate-700/60 border border-slate-600/40 px-2.5 py-1 rounded-full">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/25 text-lg"
              >
                Set Up My Bot Now — It&apos;s Free
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-sm text-slate-500">No card needed to start your 14-day trial</p>
            </div>
          </div>
        </section>

        {/* ── Feature Hits ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">
                Everything you need to never miss a lead
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "AI-powered instant replies", desc: "Answers common questions 24/7 — no manual typing required.", icon: Zap, color: "text-indigo-400" },
                { title: "Multi-channel in one place", desc: "Facebook, WhatsApp, Webchat, Telegram — all in one inbox.", icon: Globe, color: "text-blue-400" },
                { title: "Visual flow builder", desc: "Build conversation scripts with drag and drop. No code.", icon: Send, color: "text-purple-400" },
                { title: "Lead capture & CRM", desc: "Every lead saved automatically with name, email, and source.", icon: TrendingUp, color: "text-green-400" },
                { title: "Instant team alerts", desc: "Get notified by email when a hot lead comes in.", icon: MessageSquare, color: "text-yellow-400" },
                { title: "GDPR compliant", desc: "Your data and your customers' data are fully protected.", icon: Shield, color: "text-red-400" },
              ].map((feat) => (
                <div key={feat.title} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors">
                  <feat.icon className={`h-7 w-7 mb-4 ${feat.color}`} />
                  <h3 className="text-white font-bold mb-2">{feat.title}</h3>
                  <p className="text-slate-400 text-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Channel Logos ── */}
        <section className="py-10 bg-slate-800/30 border-y border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">Works with the channels your customers already use</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Facebook Messenger", icon: MessageSquare, color: "text-indigo-500", bg: "bg-indigo-500/10 border-indigo-500/30" },
                { name: "WhatsApp", icon: MessageSquare, color: "text-green-500", bg: "bg-green-500/10 border-green-500/30" },
                { name: "Webchat Widget", icon: Globe, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/30" },
                { name: "Telegram", icon: Send, color: "text-sky-400", bg: "bg-sky-400/10 border-sky-400/30" },
              ].map((ch) => (
                <div key={ch.name} className={`flex items-center gap-2.5 border rounded-xl px-5 py-3 ${ch.bg}`}>
                  <ch.icon className={`h-5 w-5 ${ch.color}`} />
                  <span className="text-white font-medium text-sm">{ch.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-24 bg-linear-to-b from-indigo-900/30 to-slate-900 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Your next lead is trying to reach you right now
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Start your free 14-day trial. Connect your first channel in minutes. No credit card charged until your trial ends — and you can cancel before then with no charge at all.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-indigo-600/30"
            >
              Start Free Trial — No Card Needed
              <ArrowRight className="h-6 w-6" />
            </a>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              {[
                { icon: Check, text: "14 days completely free" },
                { icon: Shield, text: "No card charged during trial" },
                { icon: Clock, text: "Cancel anytime before trial ends" },
                { icon: Zap, text: "Live in under 15 minutes" },
              ].map((trust) => (
                <div key={trust.text} className="flex items-center gap-2">
                  <trust.icon className="h-4 w-4 text-green-400" />
                  <span>{trust.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer — legal only */}
      <footer className="border-t border-slate-800 py-6 bg-background">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ReplyBase · AI-powered conversation automation</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
