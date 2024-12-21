import { useEffect, useState } from 'react';
import './style.css';

const Bar = ({value = 0})=>{
    const [percentage,setPercentage] = useState(0);

    useEffect(()=>{
       setPercentage(Math.min(100,Math.max(value,0)))
    },[value])

    // Math.min(100,Math.max(percentage+1,0))

    useEffect(()=>{
    
        const interval = setInterval(()=>{
             
            setPercentage((prev) => {
                if (prev < value) {
                  return prev + 1;
                } else if (prev > value) {
                  return prev - 1; 
                } else {
                  clearInterval(interval);
                  return prev;
                }
              });
               
  
        },300)
        return ()=> clearInterval(interval);
    },[]);
    return(
       
        <div className='progress'>
            <span  style={{
          color: percentage > 49 ? "white" : "black"
        }}>{percentage.toFixed()}%</span>
            <div  style={{width:`${percentage}%`}}></div>
        </div>
        
    );
}


const ProgressBar = ()=>{
   
    return(
        <>
        <div className="progress__bar__container">
        <div className='progress__bar'>
            <Bar value={50}/>
        </div>
        </div>
        </>
    )
}

export default ProgressBar;