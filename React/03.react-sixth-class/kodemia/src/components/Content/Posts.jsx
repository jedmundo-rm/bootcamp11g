import React from "react";

import Post from "./Post";
import Styles from "./Posts.module.css";

// Rutas imagenes
import image from "../../images/photo-main.jpeg";

import imgReactions from "../../images/reaction-heart.svg";
import imgComments from "../../images/reaction-comment.svg";

import profile1 from "../../images/profiles/user2.webp";
import profile2 from "../../images/profiles/user3.webp";

class Content extends React.Component {
  render() {
    return (
      <section>
        <div className={`card ${Styles.AppCard}`}>
          <div className="card-body">
            <Post />
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
