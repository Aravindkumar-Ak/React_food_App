import { useEffect, useState } from "react"

const Count=()=>{
    const[count,setCount]=useState(1)

useEffect(()=>{
    console.log("render useeffect");
value()
},[count])
const value=()=>{
    if(count>5){
        setCount(1)
    }
}

    const handleClick=()=>{
        setCount((prev)=>prev+1)
    }
return(
    <>
<h1>{count}</h1>
<button onClick={handleClick}>click</button>
    </>
)
}
export default Count