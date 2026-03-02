"use client";
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                    <Link href="/" className="text-[#a7c957] font-bold flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-44 pb-20 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/#services" className="inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-6 py-3 rounded-2xl text-gray-600 hover:text-[#a7c957] hover:border-[#a7c957] transition-all font-bold shadow-sm">
                        <ArrowLeft size={20} /> Back to Services
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-6 mb-10">
                            <div className="p-6 bg-[#a7c957]/10 rounded-3xl shadow-xl shadow-[#a7c957]/5">
                                <service.icon className="h-12 w-12 text-[#a7c957]" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter leading-none">{service.name}</h1>
                        </div>

                        <p className="text-2xl text-gray-500 font-bold mb-16 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Problems */}
                            <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100">
                                <h3 className="text-xl font-black text-red-600 mb-8 uppercase tracking-widest flex items-center gap-3">
                                    <AlertCircle size={24} /> The Problem
                                </h3>
                                <ul className="space-y-4">
                                    {service.problems.map((problem, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="h-2 w-2 rounded-full bg-red-400 mt-2 shrink-0" />
                                            <span className="text-gray-700 font-bold">{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div className="bg-[#a7c957]/5 p-10 rounded-[3rem] border border-[#a7c957]/10">
                                <h3 className="text-xl font-black text-[#7a9a3f] mb-8 uppercase tracking-widest flex items-center gap-3">
                                    <CheckCircle2 size={24} /> Our Solution
                                </h3>
                                <ul className="space-y-4">
                                    {service.solutions.map((solution, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-[#a7c957] shrink-0" />
                                            <span className="text-gray-700 font-bold">{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Link href="/#contact" className="mt-12 block w-full bg-gray-900 hover:bg-[#a7c957] text-white text-center py-7 rounded-[2rem] font-black text-xl shadow-2xl transition-all transform hover:scale-[1.02] uppercase tracking-widest">
                            Book Free Inspection
                        </Link>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-40"
                    >
                        <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-8 border-white relative">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-[650px] object-cover"
                            />
                            <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl">
                                <span className="text-[#a7c957] font-black uppercase tracking-widest text-sm flex items-center gap-2">
                                    <ShieldCheck size={18} /> Verified Protection
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
