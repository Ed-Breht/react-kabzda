const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'It`s my first post' },
      ],
      newPostText: 'samuuuurai',
    },
    dialogsPage: {
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
      newMessageText: ''
    },
  },
  getState() {
    return this._state
  },
  _callSubscriber() {},
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer // паттерн observer
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body,
})


export default store
