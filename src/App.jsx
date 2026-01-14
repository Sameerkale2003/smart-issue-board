import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();
  const [page, setPage] = useState("login");

  if (user) return <Dashboard />;

  return page === "login"
    ? <Login setPage={setPage} />
    : <Signup setPage={setPage} />;
};

export default App;
