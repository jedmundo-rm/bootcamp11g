import React, { useState } from "react";

import "./styles.css";

export default function Challenge() {
  const [activeItem, setActiveItem] = useState(0);

  const menu = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div className="container pt-5">
      <ul className="ulChallenge">
        {menu.map((item, index) => (
          <li
            className={activeItem === index ? "active" : null}
            onClick={() => setActiveItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <div className="container pt-5">
  //     <ul>
  //       <li
  //         className={activeItem === 1 ? "active" : null}
  //         onClick={() => setActiveItem(1)}
  //       >
  //         Item 1
  //       </li>
  //       <li
  //         className={activeItem === 2 ? "active" : null}
  //         onClick={() => setActiveItem(2)}
  //       >
  //         Item 2
  //       </li>
  //       <li
  //         className={activeItem === 3 ? "active" : null}
  //         onClick={() => setActiveItem(3)}
  //       >
  //         Item 3
  //       </li>
  //       <li
  //         className={activeItem === 4 ? "active" : null}
  //         onClick={() => setActiveItem(4)}
  //       >
  //         Item 4
  //       </li>
  //       <li
  //         className={activeItem === 5 ? "active" : null}
  //         onClick={() => setActiveItem(5)}
  //       >
  //         Item 5
  //       </li>
  //     </ul>
  //   </div>
  // );
}
