import styles from './Header.module.scss'
import React from 'react';

const Header = () => {
    return <header className={styles.Header}>
        <img src='https://avatanplus.com/files/resources/original/5a3e0019bd1f6160823064af.png' />
        <text className={styles.Header}>Rubik project</text>
    </header>;
}

export default  Header;