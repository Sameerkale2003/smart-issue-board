import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export const createIssue = async (issue, userEmail) => {
  try {
    const keywords = issue.title.toLowerCase().split(" ");

    const snapshot = await getDocs(collection(db, "issues"));

    const similar = snapshot.docs.some((doc) =>
      doc.data().keywords?.some((k) => keywords.includes(k))
    );

    if (similar) {
      return { warning: true };
    }

    await addDoc(collection(db, "issues"), {
      ...issue,
      createdBy: userEmail,
      createdAt: serverTimestamp(),
      keywords,
    });

    return { success: true };
  } catch (error) {
    console.error("Create issue error:", error.message);
    return { error: error.message };
  }
};
