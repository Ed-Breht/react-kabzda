import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
  return (
      <BrowserRouter>
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          {/*<Profile />*/}
          <div className='app-wrapper-content'>
              <Route path="/dialogs" component={Dialogs}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/Music" component={Music}/>
              <Route path="/Settings" component={Settings}/>
          </div>
      </div>
      </BrowserRouter>
  );
}


export default App;
