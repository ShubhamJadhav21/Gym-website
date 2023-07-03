import React, { useState } from "react";
import style from "./MyAccount.module.css";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";

const MyAccount = () => {
  const [heading, setHeading] = useState("Login Form");
  const [activeComponent, setActiveComponent] = useState("signup");

  const handleLoginClick = () => {
    setHeading("Login Form");
    setActiveComponent("login");
  };

  const handleSignUpClick = () => {
    setHeading("SignUp Form");
    setActiveComponent("signup");
  };

  return (
   
    <div className={style.wrapper}>
      <div className={style.heading}>
        {heading && <h3 className={style.top_heading}>{heading}</h3>}
        <div className={style.heading_btns}>
          <button
            onClick={handleLoginClick}
            className={`${
              activeComponent == "login" ? style.active_btn : style.btns
            }`}
          >
            LogIn
          </button>
          <button
            onClick={handleSignUpClick}
            className={`${
              activeComponent == "signup" ? style.active_btn : style.btns
            }`}
          >
            SignUp
          </button>
        </div>

        {activeComponent === "login" && <Login />}
        {activeComponent === "signup" && <SignUp />}
      </div>
    </div>
   
    
  );
};

export default MyAccount;
