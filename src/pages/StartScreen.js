import React from "react";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import Timerbutton from "../components/Timerbutton";
import Icon from "../components/Icon.js";
import InformationModal from "../components/InformationModal.js";
import { useState } from "react";

const StartScreen = () => {
    const[isOpen, setIsOpen] = useState(true)

    
    return (
        <div>
            
            <InformationModal open={isOpen} onClose={()=> setIsOpen(false)}></InformationModal>
            <Header>
            </Header>
            
            <div>
            <div style={{
                display: 'flex',
                justifyContent: "center"
            }}>
                <Icon></Icon>
            </div>
            
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
            }}>
            <StartButton>
    
            </StartButton>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Timerbutton>
                
                </Timerbutton>               
            </div>
            
               
            </div>
            
        </div>
        
    )
}

export default StartScreen;