import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
const DisplayQuestion = ({slide,handleSlide}) => {
  return (
    <div className='home-container-1'>
    <LeftSidebar slide={slide} handleSlide={handleSlide} />
    <div className='home-container-2'>
     <QuestionsDetails></QuestionsDetails>
      <RightSidebar />

    </div>
  </div>
  )
}

export default DisplayQuestion
