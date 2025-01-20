import React from 'react'
import {Link} from 'react-router-dom'
import './Welcome.css'
export default function Welcome() {
  return (
    <div className='welcomeImg'>
      <div className='overlay'>
        <main className='welcomeMain'>
          <section className='sculpture_Img'>
            <div className='welcomImgContainer'>
            </div>
          </section>
          <section className='title'>
            <h1>Sculptivated Carnivores</h1>
          </section>
          <section className='welcomeBtn'>
            <button>
              <Link to="/about" style={{textDecoration:'none'}}>
                <h2>Welcome In</h2>
              </Link>
            </button>
          </section>
        </main>
      </div>
    </div>
    
  )
}
