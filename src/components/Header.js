import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 w-full bg-black">
      <div className="text-white flex justify-between">
        <h1 className="py-6 px-7">Logo☺️</h1>
        <div className="flex">
          <div className="py-6 px-7 flex gap-10 ">
            <Link to="/">Home {console.log("home page")}</Link>
            <Link to="/cart">Cart 🛒{console.log("cart page")}</Link>
          </div>
          <div className="py-5 px-7 ">
            <button className="bg-red-600 p-2 rounded">
              <Link to="/register">Register{console.log("register page")}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
