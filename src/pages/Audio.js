import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import Header from "../components/Header";




const Audio = () => {
    

    return (
        <div>
        <Header></Header>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <VideoPlayer></VideoPlayer>
            </div>
            

        </div>
        
    )
}

export default Audio;