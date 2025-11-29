const express = require('express');



const ServerConfig = require('./config/serverConfig');
const { connect } = require('mongoose');
const connectDB = require('./config/dbConfig');



const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));            
app.use(express.text());
// here app is the server 


app.post('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({message:"pong"});
});


app.listen(ServerConfig.PORT,async ()=>{
    await connectDB();
    console.log(`Server is running on http://localhost:${ServerConfig.PORT}`);
   
});



// req from client->routing layer->controller-><-servicer layer-><-connected to the schema repository-><-databases
//  this is the basic architecture  mvc model
// each layer has its own responsibility and it helps to maintain the code and also helps to understand the flow
// service layer,schema(persistance and db file) and repository(dao)is all collectively called model.
// of the flow of the diagram.


//yz1evu8J5oYJ0xx8 password of mongodb atlas
//sameeksha140404_db_user 

//mongodb+srv://sameeksha140404_db_user:yz1evu8J5oYJ0xx8@cluster0.dohfljs.mongodb.net/?appName=Cluster0


//environmentvariable
// npx nodemon src/index.js foe auto start on changes

