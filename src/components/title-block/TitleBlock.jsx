import s from './TitleBlock.module.css';

function TitleBlock(props) {
    return (
        <div className={s.titleBlock}>
            <h2 className={s.title}>{props.title}</h2>
            <a className={s.titleLink} href="#">See all</a>
        </div>
    );
}

export default TitleBlock;