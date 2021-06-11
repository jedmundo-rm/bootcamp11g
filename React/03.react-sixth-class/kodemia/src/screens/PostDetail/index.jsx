import React, { useState, useEffect } from "react";

import { useHistory , useParams} from "react-router";

import Header from "../../components/Header";
import AppLoading from "../../components/AppLoading"



export default function PostDetail() {

    const [data, setData] = useState({})

  const history = useHistory();

    const {id} = useParams();
    console.log('id:', id)

    useEffect(() => {
        fetch(`https://react-11g-default-rtdb.firebaseio.com/posts/${id}.json`)
        .then(response => response.json())
        .then(json => setData(json))
    })

  return (
    <React.Fragment>
      <div id="navbar" className="full-container">
        <div className="container">
          <div className="row">
            <Header />
          </div>
        </div>
      </div>

      <div id="container" className="full-container">
        <div className="container">
          <div className="row">
            
            <h1>{data.title && data.title}</h1>
            <img src={data.image && data.image} />
            <p>{data.description && data.description}</p>
            <p>{data.author && data.author}</p>
          </div>
        </div>
      </div>

      <AppLoading />
    </React.Fragment>


  );
}