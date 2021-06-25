import React, { useState } from "react";

import "./ProfileMenu.module.css";

export default function ProfileMenu() {
  const [activeItem, setActiveItem] = useState(0);

  const menu = ["Nombre", "Item 2", "Item 3", "Item 4", "Cerrar Sesión"];

  return (
    <div className={` d-block d-md-none`}>
      <div className="container pt-5">
        <ul className="ulChallenge">
          {menu.map((item, index) => (
            <li
              className={`li-profile ${activeItem === index ? "active" : null}`}
              onClick={() => setActiveItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
