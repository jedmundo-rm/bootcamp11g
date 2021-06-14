import React from "react";

export default function CustomInput(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.id}</label>
      <input
        type={props.type ? props.type : "text"}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
        style={{
          color: "peru",
        }}
      />
    </React.Fragment>
  );
}
