import React from "react";

import { useHistory } from "react-router";

import Post from "./Post";

export default function Content(props) {
  const history = useHistory();

  const buildPosts = (
    [
      key,
      {
        _id: id,
        content,
        coverUrl,
        creationDate,
        duration,
        likes,
        tags,
        title,
        userId,
      },
    ],
    index
  ) => {
    return (
      <React.Fragment key={index}>
        <Post
          id={id}
          content={content}
          coverUrl={coverUrl}
          creationDate={creationDate}
          duration={duration}
          likes={likes}
          tags={tags}
          title={title}
          userId={userId._id}
          userName={userId.userName}
          userPic={userId.userPic}
        />
      </React.Fragment>
    );
  };

  return <section>{props.data.reverse().map(buildPosts)}</section>;
}
