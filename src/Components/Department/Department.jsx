import React from 'react'
import heartpng from '/src/assets/heartpng.png'
import dental from '/src/assets/dept/dental.png'
import eye from '/src/assets/dept/eye.png'
import covid from '/src/assets/dept/covid.png'
import kidney from '/src/assets/dept/kidney.png'
import blood from '/src/assets/dept/bloodtest.png'

export default function Department() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 bg-white px-4 sm:px-6 lg:px-8">

        
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={heartpng} alt="" className="w-4 h-5 sm:w-5 sm:h-6" />
          <h3 className="text-blue-500 font-semibold text-xs sm:text-sm">Our Services</h3>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 leading-tight text-center pb-10">
          Our <br className="block sm:hidden" /> Departments
        </h1>

        <div className="flex justify-center items-center gap-6 sm:gap-8 flex-wrap">
          <img src={dental} alt="Dental" className="w-28 sm:w-32 md:w-40 h-auto object-contain" />
          <img src={blood} alt="Blood" className="w-28 sm:w-32 md:w-40 h-auto object-contain" />
          <img src={eye} alt="Eye" className="w-28 sm:w-32 md:w-40 h-auto object-contain" />
          <img src={kidney} alt="Kidney" className="w-28 sm:w-32 md:w-40 h-auto object-contain" />
          <img src={covid} alt="Covid" className="w-28 sm:w-32 md:w-40 h-auto object-contain" />
        </div>

      </div>
    </>
  )
}
