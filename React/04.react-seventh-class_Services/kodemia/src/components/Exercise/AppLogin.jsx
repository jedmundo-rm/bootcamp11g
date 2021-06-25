import React, { useState } from "react";

import { useHistory } from "react-router";

import CustomInput from "../../components/CustomInput";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newPost = JSON.stringify({
        email,
        password
      });
      const response = await fetch(
        "https://react-11g-default-rtdb.firebaseio.com/login.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: newPost,
        }
      );
      await response.json();

      history.push("/exercise");
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="bg-dark rounded align-items-center p-5">
      <h2 className="text-white">Log In</h2>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="form-group col-12">

          <CustomInput
          id="email"
          placeholder="Email"
          value={email}
          callback={setEmail}/>

          {/* <label className="text-white" htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          /> */}


        </div>
        <div className="form-group col-12">

        <CustomInput
          id="password"
          placeholder="Password"
          value={password}
          callback={setPassword}/>


          {/* <label className="text-white" htmlFor="exampleInputPassword1">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          /> */}


        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

// import React from "react";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };

//     this.handleInput = this.handleInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInput(event) {
//     console.log(event.target.name, event.target.value);
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log("me submitearon we!!");
//     setTimeout(() => {
//       this.props.history.push("/");
//     }, 1000);
//   }

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className="container h-100">
//         <div className="row h-100 justify-content-center align-items-center">
//           <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
//             <div className="col p-5">
//               <h2 className="text-white">Log In</h2>
//               <form className="mt-5" onSubmit={this.handleSubmit}>
//                 <div className="form-group col-12">
//                   <label className="text-white" htmlFor="exampleInputEmail1">
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={this.handleInput}
//                     name="email"
//                   />
//                 </div>
//                 <div className="form-group col-12">
//                   <label className="text-white" htmlFor="exampleInputPassword1">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="exampleInputPassword1"
//                     placeholder="Password"
//                     value={password}
//                     onChange={this.handleInput}
//                     name="password"
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary mt-2">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
