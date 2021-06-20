import React from "react";

import { useHistory } from "react-router";

import AppCard from "./AppCard";

export default function Posts(props) {
  const history = useHistory();

  const buildLI = ([key, { title, description }]) => {
    return (
      <li key={key}>
        <AppCard>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={() => history.push(`/posts/${key}`)}
            className="btn btn-primary"
          >
            Detail
          </button>
        </AppCard>
      </li>
    );
  };

  return (
    <ul className="d-flex flex-column">{props.data.reverse().map(buildLI)}</ul>
  );
}
