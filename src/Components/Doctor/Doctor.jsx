import React from 'react'

import adil from '/src/assets/doctors/adil.jpg'
import Cards from '../Cards/Cards'
import icon from '/src/assets/icon.png'
import location from '/src/assets/location.png'
import hamza from '/src/assets/doctors/hamza.jpg'
import bilal from '/src/assets/doctors/bilal.jpg'
import maryam from '/src/assets/doctors/maryam.jpg'
import atif from '/src/assets/doctors/atif.jpg'

export default function Doctor() {
  return (
    <>
      <div className="flex flex-col items-center py-12 bg-gray-50 min-h-screen px-4 sm:px-8">
       
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Our Expert Doctors
          </h1>
          <p className="text-gray-500 pt-4 text-sm sm:text-base">
            Our special doctors will treat you with care. We solve all your health problems
            <br className="hidden sm:block" />
            with compassion and professionalism.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center w-full max-w-6xl">
          <Cards 
            img={adil}
            name="DR Adil khan"
            icon={icon}
            location={location}
            specialization='Dental Care ' 
          />
          <Cards
            img={hamza}
            name="Dr Hamza"
            icon={icon}
            location={location}
            specialization='Kidney Surgeon'
          />
          <Cards
            img={maryam}
            name="Dr Maryam"
            icon={icon}
            location={location}
            specialization='CO19 Specialist'
          />

    
          <div className="col-span-full flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <Cards
              img={bilal}
              name="Dr Bilal KTK"
              icon={icon}
              location={location}
              specialization='Eye Specialist'
            />
            <Cards
              img={atif}
              name="Dr Atif"
              icon={icon}
              location={location}
              specialization='Lab Technician'
            />
          </div>
        </div>
      </div>
    </>
  )
}
