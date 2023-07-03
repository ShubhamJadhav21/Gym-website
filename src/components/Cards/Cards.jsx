import React from "react";
import { Trainer } from "../../Data/Data";
import style from './Cards.module.css';

const Cards = ({ cardIndex }) => {
  return (
    <div className={style.container}>
      {Trainer.map((list, index) => (
        <div key={index} className={style.wrapper} >
          <img src={list.img} alt="Trainer Image" />
          <div>{list.name}</div>
          <div>{list.position}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
