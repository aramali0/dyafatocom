import './slide.css'
import {  useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs';


export default function ImageSlider({slides}){
    const [images, setImages] = useState(slides);
    const [currentSlide, setCurrentSlide] = useState(0) ;
    
    
    

    function handlePreviews(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1)
        }
        else {
            setCurrentSlide(images.length-1)
        }
        
    }
    function handleNext(){
        if(currentSlide < images.length -1){
        setCurrentSlide(currentSlide+1)
    }
    else {
        setCurrentSlide(0)
    }
    }
    return <div className="Container">
        <BsArrowLeftCircleFill onClick={()=>handlePreviews()} className="arrow arrow-left"/>
        {
            images && images.length != 0 ?
            images.map((image,index)=>{
                return <img 
                key={index}
                src={image.image} 
                width={300}
                alt="" 
                className={index === currentSlide ?  "current-image" : "current-image-inactive"}
                />
            })
            : console.log(null)
        }
        <BsArrowRightCircleFill onClick={()=>handleNext()} className="arrow arrow-right"/>
        <span className="circle-indicator">
            {
                images && images.length ? 
                images.map((_,index)=>{
                    return <button
                    key = {index}
                    onClick={()=>{setCurrentSlide(index)}}
                    className={index ===currentSlide ?  "current-indicator active" : "current-indicator"}
                    ></button>
                }): null
            }
        </span>
    </div>;
}