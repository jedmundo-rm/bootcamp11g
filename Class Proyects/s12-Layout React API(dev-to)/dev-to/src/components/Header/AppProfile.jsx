import React, { useState, useEffect } from "react";

//import ListMenu from "./ListMenu";
import "./appProfile.css";
import { getUserDetail } from "../../services";
export default function AppProfile() {
  const [session, setSession] = useState(false);
  const [imageUser, setImageUser] = useState("");

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      setSession(true);
      const dataUser = await getUserDetail(localStorage.getItem("id"));
      //console.log(dataUser);
      setImageUser(dataUser.userPic);
    }
  }, []);

  return (
    <a
      id="dropdownMenu2"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      className={`${!session ? "d-none" : ""}`}
    >
      <span>
        <img
          src={imageUser}
          alt=""
          className="ml-3 mr-md-0 user-dropdown-pic"
        />
      </span>
    </a>
  );
}
