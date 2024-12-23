import React from 'react'
import './About.css'
import Header from '../components/Header'
export default function About() {
  return (
    <div id='containter'>
      <header>
        <Header />
      </header>
      <main id='main content'>
        <section id='sculpter_Img'>
          <div id='img_Box'>
            <img src="../media/about_img.svg" alt="Creator of the sculptures." />
          </div>
        </section>
        <h1>I'm Shakim Cooper</h1>
        <p id='bio'></p>
      </main>
    </div>
  )
}
