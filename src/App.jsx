import React from 'react'

function App() {
  return (
    <div>
      <div style={{display:'flex'}} className=' rounded-2xl bg-amber-500 p-7  mt-1'>
        <div >
          <img className="h-15 rounded-full w-15" src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" />
        </div>
        <div  className='  '>
        <ul style={{display:'flex',alignItems:'center',justifyContent:'center',width:""}}className='m-5'>
            <li className='w-20 shadow-blue-400 cursor-pointer p-1'
              
          >Men</li>
          <li className='w-20'>Women</li>
          <li className='w-20'>Services</li>
            <li className='w-20'>Services</li>
            <li>new</li>
 


          </ul>
           </div>
      </div>
   </div>
  )
}

export default App
