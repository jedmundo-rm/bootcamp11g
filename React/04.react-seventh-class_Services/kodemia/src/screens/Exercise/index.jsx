import React, { useState } from "react";

import AppList from "../../components/Exercise/AppList";
import AppLogin from "../../components/Exercise/AppLogin";
import AppConverter from "../../components/Exercise/AppConverter";
import AppCreditCard from "../../components/Exercise/AppCreditCard";

import AppBusDatosArray from "../../components/Exercise/AppBusDatosArray";
import AppBusDatosObjeto from "../../components/Exercise/AppBusDatosObjeto";

export default function Exercise() {
  return (
    <React.Fragment>
      <AppList />
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6">
            <AppLogin />
          </div>
          <div className="col-6 col-md-6">
            <AppConverter />
          </div>
        </div>
      </div>
      <hr></hr>
      <AppCreditCard />
      <hr></hr>
      <AppBusDatosArray />
      <hr></hr>
      <AppBusDatosObjeto />
    </React.Fragment>
  );
}
