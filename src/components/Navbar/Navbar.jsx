import React from "react";
import style from "./Navbar.module.css";
import Header from "../Header/Header";
import MobileView from "../Header/MobileView";
const Navbar = () => {
  return (
    <div>
      <div className={style.desktop_view}>
        <Header/>
      </div>
      <div className={style.mobile_view}>
        <MobileView />
      </div>
    </div>
  );
};

export default Navbar;
