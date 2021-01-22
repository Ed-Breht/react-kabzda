const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi' },
    { id: 3, message: 'Hi, hi' },
    { id: 4, message: 'Welcome in this chat' },
    { id: 5, message: 'Ok' },
  ],
  DialogsNames: [
    { id: 1, name: 'Lev' },
    { id: 2, name: 'Ivan' },
    { id: 3, name: 'Sasha' },
    { id: 4, name: 'Masha' },
    { id: 5, name: 'Sveta' },
  ],
  newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageBody: action.body,
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
})

export default dialogsReducer
