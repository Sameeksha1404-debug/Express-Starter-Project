const dotenv =require('dotenv')
dotenv.config();

// here we are exporting all the environment variable
module.exports={
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}

