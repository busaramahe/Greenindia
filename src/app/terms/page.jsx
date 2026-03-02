"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-40 pb-20 max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-8">
                    <FileText className="text-[#a7c957]" size={48} />
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Terms of Service</h1>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6 font-medium">
                    <p>Last Updated: March 2026</p>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using the Green India Pest Control website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">2. Service Description</h2>
                        <p>Green India Pest Control provides professional pest management services for residential, commercial, and industrial properties in Andhra Pradesh.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">3. Booking and Cancellation</h2>
                        <p>Bookings made through the website are subject to confirmation. We reserve the right to reschedule appointments based on technician availability or weather conditions.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">4. Liability</h2>
                        <p>While we strive for 100% effectiveness, pest control results may vary based on property hygiene and environmental factors. Our liability is limited to the value of the service provided.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
