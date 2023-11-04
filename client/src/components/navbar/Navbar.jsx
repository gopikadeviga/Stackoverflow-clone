import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import bars from "../../assets/bars-solid.svg";

const Navbar = ({ handleSlide }) => {

  const dispatch = useDispatch();
  //Profile - key provided
  //access user data from anywhere in the application
  //accessing data in redux  by using useSelector hook
  var User=useSelector((state) => (state.currentUserReducer));

  const navigate= useNavigate()
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  //to maintain the side effect till the navbar is visible 
  //Or else it will be logged-out as we refresh the page
  useEffect(() => {
    const token = User?.token;

    if(token){
      const decodedToken = decode(token)
      //if the expiry time * 1000 is less than the current time
      //i.e: tiken has been expired
      //then logout will be executed
      if(decodedToken.exp * 1000 < new Date().getTime()){
          handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  },[User?.token,dispatch])
  
  return (
    <nav className='main-nav'>
     <div className='navbar'>
      <button className="slide-in-icon" onClick={() => handleSlide()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
        <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt='logo'></img>
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Products</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>
        <form className='search-form'>
            <input type="text" placeholder='Search...'></input>
            <img src={search} alt="search" width="18" className='search-icon'></img>
        </form>
        </div>
        <div className='navbar-2'>
        {User === null ? 
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
          <>
              <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white"><Link to={`/Users/${User?.result._id}`} style={{color:"white",textDecoration:'none'}}>
                {User.result.name.charAt(0).toUpperCase()}</Link> </Avatar>
              <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
          
          </> 
      }
      </div>
      </div>
    </nav>
  )
}

export default Navbar
