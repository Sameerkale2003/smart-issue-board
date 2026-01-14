import { useState } from "react";
import IssueForm from "../components/IssueForm";
import IssueList from "../components/IssueList";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  return (
    <div className="dashboard">
      <header>
        <h2>Welcome {user.email}</h2>
        <button onClick={logout}>Logout</button>
      </header>

      <IssueForm />

      <div className="filters">
        <select onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <select onChange={(e) => setPriority(e.target.value)}>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <IssueList status={status} priority={priority} />
    </div>
  );
};

export default Dashboard;
