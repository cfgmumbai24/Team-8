import React from 'react'
import video from '../assets/video.mp4'
import ReactPlayer from 'react-player'
function MyPlayer() {
  return ( 
    <div>
    <ReactPlayer controls url = {video} height = "100" width="750" />
    </div>
  )
}


export default MyPlayer