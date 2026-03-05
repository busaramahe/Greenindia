"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star, MapPin, Calendar, Award, Clock, Phone, Search, Leaf, Sparkles } from 'lucide-react';
import Link from 'next/link';

import slide1 from '../assets/HeroPremium1.png';
import slide2 from '../assets/HeroPremium5.png'; // New: Professional Spraying
import slide3 from '../assets/HeroPremium4.png';
import slide4 from '../assets/HeroPremium6.png'; // New: Botanical Mist
import slide5 from '../assets/HeroPremium3.png';

const slides = [
  {
    image: slide1.src,
    title: "We Are Expert In",
    highlight: "Pest Services",
    subtitle: "Uncompromising Protection.",
    slogan: "Premier Eco-Smart Solutions"
  },
  {
    image: slide2.src,
    title: "Professional",
    highlight: "Precision Spraying",
    subtitle: "Targeted Perimeter Defense.",
    slogan: "Advanced Application Technology"
  },
  {
    image: slide4.src,
    title: "Safe Botanical",
    highlight: "In-Shield Mist",
    subtitle: "Non-Toxic & Family Safe.",
    slogan: "Bio-Organic Protection"
  },
  {
    image: slide3.src,
    title: "Secure Your",
    highlight: "Luxury Dwelling",
    subtitle: "Quietly Effective.",
    slogan: "Elite Residential Shielding"
  },
  {
    image: slide5.src,
    title: "Green Tech",
    highlight: "Innovation",
    subtitle: "Science-Backed Results.",
    slogan: "Proven Professional Excellence"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handleCheckRange = () => {
    if (searchQuery.trim()) {
      // Dispatch a custom event and update session storage for the contact section to pick up
      window.dispatchEvent(new CustomEvent('serviceLocationSearch', { detail: searchQuery }));
      sessionStorage.setItem('lastServiceLocation', searchQuery);
      window.location.hash = 'contact';
    }
  };

  return (
    <section className="relative w-full min-h-[95vh] lg:min-h-screen bg-[#0a0f0d] overflow-hidden flex items-center pt-20">
      {/* Background Image Layers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${slides[currentImage].image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f0d] via-[#0a0f0d]/40 to-transparent z-2"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-transparent to-transparent z-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">

          {/* Left Side: Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 relative z-20">
            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400 sm:size-14" />)}
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white/90 tracking-widest uppercase">
                415+ Certified Reviews on Google
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4 max-w-[750px] overflow-hidden mx-auto lg:mx-0">
              <motion.div
                key={`slogan-${currentImage}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-[#a7c957] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs md:text-sm"
              >
                <Sparkles size={14} className="sm:size-16" />
                <span>{slides[currentImage].slogan}</span>
              </motion.div>

              <motion.h1
                key={`title-${currentImage}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[75px] font-black text-white leading-[0.9] tracking-tight"
              >
                {slides[currentImage].title} <br />
                <span className="text-[#a7c957] shadow-xl">{slides[currentImage].highlight}</span> <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/40 font-medium block mt-2">
                  {slides[currentImage].subtitle}
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-white/70 font-medium leading-relaxed"
            >
              Advanced pest management meets environmental responsibility. We don't just eliminate pests; we fortify your home using eco-safe botanical technology.
            </motion.p>

            {/* Search Bar Refined */}
            <div className="relative max-w-xl group mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-[#a7c957]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-[#0a0f0d]/80 backdrop-blur-2xl rounded-2xl p-2 border border-white/10 gap-2 sm:gap-0">
                <div className="flex items-center flex-grow px-2 sm:px-0">
                  <MapPin className="ml-2 sm:ml-4 text-[#a7c957]" size={20} />
                  <input
                    type="text"
                    placeholder="Enter area pin code (e.g. 516001)"
                    className="flex-grow bg-transparent border-none outline-none px-4 py-3 text-white placeholder:text-white/30 font-medium text-sm sm:text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheckRange()}
                  />
                </div>
                <button
                  onClick={handleCheckRange}
                  className="bg-[#a7c957] hover:bg-[#95b844] text-[#0a0f0d] font-bold px-6 py-4 sm:py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="whitespace-nowrap">Check Range</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Mobile CTA (Hidden on desktop) */}
            <div className="lg:hidden pt-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-white text-[#0a0f0d] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl active:scale-95"
              >
                Book Diagnostic <Calendar size={20} className="text-[#a7c957]" />
              </Link>
            </div>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck size={14} className="text-[#a7c957]" />
                <span>WHO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Leaf size={14} className="text-[#a7c957]" />
                <span>Botanical Sprays</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Clock size={14} className="text-[#a7c957]" />
                <span>24/7 Response</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: CTA Card (Desktop only) */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#a7c957] to-[#1a5f7a] rounded-[3rem] blur opacity-30"></div>
              <div className="relative bg-[#0a0f0d]/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 overflow-hidden group">
                {/* Decorative elements inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#a7c957]/10 blur-3xl rounded-full -mr-16 -mt-16"></div>

                <div className="relative z-10 space-y-8 text-center pt-4">
                  <div className="inline-flex p-4 rounded-3xl bg-[#a7c957]/10 text-[#a7c957] mb-2">
                    <Calendar size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">Schedule Free</h3>
                    <p className="text-[#a7c957] text-4xl font-extrabold tracking-tight uppercase leading-none">Diagnostic</p>
                  </div>

                  <p className="text-white/50 font-medium">Get a comprehensive pest assessment of your property within 24 hours.</p>

                  <div className="pt-4 space-y-3">
                    <Link href="/#contact" className="block w-full py-5 px-8 bg-[#a7c957] hover:bg-white text-[#0a0f0d] rounded-2xl font-black transition-all group-hover:shadow-[0_0_30px_rgba(167,201,87,0.3)]">
                      SECURE YOUR SLOT
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-white/40 text-xs font-bold tracking-widest uppercase">
                      <ShieldCheck size={14} />
                      <span>No Obligation Required</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#a7c957] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

