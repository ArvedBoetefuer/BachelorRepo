import React from "react";
import Timer from "./Timer";

const Modal_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    justifyContent: 'center',
    zIndex: 1000

}
const OVERLAY_STYLES ={
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function Modal({open, children, onClose}){
    if (!open) return null
    
    return(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={Modal_STYLES}>
            
            <h1 className="text-m text-blue2-1">Ihre LoginID finden Sie in Ihrem SMS-Postfach. Ansonsten wenden Sie sich bitte an Ihren behandelnden Arzt.</h1>
            <br>
            </br>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                
            }}
            >
            <button onClick={onClose} className="text-2xl text-blue2-1">Verstanden</button>
            {children}
            </div>
            
        </div>
        </>
        
    )
    
}