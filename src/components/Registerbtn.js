import React, { useState, useRef } from "react";
import Validate from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);

  const handleClickButton = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Perform validation
    const errorMessage = Validate(username, email, password);

    if (errorMessage) {
      setErrorMessage(errorMessage);
    } else {
      console.log("Successful login or signup");
    }
  };
  const handleSignin = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="flex mt-32 ">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/984/730/non_2x/vegetable-transparent-free-png.png"
          alt="error"
          className="h-[30rem] w-[42rem] pl-40"
        />
      </div>
      <div className=" w-80  m-auto">
        <div>
          <h1 className="text-7xl mt-4 font-bold">
            Sign up to{" "}
            <span className="text-red-600 text-7xl font-bold">BAZAAR...</span>
          </h1>
        </div>
        <form
          className="mt-7"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={usernameRef}
            type="text"
            placeholder="UserName"
            className="bg-slate-200 rounded p-2 m-2 w-96 outline-none"
          ></input>
          {signIn ? (
            ""
          ) : (
            <input
              ref={emailRef}
              type="email"
              placeholder="Valid Email"
              className="bg-slate-200 rounded p-2 m-2 w-96 outline-none"
            ></input>
          )}
          {signIn ? (
            ""
          ) : (
            <input
              type="number"
              placeholder="Mobile Number"
              className=" bg-slate-200 rounded p-2 m-2 w-96 outline-none"
            ></input>
          )}

          <input
            ref={passwordRef}
            type="Password"
            placeholder="Password"
            className="bg-slate-200 rounded p-2 m-2 w-96 outline-none"
          ></input>
          <button
            className="bg-red-600 text-slate-200 p-2 m-2 mb-2 rounded w-96"
            onClick={handleClickButton}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <p className="m-2 cursor-pointer text-lg" onClick={handleSignin}>
            {signIn ? "New user ? SignUp" : "Already member, SignIn"}
          </p>
        </form>
        <div className="flex gap-10 mt-10 ml-20 justify-center cursor-pointer">
          <span class="material-symbols-outlined">stadia_controller</span>
          <span class="material-symbols-outlined">shop</span>
          <span class="material-symbols-outlined">nest_cam_indoor</span>
          <span class="material-symbols-outlined">hangout_video</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
