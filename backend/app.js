const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
 app.use(express.json());
 app.use(cookieParser());

 const student = require("./routes/studentRoute");
const { registerStudent } = require('./controller/studentController');
 //const blog = require("./routes/blogRoute.js");
 app.use("/api",student);
 //app.use("/api",blog);

module.exports = app;