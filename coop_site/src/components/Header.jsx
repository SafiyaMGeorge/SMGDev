import React from 'react'
import logo from '../media/Logo.png'
import menu from '../media/menu.svg'
export default function Header() {
  return (
    <div>
      <section id='logo'>
        <img src={logo} alt='logo' />
      </section>
      <section id='navburger'>
        <img src={menu} alt="" />
      </section>
    </div>
  )
}
