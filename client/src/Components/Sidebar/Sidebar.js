import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import StorageIcon from "@material-ui/icons/Storage";
import HttpIcon from "@material-ui/icons/Http";
import WebIcon from "@material-ui/icons/Web";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import LanguageIcon from "@material-ui/icons/Language";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Welcome />
      <div className="sidebar-container">
        <NavLink
          exact={true}
          activeClassName="is-active"
          to="/"
          className="NavLink"
        >
          <HomeIcon className="icon" /> <span>Home</span>
        </NavLink>
        <p>Catagories</p>
        <NavLink
          exact={true}
          to="/Html-Css"
          className="NavLink"
          activeClassName="is-active"
        >
          <HttpIcon className="icon" /> <span>Html/Css</span>
        </NavLink>
        <NavLink
          exact={true}
          to="/Javascript"
          className="NavLink"
          activeClassName="is-active"
        >
          <WebIcon className="icon" />
          <span>Javascript</span>
        </NavLink>
        <NavLink
          exact={true}
          to="/React"
          className="NavLink"
          activeClassName="is-active"
        >
          <VerticalSplitIcon className="icon" /> <span>React.js</span>
        </NavLink>
        <NavLink
          exact={true}
          to="/Node"
          className="NavLink"
          activeClassName="is-active"
        >
          <LanguageIcon className="icon" /> <span>Node.js</span>
        </NavLink>
        <NavLink
          exact={true}
          to="/MongoDB"
          className="NavLink"
          activeClassName="is-active"
        >
          <StorageIcon className="icon" /> <span>MongoDB</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
