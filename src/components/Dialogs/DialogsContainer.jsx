import React from 'react'
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from '../../redux/Dialogs-reducer'
import Dialogs from './DialogsNames'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageCreator: (body) => {dispatch(updateNewMessageCreator(body)) },
    sendMessage: () => { dispatch(sendMessageCreator())}
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer
