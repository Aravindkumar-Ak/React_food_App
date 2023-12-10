import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from '../components/ItemList';
import { clearCart ,removeItem} from '../utilis/cartSlice';


const Cart = () => {
const cartItems=useSelector((store)=>(store.cart.items))

const dispatch=useDispatch()

const handleClearCart=()=>{
  dispatch(clearCart())
}


  return (
    <div className='font-bold text-xl text-center p-2 my-20'>
      {cartItems.length>0  &&
     <div className='flex items-center justify-around'>
      
       <p className='text-2xl font-semibold'>cart Items</p>
      
        <p className='text-black underline cursor-pointer hover:text-red-500 font-medium' onClick={handleClearCart}>clear cart</p>
</div>}
      
        <div className='w-6/12 mx-auto p-2 my-2 text-lg my-24'>
          {cartItems.length===0 ?(
          <div className='mx-auto p-2 w-[270px] '>
          <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0' />
           <h1>Your cart is Empty</h1></div>
           ): 
      ( <ItemList items={cartItems}/>)}
       </div>
    </div>
  )
}

export default Cart;