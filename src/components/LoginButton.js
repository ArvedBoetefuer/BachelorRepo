import { Link } from "react-router-dom";



function LoginButton() {
  return (
    <div>
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
         }} className='bg-blue2-2 text-neutral-50 font-face-gm text-xl rounded'><Link to="/startScreen">Login</Link></button>
      </div>
    </div>
  );
}
export default LoginButton;