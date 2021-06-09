import React from "react";

import AppCard from "./AppCard";

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
        <AppCard>
          <img
            src={image}
            className={`card-img-top ${Styles.cardImg}`}
            alt="..."
          ></img>

          <div className={`${Styles.autor}`}>
            <img
              className={`rounded-circle border border-secondary ${Styles.profile}`}
              src={`${profile1}`}
            />
            <div className={`${Styles.autorName}`}>
              <div>{`Maria`}</div>
              <div>{`8 May`}</div>
            </div>
          </div>

          <div>
            <h2 className={`${Styles.cardTitle}`}>
              <a href="post.html">Diagnosing Performance Issues 💻</a>
            </h2>
          </div>

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

          <div className={`${Styles.reactions}`}>
            <div className={`${Styles.reactLeft}`}>
              <a href="#">
                <img src={`${imgReactions}`} />
                <span>10</span>
                <span className="react-text"> &nbsp;reactions</span>
              </a>
              <a href="#">
                <img src={imgComments} />
                <span>5</span>
                <span className="react-text"> &nbsp;comments</span>
              </a>
            </div>
            <div className="react-right">
              <span>5 min read</span>
              <button>Save</button>
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className={`${Styles.autor}`}>
            <img
              className={`rounded-circle border border-secondary ${Styles.profile}`}
              src={`${profile2}`}
            />
            <div className={`${Styles.autorName}`}>
              <div>{`Gustavo`}</div>
              <div>{`8 Ene`}</div>
            </div>
          </div>
          <div>
            <h2 className={`${Styles.cardTitle}`}>
              <a href="./">
                I landed my first dev job after 6 months of building projects.
                Here's my story!
              </a>
            </h2>
          </div>

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

          <div className={`${Styles.reactions}`}>
            <div className={`${Styles.reactLeft}`}>
              <a href="#">
                <img src={`${imgReactions}`} />
                <span>20</span>
                <span className="react-text"> &nbsp;reactions</span>
              </a>
              <a href="#">
                <img src={imgComments} />
                <span>2</span>
                <span className="react-text"> &nbsp;comments</span>
              </a>
            </div>
            <div className="react-right">
              <span>5 min read</span>
              <button>Save</button>
            </div>
          </div>
        </AppCard>
      </section>
    );
  }
}

export default Content;
