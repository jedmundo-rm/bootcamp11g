import React from "react";

class HeaderLogin extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.props = props;
  }

  render() {
    return <a className="btn btn-light mx-2">Login</a>;
  }
}

export default HeaderLogin;
