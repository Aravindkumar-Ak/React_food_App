import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const errMessage=useRouteError();
console.log(errMessage);
  return (
    <div>
        <h1 className='text-5xl text-center mx-auto mt-[150px]'>{errMessage.status} {errMessage.statusText} <br/>
        Please enter a valuable URL</h1>
    </div>
  )
}

export default Error