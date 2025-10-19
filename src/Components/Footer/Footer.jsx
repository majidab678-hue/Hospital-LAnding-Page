import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
        
          <div className="flex justify-end mb-8 flex-wrap md:flex-nowrap">
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center sm:items-stretch gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Yourmail@mail.com"
                className="px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-64 bg-white text-gray-700 focus:outline-none"
              />
              <button className="bg-blue-700 px-5 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-blue-800 transition w-full sm:w-auto">
                Subscribed
              </button>
            </div>
          </div>

      
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          
            <div>
              <h2 className="text-xl font-semibold mb-3 flex items-center justify-center md:justify-start">
                <img
                  src="/src/assets/header.png"
                  alt="logo"
                  className="w-8 h-8 mr-2"
                />
                Health Ways
              </h2>
              <p className="font-semibold">Phone no:</p>
              <p className="mb-2">923345681909</p>

              <p className="font-semibold text-lg">Address:</p>
              <p className="mb-2">
                Kohat Jungle Khel near kata kara moat
              </p>

              <p className="text-sm">Free home Emergency</p>
              <p className="text-xs">Get 10% off in some menu</p>
            </div>

         
            <div>
              <h3 className="font-semibold mb-3 text-lg">Personal</h3>
              <ul className="space-y-1 text-sm">
                <li>Our Service</li>
                <li>Online Consultation</li>
                <li>Medical Order</li>
                <li>Security & Policy</li>
              </ul>
            </div>

        
            <div>
              <h3 className="font-semibold mb-3 text-lg">Business</h3>
              <ul className="space-y-1 text-sm">
                <li>Medical Service</li>
                <li>Healthcare Market place</li>
                <li>Panther App</li>
                <li>Cline Plane</li>
              </ul>
            </div>

           
            <div>
              <h3 className="font-semibold mb-3 text-lg">About</h3>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>NEWS</li>
                <li>Private Policy</li>
                <li>Customer Sat</li>
              </ul>
            </div>
          </div>

         
          <div className="border-t border-blue-400 bg-white text-blue-400 rounded-lg mt-10 p-2 flex flex-col md:flex-row justify-between items-center text-lg text-center space-y-2 md:space-y-0">
            <p>HealthwaysHos@gmail.com</p>
            <p>httpsHealthwaysHos.com.pk</p>
          </div>
        </div>
      </footer>
    </>
  );
}
