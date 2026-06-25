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
} from "lucide-react";

const SIGNUP_URL = "https://app.replybase.co.uk/pricing?source=fb_ad_demo";

const CHAT_MESSAGES = [
  { from: "visitor", text: "Hi, do you have availability this week?" },
  {
    from: "bot",
    text: "Hi! Yes, we have slots available. Can I get your name and the best way to reach you?",
  },
  { from: "visitor", text: "Sure, I'm Sarah — sarah@email.com" },
  {
    from: "bot",
    text: "Thanks Sarah! I've saved your details. A member of our team will confirm your slot within the hour. ✅",
  },
];

function AnimatedChat() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= CHAT_MESSAGES.length) return;
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 800 : 1400,
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
            <p className="text-green-400 text-sm font-semibold">
              Lead captured — Sarah
            </p>
            <p className="text-slate-400 text-xs">
              Saved to CRM · Email alert sent
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── App Screen Mockups ──────────────────────────────────────────────────────

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-3 border-b border-slate-700">
      <div className="flex gap-1.5 shrink-0">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      </div>
      <div className="flex-1 bg-slate-700/80 rounded-md h-5 flex items-center px-3 min-w-0">
        <span className="text-slate-400 text-[10px] truncate">{url}</span>
      </div>
    </div>
  );
}

function YoutubeVideo({ videoId }: { videoId: string }) {
  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Product demo"
        />
      </div>
    </div>
  );
}

function LiveDemoPreview() {
  return (
    <div className="space-y-5">
      <AnimatedChat />
    </div>
  );
}

