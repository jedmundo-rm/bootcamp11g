import React, { useEffect, useState } from "react";

import Styles from "./Post.module.css";

// Rutas imagenes
import imgArticleImg from "../../images/photo-main.jpeg";

import profile1 from "../../images/profiles/user2.webp";
import profile2 from "../../images/profiles/user3.webp";
import profile3 from "../../images/profiles/user4.webp";

import imgReactions from "../../images/reaction-heart.svg";
import imgComments from "../../images/reaction-comment.svg";

const postsData = {
  post1: [
    {
      title: "Diagnosing Performance Issues",
      articleImg: imgArticleImg,
      author: "Maria",
      authorImg: profile1,
      date: "Ene 6",
      reactions: "10",
      comments: "5",
      read: "2",
    },
  ],
  post2: [
    {
      title:
        "I landed my first dev job after 6 months of building projects. Here's my story!",
      articleImg: imgArticleImg,
      author: "Gustavo",
      authorImg: profile2,
      date: "May 8",
      reactions: "20",
      comments: "2",
      read: "5",
    },
  ],
  post3: [
    {
      title: "Vue.js vs. React — Not Your Usual Comparison",
      articleImg: imgArticleImg,
      author: "Domagoj Vidovic",
      authorImg: profile3,
      date: "Jun 7",
      reactions: "60",
      comments: "7",
      read: "15",
    },
  ],
};

function Post() {
  const postsUI = Object.entries(postsData).map(([type, posts], index) => (
    <React.Fragment>
      {posts.map(
        ({title, articleImg, author, authorImg, date, reactions, comments, read}, index) => (
          
          <div className={`card ${Styles.CardContainer}`} key={index}>

            {/* Imagen del Post */}
            <div className={`${Styles.ArticleImg}`}>
              <img className={`w-2`} src={`${articleImg}`} />
            </div>

            {/* Card Info */}
            <div className={`${Styles.CardInfo}`}>
              {/* Author */}
              <div className={`${Styles.autor}`}>
                <img className={`rounded-circle border border-secondary ${Styles.profile}`} src={authorImg}/>
                <div className={`${Styles.autorName}`}>
                  <div>{author}</div>
                  <div>{date}</div>
                </div>
              </div>
              {/* Title */}
              <div>
                <h2 className={`${Styles.cardTitle}`}>
                  <a href="./">{title}</a>
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
              <div className={`${Styles.reactions}`}>
                <div className={`${Styles.reactLeft}`}>
                  <a href="#">
                    <img src={`${imgReactions}`} />
                    <span>{reactions}</span>
                    <span className="react-text"> &nbsp;reactions</span>
                  </a>
                  <a href="#">
                    <img src={imgComments} />
                    <span>{comments}</span>
                    <span className="react-text"> &nbsp;comments</span>
                  </a>
                </div>
                <div className="react-right">
                  <span>{read} min read</span>
                  <button>Save</button>
                </div>
              </div> {/* End Reactions */}
            </div> {/* End Card Info */}
          </div>
        )
      )}
    </React.Fragment>
  ));

  return (
    <div className="container">
      <div className="row">{postsUI}</div>
    </div>
  );
}

export default Post;
