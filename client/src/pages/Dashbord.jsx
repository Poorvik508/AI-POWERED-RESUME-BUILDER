import { PlusIcon } from "lucide-react"
import React from 'react'

const Dashbord = () => {
  return (
    <div>
      <div className="max-7xl mx-auto px-4 py-8">
        <p>Welcome,Joe Doe</p>
        <div className="flex gap-4 ">
          <button className="w-full">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full"/>
            <p>Create Resume</p>
          </button>
          <button></button>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Dashbord
