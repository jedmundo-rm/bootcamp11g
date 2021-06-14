import React, { useEffect, useState } from "react";

import AppLoading from "../../components/AppLoading";

import Header from "../../components/Header/index";

import LeftBar from "../../components/LeftBar/index";

import AppPostsKoders from "../../components/Exercise/AppPostsKoders";

import RightBar from "../../components/RightBar/index";


export default function PostsKoders() {

  const [data, setData] = useState({});


  useEffect(() => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data.results);

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
            <div className="d-none d-md-block col-md-4 col-lg-3">
              <LeftBar />
            </div>
            <div className="col-12 col-md-8 col-lg-6">
              <AppPostsKoders data={Object.entries(data).length ? Object.entries(data) : []}/>
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
