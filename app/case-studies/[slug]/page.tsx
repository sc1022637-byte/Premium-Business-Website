'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const caseStudyData: Record<string, any> = {
  'fintech-digital-transformation': {
    title: 'Fintech Revolution: Scaling Global Payments',
    client: 'GlobalPay Inc.',
    industry: 'Financial Services',
    results: [
      { label: 'Transaction Speed', value: '+400%', icon: <TrendingUp /> },
      { label: 'Active Users', value: '2.5M+', icon: <Users /> },
      { label: 'System Uptime', value: '99.99%', icon: <Rocket /> },
    ],
    image: 'https://picsum.photos/seed/case1/1200/800',
    challenge: 'GlobalPay was struggling with legacy monolithic infrastructure that couldn\'t keep up with rapid international expansion, leading to frequent downtime and slow transaction processing.',
    solution: 'We architected a cloud-native microservices ecosystem using Next.js and distributed event-driven systems, enabling seamless cross-border transactions and real-time fraud detection.',
  },
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudyData[slug] || caseStudyData['fintech-digital-transformation'];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-wide relative z-10">
          <Link href="/case-studies" className="inline-flex items-center gap-3 text-[10px] font-bold text-gray-500 hover:text-indigo-400 mb-12 transition-all uppercase tracking-[0.3em] group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                  <span className="px-4 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-white">
                    {study.industry}
                  </span>
                  <span>{study.client}</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-serif mb-8 tracking-tight leading-tight">{study.title}</h1>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-8 lg:justify-end pb-4">
              {study.results.map((result: any, i: number) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-[32px] border border-white/10 min-w-[200px]"
                >
                  <div className="text-indigo-400 mb-4">{result.icon}</div>
                  <div className="text-4xl font-serif text-white mb-2">{result.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-24 relative z-10">
        <div className="container-wide">
          <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-8 space-y-20">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif mb-8 tracking-tight flex items-center gap-4">
                  <Target className="text-indigo-500" size={32} />
                  The Challenge
                </h2>
                <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-light italic border-l-4 border-indigo-600 pl-10 py-2">
                  &quot;{study.challenge}&quot;
                </p>
              </div>

              <div>
                <h2 className="text-3xl lg:text-4xl font-serif mb-8 tracking-tight flex items-center gap-4">
                  <Rocket className="text-indigo-500" size={32} />
                  The Solution
                </h2>
                <div className="prose prose-invert prose-lg max-w-none prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed">
                  <p>{study.solution}</p>
                  <p>Our approach centered on a complete architecture rethink, moving away from centralized control to a distributed, domain-driven design. We implemented:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 mt-10">
                    {[
                      'Real-time data synchronization',
                      'High-concurrency processing',
                      'Multi-layer security protocols',
                      'Automated scaling policies',
                      'Advanced observability dashboards',
                      'Zero-downtime deployment cycles'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-4 text-gray-300 font-light p-6 glass rounded-2xl border border-white/5 m-0">
                        <CheckCircle2 className="text-indigo-500 shrink-0" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 sticky top-40">
              <div className="glass p-10 rounded-[48px] border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-serif mb-8 text-white">Project Specs</h3>
                <div className="space-y-8">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Duration</div>
                    <div className="text-lg text-white font-light">6 Months</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-3">
                      {['Next.js', 'Go', 'GCP', 'PostgreSQL', 'Redis'].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Core Impact</div>
                    <div className="text-lg text-white font-light">Global Scalability</div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full mt-12 bg-white text-black px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl shadow-black/10 active:scale-95"
                >
                  Start Your Transformation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
