import React from "react";

import SideBarButton from "./SideBarButton";
import AppThemeToggle from "../../AppThemeToggle";

import "../index.css";
// import Styles from './header.module.css'

class Content extends React.Component {
  render() {
    return (
      <ul className="d-flex flex-column align-items-start mt-3">
        <AppThemeToggle />
        <SideBarButton icon="🏠 " text="Home" />
        <SideBarButton icon="🗃 " text="Reading list" />
        <SideBarButton icon="📜 " text="Listing" />
        <SideBarButton icon="🎙 " text="Podcast" />
        <SideBarButton icon="🎥 " text="Videos" />
        <SideBarButton icon="🔖 " text="Tags" />
      </ul>
    );
  }
}

export default Content;
