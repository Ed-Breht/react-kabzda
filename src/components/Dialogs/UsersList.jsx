import React from 'react'
import styles from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const UsersList = ({ users }) => {
  const renderUsers = users.map((el, idx) => {
    return (
      <div>
        <NavLink to={`/Dialogs/${idx}`}  className={styles.dialog} activeClassName={styles.active}>{el.name}</NavLink>
      </div>
    )
  })
  return <div className={styles.dialogsItems}>{renderUsers}</div>
}

export default UsersList
