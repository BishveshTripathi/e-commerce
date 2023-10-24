import React from "react";

const Fourcards = () => {
  return (
    <div className="flex justify-center gap-7 mt-20 mb-20 m-2">
      {/* ----------card 01----------------- */}
      <div className=" flex gap-3 p-4 bg-slate-100 h-20 w-72 rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <h1 className="mt-1 ml-5 text-4xl">
          <span class="material-symbols-outlined">local_shipping</span>
        </h1>

        <span>
          <h2 className="font-bold">Fast Delivery</h2>
          <p>Start from $10</p>
        </span>
      </div>
      {/* -----------------card 02-------------- */}
      <div className="flex gap-3 p-4 bg-slate-100 h-20 w-72 rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <h1 className="mt-1 ml-5 text-4xl">
          <span class="material-symbols-outlined">finance_chip</span>
        </h1>
        <span>
          <h2 className="font-bold">Money Gurantee</h2>
          <p>7 Days Back</p>
        </span>
      </div>
      {/* -------------------card 03---------------- */}
      <div className="flex gap-3 p-4 bg-slate-100 h-20 w-72 rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <h1 className="mt-1 ml-5 text-4xl">
          <span class="material-symbols-outlined">event</span>
        </h1>
        <span>
          <h2 className="font-bold">365 Days</h2>
          <p>For free return</p>
        </span>
      </div>
      {/* ---------------------card 04------------------- */}
      <div className="flex gap-3 p-4 bg-slate-100 h-20 w-72 rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <h1 className="mt-1 ml-5 text-4xl">
          <span class="material-symbols-outlined">payments</span>
        </h1>
        <span>
          <h2 className="font-bold">Payment</h2>
          <p>Secure system</p>
        </span>
      </div>
    </div>
  );
};

export default Fourcards;
