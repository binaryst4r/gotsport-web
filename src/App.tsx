import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Login } from "./pages/Auth";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      {/* header and navigation here */}

      {/* Sidebar */}

      <Routes>
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
    </Router>
  )
}

export default App;