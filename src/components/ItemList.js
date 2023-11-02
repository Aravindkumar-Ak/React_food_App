import React from 'react'
import { CDN_URL } from '../utilis/constant';

const ItemList = ({items}) => {
console.log(items);
  return (
    <div>
        {items.map((itemCards)=>(<div key={itemCards.card.info.id} className="flex justify-between p-4 border-b-2 ">
          <div className='w-9/12'>
            <div className='text-left'>
          <h4>{itemCards.card.info.name}</h4> 
          <p>₹-{itemCards.card.info.price}/-</p>
          </div> 
          <p className='mt-5 text-left'>{itemCards.card.info.description}</p> 
          </div>
          <div className=' p-4 w-3/12 relative'>
          <img src={CDN_URL+itemCards.card.info.imageId}/>
          <div className='absolute bottom-0'>
            <button className='px-2 py-1 mx-6 bg-slate-200 text-black '>Add+</button>
            </div>
            </div>
        </div>))}
    </div>
  )
}

export default ItemList