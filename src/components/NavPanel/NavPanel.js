import "./NavPanel.scss";

// react-bootstrap components
import Nav from "react-bootstrap/Nav";

export default function NavPanel() {
  return (
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
  );
}
