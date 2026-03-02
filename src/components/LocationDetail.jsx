"use client";
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { locationsData } from '../data/locationsData';
import { MapPin, Phone, Mail, ArrowLeft, Clock } from 'lucide-react';

const LocationDetail = () => {
    const { locationId } = useParams();
    const location = locationsData.find(l => l.id === locationId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locationId]);

    if (!location) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Location Not Found</h2>
                    <Link href="/" className="text-[#a7c957] font-bold flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-44 pb-16 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/#location-section" className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl text-gray-600 hover:text-[#a7c957] hover:border-[#a7c957] transition-all font-bold shadow-sm">
                        <ArrowLeft size={20} /> Back to Locations
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
                            Pest Control in <br /><span className="text-[#a7c957]">{location.name}</span>
                        </h1>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-5 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                                <div className="bg-[#a7c957]/10 p-4 rounded-xl">
                                    <MapPin className="h-8 w-8 text-[#a7c957]" />
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900 mb-2 text-xl tracking-tight uppercase">Our Office</h4>
                                    <p className="text-lg text-gray-500 font-bold leading-relaxed">{location.address}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                                <div className="bg-[#a7c957]/10 p-4 rounded-xl">
                                    <Phone className="h-8 w-8 text-[#a7c957]" />
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900 mb-2 text-xl tracking-tight uppercase">Call Us</h4>
                                    <a href={`tel:${location.phone}`} className="text-2xl text-[#a7c957] hover:underline transition-colors font-black tracking-tighter">
                                        {location.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                                <div className="bg-[#a7c957]/10 p-4 rounded-xl">
                                    <Mail className="h-8 w-8 text-[#a7c957]" />
                                </div>
                                <div>
                                    <h4 className="font-black text-gray-900 mb-2 text-xl tracking-tight uppercase">Email Us</h4>
                                    <a href={`mailto:${location.email}`} className="text-lg text-gray-500 font-bold hover:text-[#a7c957] break-all">
                                        {location.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="/#contact"
                            className="mt-8 inline-block w-full text-center bg-gray-900 text-white font-black py-7 rounded-[2rem] shadow-2xl hover:bg-[#a7c957] transition-all text-xl uppercase tracking-widest"
                        >
                            Book Service in {location.name}
                        </motion.a>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] lg:h-[700px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white lg:sticky lg:top-40"
                    >
                        <iframe
                            src={location.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of Green India Pest Control in ${location.name}`}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetail;
