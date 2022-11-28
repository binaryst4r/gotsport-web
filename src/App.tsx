import { Routes, Route } from "react-router-dom";
import { Login } from "pages/Auth";
import { useAuth } from "providers/AuthContext";
import { Design } from "pages/Design";
import { Navbar } from "components/nav/Navbar";
import { AccountSelect } from "pages/Accounts/AccountSelect";

export const App = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route element={<AccountSelect />} path="/" />
          <Route element={<AccountSelect />} path="/account-select" />
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
