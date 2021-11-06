import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import Cart from "../page/Cart";
// import Slider from "../components/Slider";
import Login from "../page/Login";
import ProductCategory from "../page/ProductCategory";
import ProductDetail from "../page/ProductDetail";
import Profile from "../page/Profile";
import Signup from "../page/Signup";
import Footer from "./Footer";
import Header from "./Header";



export default function Body() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Slider/> */}
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/categories/:categoryId/products/" component={ProductCategory} />
          <Route exact path="/products/:productId/" component={ProductDetail}/>
          <Route exact path="/carts" component={Cart} />
          <Route exact path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

