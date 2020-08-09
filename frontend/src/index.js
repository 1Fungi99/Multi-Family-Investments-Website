import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

import * as serviceWorker from "./serviceWorker";

// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import InvestmentCriteria from "./components/InvestmentCriteria";
import ContactUs from "./components/ContactUs";

ReactDOM.render(
  <Router>
    <Nav />
    <>
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/investment-criteria">
          <InvestmentCriteria />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
