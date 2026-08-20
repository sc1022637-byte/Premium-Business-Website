'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const serviceData: Record<string, any> = {
  'web-development': {
    title: 'Web Development',
    heroDesc: 'Custom high-performance web applications built with modern frameworks and scalable architectures.',
    fullDesc: 'In today\'s digital landscape, your web application is more than just a presence—it\'s a critical business engine. We build robust, scalable, and lightning-fast web solutions that drive growth and deliver exceptional user experiences.',
    benefits: [
      { title: 'Performance First', desc: 'Optimized core web vitals and fast loading times.', icon: <Zap /> },
      { title: 'Scalable Infrastructure', desc: 'Built to handle growth from day one.', icon: <Cpu /> },
      { title: 'Secure by Design', desc: 'Enterprise-grade security protocols.', icon: <Shield /> },
    ],
  },
  'ai-integration': {
    title: 'AI Integration',
    heroDesc: 'Custom LLM implementations, predictive analytics, and automated business workflows.',
    fullDesc: 'Harness the power of artificial intelligence to transform your business operations. From custom LLM fine-tuning to predictive modeling, we help you integrate AI where it matters most.',
    benefits: [
      { title: 'Custom LLMs', desc: 'Bespoke models trained on your domain data.', icon: <Cpu /> },
      { title: 'Workflow Automation', desc: 'Remove bottlenecks with intelligent agents.', icon: <Zap /> },
      { title: 'Data Strategy', desc: 'Secure and clean data pipelines for AI.', icon: <Shield /> },
    ],
  },
  // Add more as needed, defaulting to Web Development for demo
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug] || serviceData['web-development'];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-wide relative z-10">
          <Link href="/services" className="inline-flex items-center gap-3 text-[10px] font-bold text-gray-500 hover:text-indigo-400 mb-12 transition-all uppercase tracking-[0.3em] group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl lg:text-7xl font-serif mb-8 tracking-tight">{service.title}</h1>
              <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-light">
                {service.heroDesc}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif mb-10 tracking-tight leading-tight">Elevate your <span className="text-indigo-400">digital capability</span>.</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-12 font-light">
                {service.fullDesc}
              </p>
              <div className="space-y-6 mb-16">
                {[
                  'Bespoke architecture design',
                  'Modern tech stack selection',
                  'Rigorous QA and testing',
                  '24/7 monitoring and support',
                  'Continuous delivery pipelines'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-lg font-light text-gray-300">
                    <CheckCircle2 className="text-indigo-500" size={24} />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 group"
              >
                Discuss This Service
                <Zap size={20} className="transition-transform group-hover:scale-110" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {service.benefits.map((benefit: any) => (
                <div key={benefit.title} className="glass p-10 rounded-[40px] border border-white/5 flex gap-8 group hover:border-indigo-500/30 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif mb-3 text-white">{benefit.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
              <div className="relative aspect-video rounded-[48px] overflow-hidden shadow-2xl mt-12 border border-white/10 group">
                <Image
                  src={`https://picsum.photos/seed/${slug}/1200/800`}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
