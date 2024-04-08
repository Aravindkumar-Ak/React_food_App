import React,{useContext, useState} from 'react'
import { CDN_URL } from '../utilis/constant'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {FaChevronLeft,FaChevronRight} from "react-icons/fa"
import ThemeContext from '../utilis/ThemeContext'

const CarouserBanner = ({banner}) => {
    const [sliderRef, setSliderRef] = useState(null)
    const {theme}=useContext(ThemeContext)
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        arrow: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
   
  return (
    <div className='p-2 my-16'>
         <h1 className={`${theme==="light"?'text-black text-xl font-bold md:text-3xl':'text-white text-xl font-bold md:text-3xl'}`}>Best offers for you</h1>
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
          
            <img src={CDN_URL+item.imageId} alt="banner"  className='w-[450px] '/>
        </div>
    ))
   
  }
  </Slider>
</div>
   
  )
}

export default CarouserBanner