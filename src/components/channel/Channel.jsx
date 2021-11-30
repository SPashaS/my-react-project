import s from './Channel.module.css';

function Channel(props) {
    return (
        <div className={s.channel}>
            <div className={s.wrapper}>
                <img className={s.logo} src={props.logo} alt={props.text} />
            </div>
            <span className={s.text}>{props.text}</span>
        </div>
    );
}

export default Channel;