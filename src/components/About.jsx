"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import aboutIllustration from '../assets/AboutIllustration4K.png';

const About = () => {
  const features = [
    "100% Eco-Friendly Solutions",
    "Certified & Trained Professionals",
    "Affordable Pricing with Warranty",
    "24/7 Customer Support"
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a7c957] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] bg-gray-50 border-8 border-white p-8">
              <img
                src={aboutIllustration.src}
                alt="Pest Control Illustration"
                className="w-full h-auto object-contain max-h-[600px]"
              />

              {/* Visual Trust Indicator */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-6 bg-[#1a5f7a]/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl">
                <div className="bg-[#a7c957] p-4 rounded-2xl shadow-lg">
                  <ShieldCheck className="text-white" size={32} />
                </div>
                <div>
                  <p className="text-white text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-1">Our Standard</p>
                  <p className="text-white font-black text-2xl tracking-tighter italic">Certified Protection</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-12 -right-12 bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col items-center">
              <span className="text-[#a7c957] text-6xl font-black italic tracking-tighter">100%</span>
              <span className="text-gray-900 text-xs font-black uppercase tracking-[0.2em] text-center mt-2 leading-tight">Superior <br /> Results</span>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-8 py-3 bg-[#a7c957]/10 text-[#7a9a3f] font-black text-xs uppercase tracking-[0.4em] rounded-full mb-8">
              Leading with Eco-Smart Care
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-10 tracking-tighter leading-[0.9]">
              Protection for <br />
              <span className="text-[#a7c957]">Every Sector</span>
            </h2>

            <p className="text-xl text-gray-600 mb-14 leading-relaxed font-bold">
              Green India Pest Control prioritize your safety with certified eco-friendly techniques tough on pests but gentle on your environment.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className="bg-[#a7c957] p-4 rounded-2xl shadow-lg shadow-[#a7c957]/20">
                    <CheckCircle className="text-white h-7 w-7" />
                  </div>
                  <span className="text-gray-900 font-black text-lg tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex items-center gap-16">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 italic tracking-tighter">2000+</span>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">Treatments Done</span>
              </div>
              <div className="h-12 w-[2px] bg-gray-100"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-gray-900 italic tracking-tighter">89%</span>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest mt-2">Repeat Customers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
