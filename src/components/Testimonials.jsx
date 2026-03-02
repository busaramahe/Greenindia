"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Kadapa',
    comment: 'Excellent service! They got rid of the termite problem in my house completely. Very professional team.',
    rating: 5,
    initials: 'RK'
  },
  {
    name: 'Lakshmi Devi',
    location: 'Tirupati',
    comment: 'I was worried about chemicals because of my pets, but their eco-friendly treatment was perfect. Highly recommend!',
    rating: 5,
    initials: 'LD'
  },
  {
    name: 'Srinivas Rao',
    location: 'Nellore',
    comment: 'Prompt response and effective cockroach control. The team explained everything clearly. Great job!',
    rating: 5,
    initials: 'SR'
  },
  {
    name: 'Anitha Reddy',
    location: 'Ananthapur',
    comment: 'Best pest control service in the region. Affordable prices and very thorough work. Thank you Green India!',
    rating: 5,
    initials: 'AR'
  },
  {
    name: 'Vijay Bhaskar',
    location: 'Kurnool',
    comment: 'They did a fantastic job with bird netting in our apartment. Very clean work and the team was polite.',
    rating: 5,
    initials: 'VB'
  },
  {
    name: 'Priya Sharma',
    location: 'Chittoor',
    comment: 'Lizard control treatment was very effective. We haven’t seen any lizards in our home for months now.',
    rating: 5,
    initials: 'PS'
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#a7c957] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
              What Our <br />
              <span className="text-[#a7c957]">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 font-bold leading-relaxed">
              Trusted by 415+ happy families and businesses across Andhra Pradesh. Our reputation is built on results.
            </p>
          </motion.div>

          <motion.a
            href="https://www.google.com/search?q=green+india+pest+control+reviews"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-xl border border-gray-100 font-black text-[#a7c957] uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 group"
          >
            View 415+ Google Reviews
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-50 transition-all relative group h-full flex flex-col"
            >
              <Quote className="absolute top-10 right-10 h-12 w-12 text-[#a7c957]/5" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#a7c957] to-[#8fb344] flex items-center justify-center text-white font-black text-2xl shadow-lg shrink-0">
                  {testimonial.initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-black text-gray-900 text-xl tracking-tight leading-none mb-1 truncate">{testimonial.name}</h4>
                  <p className="text-[#a7c957] font-black text-xs uppercase tracking-widest truncate">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current shadow-sm" />
                ))}
              </div>

              <p className="text-gray-700 text-lg font-bold leading-relaxed italic flex-grow">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
