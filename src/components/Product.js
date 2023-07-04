import React from "react";
import Header from "./Header";

export default function Product(props) {
  const products = props.products;
  const listItems = products.map((product) => (
    <li key={product.toString()}>{product}</li>
  ));
  return (
    <div>
      <Header isLoggedIn={false}></Header>
      <h2>Products Screen</h2>
      <ul>{listItems}</ul>
    </div>
  );
}
