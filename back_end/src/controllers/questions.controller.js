const path = require('path')

const {questions} = require(path.join(__dirname,'../models','questions'));
/**
 * Get the questions
 */
const getRandomQuestions = (req,res,next)=>{
    try{
        const randomQuestionsCount = 5;
        if(questions.length <=5){
            return res.json(questions);
        }else{
            let resultObj = {}
            count = 0;
            while( true ){
                const idx = Math.floor(Math.random()*questions.length);
                if(!resultObj[idx]){
                    resultObj[idx] = questions[idx];
                    count++;
                }
                if (count === randomQuestionsCount) break
            }
            return res.json(Object.values(resultObj));
        }
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getRandomQuestions
}