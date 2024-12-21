
import { useEffect, useState } from "react";
import "./image-carousel.css";
const images =[
   "https://img.freepik.com/free-vector/gradient-winter-solstice-background_23-2149174668.jpg?t=st=1734750755~exp=1734754355~hmac=999d3b319918df68e6ba93758136bd3c0aecc6037e233910d82b38bfa0930121&w=2000",
   "https://img.freepik.com/free-photo/fantasy-style-scene-with-mountains-landscape_23-2151124864.jpg?t=st=1734750856~exp=1734754456~hmac=9772d4e308825578005c759bd0df5574142d5734f5110edf7f2dab9cb0504c2f&w=2000",
   "https://img.freepik.com/free-photo/abstract-3d-painting-coming-life-with-person-frame_23-2151019950.jpg?t=st=1734752796~exp=1734756396~hmac=cafce47c562d12a60f11e64444a60dae423070deb51ce2b92b93803b768ebd00&w=2000",
   "https://img.freepik.com/free-photo/anime-dragon-character-illustration_23-2151117687.jpg?t=st=1734752832~exp=1734756432~hmac=5b04415110a79acfc5b32038d0fc02d8cec29f08afd8ac50fa588f05c5bb65b6&w=2000",
   "https://img.freepik.com/free-photo/close-up-woman-with-broken-heart-painted-her_23-2150848139.jpg?t=st=1734750906~exp=1734754506~hmac=d4f48875a4677b03aeea4a48922e6a7bac04886c5b92d1d90c7b60e73b1e706a&w=1800",
   "https://img.freepik.com/free-photo/men-women-embrace-sunset-generative-ai_188544-12581.jpg?t=st=1734752878~exp=1734756478~hmac=90ba37604058f0bb1f54c48a57f1348a68778fc09a4c4523653703190214c353&w=2000"

];


const SlideShow =({slideImages})=>{
    const [currentSlide,setCurrentSlide]= useState(4);


    const next = () => {
        setCurrentSlide((prev) => {
            if (prev < slideImages.length - 1) {
                return prev + 1; 
            } else {
                return 0; 
            }
        });
    };
    

    
    const previouse = ()=>{
        if(currentSlide>0){
            setCurrentSlide((prev)=> prev-1);
        }
    } 
    useEffect(()=>{
        const interval = setInterval(()=> next(),4000)
       

        return () => clearInterval(interval);
    },[])


    return(
        <>
        <div className="slide__Show">
        {
            slideImages.map((image,index)=>{
             

                return(

                   
              <Slide key={index} image={image}  index={index} currentSlide={currentSlide} />

                     
                 
                 
                )
            })
        }
        <div className="slide__show__dots__container">
              {
                Array.from({length:slideImages.length}).map((_,index)=><div key={index} className={`dots ${index===currentSlide ?'active':""}`} onClick={()=>setCurrentSlide(index)}></div>)
              }      
        </div>

        <div className="next-prev-navigation">
        <div className="navigation next" onClick={next}>
          &gt;
        </div>
        <div className="navigation prev"  onClick={previouse}>
          &lt;
        </div>
      </div>
        </div>
        </>
    )
}

const Slide = ({image,index,currentSlide})=>{
    return(
        <>
         <img src={image} alt={`image-${index}`} className={`carousel__image ${currentSlide===index?'active':''}`}/>
        </>
    )
}


const ImageCarousel = ()=>{
    
    return(
        <>
       <div className="carousel__container">
         <SlideShow slideImages={images}/>
       </div>
        </>
    )
}
export default ImageCarousel;

