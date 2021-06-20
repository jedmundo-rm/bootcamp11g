import React, { useState } from "react";

import { useHistory } from "react-router";
import CustomInput from "../../components/CustomInput";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";
import Styles from "./index.module.css";
import { postUser } from "../../services";

export default function CreateAccount() {
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userPic, setUserPic] = useState("");
  const [work, setWork] = useState("");
  const [location, setLocation] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        userName,
        userNickname,
        userPic,
        work,
        location,
        mail,
        password,
        description,
      };
      await postUser(newUser);
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Header />
      <div className={`${Styles.Contenedor} container container-fluid`}>
        <div className="cont-wrapp row">
          <section className="col-12 col-md-8 mx-auto bg-white1 p-3 p-lg-5 my-md-3 shadow">
            <div className="text-center">
              <h1 className="font-weight-bold">Welcome to DEV Community</h1>
              <p className="pb-3">
                DEV Community is a community of 606,615 amazing developers
              </p>
            </div>

            <form id="form-users" onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <CustomInput
                  id="Nombre de usuario"
                  placeholder=""
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                  callback={setUserName}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Nombre Completo"
                  placeholder=""
                  value={userNickname}
                  onChange={(event) => setUserNickname(event.target.value)}
                  callback={setUserNickname}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="URL Imagen"
                  placeholder=""
                  value={userPic}
                  onChange={(event) => setUserPic(event.target.value)}
                  callback={setUserPic}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Empresa"
                  placeholder=""
                  value={work}
                  onChange={(event) => setWork(event.target.value)}
                  callback={setWork}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Ubicación del usuario"
                  placeholder=""
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  callback={setLocation}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Correo electrónico"
                  placeholder=""
                  value={mail}
                  onChange={(event) => setEmail(event.target.value)}
                  callback={setEmail}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Contraseña"
                  type="password"
                  placeholder=""
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  callback={setPassword}
                />
              </div>
              <div className="form-group mb-2">
                <CustomInput
                  id="Descripción"
                  placeholder=""
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  callback={setDescription}
                />
              </div>
              <br />
              <button
                className={`${Styles.BtnCreate} btn text-white w-100`}
                type="submit"
              >
                Registrar usuario
              </button>
            </form>
          </section>

          <div className={`${Styles.RegistrationFooter} py-4`}>
            <p className="registration_footer-content">
              We strive for transparency and don't collect excess data.
            </p>
            <p className="registration_footer-content">
              Open Source
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
                width="24"
                height="24"
              >
                <path
                  fill="#FFCC4D"
                  d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#292F33"
                  d="M1.24 11.018c.24.239 1.438.957 1.677 1.675.24.717.72 4.784 2.158 5.981 1.483 1.232 7.077.774 8.148.24 2.397-1.195 2.691-4.531 3.115-6.221.239-.957 1.677-.957 1.677-.957s1.438 0 1.678.956c.424 1.691.72 5.027 3.115 6.221 1.072.535 6.666.994 8.151-.238 1.436-1.197 1.915-5.264 2.155-5.982.238-.717 1.438-1.435 1.677-1.674.241-.239.241-1.196 0-1.436-.479-.478-6.134-.904-12.223-.239-1.215.133-1.677.478-4.554.478-2.875 0-3.339-.346-4.553-.478-6.085-.666-11.741-.24-12.221.238-.239.239-.239 1.197 0 1.436z"
                ></path>
                <path
                  fill="#664500"
                  d="M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243c.123-.205.084-.468-.094-.628z"
                ></path>
              </svg>
              · Free Forever
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
                width="24"
                height="24"
              >
                <path
                  fill="#DD2E44"
                  d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                ></path>
              </svg>
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
