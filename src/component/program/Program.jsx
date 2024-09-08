
import React from 'react'
import './program.css'
const Program = () => {
    return (<>
        <div className='programs container'>
            <div className='program'>
                <img src='program-1.png' />
                <div className='caption'>
                    <img src='program-icon-1.png'/>
                    <p>Graduation degree</p>
                </div>
            </div>
            <div className='program'>
                <img src='program-2.png' />
                <div className='caption'>
                    <img src='program-icon-2.png'/>
                    <p>Master degree</p>
                </div>
            </div> 
             <div className='program'>
                <img src='program-3.png' />
                <div className='caption'>
                    <img src='program-icon-3.png'/>
                    <p>Post Graduation</p>
                </div>
        </div>
        </div>
    </>)
}

export default Program