import React from 'react'

const Modal_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '25px',
    justifyContent: 'center',
    alignContent: 'center',
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

export default function AudioModal({open, children, onClose}){
    if (!open) return null
    
    return(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={Modal_STYLES}>
            <h1 className='text-xl text-blue2-1'>Diese Umfrage dauert ca. 3 Minuten</h1>
            <br>
            </br>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: 'center',
            }} >
            <button onClick={onClose} className="text-2xl text-blue2-1">OK</button>
            </div>
            
            {children}
        </div>
        </>
        
    )
    
}