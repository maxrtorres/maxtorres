import { IconButton } from "@mui/material";
import "./Home.css";

const LinkButton = (props) => {
  return (
    <div>
      <IconButton onClick={() => window.open(props.link, "_blank")}>
        <img src={props.image} className="buttonImage" />
      </IconButton>
    </div>
  );
};

export default LinkButton;
