import style from "./cases.module.css";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Case } from "./case/case";
import p1 from "../images/cases/1.webp";
import p2 from "../images/cases/2.webp";
import p3 from "../images/cases/3razm.webp";

export let Cases = () => {
  const [isMob, setMob] = useState();

  useEffect(() => {
    setMob(isMobile());
  }, []);

  function isMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
  const handlers = useSwipeable({
    onSwiping: () => {
      document.body.style.overflow = "hidden";
    },
    onSwipeStart: () => {
      document.body.style.overflow = "hidden";
    },

    onSwipedLeft: () => {
      nextCase();
    },
    onSwipedRight: () => {
      prevCase();
    },
    onSwiped: () => {
      document.body.style.overflow = "visible";
    },
  });

  let [mas, setMas] = useState([
    {
      name: "Как5ой-то чел",
      info: "Какая-то инфа про че5ла",
      photo: p3,
    },
    {
      name: "Какой-то чел1",
      info: "Как1ая-то инфа про чела",
      photo: p1,
    },
    {
      name: "Какой-то ч2ел",
      info: "Какая-т2о инфа про чела",
      photo: p2,
    },
    {
      name: "К3акой-то чел",
      info: "Какая3-то инфа про чела",
      photo: p3,
    },
    {
      name: "К4акой-то чел",
      info: "Какая-то инфа п4ро чела",
      photo: p3,
    },
    {
      name: "Как5ой-то чел",
      info: "Какая-то инфа про че5ла",
      photo: p3,
    },
    {
      name: "Какой-то чел1",
      info: "Как1ая-то инфа про чела",
      photo: p1,
    },
  ]);

  let [mooving, setMove] = useState("center");
  const indexCenter = (1 + mas.length) / 2 - 1;

  const nextCase = () => {
    if (mooving === "center") {
      setMove("right");
      setTimeout(() => {
        setMove("center");
        setMas((prevState) => [
          ...prevState.filter((value, i) => i !== 0),
          mas[0],
        ]);
      }, 500);
    }
  };

  const prevCase = () => {
    if (mooving === "center") {
      setMove("left");
      setTimeout(() => {
        setMove("center");
        setMas((prevState) => [
          mas[mas.length - 1],
          ...prevState.filter((value, i) => i !== mas.length - 1),
        ]);
      }, 500);
    }
  };

  return (
    <div className={style.page}>
      <h5
        style={{ textAlign: "center", margin: "10vh 0" }}
        className="gold_text"
      >
        С НАМИ РАБОТАЮТ
      </h5>
      <div className={style.cases_and_arrows}>
        {!isMob && (
          <div className={style.arrow_block}>
            <div
              onClick={prevCase}
              style={{
                zIndex: "20",
                marginRight: "-400%",
                transform: "rotate(180deg)",
                marginLeft: "50%",
              }}
              className={style.arrow}
            ></div>
          </div>
        )}

        <div {...handlers} className={style.cases + " "}>
          {mas.map((el, i) => (
            <Case
              mooving={mooving}
              masLength={mas.length - 1}
              caseIndex={i}
              indexCenter={indexCenter}
              name={el.name}
              info={el.info}
              photo={el.photo}
            />
          ))}
        </div>
        {!isMob && (
          <div className={style.arrow_block}>
            <div
              onClick={nextCase}
              className={style.arrow}
              style={{ zIndex: "20", marginLeft: "-400%", marginRight: "50%" }}
            ></div>
          </div>
        )}
      </div>

      <h4 className={style.first_text_cont}>{mas[indexCenter].name}</h4>
      <h4 className={style.second_text_cont}>{mas[indexCenter].info}</h4>
    </div>
  );
};
