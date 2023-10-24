import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div className="m-0 h-20 w-full bg-black fixed top-0 left-0 z-10">
      <div className="text-white flex justify-between">
        <div className="py-6 px-7">
          <img
            src="https://wataburger.in/wp-content/uploads/2022/09/Footer-Logo-Color.png"
            alt="error"
            className="h-14 mt-[-12px]"
          />
        </div>
        <div className="flex justify-center mt-5">
          <input
            type="text"
            className="bg-black  border border-slate-700 h-11 w-[25rem] rounded-l-full text-xl pl-3 outline-none"
          ></input>
          <button className="h-11 w-32 text-l border border-slate-700 bg-red-700 rounded-r-full text-white outline-none">
            Search
          </button>
        </div>
        <div className="flex">
          <div className="py-6 px-7 flex gap-10 ">
            <Link to="/">
              <div className="bg-slate-800 h-10 w-10 p-2 rounded-full pl-2">
                <span class="material-symbols-outlined">home_app_logo</span>
              </div>
            </Link>
            <Link to="/cart" className="flex gap-1">
              <div className=" bg-slate-800 h-10 w-10 p-2 rounded-full">
                <span class="material-symbols-outlined">local_mall</span>
              </div>

              <span className="bg-red-700  rounded-full h-6 w-6 pl-2">
                {cart.length}
              </span>
            </Link>
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
