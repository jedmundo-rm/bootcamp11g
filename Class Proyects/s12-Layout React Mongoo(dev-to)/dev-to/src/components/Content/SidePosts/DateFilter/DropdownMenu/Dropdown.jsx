import React from "react";

import "./Dropdown.css";

class Dropdown extends React.Component {
  render() {
    return (
      <div className="App d-lg-none">
        <div className="container container-btn px-0">
          <button type="button" class="button">
            Feed &nbsp; &#x25BC;
          </button>
        </div>
      </div>
    );
  }
}

export default Dropdown;
