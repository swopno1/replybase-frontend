"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/client-analytics";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSuccess(true);
          form.reset();
          trackEvent("contact_form_submission");
        } else {
          const result = await response.json();
          setError(result.error || "Something went wrong. Please try again.");
        }
      } catch {
        setError("An unexpected error occurred. Please try again later.");
      }
    });
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-white">
          Contact Us
        </CardTitle>
        <CardDescription className="text-slate-400">
          Have a question or want to work with us? Fill out the form below or
          reach us directly.
        </CardDescription>
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <a
            href="mailto:admin@replybase.co.uk"
            className="text-indigo-400 hover:text-indigo-300"
          >
            admin@replybase.co.uk
          </a>
          <span className="hidden sm:inline text-slate-600">·</span>
          <a
            href="https://wa.me/447822033580"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-medium"
          >
            💬 WhatsApp: +44 7822 033580
          </a>
        </div>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="flex flex-col items-center justify-center text-center p-8 bg-green-900/20 rounded-lg">
            <Check className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white">Thank you!</h3>
            <p className="text-slate-400">
              Your message has been sent successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-400">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="bg-slate-800 border-slate-700 text-white focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-400">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-slate-800 border-slate-700 text-white focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-slate-400">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Your Company"
                className="bg-slate-800 border-slate-700 text-white focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-400">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
                className="bg-slate-800 border-slate-700 text-white focus:ring-indigo-500"
                rows={5}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
