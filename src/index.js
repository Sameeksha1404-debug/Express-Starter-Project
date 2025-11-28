const express = require('express');

const ServerConfig = require('./config/serverConfig');



const app= express();
// here app is the server 
app.listen(ServerConfig.PORT,()=>{
    console.log(`Server is running on http://localhost:${ServerConfig.PORT}`);
});


//environmentvariable
// npx nodemon src/index.js foe auto start on changes

