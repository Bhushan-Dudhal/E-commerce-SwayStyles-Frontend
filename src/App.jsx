import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePages/HomePage'
import Footer from './customer/components/footer/Footer'

function App() {
  return (
    <div className=''>
        <Navigation/>
   <div>
         <HomePage/>
      </div>
         <Footer/>
     </div>
  )
}

export default App
