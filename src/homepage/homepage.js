import style from './homepage.module.css';
import { Examples } from '../examples/examples';
import { Price } from '../price/price';
import { Video } from './video/video';
import { Equipment } from '../equipment/equipment';
import { Questions } from '../questions/questions';
import { Cases } from '../cases/cases';
import { Map } from '../map/map';

export let HomePage = () => {
    return (
        <div className={style.pages}>


            <div className={style.first_page}>
                <h1 className="gold_text go_toR">CAVI</h1>
                <h1 className="gold_text_scn">MUSIC</h1>
                <h1 className="thrid_text">Студия звукозаписи в Москве</h1>
                <button className={style.first_button}>ЗАПИСАТЬСЯ</button>
            </div>
            
            <Video/>
            <Examples/>
            <Price />
            <Equipment />
            <Questions />
            <Cases />
            <Map />
        </div>
    )
}