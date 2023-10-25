import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Entrance from './pages/Entrance';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main />} />
          <Route path = "/detail"  element = {<Detail/>}/>
          <Route path = "/login"  element = {<Login/>}/>
          <Route path = "/signup"  element = {<Signup/>}/>
          <Route path = "/entrance"  element = {<Entrance/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App