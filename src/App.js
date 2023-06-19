import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
