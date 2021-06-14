import React, { useState } from "react";

import Styles from "./AppList.module.css";

function AppList() {
  const [activeItem, setActiveItem] = useState(0);

  const handleClick = (element) => {
    setActiveItem(element);
  };

  const menu = ["item1", "item2", "item3", "item4"];

  return (
    <div>
      {/* <ul className={`list-group ${Styles.ListGroup}`}>
        <li
          className={`list-group-item ${activeItem === 1 ? "active" : null}`}
          onClick={() => handleClick(1)}
        >
          Cras justo odio
        </li>
        <li
          className={`list-group-item ${activeItem === 2 ? "active" : null}`}
          onClick={() => handleClick(2)}
        >
          Dapibus ac facilisis in
        </li>
        <li
          className={`list-group-item ${activeItem === 3 ? "active" : null}`}
          onClick={() => handleClick(3)}
        >
          Morbi leo risus
        </li>
        <li
          className={`list-group-item ${activeItem === 4 ? "active" : null}`}
          onClick={() => handleClick(4)}
        >
          Porta ac consectetur ac
        </li>
        <li
          className={`list-group-item ${activeItem === 5 ? "active" : null}`}
          onClick={() => handleClick(5)}
        >
          Vestibulum at eros
        </li>
      </ul> */}

      <ul className={`list-group ${Styles.ListGroup}`}>
        {menu.map((item, index) => (
          <li
            className={`list-group-item ${
              activeItem === index + 1 ? "active" : null
            }`}
            onClick={() => setActiveItem(index + 1)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppList;
