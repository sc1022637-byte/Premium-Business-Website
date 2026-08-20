'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    category: 'Engagement',
    question: 'How do we start a project with Aurelia?',
    answer: 'The process begins with an initial consultation to understand your goals. This is followed by a discovery phase where we define requirements, architecture, and a detailed project roadmap.',
  },
  {
    category: 'Engagement',
    question: 'What is your typical team composition?',
    answer: 'Each project is staffed with a dedicated Product Manager, a Lead Architect, and a squad of senior engineers. We also provide UI/UX design and QA support as needed.',
  },
  {
    category: 'Technology',
    question: 'What tech stack do you specialize in?',
    answer: 'We are experts in the modern JavaScript/TypeScript ecosystem, specifically React, Next.js, and Node.js. We also specialize in AI integration (OpenAI, Gemini), cloud infrastructure (AWS, GCP, Azure), and headless commerce architectures.',
  },
  {
    category: 'Technology',
    question: 'Do you work with legacy systems?',
    answer: 'Yes, a significant part of our business is digital transformation—modernizing monolithic legacy applications into scalable, cloud-native microservices while ensuring business continuity.',
  },
  {
    category: 'Billing',
    question: 'What are your engagement models?',
    answer: 'We offer fixed-scope project-based billing for clearly defined requirements, and retainer-based "Agile Delivery squads" for ongoing development and strategic advisory.',
  },
  {
    category: 'Support',
    question: 'What happens after the project is delivered?',
    answer: 'We offer tiered maintenance and support plans to ensure your application remains secure, updated, and performant. Most clients opt for an ongoing strategic partnership for continuous improvement.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Common <span className="text-indigo-400">Questions</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Everything you need to know about partnering with Aurelia Digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 relative">
        <div className="container-tight">
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={24} />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-lg font-light relative z-10"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 relative">
        <div className="container-tight">
          <div className="space-y-6">
            {filteredFaqs.map((faq, i) => (
              <div 
                key={faq.question} 
                className={`group border rounded-[32px] transition-all duration-500 overflow-hidden ${
                  openIndex === i 
                    ? 'border-indigo-500/50 bg-white/[0.03] shadow-2xl shadow-indigo-500/10' 
                    : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-10 py-10 flex items-center justify-between text-left group"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400/80">{faq.category}</span>
                    <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-indigo-300 transition-colors">{faq.question}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    openIndex === i ? 'bg-indigo-500 text-white rotate-180' : 'bg-white/5 text-gray-400 border border-white/10'
                  }`}>
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 pb-10 pt-0">
                        <div className="h-px w-full bg-gradient-to-r from-indigo-500/50 via-transparent to-transparent mb-8" />
                        <p className="text-gray-400 leading-relaxed text-lg font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-20 bg-white/[0.02] rounded-[40px] border border-dashed border-white/10">
              <p className="text-gray-500 text-lg">No results found for your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 text-indigo-400 font-bold hover:text-indigo-300 transition-colors underline underline-offset-8"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/5" />
        <div className="container-tight text-center relative z-10">
          <h2 className="text-4xl font-serif mb-8 tracking-tight">Still have questions?</h2>
          <p className="text-gray-400 mb-12 max-w-lg mx-auto font-light text-lg">
            Our strategic advisors are ready to help you navigate your digital challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
