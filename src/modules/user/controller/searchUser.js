import userModel from "../../../../DB/model/User.model.js";

export const searchUser=async(req,res,next)=>{
    try {
        const {searchKey , age}=req.query
        // const firstLetter=new RegExp(`^${searchKey}`)
        // const user= await userModel.find({firstName:firstLetter,age:{$gt:22 , $lte:30}}   

        const user= await userModel.find({firstName:{$regex:`^${searchKey}`, $options:'i'},age:{ $lte:age}}
        
        )
        
        return res.json({message:"Done",user});
    } 
    catch (error) {
        return res.json({message:"Catch Error"});

    }
}


export const searchAgeuser=async(req,res,next)=>{
    try {
        const {minAge , maxAge }=req.query;

        const user= await userModel.find({age:{$gte:minAge , $lte:maxAge}})
        
        return res.json({message:"Done",user});
    } 
    catch (error) {
        return res.json({message:"Catch Error"});

    }
}

