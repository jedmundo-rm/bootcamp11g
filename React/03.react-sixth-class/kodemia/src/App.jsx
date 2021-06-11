import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import Home from "./screens/Home";
import Exercise from "./screens/Exercise";
import RickAndMorty from "./screens/RickAndMorty";
import AddPost from "./screens/AddPost";
import PostDetail from "./screens/PostDetail";
import PostsKoders from "./screens/PostsKoders";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/exercise">
              <Exercise />
            </Route>
            <Route exact path="/rickandmorty">
              <RickAndMorty />
            </Route>


            {/* ......... */}


            <Route exact path="/addPost">
              <AddPost />
            </Route>
            <Route exact path="/postKoders">
              <PostsKoders />
            </Route>
            <Route exact path="/posts/:id">
              <PostDetail />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
