import React from 'react'
import './About.css'
import Header from '../components/Header'
import pic from '../media/about_img.svg'

export default function About() {
  return (
    <div id='container'>
      <div id="overlay">
        <Header />
        <main id='about_content'>
          <img id="about_img"src={pic} alt='this is mme' />
          <h1 id='about_header'>I'm Shakim Copper</h1>
          <p id='about_text'>
            Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </main>
      </div>
    </div>
  )
}
