import React from 'react'
import './Hero.css'
import image from '/hero.png'
const Hero = () => {
  return (<>
    <div className='hero container'style={{backgroundImage:`url(${image})`}}>
      <div className='hero_text'>
        <h1>We ensure better education for better world</h1>
        <p>University established with clear mission,
          vision and objectives of  imparting quality
          education of latest industrial and social needs
          with employment of  quality manpower .
          Promoters of the university have varied experiences
          of economic and business environment and have poured
          these experiences in the conceptualization and establishment.</p>
        <button className='btn'>explore more</button>
      </div>
    </div>
  </>)
}

export default Hero