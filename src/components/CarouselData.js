import React from 'react'
import { CDN_URL } from '../utilis/constant'


const CarouselData = ({carousel}) => {
   

    const{imageId}=carousel
  return (
   
    <div className='w-32'>
        
<img src={CDN_URL+imageId} alt="food-pic" />
    </div>
   
  )
}

export default CarouselData