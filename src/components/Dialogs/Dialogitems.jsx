import styles from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'
import React from 'react'

const DialogItem = (props) => {
  let path = '/Dialogs/' + props.id
  return (
    <div className={styles.dialog + ' ' + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
