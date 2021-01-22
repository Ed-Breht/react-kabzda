import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import {BrowserRouter, Route} from 'react-router-dom'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Dialogs"
            render={() => <DialogsContainer/>}
          />
          <Route path="/users" render={() => <UsersContainer/>} />
          <Route
            path="/Profile"
            render={() => (
              <Profile/>
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
