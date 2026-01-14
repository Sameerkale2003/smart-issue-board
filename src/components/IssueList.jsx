import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import IssueCard from "./IssueCard";

const IssueList = ({ status, priority }) => {
  const [issues, setIssues] = useState([]);

useEffect(() => {
  const q = query(
    collection(db, "issues"),
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(
    q,
    (snap) => {
      setIssues(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    },
    (error) => {
      console.error("Firestore error:", error.message);
    }
  );

  return () => unsubscribe();
}, []);


  const filtered = issues
    .filter(i => status === "All" || i.status === status)
    .filter(i => priority === "All" || i.priority === priority);

  return (
    <div className="issue-list">
      {filtered.map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
