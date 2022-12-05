import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "pages/Auth";
import { useAuth } from "providers/AuthContext";
import { Design } from "pages/Design";
import { Navbar } from "components/nav/Navbar";
import { Accounts } from "pages/Accounts";

export const App = () => {
  const { user } = useAuth();

  if (user) {
    console.log(user)
    return (
      <>
        <Navbar />
        <Routes>
          <Route element={<Accounts />} path="/account/*" />
          <Route element={null} path="/dashboard" />
          <Route element={null} path="/events" />
          <Route element={null} path="/reporting" />
          <Route element={null} path="/team-mgmt" />
          <Route element={null} path="/team-scheduling" />
          <Route element={null} path="/program-registrations" />
          <Route element={null} path="/forms" />
          <Route element={null} path="/referee" />
          <Route element={null} path="/family" />
          <Route
            path="*"
            element={<Navigate to="/account/account-select" replace />}
          />
        </Routes>
      </>
    );
  }
  // NO user = Login route
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/design/*" element={<Design />} />
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
};

export default App;
