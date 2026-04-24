"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions/replybase-api";
import { trackEvent } from "@/lib/client-analytics";

export default function NewsletterSubscribe({
  compact = false,
}: { compact?: boolean } = {}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const result = await subscribeToNewsletter(email);

      if (result.success) {
        setStatus("success");
        setMessage(result.message || "Thanks for subscribing!");
        setEmail("");
        trackEvent("newsletter_signup", {
          properties: {
            location: compact ? "footer" : "default",
          },
        });
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (_error) {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return compact ? (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1">
        <Mail size={18} className="text-indigo-400" />
        <span className="text-white font-medium text-sm">Stay Updated</span>
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          className={`text-xs mt-1 ${status === "success" ? "text-green-400" : "text-red-400"}`}
        >
          {message}
        </p>
      )}
    </form>
  ) : (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center gap-2 mb-3">
        <Mail size={20} className="text-indigo-400" />
        <h4 className="text-white font-semibold">Stay Updated</h4>
      </div>
      <p className="text-sm text-slate-400 mb-4">
        Get the latest updates on new features, product tips, and exclusive
        offers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
        {message && (
          <p
            className={`text-xs ${status === "success" ? "text-green-400" : "text-red-400"}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
