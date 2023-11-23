import React, { useState } from 'react'
import PacmanLoader from "react-spinners/ClipLoader";

const Shimmer = () => {
  const[loading,setLoading]=useState(true);
  
  return (
    <>
     <div className='bg-slate-400 w-screen h-[400px]  text-center'>
     <div className='pt-32 flex justify-center items-center'>
    {loading &&
     <PacmanLoader loading={loading} size={75}/>}</div>
  <h1 className='text-3xl text-white'>Looking For Great food near you</h1>
</div> 
    {/* <div className='flex justify-start items-center py-5 ml-8 '>
<div className='w-[200px] h-[50px] bg-slate-100 mr-4'></div>
<div className='w-[200px] h-[50px] bg-slate-100'></div>
    </div> */}
    
        <div className='grid grid-cols-4 gap-5 place-items-center p-4'>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            <div className='bg-slate-100 w-[230px] h-[200px] rounded-lg'></div>
            
        </div>
        </>
  )
}

export default Shimmer;