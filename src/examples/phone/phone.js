import style from "./phone.module.css";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { TimeLine } from "./timeline/timeline";
import { Track } from "./track/track";

export let Phone = () => {
  const [currentIndex, setIndex] = useState(0);
  /*const [url, setUrl] = useState(Object);*/
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeek] = useState(false);
  const [currentTime, setCTime] = useState(0 + ":00");
  const [endTime, setETime] = useState(0 + ":00");
  const [styleBtnP, setStyleP] = useState(style.play);
  const [prevLs, setPrevs] = useState(style.p);
  const [nextLs, setNexts] = useState(style.o);
  const [marginerPlaylist, setPlaylist] = useState(style.marginerPlaylist);
  const [marginerPlayer, setPlayer] = useState();

  const musicList = [
    {
      name: "ГАНЬГ Аутро",
      author: "OG Buda",
      img: "https://images.genius.com/6c447e825fe10969e7b4ebf901bb9d00.640x640x1.jpg",
      url: "https://dl.muzonovs.ru/files/music/2021/04/og-buda-feat-bushido-zho-scally-milano-mayot-magnum-opus-seemee-yungway-gang-autro.mp3",
    },
    {
      name: "Трап Трап",
      author: "LOV66",
      img: "https://images.genius.com/adbaa5cc2e3e255d6cf779c40a5864c3.1000x1000x1.jpg",
      url: "https://mp3uks.ru/mp3/files/lovv66-trap-trap-mp3.mp3",
    },
    {
      name: "Неправильно",
      author: "LOVV66, OG Buda",
      img: "https://images.genius.com/06d60c1a40180b327cee7d2adee1e17e.640x640x1.jpg",
      url: "https://mp3uks.ru/mp3/files/lovv66-og-buda-nepravilno-mp3.mp3",
    },
    {
      name: "Добро Пожаловать",
      author: "OG Buda, MAYOT",
      img: "https://images.genius.com/b61ce4ca9271ba8420fb11ee2c8d24f5.1000x1000x1.jpg",
      url: "https://mp3uks.ru/mp3/files/og-buda-mayot-dobro-pozhalovat-mp3.mp3",
    },
  ];

  let Player = useRef();

  let playTrack = (ind) => {
    return function () {
      if (ind === currentIndex) {
        handlePlay();
      } else {
        setIndex(ind);
        setPlaying(true);
      }
    };
  };

  const track_list = musicList.map((el, index) => {
    return (
      <Track
        key={index}
        playTrack={playTrack}
        playing={playing}
        nowPlaying={currentIndex}
        index={index}
        name={el.name}
        author={el.author}
        image={el.img}
      />
    );
  });

  let handlePrev = () => {
    setPlayed(0);
    setNexts(style.next_logo);
    setTimeout(() => {
      if (Player.current.getCurrentTime() < 5) {
        setIndex(checkPrevSong);
      } else {
        Player.current.seekTo(0);
      }
      setNexts();
    }, 250);
  };

  let handleNext = () => {
    setPlayed(0);
    setPrevs(style.prev_logo);
    setTimeout(() => {
      setIndex(checkNextSong);
      setPrevs();
    }, 250);
  };

  useEffect(() => {
    if (playing) {
      setStyleP(style.pause);
    } else {
      setStyleP(style.play);
    }
  }, [playing]);

  let checkPrevSong = () => {
    let k;
    if (currentIndex === 0) {
      k = musicList.length - 1;
    } else {
      k = currentIndex - 1;
    }
    return k;
  };

  let checkNextSong = () => {
    let k;
    if (currentIndex === musicList.length - 1) {
      k = 0;
    } else {
      k = currentIndex + 1;
    }
    return k;
  };

  let readyingMusic = () => {
    setETime(
      Math.trunc(Player.current.getDuration() / 60) +
        ":" +
        (Math.trunc(
          Player.current.getDuration() -
            Math.trunc(Player.current.getDuration() / 60) * 60
        ) < 10
          ? "0" +
            Math.trunc(
              Player.current.getDuration() -
                Math.trunc(Player.current.getDuration() / 60) * 60
            )
          : Math.trunc(
              Player.current.getDuration() -
                Math.trunc(Player.current.getDuration() / 60) * 60
            ))
    );
  };

  let handleProgress = (state) => {
    setCTime(
      Math.trunc(Player.current.getCurrentTime() / 60) +
        ":" +
        (Math.trunc(
          Player.current.getCurrentTime() -
            Math.trunc(Player.current.getCurrentTime() / 60) * 60
        ) < 10
          ? "0" +
            Math.trunc(
              Player.current.getCurrentTime() -
                Math.trunc(Player.current.getCurrentTime() / 60) * 60
            )
          : Math.trunc(
              Player.current.getCurrentTime() -
                Math.trunc(Player.current.getCurrentTime() / 60) * 60
            ))
    );
    if (!seeking) {
      setPlayed(state.played);
    }
    if (state.played === 1) {
      handleNext();
    }
  };

  let handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  let handleSeekMouseDown = (e) => {
    setSeek(true);
  };

  let handleSeekMouseUp = (e) => {
    setSeek(false);
    Player.current.seekTo(parseFloat(e.target.value));
  };

  let handlePlay = () => {
    setPlaying(!playing);
  };

  let destropPlaylist = () => {
    setPlayer();
    setPlaylist(style.marginerPlaylist);
  };

  let destroyPlayer = () => {
    setPlayer(style.marginerPlayer);
    setPlaylist();
  };

  return (
    <div className={style.phone}>
      <ReactPlayer
        ref={Player}
        width="0%"
        height="0%"
        url={musicList[currentIndex].url}
        playing={playing}
        onProgress={handleProgress}
        onReady={readyingMusic}
        volume={1}
      ></ReactPlayer>
      <div className={style.phone_shadow}></div>
      <div className={style.phone_in}>
        <div className={style.player + " " + marginerPlayer}>
          <div className={style.block_buttons}>
            <button onClick={destropPlaylist} className={style.back}></button>
            <div className={style.text_playing}>
              <h3>PLAYING NOW</h3>
            </div>
            <button
              onClick={destroyPlayer}
              className={style.playlis_btn}
            ></button>
          </div>
          <div className={style.logos_place}>
            <div
              style={{
                backgroundImage: "url(" + musicList[checkPrevSong()].img + ")",
              }}
              className={style.phone_logo + " " + style.scaling + " " + nextLs}
            ></div>
            <div
              style={{
                backgroundImage: "url(" + musicList[currentIndex].img + ")",
              }}
              className={style.phone_logo + " " + style.moving}
            ></div>
            <div
              style={{
                backgroundImage: "url(" + musicList[checkNextSong()].img + ")",
              }}
              className={style.phone_logo + " " + style.scaling + " " + prevLs}
            ></div>
          </div>

          <div className={style.text_block}>
            <h3 className={style.author_track}>
              {musicList[currentIndex].author}
            </h3>
            <h3 className={style.name_track}>{musicList[currentIndex].name}</h3>
            <div className={style.times}>
              <h3>{currentTime}</h3>
              <h3>{endTime}</h3>
            </div>
          </div>

          <div className={style.inputer}>
            <input
              className={style.duration_l}
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            ></input>
            <TimeLine width={100 - played * 100 - 3} />
          </div>

          <div className={style.button_place}>
            <button
              className={style.prev + " " + style.button_click}
              onClick={handlePrev}
            ></button>
            <button
              className={styleBtnP + " " + style.button_click}
              onClick={handlePlay}
            ></button>
            <button
              className={style.next + " " + style.button_click}
              onClick={handleNext}
            ></button>
          </div>
        </div>
        <div className={style.playlist + " " + marginerPlaylist}>
          <h3 style={{ paddingTop: "20%" }} className={style.name_track}>
            {musicList[currentIndex].name}
          </h3>
          <div className={style.logos_place + " " + style.logoM}>
            <button
              onClick={destropPlaylist}
              style={{ height: "14%" }}
              className={style.back}
            ></button>
            <div
              style={{
                backgroundImage: "url(" + musicList[currentIndex].img + ")",
              }}
              className={style.phone_logo + " " + style.second_logo}
            ></div>
            <button
              style={{ height: "14%" }}
              className={style.playlis_btn}
            ></button>
          </div>
          <div className={style.track_list}>{track_list}</div>
        </div>
      </div>
    </div>
  );
};
