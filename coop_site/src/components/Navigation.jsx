import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul id='navList'>
          <li className='navItem'>
            <Link to="/about" style={{textDecoration:'none'}}>About</Link>
          </li>
          <li className='navItem'>
            <Link to="/gallery" style={{textDecoration:'none'}}>Gallery</Link>
          </li>
          <li className='navItem'>
            <Link to="/commisions" style={{textDecoration:'none'}}>Commisions</Link>
          </li>
          <li className='navItem'>
            <Link to="/contact" style={{textDecoration:'none'}}>Contact</Link>
          </li>
        </ul>
        <div id="navIcon">
        <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  )
}
