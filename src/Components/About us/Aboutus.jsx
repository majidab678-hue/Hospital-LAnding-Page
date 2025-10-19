 import React from 'react'
import doctorimg from '/src/assets/aboutuspic.jpg'
import png from '/src/assets/doctor png.png'

const Aboutus = () => {
  return (
    <>
      <section className="w-full px-6 sm:px-10 py-10">
        <div className="mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10 mt-3">
            About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
           
            <div className="text-center md:text-left px-4 md:px-8 mb-3 text-lg">
              <h1 className="text-5xl sm:text-6xl font-bold">30</h1>
              <h2 className="mb-3 text-lg">March</h2>
              <p className="text-gray-700 max-w-xs mx-auto md:mx-0 leading-relaxed">
                [Doctor's Name] is incredibly knowledgeable and took the
                time to answer all my questions.
              </p>
            </div>

         
            <div className="flex justify-center">
              <img
                src={doctorimg}
                alt=""
                className="w-[260px] sm:w-[300px] md:w-[320px] h-[400px] sm:h-[450px] md:h-[480px] object-cover rounded-lg shadow-lg"
              />
            </div>

          
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div>
                <img src={png} alt="" className="w-[35px] sm:w-[40px] mx-auto md:mx-0" />
                <p className="py-4 text-base sm:text-lg leading-relaxed">
                  analyzing criticizing critiquing <br />
                  evaluating examining <br />
                  investigating judging outlining <br />
                  studying summarizing surveying
                </p>

                <p className="text-gray-500 pb-5 leading-relaxed text-sm sm:text-base">
                  Doctor criticizing critiquing <br />
                  evaluating examining <br />
                  investigating judging outlining <br />
                  studying summarizing surveying
                </p>

                <button className="bg-blue-400 text-white text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
