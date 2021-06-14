import React, { useState } from "react";

import AppLogin from "../../components/Exercise/AppLogin";

export default function Login() {
  return (
    <React.Fragment>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <AppLogin />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
