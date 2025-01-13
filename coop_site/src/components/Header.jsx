import React from 'react'
import logo from '../media/Logo.png'
import menu from '../media/menu.svg'
import './Header.css'
export default function Header() {
  return (
    <div id='header_container'>
      <section id='logo'>
        <img src={logo} alt='logo' />
      </section>
      <section id='navburger'>
        <button>
          <img src={menu} alt="menu" />
        </button>
      </section>
    </div>
  )
}
