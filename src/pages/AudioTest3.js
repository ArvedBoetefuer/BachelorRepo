import React from "react";
import Header from "../components/Header";
import VideoPlayer52db from "../components/VideoPlayer52db";




const AudioTest3 = () => {
    

    return (
        <div>
        <Header></Header>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            
            <VideoPlayer52db></VideoPlayer52db>
            </div>

        </div>
        
    )
}

export default AudioTest3;