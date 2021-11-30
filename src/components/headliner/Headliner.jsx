import s from './Headliner.module.css';

import likeIcon from "./../../assets/images/headliner/like.svg";
import dislikeIcon from "./../../assets/images/headliner/dis.svg";
import Label from '../label/Label';
import Time from '../time/Time';


function Headliner(props) {
    return (
        <article className={s.headliner}>
            <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail image"/>
            <div className={s.info}>
                <h1 className={s.title}>{props.title}</h1>
                <div className={s.rating}>
                    <div className={s.like}>
                        <img className={s.likeIcon} src={likeIcon} alt="like-icon" />
                        <span className={s.text}>10.8k</span>
                    </div>
                    <div className={s.dislike}>
                        <img className={s.dislikeIcon} src={dislikeIcon} alt="dislike-icon" />
                        <span className={s.text}>1.3k</span>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <Label labelText={props.labelText} style={props.style}/>
                    <Time/>
                </div>
            </div>
        </article>
    );
}

export default Headliner;