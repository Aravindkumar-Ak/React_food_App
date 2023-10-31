import { useState,useEffect } from 'react'
import { API_URL } from './constant'

const useRestaurant = (id) => {
const[menuList,setMenuList]=useState(null)
    useEffect(()=>{
        fetchMenu()
        },[])
        
        const fetchMenu=async()=>{
            const data=await fetch(API_URL+id)
            const json=await data.json()
            console.log(json);
            setMenuList(json?.data)
        }
return  menuList;
}

export default useRestaurant