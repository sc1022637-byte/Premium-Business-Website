import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if already subscribed
    const q = query(collection(db, 'subscribers'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }

    const docRef = await addDoc(collection(db, 'subscribers'), {
      email,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id, message: 'Subscription successful' }, { status: 201 });
  } catch (error: any) {
    console.error('Error adding subscriber: ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
