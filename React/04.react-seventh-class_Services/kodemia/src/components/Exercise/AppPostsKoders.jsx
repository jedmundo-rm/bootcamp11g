import React from "react";


class AppPostsKoders extends React.Component {
  constructor(props) {
    super(props);
  }

  buildLI([key, { title, description }]) {
    return (

    <div className="container">
      <div className="row">
        <section>
          <div className={`card`}>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">
                Go to Post
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
    );

    
  }

  render() {
    console.log(this.props);
    return (
      <ul className="d-flex flex-column">
        {this.props.data.reverse().map(this.buildLI)}
      </ul>
    );
  }
}

export default AppPostsKoders;
