import { useEffect, useState } from 'react';
import './style.css';

const Bar = ({value = 0})=>{
    const [percentage,setPercentage] = useState(value);

    useEffect(()=>{
       setPercentage(Math.min(100,Math.max(value,0)))
    },[value])
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