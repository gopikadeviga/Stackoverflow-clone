import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom' 
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import { useSelector } from 'react-redux'


const HomeMainbar = () => {
  
  const location=useLocation()
  // if user is logged in then the user variable has some value
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList)

  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It is meant to be",
  //   questionTags: ["java","node js","react js","mongo db"],
  //   userPosted:"Gopika",
  //   userId: 1,
  //   askedOn: "jan 20",
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: "Devi",
  //     answeredOn: "jan 21",
  //     userId: 2,
  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "What is a function?",
  //   questionBody: "It is meant to be",
  //   questionTags: ["java","react js","python"],
  //   userPosted:"Gopika",
  //   askedOn: "jan 20",
  //   userId: 1,
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: "Devi",
  //     answeredOn: "jan 23",
  //     userId: 2,
  //   }]
  // },{
  //   _id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 5,
  //   questionTitle: "What is a function?",
  //   questionBody: "It is meant to be",
  //   questionTags: ["java","python","react js","R"],
  //   userPosted:"Aneesh",
  //   askedOn: "jan 20",
  //   userId: 1,
  //   answer:[{
  //     answerBody: "Answer",
  //     userAnswered: "Devi",
  //     answeredOn: "jan 23",
  //     userId: 2,
  //   }]

  // }]

 
//gives alert and redirect to auth page
// else if logged in redirect to ask questionpage
const checkAuth=()=>{
  if(user === null){
    alert("Login or signup to ask a question") 
    navigate('/Auth')
  }
  else{
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          {
            // let location be an obj with variable pathname
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ? <h1>Loading...</h1> :
          <>
              <p>{ questionsList.data.length } questions</p>
             <QuestionsList questionsList={questionsList.data}></QuestionsList>
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
