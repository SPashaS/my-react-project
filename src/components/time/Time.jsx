import s from './Time.module.css';
import clockIcon from "./../../assets/images/headline/clock.svg";

function Time(props) {
    return (
        <div className={s.time}>
            <img className={s.timeIcon} src={clockIcon} alt="clock-icon" />
            <span className={s.timeText}>{props.time}</span>
        </div>
    );
}

export default Time; 