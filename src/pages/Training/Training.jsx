import React, { useState } from "react";
import style from "./Training.module.css";
import Cards from "../../components/Cards/Cards";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const Training = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function Next() {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }

  function Previous() {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }

  return (
    <div className={style.wrapper} id="/training">
      <div className={style.heading}>
        <h1>Meet Our Team</h1>
        <p>
          We are a team of experienced people. nutrition, sports and fitness
          passionate experts with talent <br />
          <p className={style.sec_line}>
            and knowledge unsurpassed in the industry Get to know us.
          </p>
        </p>
      </div>
      <div className={style.left_arrow}>
        <MdOutlineArrowBackIos onClick={Previous} />
      </div>
      <div className={style.cards_wrapper}>
        <Cards cardIndex={currentIndex} />
      </div>
      <div className={style.right_arrow}>
        <MdOutlineArrowForwardIos onClick={Next} />
      </div>
      <div className={style.btn_wrapper}>
      <button  class="btn btn-outline-success">SEE THE WHOLE</button>
      </div>
    </div>
  );
};

export default Training;
