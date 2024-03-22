import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home1";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";
require("react-dom");

window.React2 = require("react");
class App extends Component {
  render() {
    console.log("App component is rendering.");
    console.log("React1 - i.e. React from Package: ", window.React1);
    console.log("React2 - i.e. React from Package:  ", window.React2);
    console.log(window.React1 === window.React2);
    return (
      <div>
        <BrowserRouter>
          {/* BrowserRouter stores the current location in the browsers address bar
        using clean URLs and navigates using the browsers built-in histoy stack.*/}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
