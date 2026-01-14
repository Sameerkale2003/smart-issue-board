import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";

const IssueCard = ({ issue }) => {
  const [loading, setLoading] = useState(false);

  const changeStatus = async (status) => {
    try {
      setLoading(true);
      const issueRef = doc(db, "issues", issue.id);

      await updateDoc(issueRef, { status });
    } catch (error) {
      console.error("Change status error:", error);
      alert("Permission denied. Check Firestore rules.");
    } finally {
      setLoading(false);
    }
  };

  const changePriority = async (priority) => {
    try {
      setLoading(true);
      const issueRef = doc(db, "issues", issue.id);

      await updateDoc(issueRef, { priority });
    } catch (error) {
      console.error("Change priority error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <select
          value={issue.status}
          disabled={loading}
          onChange={(e) => changeStatus(e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <select
          value={issue.priority}
          disabled={loading}
          onChange={(e) => changePriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
  );
};

export default IssueCard;
