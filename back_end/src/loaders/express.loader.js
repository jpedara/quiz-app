const cors = require('cors');
const path = require('path');

const questionsRoute = require(path.join(__dirname,'../routes','questions.route')); 

module.exports = (app)=>{
    app.use(cors())

    /**
     * import Routes
     */
    questionsRoute(app)

}