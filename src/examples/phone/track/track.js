import { useEffect, useState } from 'react';
import style from './track.module.css';

export let Track = (props) => {
    const [filler, setFill] = useState();
    const [fillerButton, setFillB] = useState();


    useEffect(() => {
        if (props.nowPlaying === props.index) {
            setFill(style.filling_track);
            if (props.playing) {
                setFillB(style.pause)
            } else {
                setFillB(style.play)
            }
            
        } else {
            setFill();
            setFillB(style.play_gray)
        }
    }, [props.nowPlaying, props.index, props.playing])

    return (
        <div className={style.one_track + ' ' + filler}>
            <div className={style.text_block}>
                <h5 className={style.name_track}>{props.name}</h5>
                <h5 className={style.author_track}>{props.author}</h5>
            </div>
            <div onClick={props.playTrack(props.index)} className={style.button_play + ' ' + fillerButton}></div>
        </div>
    )
}