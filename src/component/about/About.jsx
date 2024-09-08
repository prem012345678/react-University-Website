import React from 'react'
import './about.css'
const About = ({setPlay}) => {
  return (<>
    <div className='about container'>
        <div className='about_left'>
            <img src='about.png' className='about_img'/>
            <img src='play-icon.png' className='play_icon' onClick={()=>{
              setPlay(true)
            }}/>
        </div>
        <div className='about_right'>
            <h3>about university</h3>
            <h2>nurturing tomorrow's leaders today</h2>
            <p>To be a globally acknowledged multicultural University,  
            providing balanced education and educational innovation in
             all streams, innovative & quality researches, on environment
              of growth, and in search of excellence with value
               orientation in the hilly region of Pauri Garhwal 
               District of Uttarakhand.</p>
               <p>To be a place of choice for students, researchers
                and faculty from all parts of the world.</p>
               <p>To provide most appropriate innovative learning
                opportunities through latest and balanced curriculum 
                and teaching methodology to get answer of any problem in dynamic business 
                and social environment.</p>
        </div>
    </div>
  </>)
}

export default About