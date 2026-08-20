import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAY9kji4SfetuCv1LtPq8LizDCLJLj2l8M",
  authDomain: "sublime-charger-1b2z8.firebaseapp.com",
  projectId: "sublime-charger-1b2z8",
  storageBucket: "sublime-charger-1b2z8.firebasestorage.app",
  messagingSenderId: "412534155721",
  appId: "1:412534155721:web:237c10d856490d84d46018"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
