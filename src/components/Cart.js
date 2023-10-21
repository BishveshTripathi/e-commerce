import React from "react";
import Grocery from "./nested_routing/Grocery";
import { useContext } from "react";
import { Cart } from "../Context";

const CartPage = ({ productList }) => {
  const { cart } = useContext(Cart);

  console.log(cart);
  return (
    <div>
      {cart?.map((product) => (
        <Grocery key={product.id} productList={productList} />
      ))}
    </div>
  );
};

export default CartPage;
