import React, { Component } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <nav className='nav-bar'>
          <ul>
            <li>
              <NavLink exact to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contacts'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/projects'>Projects</NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default App
