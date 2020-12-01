import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Dialogs from './components/Dialogs/DialogsNames'
import { BrowserRouter, Route } from 'react-router-dom'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogItem from './components/Dialogs/Dialogitems'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Dialogs"
            render={() => <Dialogs  store={props.store}/>}
          />
          <Route
            path="/Profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
