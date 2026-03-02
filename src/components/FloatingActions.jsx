"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
            {/* Call Button */}
            <motion.a
                href="tel:9493047766"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-white text-[#a7c957] rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex items-center justify-center border-2 border-gray-100 group relative"
            >
                <Phone size={28} fill="currentColor" className="group-hover:animate-bounce" />
                <span className="absolute right-20 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    Call Support
                </span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/919493778844"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_35px_rgba(37,211,102,0.4)] flex items-center justify-center border-2 border-white/20 group relative"
            >
                <svg className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447L0 24zm6.59-4.859c1.72.914 3.5 1.408 5.291 1.409 5.454 0 9.894-4.44 9.896-9.895.001-2.64-1.027-5.122-2.895-6.991-1.868-1.868-4.349-2.896-6.988-2.897-5.456 0-9.897 4.44-9.899 9.896-.001 1.922.501 3.791 1.455 5.451L2.323 21.05l4.857-1.909z" /></svg>
                <span className="absolute right-20 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    WhatsApp Chat
                </span>
            </motion.a>
        </div>
    );
};

export default FloatingActions;
