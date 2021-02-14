import React from 'react'
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from '../../redux/Dialogs-reducer'
import Dialogs from './DialogsNames'
import { connect } from 'react-redux'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageCreator: (body) => {dispatch(updateNewMessageCreator(body)) },
    sendMessage: () => { dispatch(sendMessageCreator())}
  }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)
