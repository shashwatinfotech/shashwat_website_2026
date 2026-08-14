import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_7aepDD9XOmh7xncdEzzv3LQfSur7uDw",
  authDomain: "shashwat-infotech-website.firebaseapp.com",
  projectId: "shashwat-infotech-website",
  storageBucket: "shashwat-infotech-website.firebasestorage.app",
  messagingSenderId: "74619364715",
  appId: "1:74619364715:web:6e667fdb8e917a9ed7182e",
  measurementId: "G-2WMYBW7YSD",
};

// Prevent re-initializing on hot-reload (Next.js dev mode re-runs this file often)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics only works in the browser — guard it so server-side rendering doesn't crash
export let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
// firebase.ts ke end mein ye add karo, kuch bhi purana mat hatao
export async function saveFormSubmission(
  collectionName: string,
  data: Record<string, unknown>
) {
  const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
  return addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
  });
}