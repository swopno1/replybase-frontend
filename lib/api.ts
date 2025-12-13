import axios from 'axios';
import Cookies from 'js-cookie';

// 1. Create the Axios Instance
const api = axios.create({
    // This automatically pulls "https://api.investorhints.com" from your .env
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 2. Request Interceptor (The "Key Injector")
// Before every request, check if we have a token and attach it.
api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// 3. Response Interceptor (The "Bouncer")
// If the Backend says "401 Unauthorized" (token expired/invalid), force logout.
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token is bad, clear it and kick user out
            Cookies.remove('token');
            Cookies.remove('tenant_id');
            if (typeof window !== 'undefined') {
                window.location.href = '/';
            }
        }
        return Promise.reject(error);
    }
);

export default api;