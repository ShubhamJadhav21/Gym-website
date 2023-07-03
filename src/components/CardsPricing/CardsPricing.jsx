import React from "react";
import style from "./CardsPricing.module.css";
import { Pricing } from "../../Data/Data";

const CardsPricing = () => {
  return (
    <div className={style.wrapper_pricingcards}>
      {Pricing.map((item, index) => (
        <div key={index} className={style.pricing_card}>
          <div>
            <h4>{item.name}</h4>
            <i>{item.price}</i>
          </div>
          <ul className={style.features}>
            {item.features.map((feature, featureIndex) => (
              <li key={featureIndex}>
                <span className={style.check_mark}>&#10003;</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className={style.btn}>
            <button>GET STARTED</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsPricing;
