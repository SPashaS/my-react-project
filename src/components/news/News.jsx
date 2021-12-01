import s from './News.module.css';
import Label from '../label/Label';
import Time from '../time/Time';
import ArticleTitle from '../article-title/ArticleTitle';

function News(props) {
    return (
        <article className={s.news}>
            <img className={s.newsImg} src={props.image} alt="" />
            <div className={s.wrapper}>
                <div className={s.blockTitle}>
                    <ArticleTitle title={props.title}/>
                </div>
                <div className={s.inner}>
                    <Label labelText={props.labelText} style={props.style}/>
                    <Time time={props.time}/>
                </div>
            </div>
        </article>
    );
}

export default News; 