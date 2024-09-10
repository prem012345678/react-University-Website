
import React from 'react'
import './program.css'
const Program = () => {
    return (<>
        <div className='programs container'>
            <div className='program'>
                <img src='./assets/program-1.png' />
                <div className='caption'>
                    <img src='./assets/program-icon-1.png'/>
                    <p>Graduation degree</p>
                </div>
            </div>
            <div className='program'>
                <img src='./assets/program-2.png' />
                <div className='caption'>
                    <img src='./assets/program-icon-2.png'/>
                    <p>Master degree</p>
                </div>
            </div> 
             <div className='program'>
                <img src='./assets/program-3.png' />
                <div className='caption'>
                    <img src='./assets/program-icon-3.png'/>
                    <p>Post Graduation</p>
                </div>
        </div>
        </div>
    </>)
}

export default Program