import React from 'react'
import { Link } from 'react-router-dom'

const TraceOrder = () => {
  return (
    <div className= "my-40 w-10/12 mx-auto">
        <h1 className="text-2xl text-gray-800">Order Placed Successfully !</h1>

        <p className= "text-sm text-gray-400 my-2">Your Order # {Date.now().toString()} is on the way ! stay tuned . Happy Meal :)</p>

        <button className="bg-emerald-700 text-white shadow-md rounded  px-3 py-2"><Link to="/">Back to Home</Link></button>
    </div>
  )
}

export default TraceOrder