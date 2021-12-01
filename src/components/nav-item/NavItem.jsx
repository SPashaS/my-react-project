import s from './NavItem.module.css';

function NavItem(props) {
    return (
        <li style={props.style} className={s.navItem}>
            <a className={s.navLink} href="#">
                <div className={s.wrapper}>
                    <img className={s.navIcon} src={props.icon} alt={props.text}/>
                    <span className={s.navText}>{props.text}</span>
                </div>
                
            </a>
        </li>
    );
}

export default NavItem; 