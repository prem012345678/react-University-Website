import React, { useRef } from 'react'
import './videoplay.css'
const VideoPlay = ({play,setPlay}) => {

    let player=useRef()
const closePlyaer=(e)=>{
    if (e.target===player.current) {
        setPlay(false)
    }
}
  return (
  <>
    <div className={`video_play ${play ? '' : 'hide'}` } ref={player} onClick={closePlyaer}>.
        <video src="video.mp4" autoPlay muted controls/>
    </div>
  </>
  )
}

export default VideoPlay