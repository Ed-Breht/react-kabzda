import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.MenuItem}>
        <NavLink to="/Profile" activeClassName={styles.activeLink}>
          Profile
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </NavLink>
      </div>
      <div className={styles.MenuItem}>
        <NavLink to="/Dialogs/0" activeClassName={styles.activeLink}>
          Messages
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </NavLink>
      </div>
      <div className={styles.MenuItem}>
        <NavLink to="/Music" activeClassName={styles.activeLink}>
          Music
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </NavLink>
      </div>
      <div className={styles.MenuItem}>
        <NavLink to="/Settings" activeClassName={styles.activeLink}>
          Settings
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
