"use client";
import React from 'react';
import { Phone, Calendar } from 'lucide-react';

const MobileActionBar = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-100 p-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3">
                <a
                    href="tel:9493047766"
                    className="flex-1 flex items-center justify-center gap-3 bg-gray-900 text-white h-14 rounded-xl font-black text-sm uppercase tracking-widest active:scale-95 transition-all"
                >
                    <Phone size={18} className="text-[#a7c957]" fill="currentColor" />
                    Call Now
                </a>
                <a
                    href="https://wa.me/919493778844"
                    className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white h-16 rounded-[2rem] font-black text-xs uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-[#25D366]/30"
                >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338-11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447L0 24zm6.59-4.859c1.72.914 3.5 1.408 5.291 1.409 5.454 0 9.894-4.44 9.896-9.895.001-2.64-1.027-5.122-2.895-6.991-1.868-1.868-4.349-2.896-6.988-2.897-5.456 0-9.897 4.44-9.899 9.896-.001 1.922.501 3.791 1.455 5.451L2.323 21.05l4.857-1.909z" /></svg>
                    WhatsApp
                </a>
            </div>
        </div>
    );
};

export default MobileActionBar;
