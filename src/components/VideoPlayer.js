import React, {useState} from "react";
import TriggerLight from '../assets/TriggerLight.mp4'
import ReactPlayer from 'react-player'
import AudioModal from "./AudioModal";
import { Link } from "react-router-dom";
 function VideoPlayer() {
    const[isOpen, setIsOpen] = useState(true)
    

  return (
   <div style={{
    diplay: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '25%'

   }}>
    <AudioModal open={isOpen} onClose={()=> setIsOpen(false)}></AudioModal>

    <ReactPlayer controls={false} url={TriggerLight} height="250px" width="375px" playing={!isOpen}/>    

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
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl rounded'><Link to="/audioTest1">Weiter</Link></button>
      </div>
    
   </div>
  )
}
export default VideoPlayer;
