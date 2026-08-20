'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { Search, Clock, ChevronRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['All', 'Technology', 'Strategy', 'AI', 'Enterprise', 'Design'];
const posts = [
  {
    title: 'The Future of AI in Enterprise Software',
    slug: 'future-ai-enterprise-software',
    category: 'AI',
    author: 'Elena Thorne',
    date: 'Aug 15, 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/blog1/800/500',
    excerpt: 'How generative models are reshaping the way large-scale organizations approach development and productivity.',
  },
  {
    title: 'Modernizing Legacy Architecture: A Roadmap',
    slug: 'modernizing-legacy-architecture',
    category: 'Technology',
    author: 'Marcus Aurelius',
    date: 'Aug 10, 2026',
    readTime: '12 min read',
    image: 'https://picsum.photos/seed/blog2/800/500',
    excerpt: 'A comprehensive guide to transitioning from monolithic systems to cloud-native microservices.',
  },
  {
    title: 'Design Systems for Scalable Products',
    slug: 'design-systems-scalable-products',
    category: 'Design',
    author: 'Julian Chen',
    date: 'Aug 05, 2026',
    readTime: '10 min read',
    image: 'https://picsum.photos/seed/blog3/800/500',
    excerpt: 'Why maintaining a consistent design language is crucial for rapid scaling and cross-team collaboration.',
  },
  {
    title: 'Strategic Digital Transformation in 2026',
    slug: 'digital-transformation-2026',
    category: 'Strategy',
    author: 'Elena Thorne',
    date: 'Jul 28, 2026',
    readTime: '15 min read',
    image: 'https://picsum.photos/seed/blog4/800/500',
    excerpt: 'Key trends and shifts in the global digital landscape that every CTO should be watching.',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter error:', error);
    } finally {
      setIsSubscribing(false);
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
            <h1 className="text-5xl lg:text-7xl font-serif mb-8 tracking-tight">
              Insights & <span className="text-indigo-400">Innovation</span>.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              Our latest thoughts on technology, strategy, and the future of digital business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-12 relative z-10">
        <div className="container-wide flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/20' 
                    : 'bg-white/[0.02] text-gray-400 border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-96 group">
            <div className="absolute inset-0 bg-indigo-500/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-light text-white relative z-10"
            />
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Blog Grid */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-[40px] overflow-hidden hover:bg-white/[0.02] hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden group/img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-xl bg-indigo-600/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-indigo-500" /> {post.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-indigo-500" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-6 group-hover:text-indigo-400 transition-colors duration-300 leading-tight flex-grow">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed font-light text-lg">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-3 text-sm font-bold text-indigo-400 group/link group-hover:text-indigo-300 transition-colors">
                    Read Article
                    <ChevronRight size={18} className="transition-transform group-hover/link:translate-x-2 duration-300" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="container-tight text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-serif mb-8 tracking-tight">Stay at the <span className="text-indigo-400">forefront</span>.</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
              Join 10,000+ executives who receive our weekly briefing on the intersections of technology and strategic growth.
            </p>
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-indigo-600/20 backdrop-blur-xl p-10 rounded-[40px] border border-indigo-500/30 shadow-2xl shadow-indigo-600/10"
              >
                <h3 className="text-3xl font-serif text-white mb-4">You&apos;re on the list!</h3>
                <p className="text-indigo-200 font-light">Thank you for subscribing to our briefing.</p>
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 p-3 bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/10 focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 transition-all"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-8 py-5 outline-none text-lg font-light bg-transparent placeholder:text-gray-600"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-white text-black px-12 py-5 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-xl shadow-black/10 active:scale-95 disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
            <p className="mt-8 text-xs text-gray-500 font-light tracking-wide">
              No spam. Unsubscribe at any time. Read our <Link href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
