"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Leaf, Users, Clock, Award, DollarSign, Heart } from 'lucide-react';

const features = [
  { name: 'Eco-Friendly Solutions', icon: Leaf, desc: 'Safe, sustainable treatments for your home and the planet.' },
  { name: 'Certified Experts', icon: Award, desc: 'ISO-certified technicians with 10+ years of industry experience.' },
  { name: 'Affordable Pricing', icon: DollarSign, desc: 'Premium pest control services that fit your budget perfectly.' },
  { name: 'Fixed Guarantee', icon: Shield, desc: '100% result-driven approach with free follow-up services.' },
  { name: '24/7 Support', icon: Clock, desc: 'Always available to handle your pest emergencies anytime.' },
  { name: 'Safe for Kids & Pets', icon: Heart, desc: 'Non-toxic, odorless chemicals that prioritize family health.' },
  { name: 'Advanced Tech', icon: Check, desc: 'Utilizing modern IR sensors and European baiting systems.' },
  { name: 'Licensed & Insured', icon: Users, desc: 'Full liability coverage for your absolute peace of mind.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 section-padding bg-gradient-to-br from-[#a7c957]/10 via-white to-[#a7c957]/5 relative overflow-hidden">
      {/* Artistic background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#a7c957] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#a7c957] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Why Choose <span className="text-[#a7c957]">Green India?</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#a7c957] to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing the highest quality pest control services with a focus on safety and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative bg-white backdrop-blur-sm p-8 rounded-2xl border-2 border-transparent hover:border-[#a7c957]/30 transition-all text-center group shadow-xl hover:shadow-[0_20px_40px_rgba(167,201,87,0.2)]"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#a7c957]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-20 h-20 mx-auto bg-gradient-to-br from-[#a7c957] to-[#8fb344] rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#a7c957]/30 border-4 border-white"
              >
                <feature.icon className="h-10 w-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-black text-gray-900 mb-2 leading-none">{feature.name}</h3>
              <p className="text-gray-500 font-bold text-[13px] leading-tight">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

