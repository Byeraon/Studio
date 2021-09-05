import style from "./examples.module.css";
import React from "react";
import { Phone } from "./phone/phone";

export let Examples = () => {
  return (
    <div className={style.page}>
      <h1 style={{ margin: "10vh 0" }} className="gold_text">
        ПОРТФОЛИО
      </h1>
      <div className={style.blocks}>
        <div className={style.for_phone}>
          <Phone />
        </div>
        {window.innerWidth > 1200 && (
          <div className={style.text}>
            <h2 className={style.second_text}>
              Здесь вы можете насладиться звучанием наших треков
            </h2>
            <h2 className={style.second_text}>
              Некоторые из них Вы могли видеть в Топ чартах, или слышать на
              радио. Наша команда звукорежиссеров поможет Вам реализовать ваши
              идеи в рамках любого музыкального направления
            </h2>
            <h2 className={style.second_text}>
              Некоторые из них Вы могли видеть в Топ чартах, или слышать на
              радио. Наша команда звукорежиссеров поможет Вам реализовать ваши
              идеи в рамках любого музыкального направления
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
