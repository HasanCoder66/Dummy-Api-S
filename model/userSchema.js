import  mongoose  from "mongoose"

const userSchema = new mongoose.Schema({
    userName: {
        type : String,
        required : true,
        unique : true,
        min : 3,
        max : 20
    },

    email : {
        type : String,
        required : true,
        unique : true,
        max : 25 
    },
    
    password : {
        type : String,
        required : true,
        min : 6
        
    },
    isAdmin : {
        type: Boolean,
        default : false
    }
})


export default mongoose.model('user', userSchema)