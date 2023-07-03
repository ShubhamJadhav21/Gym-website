import React from "react";
import style from "./PricingSection.module.css";
import CardsPricing from "../../components/CardsPricing/CardsPricing";
const PricingSection = () => {
  return (
    <div className={style.wrapper} id="/pricing">
      <h1>Pricing Section</h1>
      <div className={style.wrapper_cards}>
        <div className={style.cards}>
          <CardsPricing />
        </div>
        <div className={style.right_section}>
          <h2 className={style.heading}>Membership</h2>
          <h3>From Punch Pass to Monthly or Annual</h3>
          <p>
            At Gy Base, We offer a wide range of membership with options to 
             suit
            every budget. Everything from One Day Pass. Punch Pass to monthly 
             or
            annual prepaid membership. What's more, we won't tie you in to a
            long term contract giving you greater flexibility.
          </p>
          <h2 className={style.heading2}>Each plan included</h2>
          <ul>
            <li>
              
              <span>&rarr;</span> The best equipment global brands
            </li>
            <li>
              <span>&rarr;</span>The gym is open 24 hours a day, 7 days a 
               week
            </li>
            <li>
              <span>&rarr;</span>Two safe payment methods
            </li>
            <li>
              <span>&rarr;</span>Group fitness classes in the price of the
              subscriptions
            </li>
            <li>
              <span>&rarr;</span>No long-term contract period
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
