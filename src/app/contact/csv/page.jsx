"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Download, ShieldCheck, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react';
import logo from '../../../assets/Logo.jpg';

export default function CSVAdminPage() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
    const [errorMsg, setErrorMsg] = useState('');

    const handleDownload = async (e) => {
        e.preventDefault();
        if (!password.trim()) {
            setErrorMsg('Please enter the password.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch(`/api/contact/csv?password=${encodeURIComponent(password)}`);

            if (res.status === 401) {
                setStatus('error');
                setErrorMsg('❌ Incorrect password. Please try again.');
                return;
            }

            if (res.status === 404) {
                setStatus('error');
                setErrorMsg('No submissions yet — the CSV file is empty.');
                return;
            }

            if (!res.ok) {
                setStatus('error');
                setErrorMsg('Something went wrong. Please try again.');
                return;
            }

            // Trigger file download
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'contact_submissions.csv';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            setStatus('success');
            setPassword('');
            setTimeout(() => setStatus(''), 4000);
        } catch {
            setStatus('error');
            setErrorMsg('Network error. Make sure the server is running.');
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-[#1a5f7a]/30 flex items-center justify-center px-4">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a7c957]/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative w-full max-w-md"
            >
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">

                    {/* Header */}
                    <div className="flex flex-col items-center mb-10">
                        <img src={logo.src} alt="Green India Pest Control" className="h-16 w-auto object-contain mb-4" />
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-[#a7c957]/20 p-2.5 rounded-xl">
                                <ShieldCheck size={22} className="text-[#a7c957]" />
                            </div>
                            <h1 className="text-2xl font-black text-white tracking-tight">Admin Access</h1>
                        </div>
                        <p className="text-gray-400 text-sm font-medium text-center">
                            Enter your password to download<br />contact form submissions.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleDownload} className="space-y-5">
                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Lock size={18} className="text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setStatus(''); }}
                                placeholder="Enter Password"
                                className="w-full bg-white/8 border border-white/15 text-white placeholder:text-gray-500 rounded-2xl pl-12 pr-12 py-4 font-bold text-base outline-none focus:border-[#a7c957]/70 focus:ring-2 focus:ring-[#a7c957]/20 transition-all"
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {/* Error / Success message */}
                        <AnimatePresence>
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-3.5 rounded-2xl text-sm font-bold"
                                >
                                    <AlertCircle size={16} className="shrink-0" />
                                    {errorMsg}
                                </motion.div>
                            )}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-3 bg-[#a7c957]/10 border border-[#a7c957]/30 text-[#a7c957] px-5 py-3.5 rounded-2xl text-sm font-bold"
                                >
                                    <CheckCircle2 size={16} className="shrink-0" />
                                    CSV downloaded successfully!
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Download Button */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={status === 'loading'}
                            className="w-full flex items-center justify-center gap-3 bg-[#a7c957] hover:bg-[#8fb344] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-lg py-5 rounded-2xl shadow-xl shadow-[#a7c957]/20 transition-all uppercase tracking-widest"
                        >
                            {status === 'loading' ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                    Downloading...
                                </>
                            ) : (
                                <>
                                    <Download size={20} />
                                    Download CSV
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-gray-600 text-xs font-bold mt-8 uppercase tracking-widest">
                        🔒 Protected — Green India Pest Control
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
