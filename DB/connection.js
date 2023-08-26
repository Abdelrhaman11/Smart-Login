import mongoose from "mongoose";
const connectDB=async()=>{
    return await mongoose.connect(process.env.DB_URL).then(result=>{
    // return await mongoose.connect('mongodb://0.0.0.0:27017/week5Online').then(result=>{
        console.log(`Connect DB..................`);
        // console.log(result);
    }).catch(err=>{
        console.log(`Fail to connectDB........${err}`);
    })
} 

export default connectDB;