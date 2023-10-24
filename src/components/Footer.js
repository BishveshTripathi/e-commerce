import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 h-[10rem] w-full bg-black flex justify-between">
      <div className="text-orange-600 pt-5 pl-32">
        <div className="flex gap-2">
          <span class="material-symbols-outlined">help</span>
          <h3>Help Center</h3>
        </div>
        <div className="flex gap-2 mt-2">
          <span class="material-symbols-outlined">share_location</span>
          <h3>Track your order</h3>
        </div>
        <div className="flex gap-2 my-2">
          <span class="material-symbols-outlined">storefront</span>
          <h3>Carporate & bulk Purchasing</h3>
        </div>
        <div className="flex gap-2 mt-2">
          <span class="material-symbols-outlined">currency_exchange</span>
          <h3>Returns & Refunds</h3>
        </div>
      </div>
      <div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/woo-commerce-512.png"
          alt="error"
          className="h-40 pt-1"
        />
      </div>
      <div>
        <p className="text-orange-600 pt-5 pr-32">
          Discover a world of shopping convenience on our React-powered
          <br />
          e-commerce platform. Explore a vast selection of products, enjoy
          <br />
          seamless navigation, secure transactions, and personalized
          <br />
          recommendations. Experience the future of online shopping with us.
          Shop,
          <br />
          save, and stay ahead with our cutting-edge React e-commerce website.
          <br />
        </p>
      </div>
    </div>
  );
};

export default Footer;
