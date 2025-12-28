'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (consent !== 'true') {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/70 backdrop-blur-lg border-t border-slate-800 p-4 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <p className="text-sm text-slate-300">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                    <Link href="/privacy" className="underline ml-2 hover:text-white">
                        Learn more
                    </Link>
                </p>
                <button
                    onClick={acceptCookies}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
