import React from 'react'
import {Routes,  Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = ({ slide,handleSlide }) => {
  return (
      <Routes>
        <Route path='/' element={<Home slide={ slide} handleSlide={handleSlide}/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Questions' element={<Questions slide={ slide} handleSlide={handleSlide}/>}/>
        <Route path='/AskQuestion' element={<AskQuestion/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestion slide={ slide} handleSlide={handleSlide}/>}/>
        <Route path='/Tags' element={<Tags slide={ slide} handleSlide={handleSlide}/>}/>
        <Route path='/Users' element={<Users slide={ slide} handleSlide={handleSlide}/>}/>
        <Route path='/Users/:id' element={<UserProfile slide={ slide} handleSlide={handleSlide}/>}/>
      </Routes>
  )
}

export default AllRoutes
