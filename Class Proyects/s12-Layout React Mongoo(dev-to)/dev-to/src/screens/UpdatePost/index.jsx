import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading";
import CustomInput from "../../components/CustomInput";
import Footer from "../../components/Footer";

import Styles from "./index.module.css"

import $ from "jquery";

// Services
import { patchPost, getPostDetail } from "../../services";

export default function UpdatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const request = async () => {
      const json = await getPostDetail(id);
      setTitle(json.title);
      setDescription(json.description);
      setAuthor(json.author);
      setImage(json.image);
    };
    request();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatePost = {
        title,
        description,
        image,
        author,
      };
      await patchPost(id, updatePost);
      history.push(`/posts/${id}`);
    } catch (error) {
      console.log(error);
    }
  };


  setTimeout(() => {
    $("#Image").hover(
      function () {
        $(".tooltip-image").fadeIn(300);
      },
      function () {
        $(".tooltip-image").fadeOut(300);
      }
    );

    $("#textarea").hover(
      function () {
        $(".tooltip-title").fadeIn(300);
      },
      function () {
        $(".tooltip-title").fadeOut(300);
      }
    );

    $("#tags").hover(
      function () {
        $(".tooltip-tags").fadeIn(300);
      },
      function () {
        $(".tooltip-tags").fadeOut(300);
      }
    );

    $("#Description").hover(
      function () {
        $(".tooltip-content").fadeIn(300);
      },
      function () {
        $(".tooltip-content").fadeOut(300);
      }
    );
  }, 1000);



  return (
    <React.Fragment>
      <Header />
      <div className="container container-fluid">
        <div className="cont-wrapp row">

          {/* Form Section */}

          <div className="col-12 col-md-8 p-3 my-md-4 shadow-sm rounded"
            id="form-wrapper">


            <form onSubmit={handleSubmit} id="form-new-post"
              className={`m-3 p-3 text-muted ${Styles.FormNewPost}`}>
              
              <h1 className="m-3 p-3 text-muted">Update Post</h1>
              
              <div className="form-group col-md-12">
                <CustomInput
                  id="Title"
                  placeholder="Title"
                  value={title}
                  callback={setTitle}
                />
              </div>
              <div className="form-group col-md-12">
                <CustomInput
                  id="Description"
                  placeholder="Description"
                  value={description}
                  callback={setDescription}
                />
              </div>
              <div className="form-group col-md-12">
                <CustomInput
                  id="Author"
                  placeholder="Author"
                  value={author}
                  callback={setAuthor}
                />
              </div>

              <div className="form-group col-md-12">
                <CustomInput
                  id="Image"
                  placeholder="Image"
                  value={image}
                  callback={setImage}
                />
              </div>

              <button className="btn btn-primary mt-2" type="submit">
                Update Post
              </button>
            </form>
          </div>


          {/* Tooltip Section */}

          <div className={`d-none d-md-block col-12 col-md-4 ${Styles.TooltipWrapper}`}>
            <div className={`${Styles.TooltipMod} tooltip-image center`}>
              <h4 className="mb-2 fs-l">Choose the correct image</h4>
              <ul className="list-disc pl-6 color-base-70">
                <li>
                  It’s important to choose an image that’s relevant to — and
                  reflective of — your content.{" "}
                </li>
                <li>
                  You don’t want to mislead users about what they’ll get when
                  they click, as that can erode brand trust, but you also need
                  to make sure the people who do click are actually interested
                  in the content.{" "}
                </li>
                <li>
                  The ultimate goal, after all, is to get social traffic that’s
                  qualified.
                </li>
              </ul>
            </div>

            <div className={`${Styles.TooltipMod} tooltip-title center`}>
              <h4 className="mb-2 fs-l">Writing a Great Post Title</h4>
              <ul className="list-disc pl-6 color-base-70">
                <li>
                  Think of your post title as a super short (but compelling!)
                  description — like an overview of the actual post in one short
                  sentence.
                </li>
                <li>
                  Use keywords where appropriate to help ensure people can find
                  your post by search.
                </li>
              </ul>
            </div>

            <div className={`${Styles.TooltipMod} tooltip-tags center`}>
              <h4 className="mb-2 fs-l">Tagging Guidelines</h4>
              <ul className="list-disc pl-6 color-base-70">
                <li>Tags help people find your post.</li>
                <li>
                  Think of tags as the topics or categories that best describe
                  your post.
                </li>
                <li>
                  Add up to four comma-separated tags per post. Combine tags to
                  reach the appropriate subcommunities.
                </li>
                <li>Use existing tags whenever possible.</li>
                <li>
                  Some tags, such as “help” or “healthydebate”, have special
                  posting guidelines.
                </li>
              </ul>
            </div>

            <div className={`${Styles.TooltipMod} tooltip-content center`}>
              <h4 className="mb-2 fs-l">Editor Basics</h4>
              <ul className="list-disc pl-6 color-base-70">
                <li>Use Markdown to write and format posts.</li>
                <li>
                  You can use Liquid tags to add rich content such as Tweets,
                  YouTube videos, etc.
                </li>
                <li>
                  In addition to images for the post's content, you can also
                  drag and drop a cover image
                </li>
                <li>
                  You can use Liquid tags to add rich content such as Tweets,
                  YouTube videos, etc.
                </li>
                <li>
                  {" "}
                  In addition to images for the post's content, you can also
                  drag and drop a cover image
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <Footer />
      <AppLoading />
    </React.Fragment>
  );
}
