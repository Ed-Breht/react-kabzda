import React from 'react'
import styles from './Dialogs.module.scss'
import DialogItem from './Dialogitems'
import Message from './Message'
import {sendMessageCreator, updateNewMessageCreator, updateNewPostTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.DialogsNames.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ))
  let messagesElement = state.messages.map((message) => (
    <Message message={message.message} />
  ))

  let newMessageText = state.newMessageText;

  let addMessage = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange =(event) => {
    let body= event.target.value;
    props.store.dispatch(updateNewMessageCreator(body));
  }


  return (
    <div className={styles.DialogsName}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        {messagesElement}
        <div>
          <textarea onChange={onNewMessageChange} value={newMessageText}></textarea>
        </div>
        <div>
          <button onClick={addMessage}> Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs

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
