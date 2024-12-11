import React from 'react'
import {Link} from 'react-router-dom'
import Profile from '../coponents/Profile';
import '../pages/Welcome.css'

export default function Welcome() {
  return (
    
    <main id="welcome_Page">
    <section id="portfolio_Img">
      <Profile />
    </section>
    <section id="intro">
      <h1>Hi! I'm Safiya George</h1>
      <h2 id="what_I_Do"><span></span></h2>
    </section>
    <section id="enter_Btn">
      <button>
        <Link to="/main">
          Check me out!
        </Link>
      </button>
    </section>
  </main>
  )
}
