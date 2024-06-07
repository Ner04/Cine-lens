import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}


export default App;
