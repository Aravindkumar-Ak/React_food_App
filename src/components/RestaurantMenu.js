import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useRestaurant from '../utilis/useRestaurant'
import RestaurantCategory from './RestaurantCategory'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
const {resId}=useParams()
const menu=useRestaurant(resId)
//controlled components lifts the state up
 const [showIndex, setShowIndex] = useState(null);




if(menu===null){return <Shimmer/>}
const { name, avgRating, cuisines } = menu?.cards[0]?.card?.card?.info;
// const {itemCards}=menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 

 
const categories=menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))


  return (
    <div className='my-2 p-2 text-center'>
        <h1 className='font-bold text-xl p-1'>{name}</h1>
        <p className='font-semibold'>{cuisines.slice(0,3).join(",")}</p>
        
{
  categories.map((category,index)=>
 (<div key={category.card.card.title}>
  <RestaurantCategory category={category?.card?.card}   showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
  </div>))
  
}
    </div>
  )
}

export default RestaurantMenu