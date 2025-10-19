import React from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

function TestimonialSection() {
  return (
    <>
      <div className="text-center text-3xl md:text-5xl py-20 bg-white flex flex-col items-center">
        <h1 className="pb-10 font-bold">
          What people says <br /> About Us
        </h1>

        <div className="relative w-[90%] sm:w-[500px] md:w-[600px] h-auto md:h-[300px] flex justify-center items-center">
          <div className="absolute bg-stone-200 w-full h-full rounded-xl left-3 top-3 md:left-6 md:top-6"></div>

          <div className="relative bg-stone-100 w-full rounded-xl shadow-xl border border-gray-200 p-6 md:p-8 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src="/src/assets/hamzaikram.jpg"
                alt="Patient"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div className="text-center sm:text-left">
                <h1 className="text-lg md:text-xl font-semibold text-gray-800">
                  Hamza Ikram
                </h1>
                <p className="text-sm text-gray-500 pt-1 md:pt-2">Kidney Patient</p>

                <div className="flex w-20 gap-1 justify-center sm:justify-start text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed text-center mt-4">
              analyzing criticizing critiquing evaluating examining <br className="hidden sm:block" />
              investigating judging outlining studying summarizing <br className="hidden sm:block" />
              surveying
              <p className="mt-2">
                Doctor criticizing critiquing evaluating examining <br className="hidden sm:block" />
                investigating judging outlining studying summarizing <br className="hidden sm:block" />
                surveying
              </p>
            </p>
          </div>

          <div className="absolute left-[-15px] md:left-[-30px] border rounded-full cursor-pointer p-2 md:p-3 hover:bg-gray-500 transition">
            <FaArrowLeft className="text-base md:text-lg" />
          </div>

          <div className="absolute right-[-25px] md:right-[-55px] border rounded-full p-2 md:p-3 cursor-pointer hover:bg-gray-500 transition">
            <FaArrowRight className="text-base md:text-lg" />
          </div>
        </div>
      </div>

      <div className="bg-blue-500 flex flex-col md:flex-row w-full justify-evenly items-center">
        <img src="/src/assets/entry.png" alt="" className="w-3/4 md:w-1/3 h-auto bg-white m-5 md:m-10 rounded-lg" />
        <img src="/src/assets/female.png" alt="" className="w-3/4 md:w-1/3 h-auto m-5" />
      </div>

      <div className="text-center text-xl md:text-3xl pt-8 pb-8 px-4">
        <p>Subscribed to get information, <br /> leanest news and interested Think about us </p>

        <div className="flex items-center justify-center bg-gray-50 h-auto py-8">
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto px-4">
            <input
              type="email"
              placeholder="Yourmail@mail.com"
              className="px-4 py-3 w-full sm:w-80 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 placeholder-gray-400"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
              Subscribed
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialSection
