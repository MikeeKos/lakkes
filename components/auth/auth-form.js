import React, { useState, useRef, useContext } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import NotificationContext from "../../store/notification-context";

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
    throw new Error(data.message || "Something went wrong when signing in");
  }

  if (response.ok) {
    await signIn("credentials", {
      // redirect: false,
      email: email,
      password: password,
    });
  }

  return data;
}

function AuthForm() {
  const notificationCtx = useContext(NotificationContext);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const usernameInputRef = useRef();
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    console.log("Email" + emailInputRef.current.value);
    console.log(event);
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //client side validation

    if (isLogin) {
      notificationCtx.showNotification({
        title: "sending your login info...",
        message: "sending login info for verification",
        status: "pending",
      });
      console.log("___CHANGE LOGIN STATE TO SIGN IN___");
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      console.log(result);

      notificationCtx.showNotification({
        title: "success!",
        message: "successfully logged in",
        status: "success",
      });

      if (result.error) {
        notificationCtx.showNotification({
          title: "Error!",
          message: "email or password wrong",
          status: "error",
        });
      }

      if (!result.error) {
        router.replace("/");
      }
    } else {
      const enteredUsername = usernameInputRef.current.value;
      notificationCtx.showNotification({
        title: "sending your register info...",
        message: "sending register info for verification",
        status: "pending",
      });
      try {
        const result = await createUser(
          enteredEmail,
          enteredPassword,
          enteredUsername
        );
        console.log(result);
        notificationCtx.showNotification({
          title: "success!",
          message: "You are successfully logged in",
          status: "success",
        });
      } catch (error) {
        console.log("REGISTERING ERROR CHECK -> -> ->");
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message,
          status: "error",
        });
        console.log(error);
      }

      // try {
      //   const result = await signIn("credentials", {
      //     redirect: false,
      //     email: enteredEmail,
      //     password: enteredPassword,
      //   });

      //   console.log(result);

      //   if (!result.error) {
      //     router.replace("/");
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }

  const bigText = isLogin ? (
    <div className="drop-shadow-2xl flex flex-col">
      <span className="flex items-center justify-center font-body font-extrabold text-6xl sm:text-7xl text-pageMenu">
        L
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-6xl sm:text-7xl text-pageMenu">
        O
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-6xl sm:text-7xl text-pageMenu">
        G
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-6xl sm:text-7xl text-pageMenu">
        I
      </span>
      <span className="flex items-center justify-center font-body font-extrabold text-6xl sm:text-7xl text-pageMenu">
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
      <div className="w-full h-[43rem] border-2 border-pageMenu bg-page1 flex flex-col items-center justify-center p-5">
        <div className="w-full h-[40rem] bg-page1 border-4 border-pageMenu shadow-lg">
          <div className="relative w-full h-full bg-[#e8ebf2] flex items-end overflow-hidden">
            <Image
              src={"/cloudtop.png"}
              alt="Image"
              placeholder="blur"
              height={748}
              width={2400}
              blurDataURL={"/cloudtop.png"}
              className="absolute h-full object-cover top-0"
            />
            <motion.div
              className="absolute h-full w-full top-[12rem] sm:top-[10rem] md:top-[6rem] lg:top-2"
              animate={{
                x: [-140, 120],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 40,
              }}
            >
              <Image
                src={"/secondcloud.png"}
                alt="Image"
                placeholder="blur"
                height={748}
                width={2400}
                blurDataURL={"/secondcloud.png"}
                className="scale-[2.5] sm:scale-[2] md:scale-150 lg:scale-125"
              />
            </motion.div>
            <motion.div
              className="opacity-[85%] absolute h-full w-full top-[4rem] sm:top-[3rem] md:top-[0rem] lg:top-[-8rem]"
              animate={{
                x: [100, -100],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 40,
              }}
            >
              <Image
                src={"/cloudtop2.png"}
                alt="Image"
                placeholder="blur"
                height={748}
                width={2400}
                blurDataURL={"/cloudtop2.png"}
                className="scale-[2.5] sm:scale-[2] md:scale-150 lg:scale-100"
              />
            </motion.div>
            <Image
              src={"/backgroundlake.png"}
              alt="Image"
              placeholder="blur"
              height={748}
              width={2400}
              blurDataURL={"/backgroundlake.png"}
              className="hue-rotate-[145deg] saturate-[0.4] bg-gray-[70%] w-full object-cover overflow-hidden absolute md:-bottom-[2rem] lg:-bottom-[8rem] scale-[1.6] sm:scale-110 md:scale-100 left-[5rem] sm:left-0"
            />
            <div className="absolute w-full h-[40rem]">
              <div className="w-full h-full grid grid-cols-12">
                <div className="relative col-span-2 sm:col-span-4 w-full h-full border-pageMenu shadow-[inset_0_-16px_32px_rgba(0,0,0,0.5)]">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <div className="w-full h-full relative flex items-center justify-center">
                      <span
                        className={`absolute brightness-[4.5] hue-rotate-[90deg] saturate-50 ${
                          isLogin
                            ? "top-[11.2rem] sm:top-[9.3rem]"
                            : "top-[8.3rem] sm:top-[2.4rem]"
                        }`}
                      >
                        {bigText}
                      </span>
                      <span className="absolute ">{bigText}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-10 sm:col-span-8 relative w-full h-full border-s-4 border-pageMenu shadow-[inset_0_-16px_32px_rgba(0,0,0,0.5)]">
                  <div className="absolute flex items-center justify-center w-full h-full col-span-8">
                    <form
                      autoComplete="off"
                      onSubmit={submitHandler}
                      className="mx-6 w-full sm:w-[70%] md:w-[60%] lg:w-[40%] h-[30rem] bg-page1 border-4 border-pageMenu shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]"
                    >
                      <div className="flex justify-center items-center bg-page4 py-5 border-b-4 border-pageMenu shadow-[inset_0_-16px_32px_rgba(0,0,0,0.4)]">
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
                        <button
                          type="submit"
                          className="my-3 sm:my-5 hover:scale-105 hover:drop-shadow-md duration-75 tracking-tight text-pageMenu text-xl font-extrabold font-page shadow-xl w-1/2 sm:w-1/3 h-1/2 bg-page3 rounded-lg border-4 border-pageMenu"
                        >
                          {isLogin ? "login" : "register"}
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="tracking-tight text-xs sm:text-sm text-pageMenu font-page hover:underline"
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AuthForm;
