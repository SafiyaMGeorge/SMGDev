import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () =>{
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav>
        <div id="navIcon" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className ={isOpen ? 'navList active' : 'navList'}>
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
      </nav>
    </div>
  )
}
