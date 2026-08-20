'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const postData: Record<string, any> = {
  'future-ai-enterprise-software': {
    title: 'The Future of AI in Enterprise Software',
    category: 'AI',
    author: 'Elena Thorne',
    date: 'Aug 15, 2026',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/blog1/1200/800',
    content: `
      <p>Artificial Intelligence is no longer just a buzzword; it is the cornerstone of modern enterprise architecture. As we move deeper into 2026, the integration of generative models and autonomous agents into large-scale systems is fundamentally shifting how organizations operate.</p>
      <p>At Aurelia Digital, we've observed that the most successful implementations aren't those that try to replace human intelligence, but those that augment it. By automating repetitive cognitive tasks, enterprises are freeing up their most valuable assets—their people—to focus on high-level strategy and innovation.</p>
      <h3>The Rise of Autonomous Agents</h3>
      <p>The next frontier is the deployment of specialized autonomous agents. Unlike traditional automation, these agents can reason, adapt, and collaborate across departments to solve complex multi-step problems.</p>
      <blockquote>"The enterprise of the future will be defined by its ability to orchestrate a hybrid workforce of humans and AI agents seamlessly."</blockquote>
      <p>Security and governance remain the top concerns for CTOs. Implementing robust "AI Guardrails" is essential to ensure these models operate within ethical and operational boundaries.</p>
    `,
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = postData[slug] || postData['future-ai-enterprise-software'];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-tight relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-3 text-[10px] font-bold text-gray-500 hover:text-indigo-400 mb-12 transition-all uppercase tracking-[0.3em] group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-2" />
            Back to Insights
          </Link>
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">
              <span className="px-4 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-white">
                {post.category}
              </span>
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-serif tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <Image src="https://picsum.photos/seed/author/100/100" alt={post.author} width={48} height={48} className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{post.author}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Aurelia Strategy Team</div>
                </div>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all group">
                <Share2 size={20} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-24 relative z-10">
        <div className="container-wide">
          <div className="relative aspect-[21/9] rounded-[48px] overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-105"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 relative z-10">
        <div className="container-tight">
          <div 
            className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-serif prose-headings:tracking-tight prose-headings:font-medium
            prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8
            prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
            prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:p-10 prose-blockquote:rounded-3xl prose-blockquote:not-italic prose-blockquote:text-white prose-blockquote:text-2xl prose-blockquote:font-serif prose-blockquote:tracking-tight
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-4">
            {['Artificial Intelligence', 'Enterprise', 'Future of Work', 'CTO Insights'].map(tag => (
              <span key={tag} className="px-5 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-light text-gray-400 hover:text-white hover:border-indigo-500/50 transition-all cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* More Insights */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.01] border-y border-white/5" />
        <div className="container-wide relative z-10">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-serif tracking-tight">More <span className="text-indigo-400">Insights</span>.</h2>
            <Link href="/blog" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors uppercase tracking-[0.2em] text-[10px]">
              View all articles
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group flex flex-col h-full glass border border-white/5 rounded-[40px] overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={`https://picsum.photos/seed/blog-${i}/800/500`} alt="Post" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-indigo-400 transition-colors">Digital Strategy in a Decoupled World</h3>
                  <Link href="/blog" className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <ArrowLeft size={16} className="rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
