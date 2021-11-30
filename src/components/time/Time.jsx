import s from './Time.module.css';
import clockIcon from "./../../assets/images/headliner/clock.svg";

function Time(props) {
    return (
        <div className={s.time}>
            <img className={s.timeIcon} src={clockIcon} alt="clock-icon" />
            <span className={s.timeIext}>2:00 pm</span>
        </div>
    );
}

export default Time; 