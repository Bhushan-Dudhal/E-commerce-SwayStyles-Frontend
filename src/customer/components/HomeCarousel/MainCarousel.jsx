import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
     
    const items = MainCarouselData.map((item) => <img role='presentation' className='cursor-pointer -z-10' src={item.image}  alt='' />)
    
return (
      <div>
          <AliceCarousel
              disableButtonsControls
              items={items}
              autoPlay
              autoPlayInterval={2000}
              infinite
              
      />
  </div>
    
  )
}

export default MainCarousel