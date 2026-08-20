'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight, Star, Heart, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    title: 'Senior Next.js Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
  },
  {
    title: 'AI Solutions Architect',
    department: 'AI & Data',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Principal Product Designer',
    department: 'Design',
    location: 'Remote (Global)',
    type: 'Full-time',
  },
  {
    title: 'Digital Strategy Consultant',
    department: 'Strategy',
    location: 'London, UK',
    type: 'Full-time',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote (Europe)',
    type: 'Full-time',
  },
];

export default function CareersPage() {
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
              Build the <span className="text-indigo-400">Future</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Join a team of visionaries dedicated to solving the world&apos;s most complex technical challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl font-serif mb-6 tracking-tight">Why Aurelia?</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">We provide an environment where technical mastery is celebrated and innovative thinking is the norm.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { title: 'Remote-First', desc: 'Work from anywhere in the world with flexible hours.', icon: <Globe /> },
              { title: 'Growth Budget', desc: 'Annual stipend for conferences, books, and courses.', icon: <Star /> },
              { title: 'Health & Wellness', desc: 'Comprehensive coverage for you and your family.', icon: <Heart /> },
              { title: 'Modern Stack', desc: 'Always working with the latest enterprise technologies.', icon: <Zap /> },
            ].map((benefit, i) => (
              <motion.div 
                key={benefit.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col items-center text-center group hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-indigo-400 transition-colors">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/5">
        <div className="absolute inset-0 bg-indigo-600/[0.02]" />
        <div className="container-tight relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div>
              <h2 className="text-5xl font-serif text-white mb-6 tracking-tight">Open Positions</h2>
              <p className="text-gray-400 font-light text-lg">Find your place in our growing global team.</p>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em]">
              {jobs.length} Opportunities
            </div>
          </div>
          
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[40px] glass border border-white/5 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 flex flex-col md:flex-row justify-between items-center gap-10"
              >
                <div>
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-sm font-light text-gray-400">
                    <span className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">{job.department}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} className="text-indigo-500" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16} className="text-indigo-500" /> {job.type}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="bg-white text-black px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl shadow-white/5 active:scale-95 group/btn"
                >
                  Apply Now
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 rounded-[48px] bg-gradient-to-br from-indigo-600/90 to-purple-600/90 text-center relative overflow-hidden shadow-2xl shadow-indigo-600/20"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-serif text-white mb-6 tracking-tight">Don&apos;t see a role that fits?</h3>
              <p className="text-indigo-100 mb-10 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                We&apos;re always looking for exceptional talent. Send us your CV and a brief note about why you want to join Aurelia.
              </p>
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-indigo-50 transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 group"
              >
                Send General Application
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
