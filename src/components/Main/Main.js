import React from "react";
import "./Main.scss";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

// react-bootstrap components
import Button from "react-bootstrap/Button";

// custom components
import Home from "../Home/Home";
import About from "../About/About";
import SidePanel from "../SidePanel/SidePanel";
import NavPanel from "../NavPanel/NavPanel";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Main() {
  const [mode, setMode] = useState("dark-mode");
  const [hamMenuOpen, setHamMenuOpen] = useState(false);

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

        <div className="sidepanel-container">
          <SidePanel mode={mode} setMode={setMode} />
        </div>

        <div className="hamburger-menu">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className={hamMenuOpen ? "bars" : "bars active"}
              onClick={() => setHamMenuOpen(!hamMenuOpen)}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className={hamMenuOpen ? "close-btn active" : "close-btn"}
              onClick={() => setHamMenuOpen(!hamMenuOpen)}
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Main;
