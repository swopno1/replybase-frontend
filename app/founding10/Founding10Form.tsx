"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/client-analytics";

const INDUSTRIES = [
  "Retail",
  "Healthcare / Dental / Aesthetics",
  "Property / Real Estate",
  "Legal Services",
  "Trades / Construction",
  "Automotive",
  "Hospitality / Restaurants",
  "Fitness / Wellness",
  "Education / Training",
  "Financial Services",
  "Marketing / Agency",
  "Other",
];

const CONTACT_METHODS = [
  { value: "Facebook Messenger", label: "Facebook Messenger" },
  { value: "Website", label: "Website" },
  { value: "Both", label: "Both" },
  { value: "Other", label: "Other" },
];

export default function Founding10Form() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    startTransition(async () => {
      try {
        const response = await fetch("/api/founding10", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSuccess(true);
          form.reset();
          setContactMethod("");
          trackEvent("founding10_application_submitted");
        } else {
          const result = await response.json();
          setError(result.error || "Something went wrong. Please try again.");
        }
      } catch {
        setError("An unexpected error occurred. Please try again later.");
      }
    });
  };

  if (success) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 bg-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thank you for applying.</h3>
        <div className="text-slate-300 text-base leading-relaxed space-y-2">
          <p>Your application has been received successfully.</p>
          <p>I&apos;ll personally review every application and will be in touch as soon as possible.</p>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm">— Shaun</p>
          <p className="text-slate-500 text-sm">Founder, ReplyBase</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-slate-300 font-medium">
            First Name <span className="text-indigo-400">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            required
            className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-slate-300 font-medium">
            Last Name <span className="text-indigo-400">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Smith"
            required
            className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 h-11"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessName" className="text-slate-300 font-medium">
          Business Name <span className="text-indigo-400">*</span>
        </Label>
        <Input
          id="businessName"
          name="businessName"
          placeholder="Acme Ltd"
          required
          className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="businessWebsite" className="text-slate-300 font-medium">
          Business Website <span className="text-slate-500 font-normal">(optional)</span>
        </Label>
        <Input
          id="businessWebsite"
          name="businessWebsite"
          type="url"
          placeholder="https://yourbusiness.co.uk"
          className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry" className="text-slate-300 font-medium">
          Industry <span className="text-indigo-400">*</span>
        </Label>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className="w-full h-11 rounded-md bg-slate-800/60 border border-slate-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        >
          <option value="" disabled className="text-slate-500">
            Select your industry
          </option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind} className="bg-slate-800">
              {ind}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-300 font-medium">
          Business Email <span className="text-indigo-400">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@yourbusiness.co.uk"
          required
          className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-slate-300 font-medium">
          Phone Number <span className="text-slate-500 font-normal">(optional)</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+44 7000 000000"
          className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 h-11"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-slate-300 font-medium">
          How do customers usually contact your business? <span className="text-indigo-400">*</span>
        </Label>
        <div className="grid grid-cols-2 gap-3">
          {CONTACT_METHODS.map(({ value, label }) => (
            <label
              key={value}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                contactMethod === value
                  ? "border-indigo-500 bg-indigo-500/10 text-white"
                  : "border-slate-700 bg-slate-800/40 text-slate-300 hover:border-slate-600"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={value}
                required
                checked={contactMethod === value}
                onChange={() => setContactMethod(value)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                  contactMethod === value ? "border-indigo-400 bg-indigo-400" : "border-slate-600"
                }`}
              />
              <span className="text-sm font-medium">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation" className="text-slate-300 font-medium">
          What made you apply for the Founding 10 Programme? <span className="text-indigo-400">*</span>
        </Label>
        <Textarea
          id="motivation"
          name="motivation"
          placeholder="Tell us a little about your business and why you're interested..."
          required
          rows={4}
          className="bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold h-12 text-base rounded-lg transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-indigo-500/25"
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </span>
        ) : (
          "Apply To Become One Of Our Founding 10 Businesses"
        )}
      </Button>

      <p className="text-center text-xs text-slate-500">
        By submitting you agree to our{" "}
        <a href="/privacy" className="text-indigo-400 hover:text-indigo-300 underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your details with third parties.
      </p>
    </form>
  );
}
