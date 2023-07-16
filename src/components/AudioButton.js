import { Link } from "react-router-dom";



function AudioButton() {
  
  return (
      <div style={{
      //  marginLeft: '50%',
        display: "flex",
        justifyContent: "center",

        
      }}>
        <button style={{
          width: "150px",
          padding: "30px",
          margin: "20px",
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-l rounded'><Link to="/audio">Weiter zur Audiospur</Link></button>
      </div>
  );
}
export default AudioButton;