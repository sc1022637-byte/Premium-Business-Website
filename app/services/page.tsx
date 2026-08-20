'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { ArrowRight, Code, Brain, Layout, ShoppingBag, BarChart, Globe } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    desc: 'High-performance web applications built with modern frameworks and scalable architectures.',
    icon: <Code />,
    features: ['React & Next.js Experts', 'Cloud-Native Architecture', 'Performance Optimization'],
  },
  {
    title: 'AI Integration',
    slug: 'ai-integration',
    desc: 'Custom LLM implementations, predictive analytics, and automated business workflows.',
    icon: <Brain />,
    features: ['Generative AI', 'Predictive Modeling', 'Data Strategy'],
  },
  {
    title: 'SaaS Development',
    slug: 'saas-development',
    desc: 'Full-cycle platform engineering, from MVP to enterprise-scale multi-tenant solutions.',
    icon: <Globe />,
    features: ['Multi-Tenant Systems', 'Subscription Management', 'API Infrastructure'],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    desc: 'Premium design systems and user experiences that prioritize conversion and brand identity.',
    icon: <Layout />,
    features: ['Design Systems', 'User Research', 'Interactive Prototypes'],
  },
  {
    title: 'Digital Strategy',
    slug: 'digital-strategy',
    desc: 'Comprehensive roadmaps for modernization, cloud migration, and technical debt reduction.',
    icon: <BarChart />,
    features: ['Cloud Transformation', 'Agile Consulting', 'Modernization Roadmap'],
  },
  {
    title: 'E-commerce',
    slug: 'e-commerce',
    desc: 'Advanced headless commerce storefronts with complex backend and ERP integrations.',
    icon: <ShoppingBag />,
    features: ['Headless Commerce', 'ERP Integrations', 'Conversion Optimization'],
  },
];

export default function ServicesPage() {
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
            <h1 className="text-5xl lg:text-8xl font-serif mb-8 tracking-tight">Our <span className="text-indigo-400">Capability</span>.</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              We provide the sovereign technical foundation and strategic vision required to thrive in a digital-first economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 rounded-[48px] glass border border-white/5 hover:border-indigo-500/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-indigo-400 mb-10 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-indigo-400 transition-colors duration-300 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-10 leading-relaxed flex-grow font-light text-lg">
                  {service.desc}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-white/10 via-transparent to-transparent mb-10" />
                <ul className="space-y-4 mb-12">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-indigo-400 transition-colors"
                >
                  Explore Details
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="container-tight text-center relative z-10 glass rounded-[64px] p-24 shadow-2xl border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] -z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl text-white mb-10 font-serif tracking-tight leading-tight">Ready to start <br/>your next project?</h2>
            <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Our team is ready to help you architect your digital future. Let&apos;s build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 group"
            >
              Get in Touch
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
