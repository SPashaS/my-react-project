import s from './SortItem.module.css';

import arrup from "./../../assets/images/sort-item/arrup.svg";
import arrdown from "./../../assets/images/sort-item/arrdown.svg";

function SortItem(props) {
    return (
        <div className={s.sortItem}>
            <img className={s.icon} src={props.sortIcon} />
            <span className={s.text}>{props.text}</span>
            <div className={s.buttons}>
                <btn className={s.btn}>
                    <img src={arrup}/>
                    <span>Up</span>
                </btn>
                <btn  className={s.btn}>
                    <img src={arrdown}/>  
                    <span>Down</span>
                </btn>
            </div>
        </div>
    );
}

export default SortItem; 