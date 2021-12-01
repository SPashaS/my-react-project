import s from './ArticleTitle.module.css';

function ArticleTitle(props) {
    return (
        <h1 className={s.title}>{props.title}</h1>
    );
}

export default ArticleTitle; 