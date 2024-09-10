import React from 'react'
import './campus.css'
const Campus = () => {
  return (<>
    <div className='campus container'>
        <div className='gallery'>
            <img src='./assets/gallery-1.png'/>
            <img src='./assets/gallery-2.png'/>
            <img src='./assets/gallery-3.png'/>
            <img src='./assets/gallery-4.png'/>
        </div>
        <button className='btn dark_btn'>see more here </button>
    </div>
  </> )
}

export default Campus