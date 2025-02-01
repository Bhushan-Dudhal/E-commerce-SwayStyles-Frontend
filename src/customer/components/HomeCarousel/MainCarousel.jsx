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
      <p></p>
    </div>
    
  )
}

export default MainCarousel