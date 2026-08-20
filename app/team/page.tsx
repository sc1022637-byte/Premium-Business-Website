'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: 'Elena Thorne',
    role: 'Managing Partner & CTO',
    image: 'https://picsum.photos/seed/elena/600/800',
    bio: 'Former senior engineer at major tech hubs with 15+ years of experience in system architecture.',
  },
  {
    name: 'Marcus Aurelius',
    role: 'Head of Strategy',
    image: 'https://picsum.photos/seed/marcus/600/800',
    bio: 'Business visionary specializing in digital transformation and market-entry strategies.',
  },
  {
    name: 'Julian Chen',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/julian/600/800',
    bio: 'Award-winning designer focused on building premium design systems for enterprise products.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Principal AI Architect',
    image: 'https://picsum.photos/seed/sarah/600/800',
    bio: 'Specialist in deep learning and LLM fine-tuning for specialized industry domains.',
  },
  {
    name: 'David Miller',
    role: 'Head of Delivery',
    image: 'https://picsum.photos/seed/david/600/800',
    bio: 'Agile transformation expert with a focus on high-velocity team performance.',
  },
  {
    name: 'Sofia Rodriguez',
    role: 'Senior UI/UX Designer',
    image: 'https://picsum.photos/seed/sofia/600/800',
    bio: 'Creating human-centric experiences for complex technical ecosystems.',
  },
];

export default function TeamPage() {
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
              The <span className="text-indigo-400">Architects</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Our team is composed of the brightest minds in technology, design, and strategic consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:shadow-indigo-500/20 border border-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="w-full">
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 mb-6">
                        <Link href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-indigo-500 transition-all duration-300">
                          <Linkedin size={20} />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-indigo-500 transition-all duration-300">
                          <Twitter size={20} />
                        </Link>
                        <Link href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-indigo-500 transition-all duration-300">
                          <Mail size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-serif mb-2 group-hover:text-indigo-400 transition-colors duration-300">{member.name}</h3>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.3em] mb-6">{member.role}</p>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-serif mb-10 tracking-tight leading-tight">
                Join the <span className="text-indigo-400">frontline</span> of innovation.
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                We are always looking for visionary engineers, designers, and strategists to join our growing global team. If you&apos;re passionate about building the future, we want to hear from you.
              </p>
              <Link
                href="/careers"
                className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 group"
              >
                View Open Positions
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="https://picsum.photos/seed/culture1/600/600" alt="Culture" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="https://picsum.photos/seed/culture2/600/600" alt="Culture" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="https://picsum.photos/seed/culture3/600/600" alt="Culture" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="https://picsum.photos/seed/culture4/600/600" alt="Culture" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
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
