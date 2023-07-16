import React, { useEffect, useState } from "react";

const Timer = () => {

const[seconds,setSeconds] = useState(0);
const[minutes,setMinutes] = useState(15);

var timer;
useEffect(()=> {
    timer = setInterval(()=>{

        setSeconds(seconds-1);
            
        if(seconds===0){
            setMinutes(minutes-1);
            setSeconds(59);
            
        }
        if(seconds===0&&minutes===0){
            setMinutes(15);
            setSeconds(0);
        }


    },1000)
    return()=> clearInterval(timer);
});
    return(
        <div >
            <div className='container '>
            <div className='timer_container'>
                <h1 className="font-face-gm text-4xl text-blue2-1">{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
                </div>
            </div>
        </div>
    )
}

export default Timer