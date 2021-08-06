import { useState } from 'react';
import style from './onePacket.module.css';

export let Packet = (props) => {
    const [filler, setFill] = useState();
    const [filler_btn, setFillB] = useState();

    let c = props.masPos.map((el, index) => {
        return <div key={index} className={style.el_text}>{el}</div>
    })

    return (
        <div className={style.block + ' ' + filler}>
            <h5 className={style.header_text}>{props.name}</h5>
            <div className={style.block_alltext}>
                {c}
            </div>
            <h5 className={style.header_text}>{props.price}</h5>
            <button onMouseEnter={() => { setFill(style.el_fill); setFillB(style.btn_fill) }} onMouseOut={() => { setFill(style.el_fill_out); setFillB(style.btn_fill_o) }} className={style.btn_go + ' ' + filler_btn}>ЗАПИСАТЬСЯ</button>
        </div>
    )
}