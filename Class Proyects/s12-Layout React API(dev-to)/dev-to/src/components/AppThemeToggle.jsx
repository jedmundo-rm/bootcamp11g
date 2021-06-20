import React, { useEffect, useState } from "react";

import "./appThemeToggle.css";

// class AppThemeToggle extends React.Component {
//   super;
//   constructor(props) {
//     super(props);

//     this.state = { theme: "light" };

//     this.toggle = this.toggle.bind(this);

//     console.log("CONSTRUCTOR");
//   }

//   toggle() {
//     const theme = this.state.theme === "light" ? "dark" : "light";

//     this.setState({ theme });
//   }

//   render() {
//     console.log("RENDER");
//     return (
//       <div
//         className={`appThemeToggle d-flex align-items-center justify-content-center ${this.state.theme}`}
//         // className={`${styles.appThemeToggle} d-flex align-items-center justify-content-center ${this.state.theme}`}
//         onClick={this.toggle.bind(this)}
//         onClick={this.toggle}
//       />
//     );
//   }
/* 
    componentWillMount(){
        const now = new Date()
        console.log('Antes de que este en el DOM', now.getTime());
    }

    componentDidMount(){
        const now = new Date()
        console.log('Ya estoy en el DOM', now.getTime());
    }

    componentWillUpdate() {
        const now = new Date()
        console.log('Antes de que me actualize', now.getTime());
    }

    componentDidUpdate() {
        const now = new Date()
        console.log('Cuando ya me actualice', now.getTime());
    }

    componentWillUnmount(){
        const now = new Date()
        console.log('Antes de que me quite del DOM', now.getTime());
    }
*/

//   componentDidMount() {
//     console.log("DID MOUNT");
//     document.body.setAttribute("theme", this.state.theme);
//   }

//   componentDidUpdate() {
//     console.log("DID UPDATE");
//     document.body.setAttribute("theme", this.state.theme);
//   }
// }

function AppThemeToggle() {
  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   document.body.setAttribute("theme", theme);
  // }, []);

  useEffect(() => {
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      className={`appThemeToggle d-flex align-items-center justify-content-center ${theme}`}
      onClick={toggle}
    />
  );
}

export default AppThemeToggle;
