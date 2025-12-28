'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { Bot, Zap, BarChart3, Check, X as XIcon } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-indigo-500/20 font-inter">
      <LandingNavbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="py-24 md:py-32 relative overflow-hidden">
          {/* Background decorative elements could go here */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900 -z-10"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Build Smarter Chatbots, <span className="text-indigo-500">Faster.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              The ultimate open-source, visual chatbot builder designed for performance and scale.
              Automate your Facebook & WhatsApp customer support with ease.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="https://app.replybase.co.uk"
                className="w-full sm:w-auto bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto border border-slate-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 block sm:inline-block" // added block/inline-block to safe match button styling if needed, but flex gap handles it. 
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why ReplyBase is a Game-Changer
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Our platform is packed with features to help you build, deploy, and manage chatbots with unparalleled ease.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6">
                  <Bot size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Intuitive Visual Builder</h3>
                <p className="text-slate-400">
                  Drag, drop, and connect nodes to create complex conversational flows in minutes, not hours.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Powerful Integrations</h3>
                <p className="text-slate-400">
                  Seamlessly connect to your CRM, email marketing tools, and other essential services with our robust API.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Advanced Analytics</h3>
                <p className="text-slate-400">
                  Get deep insights into your chatbot's performance and user engagement to optimize conversations.
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
                Flexible Pricing for Every Team
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                Choose the plan that's right for your business. All plans come with a 14-day free trial.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-800/50 p-1.5">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase">
                  <tr>
                    <th scope="col" className="p-4 w-1/4">Feature</th>
                    <th scope="col" className="p-4 text-center">Starter</th>
                    <th scope="col" className="p-4 text-center">Growth (Best Value)</th>
                    <th scope="col" className="p-4 text-center">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-4 font-semibold text-white">Monthly Price</td>
                    <td className="p-4 text-center text-white">£19</td>
                    <td className="p-4 text-center text-indigo-400 font-bold">£29</td>
                    <td className="p-4 text-center text-white">£49</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Ideal For</td>
                    <td className="p-4 text-center text-slate-400">Solopreneurs</td>
                    <td className="p-4 text-center text-slate-400">Small Businesses</td>
                    <td className="p-4 text-center text-slate-400">Agencies</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">WhatsApp Integration</td>
                    <td className="p-4 text-center text-red-500"><XIcon className="mx-auto" size={16} /></td>
                    <td className="p-4 text-center text-green-500"><Check className="mx-auto" size={16} /></td>
                    <td className="p-4 text-center text-green-500"><Check className="mx-auto" size={16} /></td>
                  </tr>
                  <tr>
                    <td className="p-4"></td>
                    <td className="p-4 text-center">
                      <a href="https://buy.stripe.com/3cI4gBckAgn89yncmbefC00" className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg">Start Trial</a>
                    </td>
                    <td className="p-4 text-center">
                      <a href="https://buy.stripe.com/bJeeVfckAgn89yncmbefC01" className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg">Start Trial</a>
                    </td>
                    <td className="p-4 text-center">
                      <a href="https://buy.stripe.com/14AaEZ70g5IuaCrfynefC02" className="block w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg">Start Trial</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}