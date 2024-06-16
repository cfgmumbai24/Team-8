import React from 'react'
import ReactPlayer from 'react-player'
function MyPlayer() {
  return ( 
    <div>
    <ReactPlayer controls url = 'https://youtu.be/iIkCMBj282E' height = "600px" width="300"/>
    </div>
  )
}


export default MyPlayer