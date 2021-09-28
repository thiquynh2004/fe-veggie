import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Footer from "./Footer";
import Header from "./Header";



export default function Body() {
  return (
    <BrowserRouter>
      <Header />
      <Slider/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/categories/:categoryId/products/ "component={Products} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
