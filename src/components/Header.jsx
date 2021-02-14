import styles from './Header.module.scss'
import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={styles.Header}>
        <img src='https://avatanplus.com/files/resources/original/5a3e0019bd1f6160823064af.png' />
        <text className={styles.Header}>Rubik project</text>
        <div className={styles.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default  Header;