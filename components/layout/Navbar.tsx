'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12 h-24 flex items-center',
        scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="container-wide flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center transform rotate-45 transition-transform duration-500 group-hover:rotate-[135deg] shadow-lg shadow-indigo-600/20 group-hover:bg-white group-hover:text-indigo-600">
            <div className="-rotate-45 group-hover:rotate-[225deg] transition-transform duration-500">
              <div className="w-4 h-4 border-2 border-white group-hover:border-indigo-600 rounded-sm" />
            </div>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-white">Aurelia <span className="text-gray-500 font-light italic">Digital</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-indigo-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-white/10 mx-2 hidden lg:block"></div>
          <Link
            href="/contact"
            className="bg-white text-black px-10 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl shadow-black/10 active:scale-95"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 glass border border-white/10 shadow-2xl rounded-[32px] p-10 flex flex-col gap-6 md:hidden z-50 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 blur-[80px] -z-10" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-serif text-white hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-white/5 my-4" />
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-5 rounded-2xl text-center font-bold uppercase tracking-[0.3em] text-xs"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
