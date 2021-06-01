
import React from 'react';

import Header from './components/Header/index'

import SideBar from './components/SideBar/index'

import Content from './components/Content/index'

import Styles from './App.css'

class App extends React.Component {
  render(){
    return (


        <body>
          <div id="navbar" className="full-container">
            <div className="container">
                <div className="row">
                    <Header />
                </div>
            </div>              
          </div>
  
          <div id="container" className="full-container">
           <div className="container">
              <div className="row">
                  <div className="col-md-2">
                    <SideBar />
                  </div>
                  <div className="col-md-7">
                    <Content/>
                  </div>
                  <div className="col-md-3"></div>
              </div>
          </div>              
          </div>

         
        </body>

    );
  }
}

export default App;
