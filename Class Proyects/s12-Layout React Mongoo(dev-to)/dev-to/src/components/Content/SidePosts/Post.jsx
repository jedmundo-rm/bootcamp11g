import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import Styles from "./Post.module.css";

// Rutas imagenes
import imgArticleImg from "../../../images/photo-main.jpeg";

import profile1 from "../../../images/profiles/user2.webp";
import profile2 from "../../../images/profiles/user3.webp";
import profile3 from "../../../images/profiles/user4.webp";

import imgReactions from "../../../images/reaction-heart.svg";
import imgComments from "../../../images/reaction-comment.svg";

export default function Post(props) {
  return (
    <React.Fragment>
      <div key={props.id} className={`card ${Styles.AppCard}`}>
        <div className="card-body p-0">
          <li className={`card mb-0 ${Styles.CardContainer}`}>
            {/* Imagen del Post */}
            <div className={`${Styles.ArticleImg}`}>
              <img className={`w-2`} src={`${props.coverUrl}`} />
            </div>
            {/* Card Info */}
            <div className={`${Styles.CardInfo}`}>
              {/* Author */}
              <div className={`${Styles.autor}`}>
                <img
                  className={`rounded-circle border border-secondary ${Styles.profile}`}
                  src={props.userPic}
                />
                <div className={`${Styles.autorName}`}>
                  <div>{props.userName}</div>
                  <div>
                    <Moment format="D MMM YYYY" withTitle>
                      {props.creationDate}
                    </Moment>{" "}
                    -{" "}
                    <Moment fromNow ago>
                      {props.creationDate}
                    </Moment>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div>
                <h2 className={`${Styles.cardTitle} pl-0 pl-md-3`}>
                  <a href={`./posts/${props.id}`}>{props.title}</a>
                </h2>
              </div>
              {/* Tags */}
              <div className={`${Styles.tags}`}>
                <a href="#">
                  <span>#</span>beginners
                </a>
                <a href="#">
                  <span>#</span>productivity
                </a>
                <a href="#">
                  <span>#</span>javascript
                </a>
                <a href="#">
                  <span>#</span>webdev
                </a>
              </div>
              {/* Reactions */}
              <div className={`${Styles.reactions} container`}>
                <div className="row">
                  <div
                    className={`${Styles.reactionsLeft} col-7 col-md-7 col-lg-8`}
                  >
                    <a href="#">
                      <img src={`${imgReactions}`} />
                      <span>{props.likes}</span>
                      <span className="react-text d-none d-md-block">
                        {" "}
                        &nbsp;reactions
                      </span>
                    </a>
                    <a href="#">
                      <img src={imgComments} />
                      <span>{props.likes}</span>
                      <span className="react-text d-none d-md-block">
                        {" "}
                        &nbsp;comments
                      </span>
                    </a>
                  </div>

                  <div
                    className={`${Styles.reactionsRight} col-5 col-md-5 col-lg-4`}
                  >
                    <span>{props.duration} read</span>
                    <button>Save</button>
                  </div>
                </div>
              </div>{" "}
              {/* End Reactions */}
            </div>{" "}
            {/* End Card Info */}
          </li>
        </div>
      </div>
    </React.Fragment>
  );
}
