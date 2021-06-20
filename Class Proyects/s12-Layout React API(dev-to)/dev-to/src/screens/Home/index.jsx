// import React from "react";
import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";

import AppLoading from "../../components/AppLoading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "../../components/Content/SideBarLeft";
import Posts from "../../components/Content/SidePosts";
import AsideCards from "../../components/Content/SideBarRight";
import DateFilter from "../../components/Content/SidePosts/DateFilter";

// Services
import { getPosts } from "../../services";

export default function Home() {
  const [data, setData] = useState({});

  const history = useHistory();

  useEffect(() => {
    const request = async () => {
      const json = await getPosts();
      setData(json);
    };
    request();
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <Header />
      <div
        className="container mt-3
      "
      >
        <div className="row">
          <div className="d-none d-md-block col-md-4 col-lg-2">
            <Content />
          </div>
          <div className="col-12 col-md-8 col-lg-7">
            <DateFilter />
            <Posts
              data={Object.entries(data).length ? Object.entries(data) : []}
            />
            {/* <div className="col">
              <button
                onClick={() => history.push("/createPost")}
                className="btn btn-primary"
              >
                Add Post
              </button>
            </div> */}
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <AsideCards />
          </div>
        </div>
      </div>
      <Footer />
      <AppLoading />
    </React.Fragment>
  );
}
