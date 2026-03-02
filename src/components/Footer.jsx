"use client";
import React from 'react';
import Link from 'next/link';
import logo from '../assets/Logo.jpg';
import { Facebook, Instagram, Twitter, Linkedin, Star, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#a7c957]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & Trust */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <img src={logo.src} alt="Green India Pest Control Logo" className="h-16 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white">
                  Green India
                </span>
                <span className="text-[10px] font-bold text-[#a7c957] tracking-[0.2em] uppercase">
                  Pest Control
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed font-bold">
              Andhra Pradesh's most trusted pest control partner. ISO certified, eco-friendly, and 100% effective.
            </p>
            {/* Google Rating Badge — matches Hero style */}
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-xl text-white shadow-2xl border border-white/20">
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="h-6 w-6" />
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
              <div className="h-6 w-[1px] bg-white/20"></div>
              <span className="text-sm font-black tracking-tight uppercase">5.0★ Google Rating | 415+ Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-[#a7c957]">Company</h3>
            <ul className="space-y-4 font-black text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/#location-section" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal & Help */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-[#a7c957]">Support</h3>
            <ul className="space-y-4 font-black text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">General FAQs</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">Service Process</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-lg font-black uppercase tracking-widest text-[#a7c957]">Reach Us</h3>
            <div className="space-y-6">
              <a href="tel:9493047766" className="flex items-start gap-4 group">
                <div className="bg-[#a7c957]/20 p-3 rounded-xl group-hover:bg-[#a7c957]/40 transition-colors">
                  <Phone size={20} className="text-[#a7c957]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Direct Line</span>
                  <span className="text-lg font-black text-white">+91 94930 47766</span>
                </div>
              </a>
              <a href="mailto:greenindiapestcontrol1@gmail.com" className="flex items-start gap-4 group">
                <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Support</span>
                  <span className="text-sm font-bold text-white break-all">greenindiapestcontrol1@gmail.com</span>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-xl">
                  <MapPin size={20} className="text-red-400" />
                </div>
                <p className="text-sm font-bold text-gray-400 leading-relaxed">
                  #42/353-1, Opp. Leelavathi Hospital, Bhagya Nagar Colony, Kadapa - 516002
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row gap-8 justify-between items-center text-sm font-black text-gray-500">
          <div className="flex gap-10">
            <a href="https://www.facebook.com/search_results/?q=greenindiapestcontrol1" target="_blank" rel="noopener noreferrer" className="hover:text-[#a7c957] transition-all transform hover:-translate-y-2"><Facebook size={32} /></a>
            <a href="https://www.instagram.com/greenindiapestcontrol1/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a7c957] transition-all transform hover:-translate-y-2"><Instagram size={32} /></a>
            <a href="https://x.com/GipcOffice" target="_blank" rel="noopener noreferrer" className="hover:text-[#a7c957] transition-all transform hover:-translate-y-2"><Twitter size={32} /></a>
            <a href="https://api.whatsapp.com/send?phone=919493778844&text=Hello%20Green%20India%20Pest%20Control!%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20pest%20control%20services.%20Please%20share%20more%20information%20and%20pricing.%20Thank%20you!" className="hover:text-[#25D366] transition-all transform hover:-translate-y-2">
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447L0 24zm6.59-4.859c1.72.914 3.5 1.408 5.291 1.409 5.454 0 9.894-4.44 9.896-9.895.001-2.64-1.027-5.122-2.895-6.991-1.868-1.868-4.349-2.896-6.988-2.897-5.456 0-9.897 4.44-9.899 9.896-.001 1.922.501 3.791 1.455 5.451L2.323 21.05l4.857-1.909z" /></svg>
            </a>
          </div>
          <p className="text-center md:text-right">&copy; 2026 Green India Pest Control. <br className="md:hidden" /> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
