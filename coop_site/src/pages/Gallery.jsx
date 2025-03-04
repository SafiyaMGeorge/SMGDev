import React from 'react'
import GalleryCard from '../components/Gallery_Card' 
import'./Gallery.css'
import Header from '../components/Header'
export default function Gallery() {
  return (
    <div id='container'>
      <div id="overlay">
        <Header />
        <main id='gallery_section'>
          <section id='prev_btn'>
            <button>prev</button>
          </section>
          <section id='gallery_content'>
            <GalleryCard />
          </section>
          <section id='next_btn'>
            <button>next</button>
          </section>
        </main>
      </div>
    </div>
  )
}
