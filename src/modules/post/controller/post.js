import postModel from "../../../../DB/model/Post.model.js";
import userModel from "../../../../DB/model/User.model.js";


export const getPost=async(req,res,next)=>{
    const post=await postModel.find().populate({
        path:"userID",
        select:'email , userName'
    });
    res.json({message:"Done Post",post});
}


export const addPost=async(req,res,next)=>{
 try {
    const{title,content,userID}=req.body;
    const user=await userModel.findById({_id:userID})
    if(!user)
    {
        res.json({message:"userID Not-valid",});

    }
   
        const post=await postModel.create({title,content,userID});
        user.posts.push(post._id);

        await user.save();
      return res.json({message:"Done Post",post});

  


 } catch (error) {

    return res.json({message:"Catch error",error})
    
 }
  

}

export const deletePost=async(req,res,next)=>{
try {
    const{_id}=req.params;
    const{userID}=req.body;
    const user=await userModel.findOne({_id:userID})
    if(user==null)
    {
        res.json({message:"userID Not-valid"});

    }
   
        const post=await postModel.deleteOne({_id:_id})
        user.posts.pull(_id)
        await user.save()
      return post.deletedCount? res.json({message:"Done deletePost"}):res.json({message:"Not-valid ID"});

   
    
} 
catch (error) {
    return res.json({message:"Catch error",error})

}

}

export const updatePost=async(req,res,next)=>{

  
try {
    const{_id}=req.params;
    const{userID}=req.body;
    const {title ,content}=req.body;
    const user=await userModel.findOne({_id:userID})
    if(user==null)
    {
        res.json({message:"userID Not-valid"});

    }
   
     
        const post=await postModel.updateOne({_id:_id},
            {$set:{title:title,content:content}})
         return post.modifiedCount?res.json({message:"Done updatePost",post}):res.json({message:"Not-valid ID",post});
    
} catch (error) {
    return res.json({message:"Catch error",error})

    
}
          
            
        



}




export const orderPost=async(req,res,next)=>{
   try {
     const post=await postModel.find().sort({createdAt:-1}).populate('userID');
     return res.json({message:"Done",post});
   } catch (error) {
    
    return res.json({message:"Catch error",error})

   }
}
