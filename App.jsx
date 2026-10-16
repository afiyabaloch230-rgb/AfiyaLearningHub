
import { Link, Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>LearningHub</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
