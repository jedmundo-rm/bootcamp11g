import React from "react";

//import Styles from "./AppBusDatosArray.module.css";

const petsData = [
  {
    name: "Sr. Peabody",
    age: "5",
  },
  {
    name: "Misifu",
    age: "1",
  },
  {
    name: "Solovino",
    age: "10",
  },
  {
    name: "Nefermishi",
    age: "5",
  },
];

function AppBusDatosArray() {
  const petsUI = petsData
    .filter(({ age }) => Number(age) === 5)
    .map(({ name, age }, index, array) => (
      <li key={index} className="list-group-item">
        Name: {name}, Age: {age}
      </li>
    ));

  const buildLIPets = ({ name, age }, index) => (
    <li key={index} className="list-group-item">
      Name: {name}, age: {age}
    </li>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-header">Pets / con filter y map</div>
            <ul className="list-group list-group-flush">{petsUI}</ul>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">Pets / con funcion build()</div>
            <ul className="list-group list-group-flush">
              {petsData.map(buildLIPets)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBusDatosArray;
