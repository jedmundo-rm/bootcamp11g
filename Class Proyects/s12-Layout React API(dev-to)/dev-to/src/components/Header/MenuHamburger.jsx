import React, { useState, useEffect } from "react";


import ListMenu from "./ListMenu";
import Styles from "./MenuHamburger.module.css"

export default function MenuHamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${Styles.NavbarToggler} d-block d-md-none`}
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
        >
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
        </svg>
      </button>
      <ListMenu open={open} />
    </>
  );
}
