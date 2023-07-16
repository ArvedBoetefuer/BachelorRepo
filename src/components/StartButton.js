import { Link } from "react-router-dom";



function StartButton() {
  return (
    <div>
      <div>
        <button style={{
          borderRadius: "50%",
          width: "155px",
          height: "150px",
          textAlign: "center",
          marginTop: "20%"
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl '><Link to="/mainSurvey">Start</Link></button>
      </div>
    </div>
  );
}
export default StartButton;