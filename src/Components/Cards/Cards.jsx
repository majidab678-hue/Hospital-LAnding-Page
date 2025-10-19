import React from 'react'

const Cards = (props) => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-white shadow-md rounded-xl p-4 w-[90%] sm:w-[280px] md:w-[300px] hover:shadow-xl transition-all duration-300">
        
        
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-56 sm:h-60 md:h-64 object-cover rounded-lg"
        />

       
        <div className="flex justify-between items-center mt-4 flex-wrap">
          <h1 className="font-semibold text-lg text-gray-800">{props.name}</h1>
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <img src={props.icon} alt="icon" className="w-4 h-4 cursor-pointer" />
            <img src={props.location} alt="location" className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        
        <div className="flex justify-between items-center py-2 flex-wrap gap-2">
          <h2 className="text-sm sm:text-base">{props.specialization}</h2>
          <button className="border rounded-lg px-3 py-1 text-sm sm:text-base hover:bg-blue-500 hover:text-white transition">
            Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
