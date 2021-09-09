import style from "./menu.module.css";
import { useEffect, useState } from "react";

export let Menu = (props) => {
  const [filler, setFill] = useState();

  useEffect(() => {
    if (!props.isMob) {
      if (props.isMenu) {
        setFill(style.menu_top);
      } else {
        setFill(style.menu_bottom);
      }
    } else {
      setFill(style.menuVisible);
    }
  }, [props.isMenu, props.isMob]);

  return (
    <>
      <div
        style={
          props.isMob
            ? props.isOpenMenu
              ? {
                  margin: "0",
                  height: "100%",
                  overflow: "visible",
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }
              : {
                  margin: "0",
                  height: "max-content",
                  overflow: "visible",
                  backgroundColor: "transparent",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }
            : {}
        }
        className={style.menu + " " + filler}
      >
        {props.isMob && (
          <div
            onClick={() => props.setOpen((prevstate) => !prevstate)}
            id={style.navIcon}
            style={props.isOpenMenu ? { marginBottom: "10%" } : {}}
            className={props.isOpenMenu ? style.open : undefined}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {props.isMob ? (
          props.isOpenMenu ? (
            <>
              <a
                onClick={() => props.setOpen((prevstate) => !prevstate)}
                className={style.menuVisible}
                href="#/"
              >
                <h2 style={{ fontSize: "inherit" }}>ГЛАВНАЯ</h2>
              </a>
              <a
                onClick={() => props.setOpen((prevstate) => !prevstate)}
                className={style.menuVisible}
                href="#examples"
              >
                <h2 style={{ fontSize: "inherit" }}>ПРИМЕРЫ РАБОТ</h2>
              </a>
              <a
                onClick={() => props.setOpen((prevstate) => !prevstate)}
                className={style.menuVisible}
                href="#services"
              >
                <h2 style={{ fontSize: "inherit" }}>УСЛУГИ</h2>
              </a>
              <a
                onClick={() => props.setOpen((prevstate) => !prevstate)}
                className={style.menuVisible}
                href="#reviews"
              >
                <h2 style={{ fontSize: "inherit" }}>ОТЗЫВЫ</h2>
              </a>
              <a
                onClick={() => props.setOpen((prevstate) => !prevstate)}
                className={style.menuVisible}
                href="#contacts"
              >
                <h2 style={{ fontSize: "inherit" }}>КОНТАКТЫ</h2>
              </a>
            </>
          ) : (
            <></>
          )
        ) : (
          <>
            <a href="#/">
              <h2>ГЛАВНАЯ</h2>
            </a>
            <a href="#examples">
              <h2>ПРИМЕРЫ РАБОТ</h2>
            </a>
            <a href="#services">
              <h2>УСЛУГИ</h2>
            </a>
            <a href="#reviews">
              <h2>ОТЗЫВЫ</h2>
            </a>
            <a href="#contacts">
              <h2>КОНТАКТЫ</h2>
            </a>
          </>
        )}
      </div>
    </>
  );
};
