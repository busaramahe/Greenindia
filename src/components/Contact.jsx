"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'name') {
      const filteredValue = value.replace(/[^A-Za-z\s]/g, '').slice(0, 25);
      setFormData({ ...formData, [id]: filteredValue });

      if (filteredValue.length > 0 && filteredValue.trim().length < 3) {
        setErrors({ ...errors, name: 'Name must be at least 3 characters' });
      } else {
        setErrors({ ...errors, name: '' });
      }
      return;
    }

    if (id === 'phone') {
      const filteredValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [id]: filteredValue });

      if (filteredValue.length > 0 && !/^[6-9]/.test(filteredValue)) {
        setErrors({ ...errors, phone: 'Must start with 6, 7, 8, or 9' });
      } else if (filteredValue.length > 0 && filteredValue.length < 10) {
        setErrors({ ...errors, phone: 'Must be exactly 10 digits' });
      } else {
        setErrors({ ...errors, phone: '' });
      }
      return;
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let currentErrors = {};
    if (formData.name.trim().length < 3) {
      currentErrors.name = 'Please enter a valid name';
    }
    if (formData.phone.length !== 10 || !/^[6-9]/.test(formData.phone)) {
      currentErrors.phone = 'Please enter a valid 10-digit number';
    }

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      const response = await fetch('/api/contact/csv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          email: formData.email,
          service: formData.service,
          message: `${formData.message} (Date: ${formData.preferredDate}, Time: ${formData.preferredTime || 'N/A'})`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', preferredDate: '', preferredTime: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 section-padding bg-gradient-to-b from-white via-[#a7c957]/5 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#a7c957] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#a7c957] rounded-full blur-3xl"></div>
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
            Get In <span className="text-[#a7c957]">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#a7c957] to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to live pest-free? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#a7c957]/10 to-white rounded-3xl p-10 shadow-2xl border-2 border-[#a7c957]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#a7c957]/10 rounded-bl-full"></div>
            <h3 className="text-3xl font-bold text-[#7a9a3f] mb-10 relative z-10">Contact Information</h3>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-white/50 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-gradient-to-br from-[#a7c957] to-[#8fb344] p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Direct Line</h4>
                  <a href="tel:9493047766" className="text-2xl text-gray-700 hover:text-[#a7c957] transition-colors font-black tracking-tight">
                    94930 47766
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=919493778844&text=Hello%20Green%20India%20Pest%20Control!%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20pest%20control%20services.%20Please%20share%20more%20information%20and%20pricing.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow flex items-center justify-center gap-4 bg-[#25D366] text-white py-6 rounded-[2.5rem] font-black text-xl shadow-2xl shadow-[#25D366]/30 hover:bg-[#128C7E] transition-all active:scale-95"
                >
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447L0 24zm6.59-4.859c1.72.914 3.5 1.408 5.291 1.409 5.454 0 9.894-4.44 9.896-9.895.001-2.64-1.027-5.122-2.895-6.991-1.868-1.868-4.349-2.896-6.988-2.897-5.456 0-9.897 4.44-9.899 9.896-.001 1.922.501 3.791 1.455 5.451L2.323 21.05l4.857-1.909z" /></svg>
                  Book via WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white transition-all">
                  <Mail className="h-6 w-6 text-[#a7c957]" />
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-gray-900 text-xs uppercase opacity-40 mb-1">Email Support</h4>
                    <a href="mailto:greenindiapestcontrol1@gmail.com" className="text-gray-700 font-black hover:text-[#a7c957] transition-all text-sm truncate block">
                      greenindiapestcontrol1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white transition-all">
                  <Clock className="h-6 w-6 text-[#a7c957]" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs uppercase opacity-40 mb-1">Office Hours</h4>
                    <p className="text-gray-700 font-black text-sm">Mon - Sat: 9 AM - 8 PM <br /> Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 p-7 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white transition-all shadow-sm">
                <MapPin className="h-8 w-8 text-[#a7c957] shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-xs uppercase opacity-40 mb-2">Service Hub</h4>
                  <p className="text-xl text-gray-700 font-black leading-tight tracking-tight">
                    #42/353-1, Opp. Leelavathi Hospital, Bhagya Nagar Colony, Kadapa - 516002
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#a7c957]/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#a7c957]/5 rounded-br-full"></div>
            <h3 className="text-3xl font-bold text-[#7a9a3f] mb-10 relative z-10">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-white border-2 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#a7c957] focus:ring-[#a7c957]'} text-gray-900 focus:ring-2 outline-none transition-all placeholder-gray-400`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-bold mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold">+91</span>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-14 pr-5 py-4 rounded-xl bg-white border-2 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#a7c957] focus:ring-[#a7c957]'} text-gray-900 focus:ring-2 outline-none transition-all placeholder-gray-400`}
                      placeholder="98765 43210"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs font-bold mt-2">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#a7c957] focus:ring-2 focus:ring-[#a7c957] text-gray-900 outline-none transition-all placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#a7c957] focus:border-[#a7c957] outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Cockroach Control">Cockroach Control</option>
                    <option value="Termite Control">Termite Control</option>
                    <option value="Mosquito Control">Mosquito Control</option>
                    <option value="Rodent Control">Rodent Control</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#a7c957] focus:border-[#a7c957] outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                  <select
                    id="preferredTime"
                    required
                    value={formData.preferredTime || ''}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#a7c957] focus:border-[#a7c957] outline-none transition-all"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#a7c957] focus:border-[#a7c957] outline-none transition-all placeholder-gray-400"
                  placeholder="Tell us about your pest problem..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-[#a7c957] to-[#8fb344] hover:from-[#95b844] hover:to-[#7a9a3f] text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-2xl text-lg flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  <>Sent Successfully <CheckCircle size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-center font-semibold">Something went wrong. Please try again or call us.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

