import React, { useEffect, useState } from "react";

export default function Exercises() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => console.log(json));

    // fetch(
    //   "https://react-11g-default-rtdb.firebaseio.com/posts/-Mbsebb_ehLUGY0N0Y-X.json",
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/JSON",
    //     },
    //     body: JSON.stringify({
    //       title: "Mi perro",
    //       description: "Mi perrito esta ACTUALIZADO",
    //       author: "Mariana Limon",
    //       image:
    //         "https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg",
    //     }),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });
  }, []);

  const buildCard = ({ id, name, image }) => (
    <div key={id} className="col justify-content-center d-flex">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col justify-content-center d-flex flex-wrap">
          {posts.map(buildCard)}
        </div>
      </div>
    </div>
  );
}
