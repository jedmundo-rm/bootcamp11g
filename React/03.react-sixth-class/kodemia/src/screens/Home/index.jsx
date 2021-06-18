import React from "react";

import AppLoading from "../../components/AppLoading";

import Header from "../../components/Header/index";

import LeftBar from "../../components/LeftBar/index";

import Posts from "../../components/Content/Posts";

import RightBar from "../../components/RightBar/index";

import Styles from "../../App.css";

export default function Home() {
  return (
    <React.Fragment>
      <div id="navbar" className="full-container">
        <div className="container">
          <div className="row">
            <Header />
          </div>
        </div>
      </div>

      <div id="container" className="full-container">
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-4 col-lg-2">
              <LeftBar />
            </div>
            <div className="col-12 col-md-8 col-lg-7">
              <Posts />
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <RightBar />
            </div>
          </div>
        </div>
      </div>

      <AppLoading />
    </React.Fragment>
  );
}
