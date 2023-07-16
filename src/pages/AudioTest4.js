import React from "react";
import Header from "../components/Header";
import VideoPlayer64db from "../components/VideoPlayer64db";




const AudioTest4 = () => {
    

    return (
        <div>
        <Header></Header>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            
            <VideoPlayer64db></VideoPlayer64db>
            </div>

        </div>
        
    )
}

export default AudioTest4;