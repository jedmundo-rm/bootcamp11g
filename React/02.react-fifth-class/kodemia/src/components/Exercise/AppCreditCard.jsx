import React, { useEffect, useState } from "react";

import Styles from "./AppCreditCard.module.css";

function AppCreditCard() {
  const [CardName, setName] = useState(0);
  const [CardNumber, setNumber] = useState(0);
  const [CardDate, setDate] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="border align-items-center p-5">
            <form>
              <div className="form-group col-12">
                <label className="text-black" htmlFor="NameInput">
                  Nombre
                </label>
                <input
                  type="string"
                  className="form-control"
                  id="NameInput"
                  placeholder="Enter Name"
                  value={String(CardName)}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-black" htmlFor="CardInput">
                  No. de tarjeta
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="CardInput"
                  placeholder="Enter Card Number"
                  value={Number(CardNumber)}
                  onChange={({ target: { value } }) => {
                    setNumber(value);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-black" htmlFor="DateInput">
                  Fecha Exp.
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="DateInput"
                  placeholder="Enter Date"
                  value={Date(CardDate)}
                  onChange={({ target: { value } }) => {
                    setDate(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-6">
          <div className={`${Styles.DebitCard} rounded p-5`}>
            <div className="col-12">
              <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png" />
            </div>
            <h3>Nombre</h3>
            <p className="text-white">{String(CardName)}</p>
            <h3>No. de Tarjeta</h3>
            <p className="text-white">{Number(CardNumber)}</p>
            <h3>Fecha de Expiracion</h3>
            <p className="text-white">{Number(CardDate)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCreditCard;
