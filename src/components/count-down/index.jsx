import React, { useEffect,useState } from "react";
const CountDown = ()=>{

    const initialTime = 60 * 5;

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