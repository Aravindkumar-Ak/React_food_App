import React from 'react'
import { CDN_URL } from '../utilis/constant'

const RestaurantCard = (props) => {
    const {listObj}=props
    const{name,cloudinaryImageId,cuisines,avgRating}=listObj?.info
  return (
    <div className='flex flex-col justify-center w-[270px] h-[350px] p-3 mt-3 shadow-xl rounded-md hover:scale-95 hover:transition ease-in duration-150 cursor-pointer'>
        <div className='flex justify-center'>
        <img src={CDN_URL+cloudinaryImageId} alt="food-image" className='w-[230px] h-[200px] rounded-lg'/>
        </div>
        <div className='mt-2 p-2'>
<h2>{name}</h2>
<p>{cuisines.slice(0,3).join(",")}</p>
<p>Rating {avgRating}</p>
</div>
    </div>
  )
}

export default RestaurantCard