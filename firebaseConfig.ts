// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBHIyFzSwYjrxAafPf1BxdBJKBSc9GacF4",
  authDomain: "learnmateapp-dbd3a.firebaseapp.com",
  projectId: "learnmateapp-dbd3a",
  storageBucket: "learnmateapp-dbd3a.firebasestorage.app",
  messagingSenderId: "305977004914",
  appId: "1:305977004914:web:f57384e86594f2d6dc43eb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
