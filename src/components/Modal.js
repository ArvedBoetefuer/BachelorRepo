import React from "react";
import Timer from "./Timer";

const Modal_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
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
            <Timer></Timer>
            <br>
            </br>
            <div style={{
                display: 'flex',
                justifyContent: "center",
            }}
            >
            <button onClick={onClose} className="text-2xl text-blue2-1">Jetzt</button>
            {children}
            </div>
            
        </div>
        </>
        
    )
    
}