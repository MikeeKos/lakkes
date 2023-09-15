import React, { useState, useRef } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import TextField from "@mui/material/TextField";

async function createUser(email, password, username) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, username }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong (AUTH API)");
  }

  return data;
}

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    console.log("Email" + emailInputRef.current.value)
    console.log(event);
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //client side validation

    if (isLogin) {
      console.log("___CHANGE LOGIN STATE TO SIGN IN___");
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      console.log(result);

      if (!result.error) {
        router.replace("/");
      }
    } else {
      const enteredUsername = usernameInputRef.current.value;
      try {
        const result = await createUser(
          enteredEmail,
          enteredPassword,
          enteredUsername
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const bigText = isLogin ? (
    <div className="drop-shadow-2xl flex flex-col">
      <span className="flex items-center justify-center font-body font-extrabold text-7xl sm:text-9xl text-pageMenu">
        L
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-7xl sm:text-9xl text-pageMenu">
        O
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-7xl sm:text-9xl text-pageMenu">
        G
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-7xl sm:text-9xl text-pageMenu">
        I
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-7xl sm:text-9xl text-pageMenu">
        N
      </span>
    </div>
  ) : (
    <div className="drop-shadow-2xl flex flex-col">
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        R
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        E
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        G
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        I
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        S
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        T
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        E
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-5xl sm:text-7xl text-pageMenu">
        R
      </span>
    </div>
  );

  return (
    <React.Fragment>
      <div className="flex items-center justify-center w-full h-full bg-page1">
        <div className="w-full h-[40rem]">
          <div className="w-full h-full grid grid-cols-12">
            <div className="relative w-full h-full col-span-4 overflow-hidden border-2 border-pageMenu hue-rotate-[180deg] saturate-[0.6] grayscale-[40%]">
              <Image
                src={"/paper.jpg"}
                alt="Hello"
                width={1000}
                height={1000}
                placeholder="blur"
                blurDataURL={"/paper.jpg"}
                className="absolute w-full h-full object-cover opacity-[70%]"
              />
              <div className="absolute w-full h-full flex items-center justify-center">
                {bigText}
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-full col-span-8 border-2 border-pageMenu bg-page1">
              <form
                onSubmit={submitHandler}
                className="mx-6 w-full sm:w-[70%] md:w-[60%] lg:w-[40%] h-[30rem] bg-page1 border-4 border-pageMenu shadow-xl"
              >
                <div className="flex justify-center items-center bg-page4 py-5 border-b-4 border-pageMenu">
                  {/* <span className="tracking-tight text-pageMenu text-2xl md:text-3xl font-extrabold font-page drop-shadow-lg">
                    {isLogin ? "login" : "register"}
                  </span> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-7 0 32 32"
                    className="w-10 h-10 scale-[2.5] duration-75"
                    fill="#383434"
                  >
                    <path d="M4.28 20.28C1.92 20.28 0 18.36 0 16s1.92-4.28 4.28-4.28c1.48 0 2.88.8 3.64 2.04h8a2.279 2.279 0 110 4.56c-.08 0-.28.12-.44.24-.32.2-.76.48-1.36.48s-1.04-.28-1.36-.48c-.16-.12-.36-.24-.44-.24s-.28.12-.44.24c-.32.2-.76.48-1.36.48s-1.04-.28-1.36-.48c-.16-.12-.36-.24-.44-.24h-.8c-.76 1.2-2.12 1.96-3.64 1.96zm0-6.92c-1.44 0-2.64 1.2-2.64 2.64s1.2 2.64 2.64 2.64c1.04 0 1.96-.6 2.4-1.56.12-.28.44-.48.76-.48h1.28c.6 0 1.04.28 1.36.48.16.12.36.24.44.24s.28-.12.44-.24c.32-.2.76-.48 1.36-.48s1.04.28 1.36.48c.16.12.36.24.44.24s.28-.12.44-.24c.32-.2.76-.48 1.36-.48.32 0 .6-.28.6-.6s-.28-.6-.6-.6H7.44c-.32 0-.6-.2-.76-.48-.4-.96-1.36-1.56-2.4-1.56zM4.96 16a.88.88 0 11-1.76 0 .88.88 0 011.76 0z"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-center">
                  <span className="mx-4 py-4 tracking-tight text-xs sm:text-sm text-pageMenu font-page">
                    {isLogin
                      ? "please enter your login and password"
                      : "please enter your login, email and password"}
                  </span>
                </div>
                <div className="flex justify-center saturate-[0.2] brightness-125">
                  <TextField
                    sx={{
                      // marginTop: "10px",
                      marginRight: "20px",
                      marginBottom: "10px",
                      marginLeft: "20px",
                      width: "100%",
                    }}
                    required
                    id="outlined-required"
                    label="email"
                    inputRef={emailInputRef}
                  />
                </div>
                {!isLogin && (
                  <div className="flex justify-center saturate-[0.2] brightness-125">
                    <TextField
                      sx={{
                        marginTop: "10px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        marginLeft: "20px",
                        width: "100%",
                      }}
                      required
                      id="outlined-required"
                      label="username"
                      inputRef={usernameInputRef}
                    />
                  </div>
                )}
                <div className="flex justify-center saturate-[0.2] brightness-125">
                  <TextField
                    sx={{
                      marginTop: "10px",
                      marginRight: "20px",
                      marginBottom: "10px",
                      marginLeft: "20px",
                      width: "100%",
                    }}
                    required
                    id="outlined-password-input"
                    label="password"
                    type="password"
                    inputRef={passwordInputRef}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button type="submit" className="my-3 sm:my-5 hover:scale-105 hover:drop-shadow-md duration-75 tracking-tight text-pageMenu text-xl font-extrabold font-page shadow-xl w-1/2 sm:w-1/3 h-1/2 bg-page3 rounded-lg border-4 border-pageMenu">
                    {isLogin ? "login" : "register"}
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="tracking-tight text-xs sm:text-sm text-pageMenu font-page"
                    type="button"
                    onClick={switchAuthModeHandler}
                  >
                    {isLogin
                      ? "create new account"
                      : "login with existing account"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="mx-4 w-full sm:w-[70%] md:w-[60%] lg:w-[40%] h-[40rem] bg-page2 my-10"></div> */}
      </div>
      {/* <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                ref={usernameInputRef}
                required
              />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section> */}
    </React.Fragment>
  );
}

export default AuthForm;
