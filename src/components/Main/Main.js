import React from "react";
import "./Main.scss";
import { useState } from "react";

// react-bootstrap components

// custom components
import Home from "../Home/Home";
import About from "../About/About";
import SidePanel from "../SidePanel/SidePanel";
import NavPanel from "../NavPanel/NavPanel";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import HamMenu from "../HamMenu/HamMenu";

function Main() {
  const [mode, setMode] = useState("dark-mode");

  return (
    <main className={mode}>
      <NavPanel />

      <div className="container-fluid">
        <div className="content-panel">
          <Home id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
        </div>
      </div>

      <div className="sidepanel-container">
        <SidePanel mode={mode} setMode={setMode} />
      </div>

      <HamMenu mode={mode} setMode={setMode} />
    </main>
  );
}

export default Main;
