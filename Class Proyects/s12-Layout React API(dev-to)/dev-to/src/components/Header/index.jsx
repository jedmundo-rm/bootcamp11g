import React, { useEffect, useState } from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import AppButton from "../AppButton";
import AppThemeToggle from "../AppThemeToggle";
import AppProfile from "./AppProfile";

import MenuHamburger from "./MenuHamburger";

import "./index.css";
// import Styles from './header.module.css'

export default function Header() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSession(true);
    }
  }, []);
  return (
    <nav className="header d-flex justify-content-between">
      {/* </nav><nav className=´{d-flex ${Styles.Header}}´> */}
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex px-0">
            <MenuHamburger />
            <HeaderLogo />
            <HeaderSearch />
          </div>
          <div className="col-6 d-flex justify-content-end px-0">
            <AppButton
              className={` btn-link d-flex align-items-center justtify-content-center ${
                session ? "d-none" : "d-none d-lg-block"
              }`}
              text="Log in"
              type="anchor"
              url="/login"
            />
            <AppButton
              className={`btn-menu btn-primary d-flex align-items-center justtify-content-center ${
                session ? "d-none" : ""
              }`}
              text="Create account"
              type="anchor"
              url="/createAccount"
            />
            <AppButton
              className={`create_btn btn-menu btn-primary d-flex align-items-center justify-content-center ${
                !session ? "d-none" : ""
              }`}
              text="Create Post"
              type="anchor"
              url="/createPost"
            />
            <AppProfile />
            {/* <AppThemeToggle /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
