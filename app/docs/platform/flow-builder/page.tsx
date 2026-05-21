"use client";

import { useState } from "react";
import { 
  GitBranch, 
  ArrowRight, 
  MessageSquare, 
  Settings, 
  DollarSign, 
  Clock, 
  Sparkles, 
  CheckSquare, 
  Brain, 
  Layers, 
  ShieldAlert, 
  Calendar, 
  Check, 
  ChevronRight, 
  Phone, 
  HelpCircle, 
  Bot,
  Play,
  Mail,
  Sliders,
  Sparkle
} from "lucide-react";
import DocLayout from "../../_components/DocLayout";
import Callout from "../../_components/Callout";
import Link from "next/link";

type NodeType = "message" | "input" | "condition" | "action" | "wait";

export default function FlowBuilderDocPage() {
  const [activeTab, setActiveTab] = useState<NodeType>("message");
  const [simulationStep, setSimulationStep] = useState<number>(0);

  const simulationFlow = [
    {
      title: "User sends: 'Hello'",
      nodeType: "trigger",
      desc: "An incoming conversation activates the Flow",
      badge: "Start",
      color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      title: "Welcome Message",
      nodeType: "message",
      desc: "Bot sends: 'Welcome to ReplyBase! What's your name?'",
      badge: "Message Node",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      title: "Capture User Name",
      nodeType: "input",
      desc: "User replies: 'I am Alice'. Bot extracts 'Alice' into {{contact_name}}",
      badge: "Input Node (Text)",
      color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      title: "Capture User Email",
      nodeType: "input",
      desc: "User replies: 'alice@example.com'. Validates format & stores in {{contact_email}}",
      badge: "Input Node (Email)",
      color: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    },
    {
      title: "Evaluate Handoff Needs",
      nodeType: "condition",
      desc: "Check: Does email end with '.edu' or '.gov'?",
      badge: "Condition Node",
      color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    },
    {
      title: "Action: Booking",
      nodeType: "action",
      desc: "Invokes booking flow, registers a Demo Activity, tags lead as 'enterprise'",
      badge: "Action Node (Booking)",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600">
            <GitBranch size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Visual Flow Builder</h1>
        </div>
        <p className="text-lg text-slate-400 leading-relaxed">
          Design visual, deterministic pathways to capture leads, qualify prospects, coordinate bookings, and process payments automatically. 
          When structured conversations finish, our hybrid orchestrator shifts control to AI knowledge-base fallbacks.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Interactive Flow Simulation</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Click through the stages below to understand how the Flow Engine processes an incoming conversation step-by-step:
      </p>

      {/* Simulation Component */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 border-r border-slate-800/80 pr-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Simulation Steps</h4>
            <div className="space-y-1">
              {simulationFlow.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setSimulationStep(idx)}
                  className={`w-full flex items-center justify-between text-left px-3 py-2 text-xs font-medium rounded-lg transition-all ${
                    simulationStep === idx 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="truncate pr-1">{step.title}</span>
                  {simulationStep > idx ? (
                    <Check size={12} className="text-indigo-400 shrink-0" />
                  ) : (
                    <ChevronRight size={12} className="opacity-50 shrink-0" />
                  )}
                </button>
              ))}
            </div>
            <div className="pt-4 flex gap-2">
              <button 
                onClick={() => setSimulationStep((prev) => (prev > 0 ? prev - 1 : 0))}
                disabled={simulationStep === 0}
                className="flex-1 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 rounded text-xs transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setSimulationStep((prev) => (prev < simulationFlow.length - 1 ? prev + 1 : 0))}
                className="flex-1 py-1.5 bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white rounded text-xs transition-all font-semibold"
              >
                {simulationStep === simulationFlow.length - 1 ? "Restart" : "Next Step"}
              </button>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col justify-between pl-2">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border ${simulationFlow[simulationStep].color}`}>
                  {simulationFlow[simulationStep].badge}
                </span>
                <span className="text-xs text-slate-500">Step {simulationStep + 1} of {simulationFlow.length}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{simulationFlow[simulationStep].title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{simulationFlow[simulationStep].desc}</p>
            </div>

            {/* Visual Chat Mockup */}
            <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-4 font-mono text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2 mb-3">
                <span className="text-slate-500 font-bold">FLOW SESSION STATE</span>
                <span className="text-indigo-400 animate-pulse font-bold">● ACTIVE</span>
              </div>
              <div className="space-y-2">
                <div>
                  <span className="text-slate-500">variables:</span>
                  <span className="text-slate-300"> {"{"}</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-blue-400">"contact_name"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-emerald-400"> {simulationStep >= 2 ? `"Alice"` : "null"}</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"contact_email"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-emerald-400"> {simulationStep >= 3 ? `"alice@example.com"` : "null"}</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"lead_status"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-emerald-400"> {simulationStep >= 5 ? `"demo-scheduled"` : `"lead"`}</span>
                  </div>
                  <div>
                    <span className="text-blue-400">"tags"</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-emerald-400"> {simulationStep >= 5 ? `["enterprise", "auto-simulation"]` : `[]`}</span>
                  </div>
                </div>
                <div>
                  <span className="text-slate-300">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-slate-800 my-10" />

      <h2 className="text-2xl font-bold text-white mb-6">Building Blocks (Node Types)</h2>
      <p className="text-slate-300 mb-8 leading-relaxed">
        A flow is composed of sequential steps called **Nodes**. Each node type is optimized for a specific interaction. Click on the tabs below to explore detail specs:
      </p>

      {/* Node Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3 mb-8">
        {(["message", "input", "condition", "action", "wait"] as NodeType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg capitalize transition-all ${
              activeTab === tab 
                ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            {tab} Node
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {activeTab === "message" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <MessageSquare size={24} className="text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Message Node</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            The fundamental delivery node. Sends static or variable-interpolated text to a user across active channels.
          </p>
          <div className="bg-slate-800/20 border border-slate-700/80 rounded-xl p-5 space-y-4">
            <h4 className="font-bold text-white text-sm">Key Options:</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="font-semibold text-indigo-400 shrink-0">Text Content:</span>
                <span>The text message body. Supports variable inserts like <code>{"{{contact_name}}"}</code>.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-indigo-400 shrink-0">Quick Replies:</span>
                <span>Tappable quick-select buttons that appear in chat. Selecting one sends the text back and moves to the next node.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-indigo-400 shrink-0">Postback Buttons:</span>
                <span>URL buttons or actions (Facebook Messenger / WhatsApp specific) to link out of the chat.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-500 block mb-2 font-mono">Example Setup JSON:</span>
            <pre className="text-xs font-mono text-indigo-300 overflow-x-auto">
{`{
  "type": "message",
  "content": {
    "text": "Hi {{contact_name}}! Welcome to ReplyBase. How can we help you today?",
    "quick_replies": [
      { "label": "Book a Demo", "value": "demo" },
      { "label": "See Pricing", "value": "pricing" }
    ]
  }
}`}
            </pre>
          </div>
        </div>
      )}

      {activeTab === "input" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <CheckSquare size={24} className="text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Input Node</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Pauses the flow and waits for the user to type a reply. Validates the response format and saves the parsed details directly into custom session variables.
          </p>
          <div className="bg-slate-800/20 border border-slate-700/80 rounded-xl p-5 space-y-4">
            <h4 className="font-bold text-white text-sm">Input Validation Types:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Text</span>
                <span>Captures any generic string. If checking names, it auto-sanitizes prefix introductions like "Hi, my name is Bob" to store "Bob".</span>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Email</span>
                <span>Validates email structure (e.g. <code>user@domain.com</code>). If invalid, triggers the fallback validation message.</span>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Phone</span>
                <span>Checks for numeric sequences and country codes to compile clean international contact numbers.</span>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Number</span>
                <span>Enforces strict integer or decimal check (e.g. asking for employee size or product quantities).</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-500 block mb-2 font-mono">Example Setup JSON:</span>
            <pre className="text-xs font-mono text-indigo-300 overflow-x-auto">
{`{
  "type": "input",
  "content": {
    "variableName": "contact_email",
    "inputType": "email",
    "validationMessage": "That doesn't look like a valid email. Please enter a valid email (e.g. name@company.com):"
  }
}`}
            </pre>
          </div>
        </div>
      )}

      {activeTab === "condition" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Sliders size={24} className="text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Condition Node</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Routes flow execution dynamically based on existing session variables. Allows logical branching to tailor the user experience.
          </p>
          <div className="bg-slate-800/20 border border-slate-700/80 rounded-xl p-5 space-y-4">
            <h4 className="font-bold text-white text-sm">Branching Logic Operators:</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="font-bold text-indigo-400 shrink-0">Equals / Contains:</span>
                <span>Matches strings exactly or partial substrings (e.g. checking if input is "Business" or if email contains "gov").</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-indigo-400 shrink-0">Greater / Less Than:</span>
                <span>Performs numeric operations (e.g., if company size is greater than 100, route to enterprise booking).</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-indigo-400 shrink-0">Default Route:</span>
                <span>The fallback fallback node connection. Executes if none of the explicit conditions resolve to true.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-500 block mb-2 font-mono">Example Setup JSON:</span>
            <pre className="text-xs font-mono text-indigo-300 overflow-x-auto">
{`{
  "type": "condition",
  "content": {
    "variableName": "company_size",
    "rules": [
      { "operator": "greater_than", "value": 50, "targetNodeOrder": 8 },
      { "operator": "less_than", "value": 51, "targetNodeOrder": 5 }
    ]
  }
}`}
            </pre>
          </div>
        </div>
      )}

      {activeTab === "action" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Settings size={24} className="text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Action Node</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Triggers system operations, database changes, API webhooks, or dynamic workflows. Action nodes run silently without sending visible text to the user.
          </p>
          <div className="bg-slate-800/20 border border-slate-700/80 rounded-xl p-5 space-y-4">
            <h4 className="font-bold text-white text-sm">Standard Actions:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Tag User</span>
                <span>Appends tags to the CRM contact details (e.g., <code>tag_user: ["interested-in-pricing"]</code>).</span>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Update Status</span>
                <span>Transitions the lead pipeline stage (e.g., shifts lead category to <code>contacted</code> or <code>qualified</code>).</span>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">Trigger Webhook</span>
                <span>Sends an HTTP POST payload with all current variables to a specified external API endpoint.</span>
              </div>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg">
                <span className="font-bold text-white block mb-1">End Flow</span>
                <span>Gracefully closes the active flow session and triggers AI Fallback for any future messages.</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-500 block mb-2 font-mono">Example Setup JSON:</span>
            <pre className="text-xs font-mono text-indigo-300 overflow-x-auto">
{`{
  "type": "action",
  "content": {
    "actionType": "tag_user",
    "tags": ["qualified-lead", "newsletter-subscriber"]
  }
}`}
            </pre>
          </div>
        </div>
      )}

      {activeTab === "wait" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Clock size={24} className="text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Wait / Typing Node</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Introduces pacing and human-like pause delays into flow execution. Helps prevent overwhelming users with instant bulk messages.
          </p>
          <div className="bg-slate-800/20 border border-slate-700/80 rounded-xl p-5 space-y-4">
            <h4 className="font-bold text-white text-sm">Key Options:</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="font-semibold text-indigo-400 shrink-0">Wait Duration:</span>
                <span>Specify exact pause in milliseconds (e.g. 2000ms for a 2-second delay). Max limit is 5000ms.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-indigo-400 shrink-0">Typing Indicator:</span>
                <span>Toggles the visual "typing..." bubble indicator on WhatsApp, Webchat, or Facebook Messenger.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
            <span className="text-xs text-slate-500 block mb-2 font-mono">Example Setup JSON:</span>
            <pre className="text-xs font-mono text-indigo-300 overflow-x-auto">
{`{
  "type": "wait",
  "content": {
    "waitMs": 1500,
    "showTypingIndicator": true
  }
}`}
            </pre>
          </div>
        </div>
      )}

      <hr className="border-slate-800 my-10" />

      <h2 className="text-2xl font-bold text-white mb-6">Advanced Actions & Automations</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        ReplyBase provides custom action scripts tailored for lead-generation and conversion funnels:
      </p>

      <div className="space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-600/10 text-indigo-400 rounded-lg">
              <Calendar size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">1. Booking Action</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Automates appointment setting. When invoked, it compiles collected values, logs a demo request in the activity pipeline, tags the user, and emails notification alerts directly to the administrators.
          </p>
          <Callout type="info">
            <strong>Required Configuration:</strong> Set <code>variableName</code> as <code>contact_email</code> in a preceding input node so the booking engine has a target email.
          </Callout>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-600/10 text-indigo-400 rounded-lg">
              <DollarSign size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">2. Checkout Action</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Dynamically generates checkout pages using your Stripe integration:
          </p>
          <ul className="list-disc pl-5 text-xs text-slate-400 space-y-2 mb-4">
            <li>Checks if the tenant is active or currently running a trial.</li>
            <li>Constructs personalized Stripe URL, embedding the <code>tenantId</code> as <code>client_reference_id</code>.</li>
            <li>Prefills customer email on the Stripe Checkout page if <code>contact_email</code> was collected.</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-600/10 text-indigo-400 rounded-lg">
              <Layers size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">3. Call Flow (Sub-Flows Stack)</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            For maximum reusability, you can split large workflows into smaller flows (e.g. separate flows for booking, pricing, and demo scheduling).
          </p>
          <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center gap-4 text-xs">
            <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-white rounded">Master Flow</div>
            <ArrowRight size={14} className="text-slate-500" />
            <div className="px-3 py-1.5 bg-indigo-950 border border-indigo-800 text-indigo-300 rounded font-semibold">Call Flow: Booking</div>
            <ArrowRight size={14} className="text-slate-500" />
            <div className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-white rounded">Resume Master</div>
          </div>
          <p className="text-slate-400 text-xs mt-4">
            When a <code>call_flow</code> action triggers, the engine pushes the parent flow pointer to a session stack. When the sub-flow executes an <code>End Flow</code> action, the parent flow session is popped from the stack and resumes execution on the exact next step.
          </p>
        </div>
      </div>

      <hr className="border-slate-800 my-10" />

      <h2 className="text-2xl font-bold text-white mb-6">Beginner's Step-by-Step Blueprint</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        New to chatbot building? Follow this layout blueprint to deploy your very first Lead Qualification & Demo Booking flow:
      </p>

      {/* Blueprint Table */}
      <div className="border border-slate-800 rounded-xl overflow-hidden mb-12 shadow-md">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-slate-300 font-bold border-b border-slate-800">
              <th className="p-4 w-12">Order</th>
              <th className="p-4">Node Type</th>
              <th className="p-4">Settings Content</th>
              <th className="p-4">Outcome</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-400">
            <tr>
              <td className="p-4 font-mono font-bold text-white">1</td>
              <td className="p-4 font-semibold text-blue-400">Message</td>
              <td className="p-4">
                Text: <code>"Hi there! Welcome. Ready to boost your team's support capacity?"</code><br/>
                Quick Replies: <code>"Yes, let's go!"</code>, <code>"Tell me more"</code>
              </td>
              <td className="p-4">Welcomes user with buttons. Pauses execution.</td>
            </tr>
            <tr>
              <td className="p-4 font-mono font-bold text-white">2</td>
              <td className="p-4 font-semibold text-emerald-400">Input</td>
              <td className="p-4">
                Variable: <code>contact_name</code><br/>
                Type: <code>Text</code>
              </td>
              <td className="p-4">Captures response, cleans greetings, stores name.</td>
            </tr>
            <tr>
              <td className="p-4 font-mono font-bold text-white">3</td>
              <td className="p-4 font-semibold text-emerald-400">Input</td>
              <td className="p-4">
                Variable: <code>contact_email</code><br/>
                Type: <code>Email</code><br/>
                Validation Msg: <code>"Please enter a valid email format:"</code>
              </td>
              <td className="p-4">Validates format, retries if invalid, stores email.</td>
            </tr>
            <tr>
              <td className="p-4 font-mono font-bold text-white">4</td>
              <td className="p-4 font-semibold text-amber-400">Condition</td>
              <td className="p-4">
                Variable: <code>contact_email</code><br/>
                Rule: <code>contains</code> value <code>.gov</code> or <code>.edu</code> &rarr; Order <code>6</code> (Enterprise)
              </td>
              <td className="p-4">Redirects high-value leads; default continues to step 5.</td>
            </tr>
            <tr>
              <td className="p-4 font-mono font-bold text-white">5</td>
              <td className="p-4 font-semibold text-purple-400">Action</td>
              <td className="p-4">
                Action: <code>booking</code>
              </td>
              <td className="p-4">Saves demo registration, tags lead, triggers dashboard alerts.</td>
            </tr>
            <tr>
              <td className="p-4 font-mono font-bold text-white">6</td>
              <td className="p-4 font-semibold text-blue-400">Message</td>
              <td className="p-4">
                Text: <code>"Thanks {"{{contact_name}}"}! We've scheduled your slot. Check {"{{contact_email}}"} for details!"</code>
              </td>
              <td className="p-4">Confirms slot and ends the structured flow session.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-indigo-900/60 via-slate-900 to-indigo-950/40 border border-indigo-500/20 p-8 rounded-2xl relative overflow-hidden shadow-xl mb-6">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Sparkle size={12} className="animate-spin" />
              <span>Premium Flow Services</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Want a professional flow tailored for your CRM?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Skip the builder and have our developers create bespoke routing, booking calendars, custom Stripe checkouts, or advanced API integrations matching your business specs.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-600/20"
            >
              <span>Contact Flow Experts</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-1/4 top-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      </div>
    </div>
  );
}
