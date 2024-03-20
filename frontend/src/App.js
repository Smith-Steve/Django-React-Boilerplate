import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home.js";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* BrowserRouter stores the current location in the browsers address bar
        using clean URLs and navigates using the browsers built-in history stack.*/}
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
