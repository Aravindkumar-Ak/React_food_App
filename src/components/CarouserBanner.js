import React,{useState} from 'react'
import { CDN_URL } from '../utilis/constant'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"

const CarouserBanner = ({banner}) => {
    const [sliderRef, setSliderRef] = useState(null)
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
   
  return (
    <div className='p-2 my-16'>
         <h1 className='text-xl font-bold text-black  md:text-3xl'>Best offers for you</h1>
        <div className='controls flex justify-between items-center my-4'>
        <button onClick={sliderRef?.slickPrev} >
          {console.log(sliderRef)}
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
 <Slider ref={setSliderRef} {...settings}>
  {
   
    banner.map((item)=>(
        <div>
           
            <img src={CDN_URL+item.imageId} alt="banner"  className='w-[450px]'/>
        </div>
    ))
   
  }
  </Slider>
</div>
   
  )
}

export default CarouserBanner