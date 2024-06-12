import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import "./App.css"; // Import the global CSS file
import DangerAlert from "./components/DangerAlert.js";


// Routing settings : react-router-dom
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let buttonStyle = {
    position: "fixed",
    right: "20px",
    top: "60px",
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <Router>
      <div>
        <Navbar
          title="Text-Utils"
          abouttext="About Us"
          hometext="Home"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Alert alert="This is alert" />

        <div className="dark-mode-toggle my-4">
          <button
            onClick={toggleDarkMode}
            className={`btn btn-dark toggle-button ${
              darkMode ? "dark" : "light"
            }`}
            style={buttonStyle}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        <div className="container my-3">
          <Routes>
            <Route path="/home" element={<Textform heading="Enter Your Text Here" />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<DangerAlert alert="404 Page Not Found" />} />
            <Route path="/" element={<Textform heading="Enter Your Text Here" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
