import React, {useState} from "react";
import ReactPlayer from 'react-player'
import AudioModal2 from "./AudioModal2";
import { Link } from "react-router-dom";
import Test58db from '../assets/Test58db.mp4'

function VideoPlayer58db() {

    const[isOpen, setIsOpen] = useState(true)

  return (
    <div
    style={{
    diplay: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '25%'

   }}>
        <AudioModal2 open={isOpen} onClose={()=> setIsOpen(false)}></AudioModal2>

        <ReactPlayer controls={false} url={Test58db} height="250px" width="375px" playing={!isOpen}/>

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
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl rounded'><Link to="/audioSurvey1">Weiter</Link></button>
      </div>
    </div>
  )
}

export default VideoPlayer58db
