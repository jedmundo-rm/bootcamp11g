import React, { useEffect, useState } from "react";

import "./appLoading.css";

// class AppLoading extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { active: true };
//   }

//   render() {
//     const active = this.state.active ? "active" : "";

//     return (
//       <div
//         className={`loading ${active} align-items-center justify-content-center`}
//       >
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ active: false });
//     }, 400);
//   }
// }

function AppLoading() {
  const [isActive, setIsActive] = useState(true);
  const active = isActive ? "active" : "";

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 400);
  }, []);

  return (
    <div
      className={`loading ${active} align-items-center justify-content-center`}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default AppLoading;
