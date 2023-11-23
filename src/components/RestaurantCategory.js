import React from 'react'
import ItemList from './ItemList';
import { FaChevronCircleDown } from 'react-icons/fa';
const RestaurantCategory = ({ category ,showItems ,setShowIndex}) => {
const handleClick=()=>{
  setShowIndex()
}

  return (
   <div className='w-6/12 bg-slate-50 mx-auto p-5 my-4 shadow-lg '>
    <div className='flex justify-between cursor-pointer ' onClick={handleClick}>
    <span className='font-bold'>{category.title} ({category.itemCards.length})</span>
<span ><FaChevronCircleDown/></span>
</div>
<div>
  {showItems  && <ItemList items={category.itemCards}/> }
</div>
   </div>
  )
}

export default RestaurantCategory