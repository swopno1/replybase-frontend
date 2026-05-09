"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/image/logo.png"
            alt="ReplyBase - AI-powered conversation automation platform" priority={true}
            width={40}
            height={40}
            className="h-10 w-auto bg-white rounded-full"
          />
          <span className="font-bold text-xl text-white">ReplyBase</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              href="/#features"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://app.replybase.co.uk/auth/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="https://app.replybase.co.uk/auth/register?source=navbar_desktop"
              className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg px-4 py-2 transition-colors"
            >
              Get Started Free
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <Link
            href="/#features"
            className="block text-sm font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="block text-sm font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="https://app.replybase.co.uk/auth/login"
            className="block text-sm font-medium text-slate-300 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="https://app.replybase.co.uk/auth/register?source=navbar_mobile"
            className="block w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg px-4 py-2 text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      )}
    </header>
  );
}
