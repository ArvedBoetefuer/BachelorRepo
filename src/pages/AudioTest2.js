import React from "react";
import Header from "../components/Header";
import VideoPlayer70db from "../components/VideoPlayer70db";




const AudioTest2 = () => {
    

    return (
        <div>
        <Header></Header>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            
            <VideoPlayer70db></VideoPlayer70db>
            </div>

        </div>
        
    )
}

export default AudioTest2;