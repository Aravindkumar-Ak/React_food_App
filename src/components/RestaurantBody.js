import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import CarouselData from './CarouselData';
import CarouserBanner from './CarouserBanner';


const RestaurantBody = () => {
const[listOfRestaurants,setListOfRestaurants]=useState([]);
const [filteredRestaurant,setFilteredRestaurant]=useState([]);
const[carouselRest,setCarouselRest]=useState([])
const[searchText,setSearchText]=useState("")
const [banner,setBanner]=useState([])

useEffect(()=>{
fetchData()
},[])

const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json()
    console.log(json.data);
    setListOfRestaurants( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
setFilteredRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
setBanner(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
setCarouselRest(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)

}


{if(listOfRestaurants.length===0)return <Shimmer/>}
  return (
    <div className='p-4 m-4' >
      <CarouserBanner banner={banner}/>
      <div className='flex flex-col items-center py-8 ml-8 md:flex-row  md:items-center'>
        <div className='flex items-center my-2'>
          <input type="text" value={searchText} placeholder='Enter here to search' className='rounded-md border-2 border-black md:px-2 md:py-1' onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='bg-red-500 hover:bg-red-700 hover:text-white text-black border-2 border-slate-400 font-normal text-sm  px-2 ml-2 rounded md:px-4 md:py-1 md:text-lg md:rounded-lg'
          onClick={()=>{
            const searchtxt=listOfRestaurants.filter((search)=>search.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(searchtxt)
            
       
          }}
          
          >search</button>
        </div>
        <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 mt-2 text-sm font-normal rounded whitespace-nowrap px-2 md:px-2 md:ml-2 md:py-1 md:text-lg md:mt-0'
        onClick={()=>{
            const filter=listOfRestaurants.filter((items)=>items.info.avgRating>4)
                setFilteredRestaurant(filter)
        }}
        
        
        >Top Restaurant</button>
        </div>
         
        </div>
 
<CarouselData carouselData={carouselRest}/>
<hr/>
<h1 className='font-bold text-lg my-4 px-4 md:text-3xl'>Top Restaurants </h1>

        <div className='grid grid-cols-1 gap-5 place-items-center md:grid-cols-5 '>
      
{filteredRestaurant.length===0?<p className='font-bold text-center top-56 absolute text-3xl'>couldn't found the Result</p>:
    filteredRestaurant.map((restaurants)=><li key={restaurants.info.id} className="list-none">
    
      <Link to={"/restaurants/"+restaurants.info.id}>  <RestaurantCard listObj={restaurants}/></Link>
        </li>) 
}
</div>
    </div>
  )
}

export default RestaurantBody