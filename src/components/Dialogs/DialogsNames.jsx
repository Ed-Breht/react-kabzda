import React, {useEffect, useState} from 'react'
import styles from './Dialogs.module.scss'
import UsersList from './UsersList'
import Messages from './MessageList'
import { useParams } from "react-router";
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialogitems";
import Message from "./Message";

let Dialogs = [
    {id: 1 , name: 'Lev'},
    {id: 2 , name: 'Ivan'},
    {id: 3 , name: 'Sasha'},
    {id: 4 , name: 'Masha'},
    {id: 5 , name: 'Sveta'}
]

let messages =[
    {id: 1 , message: 'Hello'},
    {id: 2 , message: 'Hi'},
    {id: 3 , message: 'Hi, hi'},
    {id: 4 , message: 'Welcome in this chat'},
    {id: 5 , message: 'Ok'},
]

let dialogsElements = Dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />)
let messagesElement = messages.map(message => <Message message={message.message} />)

const Dialogs = (props) =>{
  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
            {
                dialogsElements
            }
        </div>
        <div className={styles.messages}>
            {
                messagesElement
            }
        </div>
      </div>
  )
}

export default Dialogs;

// const Dialogs = () => {
//
//   const {userId} = useParams()
//
//   const users = [
//     {name: 'Lev', messages: ['привет', 'да']},
//     {name: 'Ivan', messages: ['привет', 'нет']},
//     {name: 'Sasha', messages: ['да']},
//     {name: 'Pasha', messages: ['привет', 'да', 'да', 'да']},
//     {name: 'Valera', messages: ['привет', 'хмм']},
//   ]
//
//   const [currentMessages, setCurrentMessages] = useState(users[0].messages)
//
//   // class: componentDidUpdate(prevprops,prevstate){
//   // }
//   useEffect(()=>{
//     setCurrentMessages(users[userId].messages)
//   },[userId])
//
//   return (
//     <div className={styles.dialogs}>
//       <UsersList
//         users={users}
//       />
//       <Messages messages={currentMessages} />
//     </div>
//   )
// }
// export default Dialogs
