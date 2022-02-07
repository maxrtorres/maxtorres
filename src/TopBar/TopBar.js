import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <ul class="nav">
      <li>
        <NavLink to="/" activeClassName="active" exact={true} id="homelink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          activeClassName="active"
          exact={true}
          id="projectlink"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName="active"
          exact={true}
          id="contactlink"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default TopBar;
