"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star, MapPin, Calendar, Award, Clock, Phone, Search } from 'lucide-react';
import Link from 'next/link';

import logo from '../assets/Logo.jpg';

const images = [
  'https://images.unsplash.com/photos/PHlJY8vviUA/download?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photos/2iNv2jXonQw/download?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photos/FnvNDJwi1H8/download?auto=format&fit=crop&q=80&w=1200'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Load Google Places Autocomplete restricted to India
  useEffect(() => {
    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!GOOGLE_MAPS_API_KEY) return; // gracefully skip if no API key set

    const initAutocomplete = () => {
      if (!inputRef.current || !window.google?.maps?.places) return;
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: 'IN' },
        fields: ['formatted_address', 'name'],
        types: ['geocode'],
      });
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setSearchQuery(place.formatted_address || place.name || '');
      });
    };

    if (window.google?.maps?.places) {
      initAutocomplete();
    } else {
      const scriptId = 'google-maps-places-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initAutocomplete;
        document.head.appendChild(script);
      } else {
        document.getElementById(scriptId).addEventListener('load', initAutocomplete);
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gray-900 overflow-hidden flex items-center pt-20">
      {/* Background with Dark Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${images[currentImage]}')` }}
        />
      </AnimatePresence>

      {/* Semi-transparent dark overlay (0.55) as requested */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-3"
          >
            {/* Google Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-4 px-6 py-4 rounded-3xl bg-white/10 backdrop-blur-xl text-white shadow-2xl mb-10 border border-white/20"
            >
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="h-6 w-6" />
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
              <div className="h-6 w-[1px] bg-white/20"></div>
              <span className="text-sm font-black tracking-tight uppercase">5.0★ Google Rating | 415+ Reviews</span>
            </motion.div>

            <h1 className="hero-title desktop-xl-text text-5xl sm:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-10 drop-shadow-2xl translate-z-0">
              Reliable <br />
              <span className="text-[#a7c957]">Pest Control</span> <br />
              <div className="mt-4 flex items-center gap-4">
                <div className="h-1 lg:h-3 w-20 lg:w-40 bg-[#a7c957] rounded-full shrink-0"></div>
                <span className="italic font-light text-gray-300 text-xl md:text-2xl lg:text-4xl tracking-normal">An Eco-Friendly Life</span>
              </div>
            </h1>

            {/* Find Your Location - CITY/PINCODE SEARCH BAR */}
            <div className="relative max-w-2xl mb-14 mt-16 group">
              <div className="absolute -inset-2 bg-[#a7c957]/30 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex flex-col sm:flex-row items-center bg-white rounded-[2.5rem] p-3 shadow-2xl border border-white/20 overflow-hidden">
                <div className="flex items-center gap-4 pl-6 flex-grow py-4 sm:py-0 w-full relative">
                  <Search size={24} className="text-[#a7c957] shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search Branch (e.g. Kadapa, 516001)"
                    className="w-full bg-transparent outline-none font-bold text-gray-900 text-xl lg:text-2xl placeholder:text-gray-300 tracking-tight"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="w-full sm:w-auto bg-[#a7c957] hover:bg-gray-900 text-white px-10 py-6 rounded-[2rem] font-black text-lg uppercase tracking-widest transition-all active:scale-95 shadow-xl">
                  Check Branch
                </button>
              </div>
            </div>

            {/* Quick Stats Bar with LABELS */}
            <div className="stats-grid grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 pt-12 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[#a7c957] text-3xl sm:text-5xl font-black italic tracking-tighter">10+</span>
                <span className="text-gray-400 text-[10px] sm:text-xs uppercase font-black tracking-[0.2em] mt-3">Years <br /> Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#a7c957] text-3xl sm:text-5xl font-black italic tracking-tighter">400+</span>
                <span className="text-gray-400 text-[10px] sm:text-xs uppercase font-black tracking-[0.2em] mt-3">Happy <br /> Clients</span>
              </div>
              <div className="flex flex-col col-span-2 lg:col-span-1">
                <span className="text-[#a7c957] text-3xl sm:text-5xl font-black italic tracking-tighter">20+</span>
                <span className="text-gray-400 text-[10px] sm:text-xs uppercase font-black tracking-[0.2em] mt-3">Pest <br /> Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-2 relative mt-12 lg:mt-0"
          >
            <div className="bg-white p-12 rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/10 relative group">
              <div className="absolute -top-12 -right-12 bg-[#1a5f7a] text-white p-10 rounded-[3.5rem] shadow-2xl flex flex-col items-center">
                <Award size={48} className="mb-4 text-[#a7c957]" />
                <p className="text-xs font-black uppercase tracking-[0.2em] leading-tight text-center">Certified <br /> Protection</p>
              </div>

              <h3 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter uppercase italic leading-none">Book Free <br /> <span className="text-[#a7c957]">Inspection</span></h3>

              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: 'Safe and Eco-Smart', color: '#a7c957' },
                  { icon: Clock, text: '24/7 Rapid Support', color: '#3b82f6' },
                  { icon: Award, text: 'Government Licensed', color: '#f59e0b' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-all">
                    <div className="p-3 rounded-xl text-white shadow-lg" style={{ backgroundColor: item.color }}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-lg font-black text-gray-700 tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="/#contact" className="mt-12 block w-full bg-gray-900 hover:bg-[#a7c957] text-white text-center py-7 rounded-[2rem] font-black text-xl shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95 uppercase tracking-widest">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
