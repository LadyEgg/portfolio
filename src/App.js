import React from "react";
import './App.css';
import Home from "./Containers/Home";
import Contact from "./Containers/Contact";
import About from "./Containers/About";
import Projects from "./Containers/Projects";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Containers/NavBar";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <NavBar />
      </div>
      <div className="App-footer"></div>
      
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
     </Routes>
    </div>
      
  );
}

export default App;
