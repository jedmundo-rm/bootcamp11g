import React from "react";

function AppButton({ className: classNameProp, type, text, url }) {
  const className = classNameProp ? classNameProp : "";

  if (type === "anchor") {
    return (
      <a href={`${url}`} className={`btn btn-link ${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button className={`btn ${className}`} type="button">
      {text}
    </button>
  );
}

export default AppButton;
