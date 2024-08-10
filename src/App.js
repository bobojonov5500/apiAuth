import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Api.post";
import User from "./components/UserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
