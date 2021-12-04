import s from './NavItem.module.css';

import svg from './../../assets/images/nav-item/home.svg';


function NavItem(props) {
    return (
        <li style={props.style} className={s.navItem}>
            <a className={s.navLink} href="#">
                <div className={s.wrapper}>
                    <svg className={s.navIcon} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={svg + "#" + props.text} />
                    </svg>
                    <span className={s.navText}>{props.text}</span>
                </div>
                
            </a>
        </li>
    );
}

export default NavItem; 