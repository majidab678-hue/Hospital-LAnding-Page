import React from 'react'
import Nevbar from './Components/Nevbar/Nevbar'
import Body from './Components/body/Body'
import Aboutus from '/src/Components/About us/Aboutus'
import Department from '/src/Components/Department/Department'
import Doctor from './Components/Doctor/Doctor'
import TestimonialSection from './Components/TestimonialSection/TestimonialSection '
import Footer from './Components/Footer/Footer'



function App() {
  return (
    
    <div>
      <Nevbar></Nevbar>
      <Body/>
      <Aboutus/>
      <Department/>
      <Doctor/>
      <TestimonialSection/>
      <Footer/>
   

    </div>
  )
}

export default App