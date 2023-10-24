import React from "react";

const Herosection = () => {
  return (
    <div className=" h-[30rem] w-full">
      <div className=" ml-[40rem]">
        <div className="flex justify-center mt-[15rem] ">
          <h1 className="flex flex-col gap-4 font-bold text-5xl text-slate-800">
            <span>Get your grocery delivery</span>
            <span className="ml-20 ">within 30 minutes</span>
          </h1>
        </div>
        <div className="flex justify-center mt-14 ">
          <input
            type="text"
            className=" bg-slate-300  h-14 w-[35rem] rounded-l-xl text-3xl pl-2 outline-none"
          ></input>
          <button className="h-14 w-40 text-xl bg-red-700 rounded-r-xl text-white outline-none">
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="mt-[-20rem] w-[43rem] ">
          <img
            src="https://freepngimg.com/thumb/grocery/41640-8-groceries-images-free-hd-image.png"
            alt="error"
            className="h-[35rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
