'use client';

import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'motion/react';
import { Users, Mail, MessageSquare, LogOut, ChevronRight, Loader2, Calendar } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
        setLoading(false);
      } else {
        router.push('/admin/login');
      }
    });

    return () => unsubscribeAuth();
  }, [router]);

  useEffect(() => {
    if (!user) return;

    const subQuery = query(collection(db, 'submissions'), orderBy('createdAt', 'desc'), limit(50));
    const unsubSubmissions = onSnapshot(subQuery, (snapshot) => {
      setSubmissions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    const newsQuery = query(collection(db, 'subscribers'), orderBy('createdAt', 'desc'), limit(50));
    const unsubSubscribers = onSnapshot(newsQuery, (snapshot) => {
      setSubscribers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubSubmissions();
      unsubSubscribers();
    };
  }, [user]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-brand-primary" size={48} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container-wide">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-serif mb-2">Admin Dashboard</h1>
              <p className="text-slate-500">Welcome back, {user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-all"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Submissions</p>
                    <h3 className="text-3xl font-serif">{submissions.length}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Subscribers</p>
                    <h3 className="text-3xl font-serif">{subscribers.length}</h3>
                  </div>
                </div>
              </div>

              <div className="bg-brand-primary text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl mb-4 font-serif">Quick Actions</h4>
                  <ul className="space-y-4">
                    <li>
                      <button className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-medium">
                        Create Blog Post
                        <ChevronRight size={16} />
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-medium">
                        Add Case Study
                        <ChevronRight size={16} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-xl font-serif">Recent Project Inquiries</h2>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Updates</span>
                </div>
                <div className="divide-y divide-slate-50">
                  {submissions.length === 0 ? (
                    <div className="p-20 text-center text-slate-400">
                      No submissions found.
                    </div>
                  ) : (
                    submissions.map((sub) => (
                      <div key={sub.id} className="p-8 hover:bg-slate-50 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-bold text-brand-primary text-lg">{sub.name}</h4>
                            <p className="text-sm text-slate-500">{sub.email} • {sub.company || 'Private'}</p>
                          </div>
                          <div className="text-right">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                              {sub.service}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-2 justify-end">
                              <Calendar size={12} />
                              {sub.createdAt?.toDate().toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 text-sm italic border-l-2 border-slate-200 pl-4 bg-slate-50/50 py-2 rounded-r-lg">
                          &quot;{sub.message}&quot;
                        </p>
                        {sub.budget && (
                          <div className="mt-4 text-xs font-bold text-brand-primary">
                            Budget: <span className="text-slate-500 font-medium">{sub.budget}</span>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Recent Subscribers */}
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-100">
                  <h2 className="text-xl font-serif">Recent Subscribers</h2>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-primary border border-slate-200">
                        <Mail size={14} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-bold text-brand-primary truncate">{subscriber.email}</p>
                        <p className="text-[10px] text-slate-400">Joined {subscriber.createdAt?.toDate().toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
