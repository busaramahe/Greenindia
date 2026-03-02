"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-28 sm:pt-40 pb-20 max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <Shield className="text-[#a7c957]" size={48} />
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Privacy Policy</h1>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6 font-medium">
                    <p>Last Updated: March 2026</p>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
                        <p>At Green India Pest Control, we collect information that you provide directly to us when you request a quote, book an inspection, or contact us via our website forms. This includes your name, phone number, email address, and service location.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our pest control services, to process your requests, and to communicate with you about your appointments and our latest offerings.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Data Protection</h2>
                        <p>We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Compliance with Indian IT Act</h2>
                        <p>This policy is designed to comply with the Information Technology Act, 2000 of India regarding the collection and processing of personal data.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
