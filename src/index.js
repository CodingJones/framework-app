import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Success from "./components/Success";
import Choose from "./components/Choose";
import Morning from "./components/Morning";
import Evening from "./components/Evening";
import Questions from "./components/Questions";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/components/LogIn" component={LogIn} />
        <Route path="/components/SignUp" component={SignUp} />
        <Route path="/components/Success" component={Success} />
        <Route path="/components/Choose" component={Choose} />
        <Route path="/components/Morning" component={Morning} />
        <Route path="/components/Evening" component={Evening} />
        <Route path="/components/Questions" component={Questions} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
