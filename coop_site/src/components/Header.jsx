import React from 'react'
import logo from '../media/Logo.png'
import Menu from './site_Nav'
import './Header.css'
export default function Header() {
  return (
    <div id='header_container'>
      <section id='logo'>
        <img src={logo} alt='logo' />
      </section>
      <section id='navburger'>
        <Menu />
      </section>
    </div>
  )
}
