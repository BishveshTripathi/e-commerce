import React, { useState, useRef } from "react";
import Validate from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);

  const handleClickButton = () => {
    //get email and password from the input fields by useRef hook
    const message = Validate(email.current.value, password.current.value);
    console.log(message);
  };

  const handleSignin = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="">
      <div className=" w-80 mt-16 m-auto">
        <form
          className="p-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="m-2 text-lg font-bold">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          <input
            type="text"
            placeholder="UserName"
            className="bg-slate-300 rounded p-2 m-2 w-64 outline-none"
          ></input>
          {signIn ? (
            ""
          ) : (
            <input
              ref={email}
              type="email"
              placeholder="Valid Email"
              className="bg-slate-300 rounded p-2 m-2 w-64 outline-none"
            ></input>
          )}
          {signIn ? (
            ""
          ) : (
            <input
              type="number"
              placeholder="Mobile Number"
              className=" bg-slate-300 rounded p-2 m-2 w-64 outline-none"
            ></input>
          )}

          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="bg-slate-300 rounded p-2 m-2 w-64 outline-none"
          ></input>
          <button
            className="bg-red-600 text-slate-200 p-2 m-2 mb-2 rounded w-64"
            onClick={handleClickButton}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="m-2 cursor-pointer" onClick={handleSignin}>
            {signIn ? "New user ? SignUp" : "Already member, SignIn"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
