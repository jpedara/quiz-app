const express = require('express');
const path = require('path');

const expressLoader = require(path.join(__dirname,'src','loaders','express.loader'))

const startServer = ()=>{
    const app = express();
    //start the server
    expressLoader(app)

    app.listen(3001,async (err)=>{
        if(err){
            throw new Error(err);
        }else{
            console.log("Server is running on port: ",3001)
        }
    })
}

startServer();