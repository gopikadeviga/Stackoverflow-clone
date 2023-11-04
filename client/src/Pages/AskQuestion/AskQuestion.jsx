import React,{ useState } from 'react'
import './AskQuestion.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {
  const [ questionTitle, setQuestionTitle ] =useState('')
  const [ questionBody, setQuestionBody ] =useState('')
  const [ questionTags, setQuestionTags ] =useState('')

  const dispatch= useDispatch()
  const User = useSelector((state) =>(state.currentUserReducer))
  const navigate =useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log({questionTitle, questionBody, questionTags})
    dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id },navigate))
  }

  const handleEnter = (e) => {
    //key is the key that is pressed in the keyboard
    if(e.key === 'Enter')
    setQuestionBody(questionBody + "\n")
  } 

  return (
 <div className='ask-question'>
   <div className="ask-ques-container">
    <h1>Ask a public question</h1>
    <form onSubmit={handleSubmit}>
      <div className='ask-form-container'>
       <label htmlFor="ask-ques-title">
        <h4>Title</h4>
        <p>Be specific and imagine you're asking a question to another person.</p>
        <input type="text" onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder="e.g. Is there an R function for finding the index of an element in a vector?" id='ask-ques-title'/>
       </label>
       <label htmlFor="ask-ques-body">
        <h4>What are the details of your problem?</h4>
        <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
        <textarea name="" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}></textarea>
       </label>
       <label htmlFor="ask-ques-tags">
        <h4>Tags</h4>
        <p>Add upto 5 tags to describe what your question is about</p>
        <input type="text" onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder="e.g. (xml typescript wordpress)" id='ask-ques-title'/>
       </label>
      </div>
      <input type="submit" value='Review your question' className='review-btn' />
    </form>
   </div>
 </div>
  )
}

export default AskQuestion
