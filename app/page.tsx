'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import Cookies from 'js-cookie';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const { data } = await api.post(endpoint, { email, password, company_name: 'Demo' });

      if (!isRegister) {
        Cookies.set('token', data.token);
        Cookies.set('tenant_id', data.user.id); // Save ID for the FB Link
        router.push('/dashboard');
      } else {
        setIsRegister(false);
        alert('Registered! Now Login.');
      }
    } catch (err) {
      alert('Error: ' + ((err as any).response?.data?.error || (err as any).message));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">{isRegister ? 'Register' : 'Login'} to SaaS</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full p-2 border rounded" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="w-full p-2 border rounded" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            {isRegister ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <button onClick={() => setIsRegister(!isRegister)} className="text-sm text-blue-500 underline w-full text-center">
          {isRegister ? 'Already have an account? Login' : 'Need an account? Register'}
        </button>
      </div>
    </div>
  );
}