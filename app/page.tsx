'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, ChevronRight, Play, CheckCircle2, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-12 shadow-2xl backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Aurelia Digital consulting</span>
              </div>
              
              <h1 className="text-6xl lg:text-9xl font-serif leading-[0.9] tracking-tight mb-10 text-white">
                Engineering the <br/>
                <span className="text-indigo-400 italic">Sovereign</span> Digital Future.
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-400 mb-16 leading-relaxed max-w-2xl font-light">
                We partner with forward-thinking enterprises to design, build, and scale high-performance digital ecosystems through AI-integrated engineering.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <Link
                  href="/contact"
                  className="bg-white text-black px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-2xl shadow-white/5 active:scale-95 group"
                >
                  Start a Project
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  href="/services"
                  className="glass text-white border border-white/10 px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 backdrop-blur-xl active:scale-95"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Featured Case Study Card */}
              <div className="relative w-full max-w-[480px] glass rounded-[56px] p-10 shadow-2xl z-20 border border-white/10 backdrop-blur-[40px] group hover:border-indigo-500/30 transition-all duration-500">
                <div className="w-full h-72 bg-slate-900 rounded-[40px] mb-10 overflow-hidden relative border border-white/10 shadow-inner">
                  <Image
                    src="https://picsum.photos/seed/case-hero/1200/900"
                    alt="Luminance Platform"
                    fill
                    className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="flex items-center justify-center h-full relative z-10">
                    <span className="text-[12px] font-bold text-white/40 tracking-[20px] uppercase group-hover:tracking-[25px] transition-all duration-700">LUMINANCE</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold mb-3">Featured Case Study</p>
                    <h3 className="text-3xl font-serif text-white mb-2">Luminance SaaS</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-lg">Fortune 500 Analytics.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-5xl font-serif text-white tracking-tighter shadow-indigo-500/50">+240%</span>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mt-2">Performance</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute top-1/4 -left-16 w-64 h-24 glass rounded-[32px] border border-white/10 flex items-center px-8 gap-6 z-30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center shadow-lg shadow-indigo-500/10">
                  <TrendingUp size={24} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-none mb-2">Uptime</p>
                  <p className="text-2xl font-serif text-white tracking-tight">99.99%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="container-wide flex flex-col lg:flex-row items-center justify-between gap-12 opacity-50 grayscale">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold lg:w-48">Engineering Partners</p>
          <div className="flex flex-wrap justify-center gap-16 lg:gap-24">
            {['VERTEX', 'QUANTUM', 'NEXUS.IO', 'SOLARIS', 'ORION'].map((name) => (
              <span key={name} className="text-2xl lg:text-3xl font-serif font-bold tracking-tighter text-white italic">{name}</span>
            ))}
          </div>
          <div className="flex gap-10 text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] lg:w-64 lg:justify-end">
            <span>LDN</span>
            <span>NYC</span>
            <span>SYD</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-40 relative overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <div className="max-w-4xl">
              <h2 className="text-5xl lg:text-8xl font-serif mb-10 leading-[0.95] tracking-tight">Expertise drives your <br/><span className="text-indigo-400">digital advantage</span>.</h2>
              <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-light">
                Strategic mastery meets engineering precision. We deliver transformational solutions for the next economy.
              </p>
            </div>
            <Link href="/services" className="bg-white text-black px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl active:scale-95 mb-4">
              Explore All Capability
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Web Development', desc: 'Custom high-performance web applications built for scale and speed.', icon: <Briefcase /> },
              { title: 'AI Integration', desc: 'Implementing cutting-edge LLMs and machine learning into business workflows.', icon: <CheckCircle2 /> },
              { title: 'SaaS Development', desc: 'End-to-end multi-tenant platform architecture and deployment.', icon: <TrendingUp /> },
              { title: 'Digital Strategy', desc: 'Comprehensive roadmaps for modernization and digital maturity.', icon: <Users /> },
              { title: 'UI/UX Design', desc: 'Premium user experiences that convert and delight modern users.', icon: <Star /> },
              { title: 'E-commerce', desc: 'Advanced storefronts with complex integrations and global scale.', icon: <Briefcase /> },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-12 rounded-[56px] border border-white/5 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-[80px] pointer-events-none" />
                <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-indigo-400 mb-12 border border-white/10 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif mb-6 text-white group-hover:text-indigo-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
                  {service.desc}
                </p>
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">
                  Learn Capability <ArrowRight size={16} className="text-indigo-400" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
