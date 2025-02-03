import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../data/mens_kurta';

const HomeSectionCarousel = () => {
  const  [activeIndex,setActiveIndex]=useState(0)
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items:5.5 },
  };
  
  const slidePrev = () => setActiveIndex(activeIndex - 1) 
  const slideNext = () => setActiveIndex(activeIndex + 1)
  const syncActiveIndex=({item})=>setActiveIndex(item)
  const items =mens_kurta.slice(0,10).map((items)=><HomeSectionCard product={items}/>)
  return (
    <div className=' px-4 lg:px-8'>
      <div className='relative p-5 '>
        <AliceCarousel
                    disableButtonsControls
                    items={items}
                    infinite
            responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      {activeIndex !== items.length-5 &&<Button
          onClick={slideNext}
          variant="contained" className='z-50 bg-white' sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label='next' >
          <ChevronLeftIcon sx={{transform:"rotate(90deg)",color:"black"}} />
        </Button>}
        
        <Button
          onClick={slidePrev}
          variant="contained" className='z-50 bg-white' sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }} aria-label='next' >
          <ChevronLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}} />
      </Button> 
      </div>
    </div>
  )
}

export default HomeSectionCarousel