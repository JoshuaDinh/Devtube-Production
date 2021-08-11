import React from "react";
import "./mobileNav.css";
import { NavLink } from "react-router-dom";
import Welcome from "../Welcome/Welcome";

const MobileNav = ({ toggleMobileNav }) => {
  return (
    <div className="mobile-nav">
      <Welcome />
      <div className="mobile-nav-section-container">
        <NavLink
          exact={true}
          activeClassName="is-active"
          to="/"
          className="NavLink"
          onClick={toggleMobileNav}
        >
          <span>Home</span>
        </NavLink>
        <p>Catagories</p>
        <NavLink
          to="/html-css"
          className="NavLink"
          activeClassName="is-active"
          onClick={toggleMobileNav}
        >
          <span>Html/Css</span>
        </NavLink>
        <NavLink
          to="/Javascript"
          className="NavLink"
          activeClassName="is-active"
          onClick={toggleMobileNav}
        >
          <span>Javascript</span>
        </NavLink>
        <NavLink
          to="/React"
          className="NavLink"
          activeClassName="is-active"
          onClick={toggleMobileNav}
        >
          <span>React.js</span>
        </NavLink>
        <NavLink
          to="/Node"
          className="NavLink"
          activeClassName="is-active"
          onClick={toggleMobileNav}
        >
          <span>Node.js</span>
        </NavLink>
        <NavLink
          to="/MongoDB"
          className="NavLink"
          activeClassName="is-active"
          onClick={toggleMobileNav}
        >
          <span>MongoDB</span>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
