import React,{useContext, useState} from 'react'
import { CDN_URL } from '../utilis/constant'
import {FaChevronCircleLeft,FaChevronCircleRight} from "react-icons/fa"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ThemeContext from '../utilis/ThemeContext'

const CarouselData = ({carouselData}) => {
  const [sliderRef, setSliderRef] = useState(null)
  const {theme}=useContext(ThemeContext)
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrow: true,
    slidesToShow: 9,
    slidesToScroll: 1,
  }
    
  return (

    <div className='px-8 my-2'>
 <h1 className='font-bold text-xl my-4 md:text-2xl'>What's on your mind?</h1>
 
 <div className='controls flex justify-between'>
        <button onClick={sliderRef?.slickPrev} >
          {/* {console.log(sliderRef)} */}
          <FaChevronCircleLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronCircleRight />
        </button>
      </div>
  
<ul className=' my-4 overflow-hidden relative '>
<Slider ref={setSliderRef} {...settings}>
{
  
  carouselData?.map((data)=><li key={data.id} ><img src={CDN_URL+data.imageId} alt='food-Items' /></li>)
}
</Slider>
</ul>

 </div>







   
//     <div className='w-32'>
        
// <img src={CDN_URL+imageId} alt="food-pic" />
//     </div>
   
  )
}

export default CarouselData