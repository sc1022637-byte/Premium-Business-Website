'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const industries = ['All', 'Finance', 'Health', 'Retail', 'Tech', 'Energy'];
const caseStudies = [
  {
    title: 'Modernizing Legacy Banking',
    client: 'Stellar Bank',
    industry: 'Finance',
    desc: 'Complete digital overhaul of core banking infrastructure for the modern age.',
    image: 'https://picsum.photos/seed/bank/800/600',
    slug: 'stellar-bank-modernization',
    result: '40% increase in transaction speed',
  },
  {
    title: 'AI-Driven Diagnostics',
    client: 'HealthPulse',
    industry: 'Health',
    desc: 'Implementing predictive models for early-stage disease detection.',
    image: 'https://picsum.photos/seed/health/800/600',
    slug: 'healthpulse-ai',
    result: '92% detection accuracy',
  },
  {
    title: 'Next-Gen E-commerce',
    client: 'Velvet Retail',
    industry: 'Retail',
    desc: 'Scalable headless commerce platform for a global fashion brand.',
    image: 'https://picsum.photos/seed/retail/800/600',
    slug: 'velvet-retail-headless',
    result: '2.5x conversion rate lift',
  },
  {
    title: 'Sustainable Energy Grid',
    client: 'EcoPower',
    industry: 'Energy',
    desc: 'IoT and data analytics platform for optimized energy distribution.',
    image: 'https://picsum.photos/seed/energy/800/600',
    slug: 'ecopower-smart-grid',
    result: '15% reduction in grid waste',
  },
  {
    title: 'SaaS Platform for Teams',
    client: 'CollabFlow',
    industry: 'Tech',
    desc: 'Real-time collaboration suite with advanced security features.',
    image: 'https://picsum.photos/seed/tech/800/600',
    slug: 'collabflow-saas',
    result: '1M+ active daily users',
  },
];

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filteredStudies = activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(s => s.industry === activeIndustry);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-tight text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl lg:text-8xl font-serif mb-8 tracking-tight">Our <span className="text-indigo-400">Success Stories</span>.</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Sovereign results for global partners. Explore how we&apos;ve helped our leaders overcome their most significant architectural challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtering */}
      <section className="py-12 relative z-10">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto no-scrollbar">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 border ${
                  activeIndustry === industry 
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20' 
                    : 'bg-white/[0.02] text-gray-400 border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          <div className="px-6 py-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">
            {filteredStudies.length} Featured Cases
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Grid */}
      <section className="py-24 relative">
        <div className="container-wide">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Link href={`/case-studies/${study.slug}`} className="block">
                    <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden mb-10 glass border border-white/5 p-3 group-hover:border-indigo-500/30 transition-all duration-500">
                      <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-80"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <span className="px-5 py-2 rounded-xl bg-indigo-600/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                            {study.industry}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-px w-8 bg-indigo-500" />
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">{study.client}</span>
                    </div>
                    <h3 className="text-3xl mb-6 font-serif text-white group-hover:text-indigo-400 transition-colors leading-tight duration-300">{study.title}</h3>
                    <p className="text-gray-400 mb-10 line-clamp-2 text-lg font-light leading-relaxed">
                      {study.desc}
                    </p>
                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em] tracking-widest">{study.result}</span>
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:border-transparent shadow-xl">
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
