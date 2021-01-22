import profileReducer from './Profile-reducer'
import dialogsReducer from './Dialogs-reducer'
import sidebarReducer from './Sidebar-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'It`s my first post' },
      ],
      newPostText: 'wake up samurai, we will burn this city',
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
      newMessageBody: '',
    },
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state)
  },
}

export default store
