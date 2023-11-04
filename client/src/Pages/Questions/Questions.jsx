import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'

const Questions = ({ slide,handleSlide}) => {
  return (
    <div className='home-container-1'>
    <LeftSidebar slide={slide} handleSlide={handleSlide} />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />

      </div>
    </div>
  )
}

export default Questions
