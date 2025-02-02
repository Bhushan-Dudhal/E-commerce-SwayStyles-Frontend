import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
     
    const items = MainCarouselData.map((item) => <img role='presentation' className='cursor-pointer' src={item.image}  alt='' />)
    
  return (
      <div>
          <AliceCarousel
              disableButtonsControls
              items={items}
              autoPlay
              autoPlayInterval={1000}
              infinite
      />
      <p>nehhbfh</p>
      <h1>welcome to my</h1>
      <h2>jbbhbbgibgiubg</h2>
      <h6>ggtg</h6>
      <h4>gfgfgb</h4>
      <h1><h1>tyy6</h1></h1>

    </div>
    
  )
}

export default MainCarousel