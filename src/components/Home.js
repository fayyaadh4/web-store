import React from "react";
import Login from "./Login";
import Product from "./Product";

export default function Home(props) {
  const isLoggedIn = props.isLoggedIn;
  const products = ["item", "item2"];
  if (isLoggedIn) {
    return <Product products={products}></Product>;
  }
  return <Login></Login>;
}
