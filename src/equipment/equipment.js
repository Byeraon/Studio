import style from "./equipment.module.css";
import { Element } from "./element/element";
import p1 from "../images/equp/micro.jpg";
import p2 from "../images/equp/zvk.jpg";
import p3 from "../images/equp/monik.jpg";
import p4 from "../images/equp/headphones.jpg";
import { useEffect, useState } from "react";

export let Equipment = () => {
  const [currentIndex, setIndex] = useState(0);
  const [currentLine, setLine] = useState(0);
  const [animFiller, setAnim] = useState();
  const [fillerLine, setLineAnim] = useState(style.goTo0);
  const dataMas = [
    {
      photo: p1,
      name: "SE Electronics - Gemini II",
      info: "Для записи вокала мы используем двухламповый микрофон sE Electronics - Gemini II, обладающий невероятно детализированным, глубоким звуком, напоминающим классику ламповых микрофонов прошедших десятилетий, но с детализацией, которую можно ожидать от лучших транзисторных микрофонов. В связке с ним используется эмулятором легендарного предусилителя Avalon на базе Unison от UAD.",
    },
    {
      photo: p2,
      name: "Apollo Twin X",
      info: "Благодаря мощной встроенной обработке UAD-2, Apollo Twin X позволяет делать записи и микшировать при помощи плагинов UAD с почти нулевой задержкой, а это значит, что при записи вы сможете слышать себя в реальном времени.",
    },
    {
      photo: p3,
      name: "Adam Audio T8V",
      info: "Adam Audio T8V - это профессиональный двухполосный студийный монитор с 8-дюймовым НЧ-динамиком, обладающий кристальным читаемым верхом, отчетливой серединой, и разборчивым не бубнящим басом, благодаря чему после сведения и мастеринга нашими опытными звукорежиссерами, ваши треки будут звучать топово",
    },
    {
      photo: p4,
      name: "Beyerdynamics DT770 Pro",
      info: "Профессиональные студийные наушники наушники Beyerdynamic DT 770 Pro  созданы для прослушивания и записи качественного саунда. Они снабжены удобным оголовьем с надёжной фиксацией и мягкими велюровыми амбушюрами для плотного прилегания. При этом вес всей конструкции составляет всего 270 г, что обеспечивает комфортную работу в течение длительного времени. Отменная звукоизоляция от внешнего шума позволяет полностью окунуться в атмосферу звучания, а технология Bass Reflex помогает басам полностью раскрыться. Диафрагма дышит, чем достигается сбалансированная полная картина тональностей",
    },
  ];
  let mas = ["Микрофон", "Звуковая карта", "Мониторы", "Наушники"];

  let handleIndex = (el) => {
    return function () {
      if (el !== currentIndex) {
        setAnim(style.not_opacity);
        setTimeout(() => {
          setIndex(el);
          setAnim(style.opaciter);
        }, 250);
      }
    };
  };

  useEffect(() => {
    let marginMas = [0, 25, 50, 75];
    switch (currentIndex) {
      case 0:
        setLineAnim(style.goTo0);
        break;
      case 1:
        setLineAnim(style.goTo1);
        break;
      case 2:
        setLineAnim(style.goTo2);
        break;
      default:
        setLineAnim(style.goTo3);
    }
    setTimeout(() => {
      setLine(marginMas[currentIndex]);
    }, 250);
  }, [currentIndex, currentLine]);

  mas = mas.map((el, index) => {
    return (
      <Element
        currentIndex={currentIndex}
        handleClick={handleIndex}
        index={index}
        key={index}
        el={el}
      />
    );
  });

  return (
    <div className={style.page}>
      <h5 style={{ margin: "10vh 0" }} className="gold_text">
        ОБОРУДОВАНИЕ
      </h5>
      <div className={style.block_eq}>
        <div className={style.text_block}>{mas}</div>
        <div className={style.line}>
          <div
            style={{ marginLeft: currentLine + "%" }}
            className={style.moving_line + " " + fillerLine}
          ></div>
        </div>
        <div className={style.info + " " + animFiller}>
          <div
            style={{
              backgroundImage: "url(" + dataMas[currentIndex].photo + ")",
            }}
            className={style.photo}
          ></div>
          <div className={style.text_block_second}>
            <h5>{dataMas[currentIndex].name}</h5>
            <h6>{dataMas[currentIndex].info}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
