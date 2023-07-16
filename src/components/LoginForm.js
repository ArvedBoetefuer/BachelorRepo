import React , {useState} from 'react'
import LoginHelpModal from "./LoginHelpModal";

function LoginForm() {

  const[isOpen, setIsOpen] = useState(false)

  return (
    <div>
       <form style={{
          maxWidth: '200px',
          margin: '0 auto',
          textAlign: 'center',
          marginTop: "25px"
          
        }}>
        <label style={{
          textAlign: 'left',
          display: 'block',
          color: '#004b5a'
        }}>LoginID</label>
        <input style={{
          width: '100%',
          padding: '6px 10px',
          margin:'10px 0',
          border:'3px solid #0f6c86',
          boxSizing: 'border-box',
          display: 'block'
        }}
        type="text" 
        required
        name='LoginID'
        ></input>
        
      </form>
      <button onClick={()=> setIsOpen(true)} className='font-face-gm text-m text-red2-1'>
        Hilfe
        </button>
      <LoginHelpModal open={isOpen} onClose={()=> setIsOpen(false)}>
            </LoginHelpModal>
    </div>
  )
}

export default LoginForm
