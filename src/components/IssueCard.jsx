import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { canChangeStatus } from "../utils/statusRule";

const IssueCard = ({ issue }) => {
  const changeStatus = async (newStatus) => {
    if (!canChangeStatus(issue.status, newStatus)) {
      alert("❌ Move to In Progress first");
      return;
    }

    await updateDoc(doc(db, "issues", issue.id), {
      status: newStatus,
    });
  };

  return (
    <div className="card">
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
      <p><b>Priority:</b> {issue.priority}</p>

      <p className={`status ${issue.status.toLowerCase()}`}>
        {issue.status}
      </p>

      <select
        value={issue.status}
        onChange={(e) => changeStatus(e.target.value)}
      >
        <option>Open</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
    </div>
  );
};

export default IssueCard;
