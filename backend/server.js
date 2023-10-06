const app = require('./app');
const dotenv = require('dotenv');
dotenv.config(); 
const connectDatabase = require('./config/database');

const port = process.env.PORT;

connectDatabase();
app.listen(port,function (err){

    if(!err)
    console.log("server is working on http://localhost: ",port);

    else
    console.log("the error has been generated");
});