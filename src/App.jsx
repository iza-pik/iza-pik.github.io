import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contacts'>Contact</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default App
