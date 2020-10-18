import React from 'react';
import styles from "./Navbar.module.scss"

const Navbar = () => {
    return <nav className={styles.nav}>
        <div>
            <a>Profile</a>
        </div>
        <div>
            <a>Massages</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default  Navbar;