import React from 'react'
import logo from '../media/Logo.png'

export default function Header() {
  return (
    <div>
      <section id='logo'>
        <img src={logo} alt='logo' />
      </section>
      <section id='navburger'>menu</section>
    </div>
  )
}
