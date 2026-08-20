'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-5xl lg:text-8xl font-serif mb-8 tracking-tight">Let&apos;s <span className="text-indigo-400">Collaborate</span>.</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Ready to engineer your digital sovereign? Reach out to our architects and start a high-performance conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Info Side */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold">Inquiry Pipeline</span>
              </div>
              <h2 className="text-5xl lg:text-7xl mb-16 font-serif leading-tight tracking-tight">Connect with our <br/><span className="text-gray-500">strategic team</span>.</h2>
              
              <div className="space-y-12 mb-20">
                {[
                  { icon: <Mail />, title: 'Email Pipeline', desc: 'hello@aurelia.digital', value: '24-hour response protocol.' },
                  { icon: <Phone />, title: 'Strategic Line', desc: '+1 (555) 000-0000', value: 'Global coverage Mon-Fri.' },
                  { icon: <MapPin />, title: 'Global Hub', desc: '100 Innovation Plaza, NY', value: 'Sovereign Digital District.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[24px] glass flex items-center justify-center text-gray-500 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl border border-white/5 group-hover:border-transparent">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-2">{item.title}</h4>
                      <p className="text-2xl font-serif text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">{item.desc}</p>
                      <p className="text-sm text-gray-500 font-light tracking-wide">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-12 rounded-[48px] glass border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-[80px] pointer-events-none" />
                <h4 className="text-2xl mb-8 font-serif text-white">Why partner with Aurelia?</h4>
                <ul className="space-y-6">
                  {[
                    'Direct access to senior sovereign consultants',
                    'Transparent architectural governance',
                    'Sovereign systems built for enterprise scale',
                    'Proven high-performance track record'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-5 text-lg font-light text-gray-400">
                      <CheckCircle2 className="text-indigo-500 shadow-lg shadow-indigo-500/20" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form Side */}
            <div className="relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass p-16 rounded-[48px] border border-white/5 shadow-2xl text-center flex flex-col items-center justify-center h-full min-h-[700px] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] -z-0 pointer-events-none" />
                  <div className="w-24 h-24 bg-indigo-600 rounded-[32px] flex items-center justify-center text-white mb-10 shadow-2xl shadow-indigo-600/20">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl mb-6 font-serif text-white">Message Ingested</h3>
                  <p className="text-gray-400 mb-12 max-w-sm text-xl leading-relaxed font-light">
                    A senior sovereign consultant will review your inquiry and initiate the protocol shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:text-indigo-400 transition-colors"
                  >
                    Initiate New Inquiry
                  </button>
                </motion.div>
              ) : (
                <div className="glass p-12 lg:p-16 rounded-[48px] border border-white/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-600/5 blur-[100px] pointer-events-none" />
                  <h3 className="text-3xl mb-12 font-serif text-white leading-tight">Project Inquiry <br/><span className="text-gray-500">Protocol</span></h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Identity *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white placeholder:text-gray-700"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Pipeline *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white placeholder:text-gray-700"
                          placeholder="email@company.digital"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Entity</label>
                        <input
                          type="text"
                          name="company"
                          className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white placeholder:text-gray-700"
                          placeholder="Corporate Entity"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Strategic Line</label>
                        <input
                          type="tel"
                          name="phone"
                          className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white placeholder:text-gray-700"
                          placeholder="+X (XXX) 000-0000"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Capability *</label>
                        <div className="relative">
                          <select name="service" className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white appearance-none cursor-pointer">
                            <option className="bg-[#0A0A0A]">Web Development</option>
                            <option className="bg-[#0A0A0A]">AI Integration</option>
                            <option className="bg-[#0A0A0A]">SaaS Development</option>
                            <option className="bg-[#0A0A0A]">Digital Strategy</option>
                            <option className="bg-[#0A0A0A]">UI/UX Design</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <ArrowRight size={16} className="rotate-90" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Allocation</label>
                        <div className="relative">
                          <select name="budget" className="w-full px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white appearance-none cursor-pointer">
                            <option className="bg-[#0A0A0A]">$25k - $50k</option>
                            <option className="bg-[#0A0A0A]">$50k - $100k</option>
                            <option className="bg-[#0A0A0A]">$100k+</option>
                          </select>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <ArrowRight size={16} className="rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 ml-1">Brief *</label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        className="w-full px-8 py-6 rounded-[32px] bg-white/[0.02] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all outline-none text-base font-light text-white resize-none placeholder:text-gray-700"
                        placeholder="Architectural requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-70 shadow-xl group active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Ingesting Protocol...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
