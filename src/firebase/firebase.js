import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIjbOn_IYx1CBZoY4qheQ9LILG9scnR0s",
  authDomain: "smart-issue-board-26cdd.firebaseapp.com",
  projectId: "smart-issue-board-26cdd",
  storageBucket: "smart-issue-board-26cdd.firebasestorage.app",
  messagingSenderId: "32085712388",
  appId: "1:32085712388:web:b07e80c4d36aa74a021f51",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { serverTimestamp };
