import React, { useState } from 'react'
import NavBar from './component/NavBar/NavBar'
import Hero from './component/Hero/Hero'
import Program from './component/program/Program'
import Title from './component/Title/Title'
import About from './component/about/About'
import Campus from './component/campus/Campus'
import Testimonial from './component/Testimonial/Testimonial'
import Contact from './component/contact/Contact'
import Footers from './component/Footer/Footers'
import VideoPlay from './component/video/VideoPlay'

const App = () => {
const[play,setPlay]=useState(false)

  return (<>
    <NavBar />
    <Hero />
    <Title subTitle='our program' title='what we offer' />
    <Program />
    <About setPlay={setPlay} />
    <Title subTitle='gallery' title='campus photos' />
    <Campus />
    <Title subTitle='TESTIMONIAL' title='what student says' />
    <Testimonial />
    <Title subTitle='contact us' title='get in touch' />
    <Contact />
    <Footers/>
    <VideoPlay play={play} setPlay={setPlay} />
  </>)
}

export default App