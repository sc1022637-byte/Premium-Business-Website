import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.message || !data.service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'submissions'), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id, message: 'Submission successful' }, { status: 201 });
  } catch (error: any) {
    console.error('Error adding document: ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
