import React, {useState} from "react";
import Modal from "./Modal";

export default function Timerbutton(){

    const[isOpen, setIsOpen] = useState(false)
    return(
        
        <div style={{
            marginTop: "25px",
        }}>
            <button onClick={()=> setIsOpen(true)} className="text-red2-1">
                Später
            </button>

            <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
            </Modal>
        </div>
    )
}