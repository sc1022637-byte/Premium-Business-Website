'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, Award, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-tight text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl lg:text-8xl font-serif mb-8 tracking-tight leading-tight">Built on <br/><span className="text-indigo-400">Architectural Excellence</span>.</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Aurelia Digital was founded on the belief that technology should be a catalyst for sovereign digital transformation, not just an efficiency tool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[64px] overflow-hidden glass border border-white/5 p-4"
            >
              <Image
                src="https://picsum.photos/seed/aurelia-story/1200/1200"
                alt="Our Team"
                fill
                className="object-cover rounded-[48px] grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 font-bold">The Aurelia Approach</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-serif mb-10 leading-tight tracking-tight">Redefining the <br/><span className="text-gray-500">Consultancy</span> Engine.</h2>
              <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
                <p>
                  Since our inception, we have partnered with over 500 enterprises to solve their most complex technical challenges. We don&apos;t just write code; we architect systems that stand the test of time.
                </p>
                <p>
                  Our team consists of senior engineers, strategic consultants, and visionary designers who are dedicated to pushing the boundaries of what&apos;s possible in the digital realm.
                </p>
                <ul className="space-y-6 pt-10">
                  {[
                    'Client-centric architectural governance',
                    'Unyielding commitment to system integrity',
                    'Agile delivery optimized for enterprise velocity',
                    'Continuous innovation and AI exploration'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-5 text-white font-light text-lg">
                      <div className="w-8 h-8 rounded-full bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-lg">
                        <CheckCircle2 className="text-indigo-400" size={18} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl lg:text-7xl text-white mb-8 font-serif tracking-tight">Foundational Values</h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              These principles guide every decision we make and every line of code we engineer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'We do what is right, even when it is difficult.', icon: <Award /> },
              { title: 'Innovation', desc: 'We never stop exploring the next frontier.', icon: <Globe /> },
              { title: 'Excellence', desc: 'Good enough is never enough for our clients.', icon: <CheckCircle2 /> },
              { title: 'Partnership', desc: 'Your success is our ultimate metric.', icon: <Heart /> },
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-12 rounded-[48px] glass border border-white/5 hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl shadow-indigo-600/10">
                  {value.icon}
                </div>
                <h3 className="text-3xl text-white mb-6 font-serif group-hover:text-indigo-400 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
