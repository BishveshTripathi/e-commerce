import React from "react";
import { Link, Outlet } from "react-router-dom";
import Herosection from "./Herosection";
import Fourcards from "./Fourcards";
import Footer from "./Footer";
import Ad from "./Ad";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Fourcards />
      <div>
        <div className="flex justify-around m-3 ">
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
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Ad />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
