import React from "react";
import "./Main.scss";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

// custom components
import Home from "../Home/Home";
import About from "../About/About";
import SidePanel from "../SidePanel/SidePanel";

function Main() {
  const [mode, setMode] = useState("dark-mode");

  return (
    <main className={mode}>
      <Nav defaultActiveKey="/home" className="flex-column nav-tabs">
        <Nav.Link href="#home" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link href="#about" eventKey="link-1" className="nav-link">
          About
        </Nav.Link>
        <Nav.Link eventKey="link-2" className="nav-link">
          Projects
        </Nav.Link>
        <Nav.Link eventKey="disabled" className="nav-link">
          Contact
        </Nav.Link>
      </Nav>
      <div className="content-panel">
        <Home id="home" />
        <About id="about" />
      </div>

      <div className="container">
        <div className="sidepanel-container">
          <SidePanel mode={mode} setMode={setMode} />
        </div>
      </div>
    </main>
  );
}

export default Main;