function FAQSetupMock() {
  const faqs = [
    { q: "What are your opening hours?", a: "Mon–Sat 9am–7pm, Sun 10am–5pm." },
    {
      q: "How do I book an appointment?",
      a: "Tap 'Book Now' in chat or call us.",
    },
    {
      q: "How much is a cut and colour?",
      a: "Cuts from £35, colour from £75.",
    },
  ];
  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      <BrowserChrome url="app.replybase.co.uk/onboarding/faqs" />
      <div className="p-6">
        <div className="flex gap-1.5 mb-5">
          {[true, true, false].map((active, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${active ? "bg-indigo-500" : "bg-slate-700"}`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-xl">Common Questions</h3>
          <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
            3 added
          </span>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-xl p-3"
            >
              <div className="flex items-start gap-2.5">
                <div className="h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-2.5 w-2.5 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{faq.q}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 w-full border border-dashed border-slate-600 text-slate-400 text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5">
          <span className="text-base leading-none font-light">+</span> Add
          another question
        </div>
      </div>
    </div>
  );
}

function LeadCaptureMock() {
  const nodes = [
    { label: "Welcome Message", color: "bg-indigo-600", Icon: MessageSquare },
    { label: "Ask Name & Email", color: "bg-purple-600", Icon: Send },
    { label: "Qualify the Lead", color: "bg-blue-600", Icon: TrendingUp },
    { label: "Notify Your Team", color: "bg-green-600", Icon: Zap },
  ];
  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      <BrowserChrome url="app.replybase.co.uk/flows/lead-capture/edit" />
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-white font-bold">Lead Capture Flow</h3>
          <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
            Live
          </span>
        </div>
        <div className="flex flex-col items-center">
          {nodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`flex items-center gap-2 ${node.color} text-white px-5 py-2 rounded-xl text-xs font-medium w-52 justify-center`}
              >
                <node.Icon className="h-3.5 w-3.5" />
                {node.label}
              </div>
              {i < nodes.length - 1 && (
                <div className="flex flex-col items-center my-0.5">
                  <div className="w-px h-3 bg-slate-600" />
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { n: "12", label: "Leads today" },
            { n: "94%", label: "Reply rate" },
            { n: "3s", label: "Avg response" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700"
            >
              <p className="text-white font-bold text-base">{stat.n}</p>
              <p className="text-slate-500 text-[9px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WidgetInstallMock() {
  return (
    <div className="bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
      <BrowserChrome url="app.replybase.co.uk/bots/my-bot/channels/webchat" />
      <div className="p-5">
        <div className="flex gap-1.5 mb-4">
          {[true, true, true].map((_, i) => (
            <div key={i} className="h-1.5 flex-1 rounded-full bg-green-500" />
          ))}
        </div>
        <h3 className="text-white font-bold text-base mb-1">
          Install Your Webchat Widget
        </h3>
        <p className="text-slate-400 text-xs mb-3">
          Paste this before the closing &lt;/body&gt; tag on your website.
        </p>
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 font-mono text-[10px] leading-relaxed mb-3">
          <span className="text-slate-500">{"<!-- ReplyBase Widget -->"}</span>
          <br />
          <span className="text-blue-400">{"<script"}</span>
          <br />
          <span className="text-slate-500">{"  "}</span>
          <span className="text-yellow-400">{"src"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">
            {'"https://cdn.replybase.co.uk/w.js"'}
          </span>
          <br />
          <span className="text-slate-500">{"  "}</span>
          <span className="text-yellow-400">{"data-key"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{'"rb_pk_••••••••"'}</span>
          <br />
          <span className="text-blue-400">{">"}</span>
          <span className="text-blue-400">{"</script>"}</span>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-indigo-600 text-white text-xs py-2 rounded-lg font-semibold flex items-center justify-center gap-1.5">
            Copy Code
          </div>
          <div className="flex-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs py-2 rounded-lg flex items-center justify-center">
            View Guide
          </div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-slate-400 text-[10px]">
              Widget live preview
            </span>
          </div>
          <div className="relative bg-slate-700 rounded-lg h-14 overflow-hidden">
            <div className="absolute bottom-2 right-2 bg-indigo-600 rounded-full h-8 w-8 flex items-center justify-center shadow-lg">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <div className="absolute bottom-11 right-11 bg-white rounded-xl rounded-br-none px-2.5 py-1.5 shadow-lg">
              <p className="text-slate-800 text-[9px] font-semibold whitespace-nowrap">
                {"Hi! How can we help? 👋"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step definitions ─────────────────────────────────────────────────────────

const Step1Video = () => <YoutubeVideo videoId="clHjHuhV3eI" />;
const Step2Video = () => <YoutubeVideo videoId="cTnJzTGy2gA" />;

const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Create Your Account in Minutes",
    text: "Get started with ReplyBase in under a minute and begin building your AI assistant.",
    badge: "bg-indigo-600",
    Mock: Step1Video,
  },
  {
    step: 2,
    title: "Tell ReplyBase About Your Business",
    text: "Simply describe your business and services so ReplyBase can provide accurate customer responses.",
    badge: "bg-purple-600",
    Mock: Step2Video,
  },
  {
    step: 3,
    title: "Train Your AI With Common Questions",
    text: "Add the questions customers ask most often and ReplyBase will answer them automatically.",
    badge: "bg-blue-600",
    Mock: FAQSetupMock,
  },
  {
    step: 4,
    title: "Capture More Leads",
    text: "Collect customer details and enquiries while you're busy serving clients.",
    badge: "bg-teal-600",
    Mock: LeadCaptureMock,
  },
  {
    step: 5,
    title: "Go Live on Your Website",
    text: "Add ReplyBase to your website and start engaging visitors 24/7.",
    badge: "bg-green-600",
    Mock: WidgetInstallMock,
  },
  {
    step: 6,
    title: "See It in Action",
    text: "A customer messages your Facebook page. ReplyBase replies instantly, captures their details, and notifies your team — all automatically.",
    badge: "bg-orange-500",
    Mock: LiveDemoPreview,
  },
];

// ─────────────────────────────────────────────────────────────────────────────

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
            Start My Free Trial
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
                ReplyBase automatically replies to every Facebook message,
                webchat enquiry, and WhatsApp message — capturing leads and
                booking appointments while you focus on your business.
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
                14-day free trial · No card charged during trial · Cancel
                anytime
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
                53% of customers expect a reply within an hour. Most small
                businesses can&apos;t keep up — and leads quietly go to a
                competitor who replied faster.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  stat: "53%",
                  label: "of people leave if no reply within 1 hour",
                  icon: Clock,
                  color: "text-red-400",
                },
                {
                  stat: "3 sec",
                  label: "average ReplyBase response time, any hour",
                  icon: Zap,
                  color: "text-indigo-400",
                },
                {
                  stat: "24/7",
                  label: "your bot works nights, weekends, and holidays",
                  icon: TrendingUp,
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center"
                >
                  <item.icon className={`h-7 w-7 mx-auto mb-3 ${item.color}`} />
                  <p className={`text-3xl font-extrabold mb-1 ${item.color}`}>
                    {item.stat}
                  </p>
                  <p className="text-slate-400 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── See How ReplyBase Works — Step-by-step ── */}
        <section className="py-20 bg-slate-800/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                See How ReplyBase Works
              </h2>
              <p className="mt-3 text-slate-400 max-w-xl mx-auto">
                A simple step-by-step visual guide showing how businesses can
                get up and running in minutes.
              </p>
            </div>

            <div className="space-y-20">
              {HOW_IT_WORKS_STEPS.map((item, i) => (
                <div
                  key={item.step}
                  className={`flex flex-col ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-10 lg:gap-16 items-center`}
                >
                  {/* Text */}
                  <div className="flex-1 max-w-md w-full">
                    <div
                      className={`h-12 w-12 rounded-full ${item.badge} text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-lg`}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* Mock screen */}
                  <div className="flex-1 w-full max-w-md">
                    <item.Mock />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-600/25 text-lg"
              >
                Start for Free — Try It Yourself
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-sm text-slate-500">
                No card charged during trial
              </p>
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
                No developers. No integrations to figure out. Three steps and
                your bot is live.
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
                    channels: [
                      "Templates",
                      "Drag & Drop",
                      "AI Replies",
                      "Conditions",
                    ],
                  },
                  {
                    step: "3",
                    title: "Go live & watch leads roll in",
                    desc: "Publish your bot. Every new enquiry gets replied to instantly and appears in your ReplyBase inbox.",
                    icon: TrendingUp,
                    color: "bg-green-600",
                    channels: [
                      "Unified Inbox",
                      "Lead CRM",
                      "Email Alerts",
                      "Team Notifications",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="relative bg-slate-800 border border-slate-700 rounded-2xl p-7 flex flex-col"
                  >
                    <div
                      className={`h-11 w-11 rounded-full ${item.color} text-white flex items-center justify-center font-extrabold text-lg mb-5 shadow-lg`}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.channels.map((ch) => (
                        <span
                          key={ch}
                          className="text-xs text-slate-300 bg-slate-700/60 border border-slate-600/40 px-2.5 py-1 rounded-full"
                        >
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
              <p className="mt-3 text-sm text-slate-500">
                No card charged during your 14-day trial
              </p>
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
                {
                  title: "AI-powered instant replies",
                  desc: "Answers common questions 24/7 — no manual typing required.",
                  icon: Zap,
                  color: "text-indigo-400",
                },
                {
                  title: "Multi-channel in one place",
                  desc: "Facebook, WhatsApp, Webchat, Telegram — all in one inbox.",
                  icon: Globe,
                  color: "text-blue-400",
                },
                {
                  title: "Visual flow builder",
                  desc: "Build conversation scripts with drag and drop. No code.",
                  icon: Send,
                  color: "text-purple-400",
                },
                {
                  title: "Lead capture & CRM",
                  desc: "Every lead saved automatically with name, email, and source.",
                  icon: TrendingUp,
                  color: "text-green-400",
                },
                {
                  title: "Instant team alerts",
                  desc: "Get notified by email when a hot lead comes in.",
                  icon: MessageSquare,
                  color: "text-yellow-400",
                },
                {
                  title: "GDPR compliant",
                  desc: "Your data and your customers' data are fully protected.",
                  icon: Shield,
                  color: "text-red-400",
                },
              ].map((feat) => (
                <div
                  key={feat.title}
                  className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors"
                >
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
            <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">
              Works with the channels your customers already use
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Facebook Messenger",
                  icon: MessageSquare,
                  color: "text-indigo-500",
                  bg: "bg-indigo-500/10 border-indigo-500/30",
                },
                {
                  name: "WhatsApp",
                  icon: MessageSquare,
                  color: "text-green-500",
                  bg: "bg-green-500/10 border-green-500/30",
                },
                {
                  name: "Webchat Widget",
                  icon: Globe,
                  color: "text-blue-400",
                  bg: "bg-blue-400/10 border-blue-400/30",
                },
                {
                  name: "Telegram",
                  icon: Send,
                  color: "text-sky-400",
                  bg: "bg-sky-400/10 border-sky-400/30",
                },
              ].map((ch) => (
                <div
                  key={ch.name}
                  className={`flex items-center gap-2.5 border rounded-xl px-5 py-3 ${ch.bg}`}
                >
                  <ch.icon className={`h-5 w-5 ${ch.color}`} />
                  <span className="text-white font-medium text-sm">
                    {ch.name}
                  </span>
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
              Start your free 14-day trial. Connect your first channel in
              minutes. No credit card charged until your trial ends — and you
              can cancel before then with no charge at all.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-indigo-600/30"
            >
              Start Free Trial
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
          <p>
            © {new Date().getFullYear()} ReplyBase · AI-powered conversation
            automation
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
