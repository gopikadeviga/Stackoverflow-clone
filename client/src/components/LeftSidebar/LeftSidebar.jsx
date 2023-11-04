import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe.svg'

const LeftSidebar = ({ slide, handleSlide}) => {

  console.log("slideIn prop value:", slide);

  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div className='left-sidebar'
       style={slide ? slideInStyle : slideOutStyle}>
      <nav className='side-nav'>
      <button onClick={() => handleSlide()} className="nav-btn">
        {/* NavLink is same as Link  */}
        <NavLink to='/' className='side-nav-links' activeclass='active'>
          <p>Home</p>
        </NavLink>
        </button>
        <div className='side-nav-div'>
          <div>
            <p>Public</p>
            </div>
            <button onClick={() => handleSlide()} className="nav-btn">
            <NavLink to='/Questions' className='side-nav-links' activeclass='active' >
              <img src={Globe} alt="Globe"/>
              <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
            </button>
            <button onClick={() => handleSlide()} className="nav-btn">
            <NavLink to='/Tags' className='side-nav-links' activeclass='active' style={{paddingLeft:"40px"}}>
              <p>Tags</p>
            </NavLink>
            </button>
            <button onClick={() => handleSlide()} className="nav-btn">
            <NavLink to='/Users' className='side-nav-links' activeclass='active' style={{paddingLeft:"40px"}}>
              <p>Users</p>
            </NavLink>
            </button>
         
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
