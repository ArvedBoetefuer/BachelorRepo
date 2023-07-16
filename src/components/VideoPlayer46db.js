import React from "react";
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";
import Test46db from '../assets/Test46db.mp4'

function VideoPlayer46db() {

  

  return (
    <div
    style={{
    diplay: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '25%'

   }}>

        <ReactPlayer controls={false} url={Test46db} height="250px" width="375px" playing={true}/>

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
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl rounded'><Link to="/audioSurvey5">Weiter</Link></button>
      </div>
    </div>
  )
}

export default VideoPlayer46db