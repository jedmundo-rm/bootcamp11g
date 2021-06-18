import React, { useState, useEffect } from "react";

import ProfileMenu from "./ProfileMenu";
import Styles from "./ProfileMenu.module.css";

export default function Avatar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${Styles.NavbarToggler}`}
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <img
          className="avatar-img"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--WII7TlV1--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/591183/d3b74adc-3668-4cba-979e-3c9178a7190f.jpeg"
          alt=""
        />
      </button>
      <ProfileMenu open={open} />
    </>
  );
}
