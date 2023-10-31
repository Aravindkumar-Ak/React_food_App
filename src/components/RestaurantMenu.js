import React from 'react'
import { useParams } from 'react-router-dom'
import useRestaurant from '../utilis/useRestaurant'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
const {resId}=useParams()
const menu=useRestaurant(resId)
console.log(menu);

if(menu===null){return <Shimmer/>}
const { name, avgRating, cuisines } = menu?.cards[0]?.card?.card?.info;
const {itemCards}=menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card

  return (
    <div>
        <h1>{name}</h1>
        <p>{cuisines}</p>
        <p>{avgRating}</p>
        <h1>Menu</h1>
        <ul>
       {
        itemCards.map((item)=>(<li key={item.card.info.id}>{item.card.info.name}</li>))
       }
       </ul>
    </div>
  )
}

export default RestaurantMenu