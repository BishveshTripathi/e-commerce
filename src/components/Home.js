import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex  gap-24 ml-12 mt-7  ">
        <Link
          to="/grocery"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Grocery{" "}
        </Link>
        <Link
          to="/mobile"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Mobiles
        </Link>
        <Link
          to="/fashion"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Fashion{" "}
        </Link>
        <Link
          to="/electronic"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Electronic
        </Link>
        <Link
          to="/furniture"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Furniture
        </Link>
        <Link
          to="/appliances"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Appliances
        </Link>
        <Link
          to="/beauty&toys"
          className="bg-orange-500 py-1 px-2 rounded text-white text-lg font-bold"
        >
          Beauty & Toys
        </Link>
        <Link
          to="/travel"
          className="bg-orange-500 py-1 px-4 rounded text-white text-lg font-bold"
        >
          Travel
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
