import Questions from '../models/Questions.js'
import mongoose from 'mongoose'

 //the title body and tags will be present in the req.body
  //creating object for Questions
    //And passing the req body along with the user id (id of user who posted the question)
export const AskQuestion = async (req,res) => {
    const postQuestionData = req.body;
   
    const postQuestion = new Questions(postQuestionData);
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully!")
    } catch (error) {
        console.log(error)
        //409 - couldn't post the data 
        res.status(409).json("Couldn't post the question!")
    }
}

export const getAllQuestions = async (req, res) =>{
        try {
            const questionList = await Questions.find();
            res.status(200).json(questionList);
        } catch (error) {
            res.status(404).json({ message: error.message});
        }

}
export const deleteQuestion = async (req, res) =>{
    // req.params means the params available in the url
    const{ id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question unavailable... ');
    }
    try {
        // if the id matches the record , then the record will be removed from the schema called as Questions
        await Questions.findByIdAndRemove( _id );
        res.status(200).json({ message: "Successfully deleted..."})

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const voteQuestion = async (req, res) => {
    const { id: _id} = req.params;
    const { value, userId } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question unavailable... ');
    }

    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upVote.findIndex((id) => id === String(userId))
        const downIndex = question.downVote.findIndex((id) => id === String(userId))

        if(value === 'upVote'){
            //condition 1 - check if user have already dowvoted or not

            if(downIndex !== -1){
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
            if( upIndex === -1){
                question.upVote.push(userId)
            }
            else{
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }
            else if(value === 'downVote'){
                //condition 1 - check if user have already dowvoted or not
    
                if(upIndex !== -1){
                    question.upVote = question.upVote.filter((id) => id !== String(userId))
                }
                if( downIndex === -1){
                    question.downVote.push(userId)
                }
                else{
                    question.downVote = question.downVote.filter((id) => id !== String(userId))
                }
            }
            await Questions.findByIdAndUpdate( _id, question)
            res.status(200).json({ message : "Voted successfully..."})
        
    } catch (error) {
        res.status(404).json({message: "Id not found!!"})
    }
}






 