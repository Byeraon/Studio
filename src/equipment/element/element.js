import { useEffect, useState } from 'react';
import style from './element.module.css';

export let Element = (props) => {
    const [fillerText, setFill] = useState();

    useEffect(() => {
        if (props.currentIndex === props.index) {
            setFill(style.gold)
        } else {
            setFill(style.not_gold)
        }
    }, [props.currentIndex, props.index])


    return(
        <h5 className={style.element + ' ' + fillerText} onClick={props.handleClick(props.index)} key = {props.index}>{props.el}</h5>
    )
}