import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/TextUtils-React"
            element={
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - manipulate your text using our tools "
                mode={mode}
              />
            }
          />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="TextUtils - manipulate your text using our tools "
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
  );
}

export default App;
