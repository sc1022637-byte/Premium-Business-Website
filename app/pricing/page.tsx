'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Strategic Advisory',
    price: 'Custom',
    desc: 'High-level consulting for technology roadmapping and digital transformation strategy.',
    features: [
      'Weekly strategy sessions',
      'Technology audit & assessment',
      'Modernization roadmap',
      'Market & competitive analysis',
      'Architecture review',
    ],
    cta: 'Book Consultation',
    popular: false,
  },
  {
    name: 'Agile Delivery',
    price: 'Starting $25k',
    desc: 'Bespoke software development with a dedicated squad for rapid product delivery.',
    features: [
      'Dedicated project manager',
      'Bi-weekly sprint cycles',
      'UI/UX design included',
      'CI/CD pipeline setup',
      'Full technical documentation',
    ],
    cta: 'Start Development',
    popular: true,
  },
  {
    name: 'Enterprise Scale',
    price: 'Custom',
    desc: 'Comprehensive multi-year partnerships for global-scale digital systems.',
    features: [
      '24/7 dedicated support',
      'Multi-team orchestration',
      'Advanced security auditing',
      'Custom AI integration',
      'Global infrastructure scaling',
    ],
    cta: 'Contact Enterprise Team',
    popular: false,
  },
];

export default function PricingPage() {
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
              Investment in <span className="text-indigo-400">Quality</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Our engagement models are designed for transparency and high-impact results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-[40px] border flex flex-col h-full transition-all duration-500 group ${
                  tier.popular 
                    ? 'bg-gradient-to-b from-indigo-950/50 to-purple-950/50 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 lg:scale-105 z-10' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-indigo-500/40">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className={`text-2xl font-serif mb-4 ${tier.popular ? 'text-white' : 'text-gray-300'}`}>{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-gray-500 font-light">/ project</span>}
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {tier.desc}
                  </p>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-white/10 via-transparent to-transparent mb-10" />

                <ul className="space-y-5 mb-12 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 text-sm font-light">
                      <CheckCircle2 className="text-indigo-400 shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 group-hover:gap-5 active:scale-95 ${
                    tier.popular 
                      ? 'bg-white text-black hover:bg-gray-100 shadow-xl shadow-white/10' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/10'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="container-tight relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-400 font-light">Common inquiries regarding our engagement and billing processes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: 'How do you handle project scoping?', a: 'We begin with a thorough discovery phase to define requirements, architecture, and success metrics before any development begins.' },
              { q: 'What is your turnaround time?', a: 'MVPs typically take 8-12 weeks, while full enterprise platforms range from 6-12 months depending on complexity.' },
              { q: 'Do you offer post-launch support?', a: 'Yes, we provide flexible maintenance and support retainers to ensure your systems remain performant and secure.' },
              { q: 'Can we hire a dedicated team?', a: 'Absolutely. Our "Squad-as-a-Service" model allows you to integrate a fully managed engineering team into your workflow.' },
            ].map((item) => (
              <div key={item.q} className="glass p-10 rounded-[32px] border border-white/5 group hover:border-indigo-500/30 transition-all duration-500">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-4 text-white">{item.q}</h4>
                    <p className="text-gray-400 leading-relaxed font-light">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/faq" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group">
              View all FAQs
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
