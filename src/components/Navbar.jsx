"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../assets/Logo_transparent.png';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Locations', href: '/#location-section' },
    { name: 'Process', href: '/#process' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Inverted logic for Bug 1: Solid by default on inner pages, transparent on home top
  const isSolid = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid
        ? 'bg-white shadow-2xl py-2'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top bar (Only on Home when not scrolled) */}
        {!isSolid && (
          <div className="hidden lg:flex justify-between items-center mb-4 pb-4 border-b border-white/20 text-white/80 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#a7c957]" />
                <span>Serving Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span>5.0 Rating (415+ Reviews)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:9493047766" className="font-bold text-[#a7c957] hover:underline">Support: 9493047766</a>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center h-20 gap-4 lg:gap-8">
          <div className="flex items-center flex-shrink-0">
            {/* Logo Area (Fixed truncation) */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-0 sm:gap-1 group">
              <img
                src={logo.src}
                alt="Green India Pest Control Logo"
                className={`transition-all duration-500 object-contain -mr-1.5 sm:-mr-4 ${isSolid ? 'h-10 sm:h-16 lg:h-20' : 'h-12 sm:h-20 lg:h-24'}`}
              />
              <div className="flex flex-col relative z-10">
                <span className={`font-[900] text-[18px] sm:text-[26px] lg:text-[32px] tracking-tighter leading-[0.8] mb-0.5 transition-colors whitespace-nowrap ${isSolid ? 'text-gray-900' : 'text-white'}`}>
                  Green India
                </span>
                <span className="text-[9px] sm:text-[11px] lg:text-[13px] text-[#a7c957] font-[900] tracking-[0.2em] uppercase leading-none">
                  Pest Control
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links (Fluid responsive sizing) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <div className="flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-black text-[12px] xl:text-[14px] uppercase tracking-[0.1em] transition-all duration-300 relative group py-2 ${isSolid ? 'text-gray-900' : 'text-white'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-1 bg-[#a7c957] group-hover:w-full transition-all duration-500 rounded-full`}></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="flex items-center gap-3 xl:gap-6 ml-2 xl:ml-4">
              <a
                href="tel:9493047766"
                className={`hidden xl:flex items-center gap-2 font-black text-xs xl:text-sm uppercase tracking-tighter transition-all ${isSolid ? 'text-gray-900' : 'text-white'
                  }`}
              >
                <Phone size={16} className="text-[#a7c957]" fill="currentColor" />
                94930 47766
              </a>
              <Link
                href="/#contact"
                className="flex items-center gap-2 px-4 py-2.5 xl:px-6 xl:py-3.5 rounded-2xl font-black text-xs xl:text-sm uppercase tracking-widest transition-all bg-[#a7c957] text-white hover:bg-[#8fb344] shadow-xl shadow-[#a7c957]/30 active:scale-95 whitespace-nowrap"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:9493047766" className={`p-2 rounded-full ${isSolid ? 'text-[#a7c957]' : 'text-white'}`}>
              <Phone size={24} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors ${isSolid ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-2">
                <img src={logo.src} alt="Logo" className="h-10" />
                <span className="font-bold text-gray-900">Green India</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-900">
                <X size={32} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl sm:text-4xl font-black text-gray-900 hover:text-[#a7c957] transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <a
                href="tel:9493047766"
                className="flex items-center justify-center gap-3 w-full bg-[#a7c957] text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-[#a7c957]/30"
              >
                <Phone size={24} fill="white" />
                94930 47766
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
