'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/api';
import Cookies from 'js-cookie';

interface Connection {
    platform: string;
    page_id: string;
}

function DashboardContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [connections, setConnections] = useState<Connection[]>([]);
    const [loading, setLoading] = useState(true);
    const [waPhone, setWaPhone] = useState('');
    const [waToken, setWaToken] = useState('');

    // 1. Fetch Data on Load
    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) router.push('/');

        // Check for Facebook Success Message in URL
        if (searchParams.get('fb_status') === 'success') {
            alert('Facebook Connected Successfully!');
            router.replace('/dashboard'); // Clean URL
        }

        fetchStatus();
    }, [searchParams, router]); // Added router to dependency array for safety

    const fetchStatus = async () => {
        try {
            const { data } = await api.get('/tenant/status');
            setConnections(data.connections);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // 2. Connect Facebook Logic
    const handleConnectFacebook = async () => {
        try {
            const tenantId = Cookies.get('tenant_id');
            // Get the correct URL from backend (includes the secure state param)
            const { data } = await api.get(`/auth/facebook/url?tenant_id=${tenantId}`);
            // Redirect user to Meta
            window.location.href = data.url;
        } catch (err) {
            alert('Failed to initiate Facebook connection');
        }
    };

    // 3. Connect WhatsApp Logic (Manual)
    const handleConnectWhatsApp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/tenant/whatsapp', { phone_id: waPhone, access_token: waToken });
            alert('WhatsApp Saved!');
            setWaPhone(''); setWaToken('');
            fetchStatus();
        } catch (err) {
            alert('Error saving WhatsApp');
        }
    };

    if (loading) return <div className="p-10">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Bot Automation Dashboard</h1>
                    <button onClick={() => { Cookies.remove('token'); router.push('/'); }} className="text-red-500">Logout</button>
                </div>

                {/* Status Section */}
                <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <h2 className="text-xl font-semibold mb-4">Active Connections</h2>
                    {connections.length === 0 ? (
                        <p className="text-gray-500">No platforms connected yet.</p>
                    ) : (
                        <ul className="space-y-2">
                            {connections.map((c, i) => (
                                <li key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                                    <span className="font-bold uppercase text-blue-600">{c.platform}</span>
                                    <span className="text-sm text-gray-600">ID: {c.page_id}</span>
                                    <span className="text-xs text-green-500 bg-green-100 px-2 py-1 rounded">Active</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Facebook Card */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-blue-600">
                        <h3 className="text-lg font-bold mb-2">Facebook Messenger</h3>
                        <p className="text-sm text-gray-600 mb-4">Connect your Facebook Page to enable auto-replies.</p>
                        <button
                            onClick={handleConnectFacebook}
                            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
                        >
                            Connect with Facebook
                        </button>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="bg-white p-6 rounded-lg shadow border-t-4 border-green-500">
                        <h3 className="text-lg font-bold mb-2">WhatsApp Cloud API</h3>
                        <p className="text-sm text-gray-600 mb-4">Enter your Meta Developer Credentials manually.</p>
                        <form onSubmit={handleConnectWhatsApp} className="space-y-3">
                            <input
                                type="text" placeholder="Phone Number ID"
                                className="w-full p-2 border rounded text-sm"
                                value={waPhone} onChange={e => setWaPhone(e.target.value)} required
                            />
                            <input
                                type="password" placeholder="Permanent Access Token"
                                className="w-full p-2 border rounded text-sm"
                                value={waToken} onChange={e => setWaToken(e.target.value)} required
                            />
                            <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition">
                                Save WhatsApp Credentials
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Dashboard() {
    return (
        <Suspense fallback={<div className="p-10">Loading...</div>}>
            <DashboardContent />
        </Suspense>
    );
}