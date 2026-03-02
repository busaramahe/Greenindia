"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredServices = filter === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === filter);

  const displayedItems = filteredServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  return (
    <section id="services" className="py-32 section-padding bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#a7c957]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#1a5f7a]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a7c957]/10 text-[#7a9a3f] text-sm font-bold mb-4">
              <ShieldCheck size={16} />
              <span>Expert Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
              World-Class <span className="text-[#a7c957]">Pest Control</span> Services
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Tailored treatments for every pest, every sector, and every budget. 100% safe for families and workplaces.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8 lg:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setCurrentPage(1);
                }}
                className={`px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all border-2 ${filter === cat
                  ? 'bg-[#a7c957] text-white border-[#a7c957] shadow-[0_15px_30px_rgba(167,201,87,0.3)]'
                  : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tablet-grid-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-gray-50 transition-all duration-500 flex flex-col h-full"
              >
                {/* Card Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg">
                    <span className="text-xs font-black text-[#7a9a3f] uppercase tracking-tighter">{service.category}</span>
                  </div>
                  {/* Icon Overlay */}
                  <div className="absolute -bottom-8 right-8 w-16 h-16 bg-[#a7c957] rounded-3xl flex items-center justify-center shadow-2xl transition-transform group-hover:rotate-12 border-4 border-white">
                    <service.icon className="text-white h-8 w-8" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-10 pt-12 flex flex-col flex-grow">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-[#a7c957] transition-colors tracking-tighter leading-none">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 font-bold leading-relaxed mb-10 flex-grow text-lg">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-3 bg-gray-50 hover:bg-[#a7c957] text-[#a7c957] hover:text-white py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all shadow-sm"
                  >
                    Service Details <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#a7c957] hover:border-[#a7c957] disabled:opacity-30 transition-all shadow-sm"
            >
              <ArrowRight size={24} className="rotate-180" />
            </button>
            <div className="flex gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${currentPage === i + 1 ? 'w-12 bg-[#a7c957]' : 'bg-gray-200 hover:bg-gray-300'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#a7c957] hover:border-[#a7c957] disabled:opacity-30 transition-all shadow-sm"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        )}

        {/* Bottom Trust bar */}
        <div className="mt-20 py-10 border-t border-gray-200 flex flex-wrap justify-center gap-12 opacity-60">
          <div className="flex items-center gap-3">
            <Star size={24} className="text-yellow-500 fill-yellow-500" />
            <span className="font-bold text-gray-900">Google Verified</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} className="text-[#a7c957]" />
            <span className="font-bold text-gray-900">Government Licensed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

