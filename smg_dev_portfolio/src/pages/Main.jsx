import React from 'react'
import './Main.css'

/*images*/
import dev from '../images/code-solid.svg'
import design from '../images/palette-solid.svg'
import htmlIcon from '../images/html5.svg'
import cssIcon from '../images/css3.svg'
import gitHub from '../images/github.svg'
import jquery from '../images/jQuery.png'
import js from '../images/js.svg'
import ssss from '../images/sass.svg'
import r_icon from '../images/r_icon.svg'
import figma from '../images/figmaIcon.svg'
import codevs from '../images/codeVs.png'



export default function Main() {
  return (
    <div id='main_Page'>
      <header>

      </header>
      <main id='main_Content'>
        <section id='intro'>
        <h1>Hi! I'm Safiya M. George</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Excepturi, pariatur?
          Lorem ipsum dolor sit amet consectetur.
          Lorem ipsum dolor sit amet consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit.
        </p>
        </section>
        <section id='main_Work'>
          <section className='box'>
            <div id='dev'>
            <h2>Font-End Dev</h2>
            <img src={dev} alt=' a development sign'/>
            </div>
          </section>
          <section className='box' >
            <div id='design'>
            <h2>Web Design</h2>
            <img src={design} alt='an artist color palette board'/>
            </div>
          </section>
        </section>
        <section id='tools'>
          <ul id='tool_Sphere'>
            <li className='tool_Img' id='inner_Img_1'>
              <img src={cssIcon} alt='CSS3 icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_2'>
              <img src={htmlIcon} alt='HTML5 icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_3'>
              <img src={js} alt='JavaScript icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_4'>
              <img src={figma} alt='Figma icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_5'>
              <img src={gitHub} alt='GitHub icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_6'>
              <img src={jquery} alt='jQuery icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_7'>
              <img src={r_icon} alt='React icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_8'>
              <img src={ssss} alt='Sass icon'/>
            </li>
            <li className='tool_Img' id='inner_Img_9'>
              <img src={codevs} alt='VScode icon'/>
            </li>
          </ul>
        </section>
        <section id='projects'>
          <section id='desing_Projects'></section>
          <section id='dev_Projects'></section>
        </section>
        <section id='contact_Me'></section>
      </main>
      
    </div>
  )
}
/*
previous code for the list of images

            <div className='outer'>
              <li> 
               <img src= {jquery} alt='jquery icon' />
              </li>
              <li> 
               <img src={r_icon} alt='react icon' />
              </li>
              <li> 
               <img src={gitHub} alt='github icon' />
              </li>
            </div>
            
              <ul id='inner_Tools'>
                <li>
                  <img src={cssIcon} alt='css icon' />
                </li>
                <li>
                  <img src={htmlIcon} alt='html icon' />
                </li>
                <li>
                  <img src={js} alt='js icon' />
                </li>
              </ul> 
              <div className='outer'>
                <li>
                  <img src={ssss} alt='sass icon' />
                </li>
                <li>
                  <img src={codeStu} alt='code icon' />
                </li>
                <li>
                  <img src={figma} alt='figma icon' />
                </li>

              </div>
              */