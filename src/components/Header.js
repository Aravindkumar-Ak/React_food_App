import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from "./../Assets/food.png"
import { FaHamburger } from 'react-icons/fa'
import { IoIosClose } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import ThemeContext from '../utilis/ThemeContext'
import ReactSwitch from 'react-switch'
import { FaShoppingCart } from 'react-icons/fa'
import { FaRegSun } from 'react-icons/fa'
import { FaRegMoon } from 'react-icons/fa'
const Header = () => {
 const[login,setLogin]=useState("login")
   const[isOpen,setIsOpen]  =useState(false)

   const {theme,toggleTheme}=useContext(ThemeContext);

const toggleMenu=()=>{
        setIsOpen(!isOpen)
}


const cartItems=useSelector((store)=>store.cart.items)

  return (
   <nav className= 'bg-yellow-200 w-screen fixed top-0 z-50 h-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' > 
    <div className=' flex flex-row px-4 pt-4 md:flex-row justify-between items-center md:pt-0 md:px-4 md:mx-auto md:max-w-7xl '>
    {/* flex items-center justify-between max-w-6xl mx-auto mt-3 */}
        <div>
<Link to="/"><img src={Logo} alt="brand-logo" className='w-[40px] md:w-[50px]'/></Link>
 <h1 className='text-lg text-orange-500 font-bold font-[Poppins] hover:text-green-300 hover:duration-75  hover:ease-in hover:scale-x-150 cursor-pointer'>
<Typewriter

  options={{
    strings: ['FOODY','EAT HEALTHY','STAY HEALTHY'],
    autoStart: true,
    delay:500,
    loop: true,
  }}
/>
</h1>
        </div>
       
        <div>
        <button onClick={toggleMenu}>
                        {!isOpen ?
                <FaHamburger className='ml-4 text-3xl md:hidden'/>:
                <IoIosClose className='text-lg md:hidden'/>
                }
                </button>


                {/* medium screens and above */}

<ul className='md:flex md:flex-row md:items-center  md:text-lg md:static hidden md:whitespace-nowrap '>
   <Link to="/contact"> <li className='mr-4 '>Contact Us</li> </Link>
   <Link to="/about">    <li className='mr-4 '>About Us </li></Link>
   <Link to="/cart" className="md:relative"><li><FaShoppingCart />
   <p className='md:absolute md:-top-2 md:-right-1 md:text-xs md:text-center md:text-white md:bg-blue-600 md:rounded-lg md:w-3 '>{cartItems.length}</p></li></Link>
    
    <button className= 'bg-blue-500 hover:bg-blue-700 text-white w-1/5 font-normal py-1 px-4 rounded md:mx-2 mx-0'
    onClick={()=>{login==="login"?setLogin("logout"):setLogin("login") }}
    >{login}</button>
<ReactSwitch onChange={toggleTheme} checked={theme==="light"} />{theme==="light" ?<FaRegSun className='text-orange-500 mx-2'/>:<FaRegMoon className='text-black mx-2'/>}

  
</ul>
 
                  {/* mobile-view */}

{isOpen &&
<ul className='md:hidden flex flex-col justify-center items-center gap-4 absolute right-0 top-16  text-md bg-yellow-200 bg-opacity-90 px-2  py-2  w-full'>
   <Link to="/contact"> <li className='mr-4 hover:text-blue-500'>Contact us</li> </Link>
   <Link to="/about">    <li className='mr-4  hover:text-blue-500'>About us</li></Link>
   <Link to="/cart " className='relative'><li className=' hover:text-blue-500'><FaShoppingCart/><p className='-top-4 left-4 absolute'>{cartItems.length}</p></li></Link>
    
    <button className= 'bg-blue-500 hover:bg-blue-700 text-white w-1/5 font-normal py-1 px-4 rounded md:mx-2 mx-0'
    onClick={()=>{login==="login"?setLogin("logout"):setLogin("login") }}
    >{login}</button>
</ul>
}

        </div>

    </div>
   
               
    
   
   </nav>
  )
}

export default Header