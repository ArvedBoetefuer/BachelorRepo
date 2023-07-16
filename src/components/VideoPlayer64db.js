import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
import Test64db from '../assets/Test64db.mp4'

function VideoPlayer64db() {


  return (
    <div
    style={{
    diplay: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '25%'

   }}>

        <ReactPlayer controls={false} url={Test64db} height="250px" width="375px" playing={true}/>

        <div style={{
      
        display: "flex",
        justifyContent: "center",

        
      }}>
        <button style={{
          width: "150px",
          padding: "30px",
          marginBottom: "80px",
          position: 'absolute',
          bottom: "0"
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl rounded'><Link to="/audioSurvey4">Weiter</Link></button>
      </div>
    </div>
  )
}

export default VideoPlayer64db