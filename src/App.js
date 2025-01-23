import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Resume from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
