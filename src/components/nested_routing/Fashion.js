import React from "react";
import { useContext } from "react";
import { Cart } from "../../Context";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const generateProductList = () => {
  const productsArray = [...Array(8)].map(() => ({
    id: faker.string.uuid(),
    name: faker.lorem.word(5),
    price: faker.number.int(100),
    image: faker.image.urlLoremFlickr({ category: "food" }),
  }));
  return productsArray;
};

const Fashion = () => {
  const [productList, setProductList] = useState();

  useEffect(() => {
    setProductList(generateProductList());
  }, []);

  const { cart, setCart } = useContext(Cart);

  return (
    <div className="flex flex-wrap  gap-10 mt-10 ml-12 ">
      {productList?.map((product) => (
        <div
          key={product.id}
          className=" rounded h-80 w-80 pl-4 pt-4 bg-slate-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-52 w-72  rounded-xl"
          />
          <div className="flex justify-between ">
            <div className="mt-5">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>Price: {product.price} $</p>{" "}
            </div>
            {cart.some((item) => item.id === product.id) ? (
              <button
                className=" bg-sky-600 h-8 mt-6 mr-4 rounded p-1 text-white text-lg"
                onClick={() => {
                  setCart(cart.filter((c) => c.id !== product.id));
                }}
              >
                Remove Cart
              </button>
            ) : (
              <button
                className="bg-sky-600 h-10 w-24 mt-6 mr-4 rounded text-white text-xl"
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

export default Fashion;
