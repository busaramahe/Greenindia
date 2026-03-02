"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Safety',
    question: 'Are your chemicals safe for kids and pets?',
    answer: 'Yes, we use eco-friendly and government-approved chemicals that are safe for humans and pets once dry. We recommend keeping them away during the treatment and for a short period afterwards.',
  },
  {
    category: 'Treatment',
    question: 'How long does the treatment take?',
    answer: 'The duration depends on the size of the property and the type of pest. Typically, a standard treatment takes between 1 to 2 hours.',
  },
  {
    category: 'Treatment',
    question: 'Do I need to leave the house during treatment?',
    answer: 'For most treatments like gel baiting, you do not need to leave. For spray treatments, we recommend vacating the area for 2-3 hours until it dries.',
  },
  {
    category: 'Pricing',
    question: 'Is there a warranty for your services?',
    answer: 'Yes, we offer warranties ranging from 3 months to 1 year depending on the service type (e.g., termite control has a longer warranty).',
  },
  {
    category: 'Safety',
    question: 'What preparations are needed before the service?',
    answer: 'Basic preparation includes covering food items, clearing clutter, and keeping pets away. Our team will guide you with specific instructions before arriving.',
  },
  {
    category: 'Treatment',
    question: 'How often should I get pest control done?',
    answer: 'For preventive maintenance, we recommend a quarterly service. However, for severe infestations, more frequent visits may be required initially.',
  },
  {
    category: 'Treatment',
    question: 'How long until I see results after treatment?',
    answer: 'Most pests start dying immediately, but full eradication can take 7-14 days depending on the treatment type (e.g., gel baits for cockroaches take longer as they need to be consumed and shared).',
  },
  {
    category: 'Safety',
    question: 'Do you use organic or eco-friendly chemicals?',
    answer: 'Yes, we prioritize botanical and eco-friendly solutions wherever possible. All our chemicals are WHO and ISO-certified for indoor safety.',
  },
  {
    category: 'Treatment',
    question: 'Is it necessary to clean the house after treatment?',
    answer: 'General cleaning can be done before, but we recommend waiting 48 hours for deep mopping/cleaning to ensure the residual power of the chemicals remains effective.',
  },
  {
    category: 'Pricing',
    question: 'Do you offer seasonal or annual maintenance plans?',
    answer: 'Yes, our AMC (Annual Maintenance Contract) includes 4 services per year at a discounted rate, ensuring year-round protection with free call-outs.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Safety', 'Treatment', 'Pricing'];
  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-32 section-padding bg-white relative overflow-hidden">
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
            Common <span className="text-[#a7c957]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Everything you need to know about our pest control process.
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveIndex(null);
              }}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all ${activeCategory === cat
                ? 'bg-[#a7c957] text-white shadow-lg'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              layout
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 transition-all hover:border-[#a7c957]/50"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <span className="font-bold text-gray-900 text-xl tracking-tight">{faq.question}</span>
                <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className={`h-6 w-6 ${activeIndex === index ? 'text-[#a7c957]' : 'text-gray-400'}`} />
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

