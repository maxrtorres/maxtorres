import { NavLink } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  return (
    <ul class="nav">
      <li>
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeClassName="active" exact={true}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active" exact={true}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default TopBar;
