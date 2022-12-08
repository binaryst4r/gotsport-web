import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "pages/Auth";
import { useAuth } from "providers/AuthContext";
import { Design } from "pages/Design";
import { Navbar } from "components/nav/Navbar";
import { Accounts } from "pages/Accounts";

export const App = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route element={<Accounts />} path="/account/*" />
          <Route path="/design/*" element={<Design />} />
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
      <Route
        path="*"
        element={null} // replace with a NoMatch page
      />
    </Routes>
  );
};

export default App;
