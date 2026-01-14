import { useState } from "react";
import { createIssue } from "../utils/createIssue";
import { useAuth } from "../context/AuthContext";

const IssueForm = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Open",
    assignedTo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createIssue(form, user.email);

    if (res.warning) alert("⚠️ Similar issue exists");
    else {
      alert("✅ Issue created");
      setForm({
        title: "",
        description: "",
        priority: "Low",
        status: "Open",
        assignedTo: "",
      });
    }
  };

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />

      <select
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        placeholder="Assign To (email)"
        value={form.assignedTo}
        onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
      />

      <button>Create Issue</button>
    </form>
  );
};

export default IssueForm;
