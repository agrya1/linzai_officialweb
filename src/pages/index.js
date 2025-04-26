import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueSection from '@/components/ValueSection';
import ProductSection from '@/components/ProductSection';
import GuideSection from '@/components/GuideSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  // 页面滚动时处理淡入动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Head>
        <title>临在 - 觉醒你的内在宇宙</title>
        <meta name="description" content="在数字时代重建神圣的内在秩序，连接你的本源意识。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <ValueSection />
        <ProductSection />
        <GuideSection />
        <TestimonialSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
} 