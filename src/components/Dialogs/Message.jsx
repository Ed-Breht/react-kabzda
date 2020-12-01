import styles from './Dialogs.module.scss'
import React from 'react'

const Message = (props) => {
  return <div className={styles.dialog}>{props.message}</div>
}

export default Message
