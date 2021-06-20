import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

import CustomInput from "../../components/CustomInput";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Styles from "./index.module.css";

// Services
import { postLogin } from "../../services";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        email,
        password,
      };

      const login = await postLogin(newUser);

      if (login.success) {
        const { token, mail, _id } = login.data;
        localStorage.setItem("token", token);
        localStorage.setItem("email", mail);
        localStorage.setItem("id", _id);

        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />

      <div className={`${Styles.Contenedor} container container-fluid`}>
        <div className="cont-wrapp row">
          <section className="col-12 col-md-8 col-lg-6 mx-auto bg-white1 p-3 p-lg-5 shadow">
            <div className="text-center">
              <h1 className="font-weight-bold">Log In</h1>
              <p className="pb-3">
                Have a account? Continue with your email address ans password
              </p>
            </div>

            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <CustomInput
                  id="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  callback={setEmail}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  callback={setPassword}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
