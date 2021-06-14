import React, { useState, useEffect } from "react";

import Styles from "./AppLoading.module.css";

// class AppLoading extends React.Component{

//     constructor(props){
//         super(props)

//         this.state = { active: true}
//     }

//     render(){

//         const active = this.state.active ? 'active' : "";

//         return(
//             <div className={`${Styles.AppLoading} ${active} align-items-center justify-contents-center`}>
//                 <div className="spinner-border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>

//         )
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState = { active: false}
//         }, 2000) ;
//     }
// }

function AppLoading() {
  const [isActive, setIsActive] = useState(true);

  const active = isActive ? "active" : "";

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 4000);
  }, []);

  return (
    <div
      className={`${Styles.AppLoading} ${active} align-items-center justify-contents-center`}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default AppLoading;
