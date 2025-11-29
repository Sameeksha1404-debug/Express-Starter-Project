const express = require('express');

const ServerConfig = require('./config/serverConfig');
const { connect } = require('mongoose');
const connectDB = require('./config/dbConfig');



const app= express();
// here app is the server 
app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server is running on http://localhost:${ServerConfig.PORT}`);
   
});

//yz1evu8J5oYJ0xx8 password of mongodb atlas
//sameeksha140404_db_user 

//mongodb+srv://sameeksha140404_db_user:yz1evu8J5oYJ0xx8@cluster0.dohfljs.mongodb.net/?appName=Cluster0


//environmentvariable
// npx nodemon src/index.js foe auto start on changes

