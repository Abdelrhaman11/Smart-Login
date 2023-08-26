import mongoose, { Schema , model } from "mongoose";

const userSchema=new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true

    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:Number,
    },
    gander:{
        type:String,
        default:'male',
        enum:['male','female']
    },
    phone:{
        type:String,
    },
    confirmEmail:{
        type:Boolean,
        default:false
    },
    posts:[{
        type:mongoose.Types.ObjectId,
        ref:'Post'
    }]

},

{
    timestamps:true
}


)


const userModel=model('User', userSchema);
export default userModel;