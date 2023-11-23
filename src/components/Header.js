import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from "./../Assets/food.png"
const Header = () => {
        const[login,setLogin]=useState("login")
        const[show,setShow]=useState(false)

const cartItems=useSelector((store)=>store.cart.items)

  return (
   <nav className= { `${show && 'bg-zinc-400 '} bg-green-200 h-[75px] px-[50px] py-1 sticky top-0 shadow-lg z-50 `}>
    <div className='flex items-center justify-between max-w-6xl mx-auto mt-3'>
        <div>
<Link to="/"><img src={Logo} alt="brand-logo" className='w-[50px]'/></Link>
        </div>
        <div>
<ul className='flex items-center text-lg font-semibold'>
   <Link to="/contact"> <li className='mr-4'>Contact us</li> </Link>
   <Link to="/about">    <li className='mr-4'>About us</li></Link>
   <Link to="/cart"><li>Cart({cartItems.length})</li></Link>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-4 rounded mx-4'
    onClick={()=>{login==="login"?setLogin("logout"):setLogin("login") }}
    >{login}</button>
</ul>
        </div>
    </div>
   </nav>
  )
}

export default Header