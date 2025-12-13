'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import api from '@/lib/api';

export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    // handleLogin removed as we now redirect to /login


    return (
        <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/image/logo.png"
                        alt="ReplyBase Logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto bg-white rounded-full"
                    />
                    <span className="font-bold text-xl text-white">ReplyBase</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8">
                    <li>
                        <Link href="/#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        {/* The user requested a "Login" button on the right which we will make scroll to top or trigger login modal if we had one. 
                 For now, referencing the original HTML, it links to an external builder or just a login action. 
                 The user prompt says "Login" button (right). 
                 Since the main action is "Continue with Facebook" in the hero, let's make this button also go there or just href to home for now. 
                 Actually, the prompt says "Login" button. Let's make it consistent. */}
                        <Link
                            href="/login"
                            className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg px-4 py-2 transition-colors"
                        >
                            Login
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
                        href="/login"
                        className="block w-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg px-4 py-2 text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            )}
        </header>
    );
}
