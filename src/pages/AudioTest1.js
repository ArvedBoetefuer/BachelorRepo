import React from "react";
import Header from "../components/Header";
import VideoPlayer58db from "../components/VideoPlayer58db";




const AudioTest1 = () => {
    

    return (
        <div>
        <Header></Header>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
            
            <VideoPlayer58db></VideoPlayer58db>
            </div>

        </div>
        
    )
}

export default AudioTest1;