import React from "react";

const Ad = () => {
  return (
    <div className="w-[90rem] ml-10 h-60 bg-slate-200 rounded-lg flex justify-between mt-10  ">
      <div className="flex gap-4 flex-col pt-10 pl-16">
        <section>
          <p>Till 10 Dec, 2023</p>
        </section>
        <section>
          <h1 className="text-3xl">25% Special off today</h1>
          <h1 className="text-3xl">Only for Vegetables</h1>
        </section>
        <section>
          <button className="bg-red-600 p-2 text-white">Shop Now</button>
        </section>
      </div>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/024/703/643/original/basket-of-vegetables-transparent-free-png.png"
          alt="error"
          className="h-[22rem] w-[23rem] pb-20"
        />
      </div>
    </div>
  );
};

export default Ad;
