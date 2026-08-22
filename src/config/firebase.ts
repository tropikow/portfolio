import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.PUBLIC_FIREBASE_API_KEY
const authDomain = import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN
const projectId = import.meta.env.PUBLIC_FIREBASE_PROJECT_ID
const storageBucket = import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET
const messagingSenderId = import.meta.env.PUBLIC_FIREBASE_MESSAGIN_SENDER_ID
const appId = import.meta.env.PUBLIC_FIREBASE_APP_ID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }