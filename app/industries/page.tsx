'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { Landmark, HeartPulse, ShoppingCart, Cpu, Factory, Building2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const industries = [
  {
    title: 'Financial Services',
    icon: <Landmark />,
    desc: 'Securing and modernizing global financial infrastructure with blockchain, AI, and cloud-native solutions.',
    points: ['Core Banking Modernization', 'Fintech Platform Development', 'Regulatory Compliance AI'],
  },
  {
    title: 'Healthcare & Life Sciences',
    icon: <HeartPulse />,
    desc: 'Driving medical innovation through predictive analytics, secure data management, and patient-centric applications.',
    points: ['AI Diagnostics', 'Secure Patient Portals', 'Health Data Interoperability'],
  },
  {
    title: 'Retail & Consumer',
    icon: <ShoppingCart />,
    desc: 'Transforming retail experiences with headless commerce, personalized AI engines, and unified omnichannel systems.',
    points: ['Headless Commerce', 'Inventory Intelligence', 'Customer Experience Design'],
  },
  {
    title: 'Technology & SaaS',
    icon: <Cpu />,
    desc: 'Accelerating product delivery and engineering excellence for the next generation of software leaders.',
    points: ['SaaS Platform Engineering', 'DevOps & CI/CD Strategy', 'API-First Architecture'],
  },
  {
    title: 'Industrial & Manufacturing',
    icon: <Factory />,
    desc: 'Optimizing supply chains and production floors with IoT, edge computing, and smart analytics.',
    points: ['Industrial IoT Integration', 'Predictive Maintenance', 'Supply Chain Visibility'],
  },
  {
    title: 'Real Estate & Hospitality',
    icon: <Building2 />,
    desc: 'Enhancing asset management and guest experiences with smart building tech and automated property systems.',
    points: ['PropTech Development', 'Automated Booking Systems', 'Asset Management Platforms'],
  },
];

export default function IndustriesPage() {
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
            <h1 className="text-5xl lg:text-7xl font-serif mb-8 tracking-tight">
              Sectors of <span className="text-indigo-400">Impact</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              We bring specialized technical mastery to the industries that drive the global economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full glass p-12 rounded-[48px] border border-white/5 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-indigo-400 mb-10 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {industry.icon}
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-indigo-400 transition-colors duration-300">{industry.title}</h3>
                <p className="text-gray-400 mb-10 leading-relaxed font-light flex-grow text-lg">
                  {industry.desc}
                </p>
                
                <div className="h-px w-full bg-gradient-to-r from-white/10 via-transparent to-transparent mb-10" />

                <div className="space-y-4 mb-12">
                  {industry.points.map((point) => (
                    <div key={point} className="flex items-center gap-4 text-sm font-medium text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/40" />
                      {point}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 font-bold text-indigo-400 group/link text-lg hover:text-indigo-300 transition-colors"
                >
                  Request Case Studies
                  <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise Image Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video rounded-[48px] overflow-hidden shadow-2xl border border-white/10 group">
                <Image src="https://picsum.photos/seed/domain-expertise/1200/800" alt="Domain Expertise" fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -z-0 pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] -z-0 pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-serif mb-10 tracking-tight leading-tight">
                Deep domain <span className="text-indigo-400">understanding</span> meets technical mastery.
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                We believe that great software isn&apos;t just about code—it&apos;s about understanding the specific regulatory, operational, and competitive landscape of your industry. Our consultants spend time in the field to ensure our technical solutions solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-5xl font-serif text-white mb-3">98%</div>
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">Retention Rate</div>
                </div>
                <div>
                  <div className="text-5xl font-serif text-white mb-3">15+</div>
                  <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
