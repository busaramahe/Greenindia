"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, SprayCan, CheckCircle, Clock } from 'lucide-react';

const steps = [
  {
    title: 'Professional Inspection',
    description: 'Our certified experts conduct a meticulous top-to-bottom scan of your property. We identify not just the pests, but their entry points, nesting grounds, and the specific environmental factors attracting them.',
    icon: Search,
  },
  {
    title: 'Strategic Treatment Plan',
    description: 'Based on our findings, we engineer a customized elimination strategy using industry-leading protocols. We prioritize non-toxic, eco-smart barriers and baits that are high-impact on pests but invisible to your family and pets.',
    icon: Clock,
  },
  {
    title: 'Precision Execution',
    description: 'Our uniformed technicians deploy the treatment using advanced equipment and professional-grade materials. Every application is handled with surgical precision to ensure maximum coverage while respecting your interior and exterior surfaces.',
    icon: SprayCan,
  },
  {
    title: 'Certified Follow-up',
    description: 'We don’t just treat and leave; we provide a comprehensive post-service report and prevention roadmap. Our team schedules a follow-up visit to verify 100% results and ensure your premises remain a pest-free fortress.',
    icon: CheckCircle,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-[#a7c957]/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a7c957] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            How It <span className="text-[#a7c957]">Works</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#a7c957] to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our simple 4-step process ensures a hassle-free and effective pest control experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Artistic connecting line with gradient (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-[#a7c957]/30 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-white p-8 rounded-2xl text-center border-2 border-transparent hover:border-[#a7c957]/30 transition-all shadow-xl hover:shadow-[0_20px_40px_rgba(167,201,87,0.2)]"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#a7c957] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 mx-auto bg-gradient-to-br from-[#a7c957] to-[#8fb344] rounded-2xl flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(167,201,87,0.4)] border-4 border-white"
                >
                  <step.icon className="h-12 w-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

