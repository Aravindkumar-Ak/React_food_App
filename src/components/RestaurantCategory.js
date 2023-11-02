import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({ category }) => {
  const[accordian,setAccordian]=useState(false)
  const handleClick=()=>{
 setAccordian(!accordian)
  }
  return (
   <div className='w-6/12 bg-slate-300 mx-auto p-5 my-4 shadow-lg '>
    <div className='flex justify-between cursor-pointer transition-all ease-in' onClick={handleClick}>
    <span>{category.title} ({category.itemCards.length})</span>
<span >⬇️</span>
</div>
<div>
  {accordian && <ItemList items={category.itemCards}/>}
</div>
   </div>
  )
}

export default RestaurantCategory