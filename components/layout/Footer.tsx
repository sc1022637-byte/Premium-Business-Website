import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
  ],
  Services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'AI Integration', href: '/services/ai-integration' },
    { name: 'SaaS Development', href: '/services/saas-development' },
    { name: 'Digital Strategy', href: '/services/digital-strategy' },
  ],
  Resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center transform rotate-45 transition-transform duration-500 group-hover:rotate-[135deg] shadow-xl shadow-indigo-600/20">
                <div className="-rotate-45 group-hover:rotate-[225deg] transition-transform duration-500">
                  <div className="w-5 h-5 border-2 border-white rounded-sm" />
                </div>
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-white">Aurelia</span>
            </Link>
            <p className="text-gray-400 mb-10 max-w-sm leading-relaxed text-lg font-light">
              Empowering forward-thinking enterprises with bespoke digital solutions and strategic AI integration. Building the future of technology, one partnership at a time.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-[16px] glass border border-white/10 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-xl">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400 mb-10">{title}</h4>
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group text-base font-light">
                      {link.name}
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-indigo-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Aurelia Digital. Sovereignty in Architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <Link href="/contact" className="text-xs font-bold text-gray-500 hover:text-white flex items-center gap-3 transition-colors uppercase tracking-[0.2em]">
              <Mail size={14} className="text-indigo-500" />
              hello@aurelia.digital
            </Link>
            <div className="text-xs font-bold text-gray-500 flex items-center gap-3 uppercase tracking-[0.2em]">
              <Phone size={14} className="text-indigo-500" />
              +1 (555) 000-0000
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
