import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "./../Assets/food.png"
const Header = () => {
        const[login,setLogin]=useState("login")
  return (
   <nav className=' bg-red-500 h-[100px] px-[50px] py-1 sticky top-0 shadow-lg z-50'>
    <div className='flex items-center justify-between max-w-6xl mx-auto'>
        <div>
<img src={Logo} alt="brand-logo" className='w-[90px]'/>
        </div>
        <div>
<ul className='flex items-center text-lg font-semibold'>
   <Link to="/contact"> <li className='mr-4'>Contact us</li> </Link>
   <Link to="/about">    <li className='mr-4'>About us</li></Link>
    <li className='mr-4'>Cart</li>
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