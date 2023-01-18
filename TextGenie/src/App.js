import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#476156";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Navbar title="TextGenie" aboutText="About" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextGenie" mode={mode} changeMode={changeMode} />

        <div className="container my-3">
          <Routes>
            {/* <Route path="/about">


              <About />
            </Route>

            <Route path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} />
            </Route> */}

            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
