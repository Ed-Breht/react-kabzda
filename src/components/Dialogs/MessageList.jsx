import styles from './Dialogs.module.scss'
import React from 'react'

const Messages = ({ messages }) => {
  const messagesList = messages.map((el) => {
    return <div className={styles.dialog}>{el}</div>
  })

  return <div className={styles.messages}>{messagesList}</div>
}

export default Messages
