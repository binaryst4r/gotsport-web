import { Routes, Route } from "react-router-dom";
import { Login } from "pages/Auth";
import Organizations from "pages/Organization";
import { useAuth } from "providers/AuthContext";
import { DesignPage } from "pages/Design";

export const App = () => {
  const { user } = useAuth();
  if (user) {
    return (
      <Routes>
        <Route element={<Organizations />} path="/" />
        <Route element={null} path="/dashboard" />
        <Route element={null} path="/account" />
        <Route element={null} path="/events" />
        <Route element={null} path="/reporting" />
        <Route element={null} path="/team-mgmt" />
        <Route element={null} path="/team-scheduling" />
        <Route element={null} path="/program-registrations" />
        <Route element={null} path="/forms" />
        <Route element={null} path="/referee" />
        <Route element={null} path="/family" />
      </Routes>
    );
  }
  // NO user = Login route
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
};

export default App;
