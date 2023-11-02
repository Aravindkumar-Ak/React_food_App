import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const RestaurantBody = () => {
const[listOfRestaurants,setListOfRestaurants]=useState([]);
const [filteredRestaurant,setFilteredRestaurant]=useState([]);
const[searchText,setSearchText]=useState("")

console.log(listOfRestaurants);




useEffect(()=>{
console.log("useEffect called");    
fetchData()
},[])

const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    setListOfRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
setFilteredRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )

}

{if(listOfRestaurants.length==0)return <Shimmer/>}
  return (
    <div className='p-4 m-4' >
        <div className='flex justify-start items-center py-4 ml-8'>
        <div>
          <input type="text" value={searchText} placeholder='Enter here to search' className='px-2  py-1 rounded-md border-2 border-black' onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='bg-transparent hover:bg-black hover:text-white text-black border-2 border-slate-400 font-normal py-1 px-5 rounded mx-2'
          onClick={()=>{
            const searchtxt=listOfRestaurants.filter((search)=>search.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(searchtxt)
          }}
          
          >search</button>
        </div>
        <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-6 rounded mx-4'
        onClick={()=>{
            const filter=listOfRestaurants.filter((items)=>items.info.avgRating>4)
                setFilteredRestaurant(filter)
        }}
        
        
        >Top Restaurant</button>
        </div>
        </div>
 
        <div className='grid grid-cols-4 gap-5 place-items-center'>
{
    filteredRestaurant.map((restaurants)=><li key={restaurants.info.id} className="list-none">
    
      <Link to={"/restaurants/"+restaurants.info.id}>  <RestaurantCard listObj={restaurants}/></Link>
        </li>)
}
</div>
    </div>
  )
}

export default RestaurantBody