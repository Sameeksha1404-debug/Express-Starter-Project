// here ill connect the db with the odm

const mongoose = require('mongoose');
const ServerConfig = require('./serverConfig');

/***
 * the below function helps us to connect to a mongodb server. */ 
async function connectDB(){
try{
 await mongoose.connect(ServerConfig.DB_URL);
    console.log("DB connected successfully");
}catch(error){
    console.log("DB connection failed",error);
}

}

module.exports=connectDB;