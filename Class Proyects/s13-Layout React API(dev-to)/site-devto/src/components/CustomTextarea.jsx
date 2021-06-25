import React from "react";
import "./customTextarea.css";

export default function CustomTextarea(props) {
  return (
    <React.Fragment>
      <textarea
        className={`form-control ${props.style}`}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
      />
    </React.Fragment>
  );
}
