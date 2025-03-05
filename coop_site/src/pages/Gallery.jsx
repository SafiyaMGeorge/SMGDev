import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
            <button>
            <FontAwesomeIcon icon={faCircleChevronLeft} style={{color: "#ffffff",}} />
            </button>
          </section>
          <section id='gallery_content'>
            <GalleryCard />
          </section>
          <section id='next_btn'>
            <button>
              <FontAwesomeIcon icon={faCircleChevronRight} style={{color: "#ffffff",}} />
            </button>
          </section>
        </main>
      </div>
    </div>
  )
}
