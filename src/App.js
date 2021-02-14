import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer";
import Login from "./components/login/Login";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Dialogs"
            render={() => <DialogsContainer/>}
          />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route
            path="/Profile/:userId?"
            render={() => (
              <ProfileContainer/>
            )}
          />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login/>} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
