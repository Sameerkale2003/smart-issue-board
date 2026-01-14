import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

const Signup = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signup = async () => {
    setError("");

    if (!email || !password) {
      setError("Email and password required");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      alert("Account created successfully");
      setPage("login");
    } catch (err) {
      console.error(err);

      if (err.code === "auth/email-already-in-use") {
        setError("Email already registered");
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters");
      } else {
        setError("Signup failed");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signup}>Signup</button>

      <p onClick={() => setPage("login")}>
        Already have account
      </p>
    </div>
  );
};

export default Signup;
