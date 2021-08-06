import style from './menu.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export let Menu = (props) => {
    const [filler, setFill] = useState();
    useEffect(() =>{
        if (props.isMenu) {
            setFill(style.menu_top)
        } else {
            setFill(style.menu_bottom)
        }
    }, [props.isMenu])

    return(
        <div className={style.menu + ' ' + filler}>
            <NavLink exact to='/'><h2>ГЛАВНАЯ</h2></NavLink>
            <NavLink to='/examples'><h2>ПРИМЕРЫ РАБОТ</h2></NavLink>
            <NavLink to='/services'><h2>УСЛУГИ</h2></NavLink>
            <NavLink to='/reviews'><h2>ОТЗЫВЫ</h2></NavLink>
            <NavLink to='/contacts'><h2>КОНТАКТЫ</h2></NavLink>
        </div>
    )
}