const path = require('path')

const {questions} = require(path.join(__dirname,'../models','questions'));
/**
 * Get the questions
 */
const getRandomQuestions = (req,res,next)=>{
    try{
        return res.json({});
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getRandomQuestions
}