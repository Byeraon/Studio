import { useState } from 'react';
import style from './video.module.css';

export let Video = () => {
    const [animaQ, setAnimQ] = useState('');
    const [animaW, setAnimW] = useState('');
    const [animaC, setAnimC] = useState('');
    const [animaDtC, setAnimDtC] = useState('');
    const [animaDt, setAnimDt] = useState('');

    return (
        <div className={style.page}>
            <div className={style.block}>
                <div className={style.first_block}>
                    <h1 style={{ fontSize: '2vw' }} className={style.second_text} >Посмотрите короткое видео о «‎Cavi music»</h1>
                    <h1 style={{ marginBottom: '3vh', marginTop: '3vh' }} className={style.second_text} >за 2 минуты 46 секунд вы узнаете</h1>
                    <div className={style.text_left}>
                        <h1 className={style.second_text} >Как гарантированно записать хорошую песню?</h1>
                        <h1 className={style.second_text} >Что делать, если не умеете петь?</h1>
                        <h1 className={style.second_text} >Опыт работы нашей команды в музыкальной сфере</h1>
                    </div>
                    <h1 style={{ marginBottom: '3vh', marginTop: '3vh' }} className={style.second_text} >Заполните короткую форму</h1>
                    <input className={style.input} type="tel" placeholder="Введите номер телефона"></input>
                </div>
                <div className={style.second_block}>
                    <div className={style.video}>
                        <iframe title="Cavi Music" src="https://vk.com/video_ext.php?oid=-201187528&id=456239017&hash=10da8629795cfbc9&hd=2" width="90%" height="90%" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>

            </div>
            <div className={style.arrows}>
                <h2 className={style.text_arrows}>ЗАБРОНИРУЙТЕ ВРЕМЯ НА СТУДИИ</h2>

                <div className={style.phone}></div>
                <figcaption className={style.phone_pod}>Мы вам перезвоним</figcaption>

                <div onMouseEnter={() => { setAnimQ(style.que_anim) }} onMouseLeave={() => { setAnimQ('') }} className={style.que}>
                    <div className={style.que1 + ' ' + animaQ}></div>
                    <div className={style.que2 + ' ' + animaQ}></div>
                    <div className={style.que3 + ' ' + animaQ}></div>
                </div>

                <figcaption className={style.que_pod}>Ответим на ваши вопросы</figcaption>

                <div onMouseEnter={() => { setAnimC(style.clock_anim) }} onMouseLeave={() => { setAnimC('') }} className={style.clock}>
                    <div className={style.clock_min + ' ' + animaC}></div>
                    <div className={style.clock_hours + ' ' + animaC}></div>
                </div>
                <figcaption className={style.clock_pod}>Подберем оптимальное время работы на студии, исходя из ваших задач</figcaption>

                <div onMouseEnter={() => { setAnimDtC(style.dt_clocks_anim); setAnimDt(style.dt_block_anim) }} onMouseLeave={() => { setAnimDtC(''); setAnimDt('') }} className={style.datetime}>
                    <div className={style.dt_blocks}>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                        <div className={style.dt_block + ' ' + animaDt}></div>
                    </div>
                    <div className={style.dt_clocks}>
                        <div className={style.dt_clocks_hours + ' ' + animaDtC}></div>
                        <div className={style.dt_clocks_min + ' ' + animaDtC}></div>
                    </div>
                </div>
                <figcaption className={style.datetime_pod}>Выберем удобные для вас Дату и Время для посещения студии</figcaption>

                <div onMouseEnter={() => { setAnimW(style.changered) }} onMouseLeave={() => { setAnimW('') }} className={style.changeday}>
                    <div className={style.changer + ' ' + animaW}></div>



                </div>
                <figcaption className={style.changer_pod}>Будет ждать вас в выбранный день и час</figcaption>
            </div>
        </div>
    )
}