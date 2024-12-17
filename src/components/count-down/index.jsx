// Build a Countdown Timer: Develop a countdown timer component that starts from a specified time and decrements until it reaches zero.

import React, { useEffect,useState } from "react";
const CountDown = ()=>{


    // calculate total seconds
    const initialTime = 60 * 5;


    // set timerRemaining 
     const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(()=>{

        const timerInterval = setInterval(()=>{
            setTimeRemaining((prev)=>{
                if(prev===0){
                    clearInterval(timerInterval);
                 // Perform actions when the timer reaches zero
                    console.log('Countdown complete!');
                    return 0;
 
                }else{
                    return prev-1
                }

            })
             // Cleanup the interval when the component unmounts
              return () => clearInterval(timerInterval);
        },1000)
         
    },[]);

    // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
   
    return(
        <>
         <div>
      <p>Countdown Timer:</p>
      <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
      </div>
        </>
    )
}

export default CountDown;