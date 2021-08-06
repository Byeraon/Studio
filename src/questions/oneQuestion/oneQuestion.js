import { useEffect, useState } from 'react';
import style from './oneQuestion.module.css';

export let OneQuestion = (props) => {
    const [openedQ, setOpen] = useState(false);
    const [opaciter, setOpacity] = useState(); 
    const [heig, setHeig] = useState(); 
    const [heigthChanger, setHeigth] = useState();
    const [buttonStyle, setButton] = useState();

    let handlechange = () => {
        setOpen(!openedQ);
    }

    let massPod = props.pods.map((el, index) => {
        return <h6 key={index} className={style.question_p + ' ' + opaciter}>{el}</h6>
    })

    useEffect(() => {
        if (openedQ) {
            setHeigth(style.heithter);
            setOpacity(style.opaciter); 
            setButton(style.buttonTrue);
            setTimeout(() => { setHeig(800) }, 250);
        } else {
            setHeigth(style.heithter_out); 
            setOpacity(style.opaciter_out); 
            setButton(style.buttonFalse);
            setTimeout(() => { setHeig(0) }, 500);
        }
    }, [openedQ])


    return (
        <div className={style.once_q}>
            <div className={style.oneQuestion}>
                <h6 className={style.question}>{props.question}</h6>
                <div onClick={handlechange} className={style.open_button + ' ' + buttonStyle}></div>


            </div>
            <div style={{ maxHeight: heig + 'px' }} className={style.open_place + ' ' + heigthChanger}>
                {massPod}
            </div>
        </div>
    )
}