import React from 'react'
import {Link} from 'react-router-dom'
import menu from '../media/menu.svg'
export default function site_Nav() {
  return (
    <div>
      <nav>
        <ul>
          
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
