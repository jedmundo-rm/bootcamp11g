
import React from 'react';

import Header from './components/Header/index'

import LeftBar from './components/LeftBar/index'

import Content from './components/Content/index'

import RightBar from './components/RightBar/index'

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
                    <LeftBar />
                  </div>
                  <div className="col-md-7">
                    <Content/>
                  </div>
                  <div className="col-md-3">
                    <RightBar />
                  </div>
              </div>
          </div>              
          </div>

         
        </body>

    );
  }
}

export default App;
