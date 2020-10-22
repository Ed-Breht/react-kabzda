import React, { useState } from 'react'
import styles from './Dialogs.module.scss'

const Dialogs = (props) => {
  const users = [
    { name: 'Lev', messages: ['привет', 'да'] },
    { name: 'Ivan', messages: ['привет', 'нет'] },
    { name: 'Sasha', messages: ['да'] },
    { name: 'Pasha', messages: ['привет', 'да', 'да', 'да'] },
    { name: 'Valera', messages: ['привет', 'хмм'] },
  ]

  const [selectedUserId, setSelectedUserId] = useState(0)
  const [currentMessages, setCurrentMessages] = useState(users[0].messages)

  const renderUsers = users.map((el, idx) => {
    const isActive = selectedUserId === idx

    const onClick = () => {
      onUserClick(idx)
    }

    return (
      <div
        className={`${styles.dialog} ${isActive && styles.active}`}
        onClick={onClick}
      >
        {el.name}
      </div>
    )
  })

  const onUserClick = (id) => {
    setSelectedUserId(id)
    setCurrentMessages(users[id].messages)
  }

  const UsersList = () => (
    <div className={styles.dialogsItems}>{renderUsers}</div>
  )

  return (
    <div className={styles.dialogs}>
      <UsersList />
      <Messages messages={currentMessages} />
    </div>
  )
}

const Messages = ({ messages }) => {
  const messagesList = messages.map((el) => {
    return <div className={styles.dialog}>{el}</div>
  })

  return <div className={styles.messages}>{messagesList}</div>
}

export default Dialogs
