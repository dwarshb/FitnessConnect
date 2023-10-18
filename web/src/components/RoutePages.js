import React, { Component } from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';

export default class RoutePages extends Component {
  render() {
    return (
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>
    )
  }
}
