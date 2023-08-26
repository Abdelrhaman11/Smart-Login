import {Schema , Types, model } from "mongoose";

const postSchema=new Schema({

title:{
    type:String,
    require:true
    },
content:{
    type:String,
    require:true
    },
userID:{
    type:Types.ObjectId,
    ref:'User',
    require:true
    }
    

},
{
    timestamps:true
}
)
const postModel=model('Post',postSchema)

export default postModel;



 




