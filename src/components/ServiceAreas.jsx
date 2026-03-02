"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { locationsData } from '../data/locationsData';

const ServiceAreas = () => {
  // Duplicate data for a seamless infinite marquee effect
  const duplicatedLocations = [...locationsData, ...locationsData];

  return (
    <section className="py-24 bg-gradient-to-br from-[#a7c957]/10 via-white to-[#a7c957]/5 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a7c957] rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="w-full mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter">
            Serving Across <span className="text-[#a7c957]">Andhra Pradesh</span>
          </h2>
          <div className="w-32 h-1.5 bg-[#a7c957] mx-auto mb-16 rounded-full"></div>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex gap-8 py-4 px-4"
            animate={{
              x: [0, "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35, // Slow, premium constant speed
                ease: "linear",
              },
            }}
          >
            {duplicatedLocations.map((location, index) => (
              <div
                key={`${location.id}-${index}`}
                className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 hover:border-[#a7c957] transition-all group/card w-[350px] flex-shrink-0 flex flex-col h-full"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="bg-[#a7c957]/10 p-4 rounded-2xl group-hover/card:bg-[#a7c957] transition-colors">
                    <MapPin size={28} className="text-[#a7c957] group-hover/card:text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tighter leading-tight">{location.name}</h3>
                </div>

                <div className="space-y-4 mb-10 text-left flex-grow">
                  <p className="text-[10px] font-black text-[#a7c957] uppercase tracking-[0.3em] pb-3 border-b border-gray-100">Nearby Areas</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {location.popularAreas.slice(0, 4).map(area => (
                      <span key={area} className="text-sm font-bold text-gray-500 bg-gray-50 px-4 py-2 rounded-2xl">
                        {area}
                      </span>
                    ))}
                    {location.popularAreas.length > 4 && (
                      <span className="text-sm font-black text-[#7a9a3f] mt-2">
                        +{location.popularAreas.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/locations/${location.id}`}
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-[1.5rem] bg-gray-50 text-gray-900 font-black uppercase text-xs tracking-widest hover:bg-[#a7c957] hover:text-white hover:rounded-[1rem] hover:shadow-2xl transition-all duration-300"
                >
                  Explore Branch
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;

