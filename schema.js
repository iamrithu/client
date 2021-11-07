const  mongoose  = require("mongoose")

const schema = mongoose.Schema

({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String
        
    },
    city:{
        type:String,
       
    },
    number:{
        type:Number
       
    },
    email:{
        type:String
        
    },
    college:{
        type:String
        
    },
    role:{
        type:String
       
    },
    duration:{
        type:String
    }
        
})

  

module.exports= mongoose.model('Intern',schema);
