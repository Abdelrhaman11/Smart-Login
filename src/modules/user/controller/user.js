import userModel from "../../../../DB/model/User.model.js";
import postModel from "../../../../DB/model/Post.model.js";

export const getUser= async(req,res,next)=>{
 try {
    const users=await userModel.find().populate({
      path:"posts",
      select:'title , content'
  });
    return  res.json({message:"Done",users});
    
 } catch (error) {
    return res.json({message:"Catch error", error});
 }
    };


    
    export const signUp= async(req,res,next)=>{
        try {
         const{email , phone , userName}=req.body


         const checkUser=await userModel.findOne({
            $or:[
               {email},
               {phone},
               {userName}
            ]
            
         }
      )

         if(checkUser?.email==email)
         {
             return res.json({message:"Email Exist"})
         }

         if(checkUser?.phone==phone)
         {
             return res.json({message:"phone Exist"})
         }
         if(checkUser?.userName==userName)
         {
             return res.json({message:"userName Exist"})
         }


           const users=await userModel.create(req.body)
           return  res.json({message:"Done",users});
           
        }
        
        catch (error) {
           return res.json({message:"Catch error", error});
        }
           };


           export const signIn=async(req,res,next)=>{

           try {
            const checkUser=await userModel.findOne({

               $or:[
                 { email:req.body.email,
                  password:req.body.password
                 },
                  {
                     userName:req.body.userName,
                     password:req.body.password
                  },

                  {
                     phone:req.body.phone,
                     password:req.body.password
                  }

               ]
            
         })

         if(checkUser)
                  {
                      return res.json({message:`welcome ${checkUser.firstName} ${checkUser.lastName}`});
                  }
         else
               {
                      return res.json({message:"In-valid User information"});
               }
            
           } catch (error) {
            return res.json({message:"Catch error"})

            
           }
           }



           export const deleteUser= async(req,res,next)=>{
            try {
               const{_id}=req.params;

               const deleteUser=await userModel.deleteOne({_id})
               if(!deleteUser){

                     res.json({message:"In-valid user ID"})
               }
               else{
                  await postModel.deleteMany({userID:deleteUser._id})
                  res.json({message:"Done"})

               }
               
            } catch (error) {
               return res.json({message:"Catch error", error});
            }
               };



               export const updateUser= async(req,res,next)=>{
                  try {
                     const {_id}=req.params;
                     const {age ,firstName,lastName}=req.body;
                     const users=await userModel.updateOne(
                        {_id:_id},
                        {$set:{age,firstName,lastName}}
                     
                        )
                     return users.modifiedCount?res.json({message:"Done",users}):res.json({message:"In-valid ID"});
                     
                  } catch (error) {
                     return res.json({message:"Catch error", error});
                  }
                     };




