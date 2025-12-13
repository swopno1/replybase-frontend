'use client';

import { useState } from 'react';
import api from '@/lib/api';

export default function Login() {
    const [loading, setLoading] = useState(false);

    const handleFacebookLogin = async () => {
        setLoading(true);
        try {
            // Get the Facebook Login URL from our API
            const { data } = await api.get('/auth/facebook/login');
            // Redirect the browser
            window.location.href = data.url;
        } catch (error) {
            alert("Failed to initialize login");
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-2">Bot Automation SaaS</h1>
                <p className="text-gray-600 mb-8">Manage your bots seamlessly.</p>

                <button
                    onClick={handleFacebookLogin}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold rounded-md transition-all shadow-sm"
                >
                    {loading ? 'Redirecting...' : (
                        <>
                            {/* Facebook Icon SVG */}
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Continue with Facebook
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}