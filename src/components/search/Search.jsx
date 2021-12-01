import s from './Search.module.css';

import searchIcon from "./../../assets/images/search/search.svg";


function Search() {
    return (
        <form className={s.searchForm}>
            <button className={s.searchBtn} type="submit">
                <img className={s.searchIcon}src={searchIcon} alt="Search" />
            </button>
            <input className={s.searchInput} type="search" placeholder="Search for anything…"/>
        </form>
    );
}

export default Search; 