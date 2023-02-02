import "./SidePanel.scss";

// react-bootstrap components
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// MUI components
import { MaterialUISwitch } from "./StyledSwitch";
import EmailLink from "../SocialLinks/EmailLink";
import LinkedinLink from "../SocialLinks/LinkedinLink";
import GithubLink from "../SocialLinks/GithubLink";

export default function SidePanel(props) {
  function toggleMode() {
    if (props.mode === "dark-mode") props.setMode("light-mode");
    else props.setMode("dark-mode");
  }

  return (
    <ButtonGroup vertical className="btn-group">
      <Button></Button>

      <Button>
        <EmailLink />
      </Button>

      <Button>
        <LinkedinLink />
      </Button>

      <Button>
        <GithubLink />
      </Button>

      <Button>
        <MaterialUISwitch onChange={() => toggleMode()} />
      </Button>

      <Button></Button>
    </ButtonGroup>
  );
}
