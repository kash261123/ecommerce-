import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import ProductPage from "./pages/Prouductpage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/productpage" component={ProductPage} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;
