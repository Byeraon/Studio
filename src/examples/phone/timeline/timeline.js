import { useEffect, useState } from 'react';
import style from './timeline.module.css'

export let TimeLine = (props) => {

    const [wth, setWth] = useState(props.width);
    useEffect(() => {
        if (props.width < 1) {
            setWth(0)

        } else {
            setWth(props.width)
        }
    }, [props.width, wth])
    return (
        <div className={style.all_lines}>
            <div className={style.back_line}></div>
            <div style={{width: wth + '%'}} className={style.top_line}></div>
        </div>


    )
}