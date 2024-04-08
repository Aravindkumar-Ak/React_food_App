import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utilis/cartSlice';
import { CDN_URL } from '../utilis/constant';
import { removeItem } from '../utilis/cartSlice';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ItemList = ({items}) => {

const dispatch=useDispatch()
  const handleAddItems=(item)=>{
   toast.success("Item Added Successfully!")
    dispatch(addItem(item))
   
  }
  const handleRemoveCart=()=>{
    toast.error("Item Removed Successfully!")
    dispatch(removeItem())
    }

  return (
   
    <div>
       <ToastContainer theme="colored" autoClose={1000}/>
        {items.map((itemCards)=>(<div key={itemCards.card.info.id} className="flex justify-between p-4 border-b-2 ">
       
          <div className='w-9/12'>
            <div className='text-left'>
          <h4>{itemCards.card.info.name}</h4> 
          <p>₹{itemCards.card.info.price ? itemCards.card.info.price /100 : itemCards.card.info.defaultPrice/100}</p>
          </div> 
          <p className='mt-5 text-left'>{itemCards.card.info.description}</p> 
          </div>
          <div className=' p-4 w-3/12 relative'>
          <img src={CDN_URL+itemCards.card.info.imageId}/>
          <div className='absolute bottom-0 mx-8 flex'>
          <button className='w-8 bg-red-500 font-bold text-black  rounded-md' onClick={handleRemoveCart}>-</button>
            <button className='w-8 mx-2 bg-red-500 font-bold text-black  rounded-md' onClick={()=>handleAddItems(itemCards)}> + </button>
            
            </div>
            </div>
        </div>))}
    </div>
  )
}

export default ItemList