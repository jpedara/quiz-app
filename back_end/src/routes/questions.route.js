const path = require('path');
const quesController = require(path.join(__dirname,'../controllers','questions.controller'))


module.exports = (app)=>{
    app.get(
        '/api/questions',
         quesController.getRandomQuestions
    )
}