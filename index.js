const express = require('express');
const router = require("./api");
const parser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.port||5000;
 
//ser up express app
const app = express();

app.use(parser.json());  
app.use(morgan("dev"));
app.use(cors());
app.use(router)

//listen for request

app.listen(PORT,()=>{
    console.log("server started on "+PORT);
})

//DB Connection

const mongoDbURL = process.env.MONGODB_URL||"mongodb+srv://iamrithi:iamrithi333@cluster0.gdtlt.mongodb.net/product?retryWrites=true&w=majority"

mongoose.connect(mongoDbURL,()=>{
   
    console.log("Mongoose is connected !!!! ");
})

mongoose.Promise = global.Promise;
