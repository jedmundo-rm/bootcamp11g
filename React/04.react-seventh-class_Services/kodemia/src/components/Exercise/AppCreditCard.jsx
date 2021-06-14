import React, { useState } from "react";

import Styles from "./AppCreditCard.module.css";

function AppCreditCard() {
  const [CardName, setName] = useState(0);
  const [CardNumber, setNumber] = useState(12345678910);
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
                  maxlength="16"
                  size="16"
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
              <img src="https://uploads.codesandbox.io/uploads/user/9627457b-a2c6-4404-a096-5bba28212380/ILMT-visa-logo.png" />
            </div>
            <h3>Nombre</h3>
            <p className="text-white">{String(CardName)}</p>

            <h3>No. de Tarjeta</h3>
            {/* <p className="text-white">{Number(CardNumber)}</p> */}
            <p className="text-white">
              {/* {CardNumber.substring(0, 4) +
                "-" +
                CardNumber.substring(4, 8) +
                "-" +
                CardNumber.substring(8, 12) +
                "-" +
                CardNumber.substring(12, 16)} */}
            </p>

            <h3>Fecha de Expiracion</h3>
            <p className="text-white">{Number(CardDate)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCreditCard;
