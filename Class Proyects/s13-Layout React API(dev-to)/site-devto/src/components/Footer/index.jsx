import React from "react";

import MenuFooter from "./MenuFooter";
import SocialMenu from "./SocialMenu";
import Legals from "./Legals";

import "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container footer">
          <div className="row">
            <div className="col">
              <MenuFooter />
              <SocialMenu />
              <hr className="w-25 mx-auto" />
              <Legals />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
