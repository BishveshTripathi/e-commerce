import React, { useContext } from "react";
import { Cart } from "../Context";
import Ad from "./Ad";

const CartPage = () => {
  const { cart, setCart } = useContext(Cart);

  return (
    <div className="flex flex-wrap gap-10 mt-32 ml-12 ">
      {cart.length === 0 ? (
        <div>
          <p className="text-5xl ml-[37rem] font-semibold mt-7">
            Cart is <span className="text-red-600">empty</span>
            <br />
            <br />
            <p className="ml-[-300px]">
              Flat <span className="text-red-600">20% OFF</span> on buy of 10Kg
              and above
            </p>
          </p>
          <div className="ml-[-40px] mt-36">
            <Ad />
          </div>
          {/* <img
            src="https://static.vecteezy.com/system/resources/previews/024/703/643/original/basket-of-vegetables-transparent-free-png.png"
            alt="error"
            className="h-96 w-96 ml-[35rem]"
          /> */}
        </div>
      ) : (
        cart.map((product) => (
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
                <p>Type: {product.name}</p>
              </div>
              {cart.some((item) => item.id === product.id) ? (
                <button
                  className="bg-sky-600 h-10 w-24 mt-6 mr-4 rounded p-1 text-white text-xl"
                  onClick={() => {
                    setCart(cart.filter((c) => c.id !== product.id));
                  }}
                >
                  Remove
                </button>
              ) : (
                {
                  /* <button
                className="bg-sky-600 h-8 mt-6 mr-4 rounded p-1 text-white text-lg"
                onClick={() => {
                  setCart([...cart, product]);
                }}
              >
                Add Cart
              </button> */
                }
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
