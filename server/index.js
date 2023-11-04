//Backend is a REST api -request is received through json
// const express = require('express')
import express from 'express'
import mongoose from 'mongoose'
//cors is for eliminating the error(Cross origin) thrown while the request is send between the servers
import cors from 'cors'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express(); //creating express server
app.use(express.json({limit: '30mb',extended: "true"}))
app.use(express.urlencoded({limit: "30mb",extended: "true"}))
app.use(cors());

//second parameter is a call back function with req & response
/*We have split this part into modules that*/
// '/' part is in users.js
// the callback functionis in AuthenticatorAssertionResponse.js
app.get('/',(req, res) => {
       res.send("This is a stack overflow clone API") 
})

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

//getting port from the environment
//if no available port is there then 5000 will be the server port no.
const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
   .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
   .catch((err) => console.log(err.message))