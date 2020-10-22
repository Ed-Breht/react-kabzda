import React from 'react';
import styles from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={styles.nav}>
        <div>
            <NavLink to="/Profile" activeClassName={styles.activ}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/Dialogs" activeClassName={styles.activ}>Massages</NavLink>
        </div>
        <div>
            <NavLink to="Music" activeClassName={styles.activ}>Music</NavLink>
        </div>
        <div>
            <NavLink to="Settings" activeClassName={styles.activ}>Settings</NavLink>
        </div>
    </nav>
}

export default  Navbar;