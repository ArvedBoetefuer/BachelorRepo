import { Link } from "react-router-dom";



function AudioButton2() {
  
  return (
      <div style={{
      //  marginLeft: '50%',
        display: "flex",
        justifyContent: "center",

        
      }}>
        <button style={{
          padding: "30px",
          margin: "20px",
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl '><Link to="/audioTest1">Weiter</Link></button>
      </div>
  );
}
export default AudioButton2;