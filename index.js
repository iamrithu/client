const express = require('express');
const router = require("./api");
const parser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const morgan = require('morgan');
//const PORT = process.env.port||5000;
 
//ser up express app
const app = express();

app.use(parser.json());  
app.use(morgan("dev"));
app.use(cors());
app.use(router)

//listen for request

app.listen(5000,()=>{
    console.log("server started on 5000");
})

//DB Connection

mongoose.connect("mongodb://localhost/person",()=>{
   
    console.log("Mongoose is connected !!!! ");
})

mongoose.Promise = global.Promise;
