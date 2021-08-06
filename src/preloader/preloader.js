import { useEffect, useState } from 'react';
import style from './preloader.module.css';

export let Preloader = (props) => {
    const [filler, setFill] = useState('');
    useEffect(() => {
        setTimeout(() => {setFill(style.filling_anim)} , 500)
        setTimeout(() => {setFill(style.destroy_anim)} , 5500)
        setTimeout( props.setLoader, 5750)
    }, [props.setLoader])


    return (
        <div  className={style.loader + ' ' + filler}>
            <h3 className={style.text + ' ' + style.faster_anim + ' ' + filler}>CAVI</h3>
        </div>
    )
}