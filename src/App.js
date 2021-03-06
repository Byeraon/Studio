import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Menu } from "./menu/menu";
import { Preloader } from "./preloader/preloader";
import { HomePage } from "./homepage/homepage";

function App() {
  const [isLoader, setLoader] = useState(false);
  const [isOpenMenu, setOpen] = useState(false);
  const [isMenuchange, setMenu] = useState(false);
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

  const [scrollPosition, setSrollPosition] = useState(0); // SCROLL POS
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    if ((scrollPosition * 100) / window.screen.height > 20) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }, [scrollPosition]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // SCROLL POS

  return (
    <BrowserRouter>
      <div className="App">
        <Menu
          setOpen={setOpen}
          isOpenMenu={isOpenMenu}
          isMob={isMob}
          isMenu={isMenuchange}
        ></Menu>
        {isLoader && (
          <Preloader
            setLoader={() => {
              setLoader(!isLoader);
            }}
          ></Preloader>
        )}

        <div className="container">
          <Route exact path="/" render={() => <HomePage></HomePage>}></Route>
          <Route path="/examples" render={() => <div></div>}></Route>
          <Route path="/services" render={() => <div></div>}></Route>
          <Route path="/reviews" render={() => <div></div>}></Route>
          <Route path="/contacts" render={() => <div></div>}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
