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
              autoPlayControls
              autoPlayInterval={2000}
              infinite
      />
  </div>
    
  )
}

export default MainCarousel