import React, { useState, useEffect } from "react";
import Moment from "react-moment";

import { useParams, useHistory } from "react-router";

// Services
import {
  getPostDetail,
  getRepliesByPost,
  getUserDetail,
  postReply,
} from "../../services";

//Components
import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";
import Footer from "../../components/Footer";

// Images
import imgFlag from "../../images/leftbar/icon-flag.svg";
import imgUnicorn from "../../images/leftbar/icon-unicorn.svg";
import imgDots from "../../images/leftbar/icon-dots.svg";
import imgHeart from "../../images/leftbar/icon-heart.svg";

import Styles from "./index.module.css";

export default function PostDetail() {
  const [data, setData] = useState({});
  const [author, setAuthor] = useState({});
  const [replies, setReplies] = useState({});
  const [userLogged, setUserLogged] = useState({});
  const [userComment, setUserComment] = useState("");

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setData(json);

      const jsonAuthor = await getUserDetail(json.userId);
      setAuthor(jsonAuthor);

      const jsonReplies = await getRepliesByPost(id);
      setReplies(jsonReplies);

      const userLoggedID = localStorage.getItem("id");
      if (userLoggedID) {
        console.log("logged:", true);
        const jsonUserLogged = await getUserDetail(userLoggedID);
        setUserLogged(jsonUserLogged);
      }
    };
    request();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newReply = {
        content: userComment,
        post: data._id,
        userId: userLogged._id,
      };
      console.log(newReply);
      setUserComment("");
      const reply = await postReply(newReply);
      if (reply.success) {
        const jsonReplies = await getRepliesByPost(id);
        setReplies(jsonReplies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buildTags = (tag, index) => {
    return (
      <React.Fragment key={index}>
        <span className={`${Styles.PostTags}`}>
          <a href="#"> {tag} </a>
        </span>
      </React.Fragment>
    );
  };

  const buildReplies = (
    { _id, content, creationDate, post, userId },
    index
  ) => {
    return (
      <li className="list-group-item" key={_id}>
        <div className="reply-box">
          <h4 id="index">
            <div className="d-flex flex-row mb-3">
              <img
                src={userId.userPic}
                alt={userId.userName}
                className="img-profile rounded-circle mr-2"
              />
              <a className="my-auto text-color-title">{userId.userName}</a>
            </div>
          </h4>

          <p className="mb-0 text-muted comment-text">{content}</p>
          <p className="mb-0 text-right text-muted comment-date">
            <span className="date">
              <Moment format="D MMM YYYY" withTitle>
                {creationDate}
              </Moment>
            </span>
            <span className="text-color-icon text-size-icon mx-2 ">•</span>
            <span className="time">
              <Moment fromNow ago>
                {creationDate}
              </Moment>
            </span>
          </p>
        </div>
      </li>
    );
  };
  const buildUserInfo = () => {
    if (!userLogged._id) {
      return (
        <div className="d-flex flex-row justify-content-between mb-4">
          <h2 className="font-weight-bold m-0 my-auto">
            Discussion (<span className="count-replies">{replies.length}</span>)
          </h2>
          <div className="w-10">
            <img
              src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              alt="Inicia Sesion"
              className="img-profile rounded-circle post-user-avatar"
              onClick={(event) => history.push(`/login`)}
            />
          </div>
        </div>
      );
    }

    return (
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="d-flex flex-row justify-content-between mb-4">
          <h2 className="font-weight-bold m-0 my-auto">
            Discussion (<span className="count-replies">{replies.length}</span>)
          </h2>
          <div className="form-group mt-2">
            <button
              className="btn-outline-suscribe rounded btn-save-replie btn btn-commit"
              type="submit"
              disabled={!userComment}
            >
              Send
            </button>
          </div>
        </div>
        <div className="d-flex flex-row mb-3 mx-3">
          <div className="">
            <img
              src={userLogged.userPic}
              alt={userLogged.userName}
              className="img-profile rounded-circle post-user-avatar"
            />
          </div>

          <div className="form-group mb-2 area-commits">
            <textarea
              id="post-reply"
              placeholder="Add to the discussion"
              rows="2"
              className="rounded w-100 area-commit"
              onChange={(event) => setUserComment(event.target.value)}
              value={userComment}
            />
          </div>
        </div>
      </form>
    );
  };
  return (
    <React.Fragment key={data.id}>
      <Header />
      <div className="container">
        <div className="row justify-content-lg-around m-3">
          <section className={`${Styles.LeftSide} d-none d-md-block col-md-1`}>
            <ul className={`${Styles.MenuInnerPost}`}>
              <li>
                <div>
                  <img src={imgHeart} />
                </div>
                2
              </li>
              <li>
                <div>
                  <img src={imgUnicorn} />
                </div>
                1
              </li>
              <li>
                <div>
                  <img src={imgFlag} />
                </div>
                0
              </li>
              <li>
                <div>
                  <img src={imgDots} />
                </div>
              </li>
            </ul>
          </section>

          <section
            className={`${Styles.PostWrapper} card col-12 shadow-sm mb-3 px-0 order-md-2 col-md-11 col-lg-8 bg-white`}
          >
            <img
              alt={data.title && data.title}
              src={data.coverUrl && data.coverUrl}
              className="w-100 rounded-top post-cover-img"
            />
            <div className="d-flex flex-column px-3 py-2 px-md-3 p-lg-5">
              <h1 className="font-weight-bold mb-3 post-title">
                {data.title && data.title}
              </h1>

              <div className="d-flex flex-row w-100 mb-3 post-tags">
                {data.tags && data.tags.map(buildTags)}
              </div>

              <div className="d-flex flex-row align-items-center mb-3">
                {/* Image Author */}
                <div className="col-1">
                  <img
                    src={author.userPic && author.userPic}
                    alt={author.userName && author.userName}
                    className="img-profile rounded-circle mr-2 post-avatar "
                  />
                </div>

                {/* Creation and Read */}
                <div className="col-11">
                  {/* Creation */}
                  <div className="col-12">
                    <a
                      className={`${Styles.Author} my-auto text-color-title post-creation`}
                    >
                      {author.userName && author.userName}
                      {"  "}
                    </a>
                  </div>
                  {/* Read */}
                  <div className="col-12">
                    <span className={`${Styles.Creation} my-3`}>
                      <Moment format="D MMM YYYY" withTitle>
                        {data.creationDate && data.creationDate}
                      </Moment>{" "}
                      ・ {data.duration && data.duration} read
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`${Styles.Content}`}
                dangerouslySetInnerHTML={{
                  __html: data.content && data.content,
                }}
              ></div>

              <div className="col m-5">
                <button
                  onClick={() => history.push(`/posts/${id}/update`)}
                  className={`btn btn-warning ${
                    userLogged._id != author._id && "d-none"
                  }`}
                >
                  Edit
                </button>
              </div>
            </div>

            <div className="d-flex flex-column p-2 p-lg-5">
              {buildUserInfo()}
              <ul className="" id="replies-wrapper">
                {replies.length > 0 && replies.map(buildReplies)}
              </ul>
              <div className="d-flex flex-row justify-content-center py-4">
                <a
                  href="#"
                  className="text-color-icon text-size-icon hover-conduct"
                >
                  Code of conduct
                </a>
                <span className="text-color-icon text-size-icon mx-2 ">•</span>
                <a
                  href="#"
                  className="text-color-icon text-size-icon hover-conduct"
                >
                  Report abuse
                </a>
              </div>
            </div>
          </section>

          <aside className="d-none col-12 mb-3 px-0 order-md-3 col-md-11 d-lg-block col-lg-3 px-lg-2">
            <div
              className={`card shadow-sm rounded mb-3 ${Styles.AuthorWrapper}`}
            >
              <div className="bg-post-header w-100 pt-6 rounded-top position-relative"></div>
              <div className={`d-flex ${Styles.AuthorHeader}`}>
                <img
                  src={author.userPic && author.userPic}
                  alt={author.userName && author.userName}
                  className="img-profile-2 img-profile  rounded-circle mr-2 perfil-avatar"
                />
                <h4 className="font-weight-bold d-flex align-items-end perfil-name">
                  {author.userName && author.userName}
                </h4>
              </div>
              <div className={`card-body ${Styles.AuthorInfo}`}>
                <p className="text-size-paragraph text-color-card-black perfil-description">
                  {author.description && author.description}
                </p>
                <button className="btn btn-primary w-100 my-2 rounded">
                  Follow {author.userNickname && author.userNickname}
                </button>
                <div className="d-flex flex-column mt-3">
                  <span>Work</span>
                  <p className="text-size-paragraph perfil-work">
                    {author.work && author.work}
                  </p>
                </div>
                <div className="d-flex flex-column">
                  <span>Location</span>
                  <p className="text-size-paragraph perfil-location">
                    {author.location && author.location}
                  </p>
                </div>
              </div>
            </div>

            <div className={`card bg-card shadow-sm ${Styles.MoreFrom}`}>
              <div className={`${Styles.Title}`}>
                <div className="card-body">
                  <h4 className="text-color-title my-2">
                    More from{" "}
                    <a href="#" className="perfil-name">
                      {author.userName && author.userName}
                    </a>
                  </h4>
                </div>
              </div>

              <div className={`${Styles.AllArticles}`}>
                <div className={`${Styles.Article}`}>
                  <div className="card-body">
                    <a href="#" className="text-color-title">
                      Integrate Okta to Node, Express, and VUe
                    </a>
                    <div className={`${Styles.Tags}`}>
                      <span>#webdev</span>
                      <span>#node</span>
                      <span>#vue</span>
                      <span>#tutorial</span>
                    </div>
                  </div>
                </div>

                <div className={`${Styles.Article}`}>
                  <div className="card-body">
                    <a href="#" className="text-color-title">
                      AWS ECR or Docker Hub
                    </a>
                    <div className={`${Styles.Tags}`}>
                      <span>#docker</span>
                      <span>#webdev</span>
                      <span>#tutorial</span>
                      <span>#node</span>
                    </div>
                  </div>
                </div>

                <div className={`${Styles.Article}`}>
                  <div className="card-body">
                    <a href="#" className="text-color-title">
                      Docker, Node, and Vue
                    </a>
                    <div className={`${Styles.Tags}`}>
                      <span>#webdev</span>
                      <span>#docker</span>
                      <span>#vue</span>
                      <span>#tutorial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <AppLoading />
    </React.Fragment>
  );
}
