import React, { useRef } from 'react'
import './testimonial.css'

const Testimonial = () => {

    let slider = useRef()

    let transform_X = 0
    const slideForward = () => {
        if (transform_X > -50) {
            transform_X -= 25
        }
        slider.current.style.transform = `translateX(${transform_X}%)`
    }

    const slideBackward = () => {
        if (transform_X < 0) {
            transform_X += 25
        }
        slider.current.style.transform = `translateX(${transform_X}%)`
    
}


return (<>
    <div className='container testimonial'>
        <img src='next-icon.png' alt='' className='next-btn' onClick={slideForward} />
        <img src='back-icon.png' alt='' className='back-btn' onClick={slideBackward} />
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src='user-1.png' />
                            <div>
                                <h3>William jckson</h3>
                                <span>edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at edusity was one of the the best
                            decision I've ever made . The supportive community , state-of-the-art facilities
                            and commitment to the accedemic excelence have truely exceed by expectation
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src='user-2.png' />
                            <div>
                                <h3>William jckson</h3>
                                <span>edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at edusity was one of the the best
                            decision I've ever made . The supportive community , state-of-the-art facilities
                            and commitment to the accedemic excelence have truely exceed by expectation
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src='user-3.png' />
                            <div>
                                <h3>William jckson</h3>
                                <span>edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at edusity was one of the the best
                            decision I've ever made . The supportive community , state-of-the-art facilities
                            and commitment to the accedemic excelence have truely exceed by expectation
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src='user-4.png' />
                            <div>
                                <h3>William jckson</h3>
                                <span>edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to persue my degree at edusity was one of the the best
                            decision I've ever made . The supportive community , state-of-the-art facilities
                            and commitment to the accedemic excelence have truely exceed by expectation
                        </p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</>)
}

export default Testimonial