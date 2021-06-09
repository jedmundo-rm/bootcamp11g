import React, { useEffect, useState } from "react";

//import Styles from "./AppBusDatosObjeto.module.css";

const petsData = {
  dogs: [
    {
      name: "Sr. Peabody",
      age: "5",
    },
    {
      name: "Solovino",
      age: "10",
    },
  ],
  cats: [
    {
      name: "Misifu",
      age: "1",
    },
    {
      name: "Nefermishi",
      age: "5",
    },
  ],
};

function AppBusDatosObjeto() {
  const petsUI = Object.entries(petsData).map(([type, pets], index) => (
    <React.Fragment key={index}>
      <div className="card-header"> {type}</div>
      <ul className="list-group">
        {pets.map(({ name, age }, index) => (
          <li key={index} className="list-group-item">
            Name: {name}, age: {age}
          </li>
        ))}
      </ul>
    </React.Fragment>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">Pets / Objeto</div>
            <ul className="list-group list-group-flush">{petsUI}</ul>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default AppBusDatosObjeto;
