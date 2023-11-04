import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'
import { useEffect, useState } from 'react';

import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions() );
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slide, setSlide ] = useState(true);
  
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlide(false);
    }
  }, []);

  const handleSlide = () => {
    if (window.innerWidth <= 760) {
      setSlide((state) => !state);
    }
  };


  return (
    <div className="App">
      {/* Implementation of navbar  */}
      <Router>
      <Navbar handleSlide={handleSlide}/>
      <AllRoutes slide={slide} handleSlide={handleSlide}></AllRoutes>
      </Router>
    </div>
  );
}

export default App;
