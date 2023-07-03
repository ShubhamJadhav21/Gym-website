import React, { useState } from "react";
import style from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import MyModal from "../../components/Modal/Modal";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  return (
    <div className={style.wrapper_home} id="/">
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.wrapper_content}>
        <p className={style.paragraph}>
          "Take care of your
          <span className={style.text}>body&nbsp;</span>
          <br />
          It's the only place you
          <br />
          have to&nbsp;
          <span className={style.text}>live."</span>
          <div>
            <button className={style.btn_join} onClick={handleOpenModal}>
              Join With Us
            </button>
          </div>
        </p>
      </div>
      <MyModal open={show} handleClose={() => setShow(false)} />
    </div>
  );
};

export default Home;
