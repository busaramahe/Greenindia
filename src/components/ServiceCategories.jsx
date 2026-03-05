"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Home as HomeIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import industrialCategory from '../assets/IndustrialCategory4K.png';
import commercialCategory from '../assets/CommercialWarehouseCategory4K.png';
import residentialCategory from '../assets/ResidentialCategory4K.png';

const categories = [
    {
        title: 'Industrial',
        description: 'Comprehensive pest management solutions for warehouses, factories, and manufacturing plants.',
        icon: Building2,
        image: industrialCategory.src,
        services: ['Cockroach Control', 'Rodent Control', 'Thermal Fogging'],
        color: '#1a5f7a'
    },
    {
        title: 'Commercial',
        description: 'Keep your business pest-free and compliant with our regular commercial maintenance plans.',
        icon: Store,
        image: commercialCategory.src,
        services: ['Fly Control', 'Cockroach Control', 'Cold Fogging'],
        color: '#7a9a3f'
    },
    {
        title: 'Residential',
        description: 'Safe and effective pest control for your home, protecting your family and pets.',
        icon: HomeIcon,
        image: residentialCategory.src,
        services: ['Termite Control', 'Bedbug Control', 'Mosquito Control'],
        color: '#a7c957'
    }
];

const ServiceCategories = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
                        Pest Control for <span className="text-[#a7c957]">Every Sector</span>
                    </h2>
                    <div className="w-32 sm:w-40 h-1.5 bg-[#a7c957] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="group relative bg-white rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col h-[500px] sm:h-[550px] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.target.src = `https://images.unsplash.com/photo-${index === 0 ? '1584622781564-1d987f7333c1' : index === 1 ? '1600077106724-996704119842' : '1584622650111-993a426fbf0a'}?auto=format&fit=crop&q=80&w=800`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                        <cat.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{cat.title}</h3>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {cat.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {cat.services.map(s => (
                                            <span key={s} className="px-3 py-1 bg-[#a7c957]/10 text-[#7a9a3f] text-xs font-bold rounded-full border border-[#a7c957]/20">
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href="/#services"
                                        className="inline-flex items-center gap-2 text-[#7a9a3f] font-bold hover:gap-4 transition-all group/btn"
                                    >
                                        View Services <ArrowRight className="h-5 w-5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCategories;



