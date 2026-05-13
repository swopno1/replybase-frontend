import { Metadata } from "next";
import { Layout, Users, Settings, CreditCard, Shield, BarChart, MessageSquare } from "lucide-react";
import Callout from "../_components/Callout";

export const metadata: Metadata = {
  title: "Dashboard Navigation Guide",
  description: "A complete walkthrough of the ReplyBase dashboard and its core management features.",
};

const sections = [
  {
    title: "Conversations",
    icon: MessageSquare,
    desc: "The heartbeat of your workspace. View, respond to, and manage every customer interaction across all channels in a single unified inbox."
  },
  {
    title: "Bots & Flows",
    icon: Settings,
    desc: "Design the logic of your assistants. Create branching paths, set up lead capture forms, and configure AI fallback behaviors."
  },
  {
    title: "Analytics",
    icon: BarChart,
    desc: "Track message volume, conversion rates, and AI performance. Understand where your leads are coming from."
  },
  {
    title: "Billing & Plans",
    icon: CreditCard,
    desc: "Manage your subscription, view usage limits, and upgrade your plan as your business scales."
  }
];

export default function AdminPanelPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600">
            <Layout size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Dashboard Guide</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          The ReplyBase dashboard is designed to be intuitive and powerful. This guide covers the main sections you'll use to manage your AI automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.title} className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-400 bg-indigo-600/10 p-2 rounded-lg">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-white">{section.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{section.desc}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">User Roles & Permissions</h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        ReplyBase supports two main user roles to help you manage your team effectively:
      </p>

      <div className="space-y-4 mb-12">
        <div className="bg-slate-800/20 border border-slate-700 p-5 rounded-xl flex gap-4">
          <div className="h-2 w-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
          <div>
            <h4 className="font-bold text-white text-sm mb-1">Owner</h4>
            <p className="text-slate-400 text-xs">Full access to everything including billing, integration secrets, and user management.</p>
          </div>
        </div>
        <div className="bg-slate-800/20 border border-slate-700 p-5 rounded-xl flex gap-4">
          <div className="h-2 w-2 rounded-full bg-slate-500 mt-2 shrink-0" />
          <div>
            <h4 className="font-bold text-white text-sm mb-1">Agent</h4>
            <p className="text-slate-400 text-xs">Access to Conversations and Contacts. Cannot change bot settings or view billing details.</p>
          </div>
        </div>
      </div>

      <Callout type="tip" title="Workspace Switcher">
        If you manage multiple businesses, use the workspace switcher in the top-left corner of the sidebar to jump between different tenants.
      </Callout>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex items-center gap-8">
          <Shield size={48} className="text-indigo-500 shrink-0 hidden md:block" />
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Protect Your Account</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We recommend enabling Two-Factor Authentication (2FA) for all Owner accounts to ensure your integration tokens and customer data remain secure.
            </p>
            <button className="text-indigo-400 text-sm font-bold hover:text-indigo-300">Configure Security Settings →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
