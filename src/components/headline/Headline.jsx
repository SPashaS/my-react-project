import s from './Headline.module.css';

import likeIcon from "./../../assets/images/headline/like.svg";
import dislikeIcon from "./../../assets/images/headline/dis.svg";
import Label from '../label/Label';
import Time from '../time/Time';
import ArticleTitle from '../article-title/ArticleTitle';


function Headline(props) {
    return (
        <article className={s.headline}>
            <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail image"/>
            <div className={s.info}>
                <ArticleTitle title={props.title}/>
                <div className={s.rating}>
                    <div className={s.like}>
                        <img className={s.likeIcon} src={likeIcon} alt="like-icon" />
                        <span className={s.text}>{props.likes}</span>
                    </div>
                    <div className={s.dislike}>
                        <img className={s.dislikeIcon} src={dislikeIcon} alt="dislike-icon" />
                        <span className={s.text}>{props.dislikes}</span>
                    </div>
                </div>
                <div className={s.wrapper}>
                    <Label labelText={props.labelText} style={props.style}/>
                    <Time time={props.time}/>
                </div>
            </div>
        </article>
    );
}

export default Headline;