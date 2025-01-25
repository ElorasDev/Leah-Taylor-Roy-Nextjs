"use client";
import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import useAuthModel from '../../../hooks/useAuthModel';

const AuthModel = () => {
  const { login, loading, error, token } = useAuthModel();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const savedToken = Cookies.get('auth_token');
      if (savedToken) {
          router.push('/');
      }
    };
    checkAuth();
  }, [router, token]);
  
  const handleSubmit = async (e: FormEvent ) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="border p-4 max-w-md w-[270px] mx-auto mt-10 rounded-md">
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
    </div>
  );
};

export default AuthModel;