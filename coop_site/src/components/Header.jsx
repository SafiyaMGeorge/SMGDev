import React from 'react'
import logo from '../media/Logo.png'
import menu from '../media/menu.svg'
import './Header.css'
export default function Header() {
  return (
    <div id='container'>
      <section id='logo'>
        <img src={logo} alt='logo' />
      </section>
      <section id='navburger'>
        <img src={menu} alt="menu" />
      </section>
    </div>
  )
}
