import React, { useState } from "react";
import { faker } from "@faker-js/faker";

faker.seed(50);

const Grocery = () => {
  const productsArray = [...Array(8)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "food" }),
  }));

  const [cart, setCart] = useState([]);

  const [productList] = useState(productsArray);
  console.log(cart);

  return (
    <div className="flex flex-wrap gap-10 mt-10 ml-12">
      {productList.map((product) => (
        <div
          key={product.id}
          className="border border-white rounded h-80 w-80 pl-4 pt-4 bg-slate-100"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-52 w-72  rounded-xl"
          />
          <div className="flex justify-between ">
            <div className="mt-5">
              <h3 className="text-lg">{product.name}</h3>
              <p>Type: {product.Type}</p>
            </div>
            {cart.includes(product) ? (
              <button
                className="bg-sky-600 h-8 mt-6 mr-4 rounded p-1 text-white text-lg"
                onClick={() => {
                  setCart(cart.filter((c) => c.id !== product.id));
                }}
              >
                Remove Cart
              </button>
            ) : (
              <button
                className="bg-sky-600 h-8 mt-6 mr-4 rounded p-1 text-white text-lg"
                onClick={() => {
                  setCart([...cart, product]);
                }}
              >
                Add Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grocery;

// {cart.includes(productList) ? (
//   <button
//     className="bg-sky-600  h-8 mt-6 mr-4 rounded p-1 text-white text-lg"
//     onClick={() => {
//       setCart(cart.filter((c) => c.id !== productList.id));
//     }}
//   >
//     Remove Cart
//   </button>
// ) : (
//   <button
//     className="bg-sky-600  h-8 mt-6 mr-4 rounded p-1 text-white text-lg"
//     onClick={() => {
//       setCart([...cart, productList]);
//     }}
//   >
//     Add Cart
//   </button>
// )}