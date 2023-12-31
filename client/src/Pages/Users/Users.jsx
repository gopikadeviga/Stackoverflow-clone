import React from 'react'
import { useLocation } from 'react-router-dom'

import UsersList from './UsersList'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

const Users = ({slide,handleSlide}) => {

  return (
    <div className='home-container-1'>
            <LeftSidebar slide={slide} handleSlide={handleSlide} />

        <div className='home-container-2' style={{marginTop: '30px'}}>
          <h1 style={{fontWeight: '400'}}>Users</h1>
              <UsersList/> 
        </div>
    </div>
  )
}

export default Users
