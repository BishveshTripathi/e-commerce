import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div className="h-20 w-full bg-black">
      <div className="text-white flex justify-between">
        <h1 className="py-6 px-7">Logo☺️</h1>
        <div className="flex">
          <div className="py-6 px-7 flex gap-10 ">
            <Link to="/">Home </Link>
            <Link to="/cart"> ({cart.length}) Cart 🛒</Link>
          </div>
          <div className="py-5 px-7 ">
            <button className="bg-red-600 p-2 rounded">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
