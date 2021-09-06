import { useState, useEffect, useRef } from "react";
import style from "./case.module.css";

export let Case = (props) => {
  let Card = useRef();
  const [opaciter, setOpacity] = useState(style.none_opaciter);
  const [layout, setLay] = useState();

  useEffect(() => {
    if (props.mooving === "left") {
      if (props.caseIndex === props.masLength - 1) {
        setOpacity(style.setOzero);
      } else if (props.caseIndex === 0) {
        setLay(style.pdng_right);
        setOpacity(style.setOone);
      } else if (props.caseIndex === props.masLength) {
        setLay(style.mrgn_right);
      }
    } else if (props.mooving === "right") {
      if (props.caseIndex === props.masLength) {
        setOpacity(style.setOone);
        setLay(style.mrgn_left);
      } else if (props.caseIndex === 0) {
        setLay(style.pdng_left);
      } else if (props.caseIndex === 1) {
        setOpacity(style.setOzero);
      }
    } else if (props.mooving === "center") {
      setLay("");
      props.caseIndex === props.indexCenter
        ? setOpacity(style.opaciter)
        : setOpacity(style.none_opaciter);

      if (props.caseIndex === props.masLength || props.caseIndex === 0) {
        setOpacity(style.opacitty);
      } else {
        props.caseIndex === props.indexCenter
          ? setOpacity(style.opaciter)
          : setOpacity(style.none_opaciter);
      }
    }
  }, [props.mooving, props.caseIndex, props.masLength, props.indexCenter]);

  return (
    <div className={style.for_case + " " + layout}>
      <div
        ref={Card}
        style={{
          zIndex: Math.abs(props.indexCenter - props.caseIndex) * -1 + 5,
          transform:
            "scale(" +
            (1 - Math.abs(props.indexCenter - props.caseIndex) * 0.1) +
            ")",
          backgroundImage: "url(" + props.photo + ")",
          marginLeft:
            (props.indexCenter - props.caseIndex) * 30 +
            5 * (props.indexCenter - props.caseIndex) +
            "%",
        }}
        className={style.case + " " + opaciter}
      ></div>
    </div>
  );
};
