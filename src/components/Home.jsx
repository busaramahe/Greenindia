"use client";
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Hero from './Hero';
import ServiceCategories from './ServiceCategories';
import About from './About';
import Services from './Services';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';
import ServiceAreas from './ServiceAreas';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';

const Home = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <>
            <Hero />
            <ServiceCategories />
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="process"><Process /></div>
            <WhyChooseUs />
            <div id="location-section"><ServiceAreas /></div>
            <Testimonials />
            <FAQ />
            <div id="contact"><Contact /></div>
        </>
    );
};

export default Home;

