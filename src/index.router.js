import userRouter from './modules/user/user.router.js'
import postRouter from './modules/post/post.router.js'
import connectDB from '../DB/connection.js';

const bootstrap=(app,express)=>{
    app.use(express.json());
    app.use("/user",userRouter)
    app.use("/post",postRouter)
    app.use("*",(req,res,next)=>{
        res.json({message:"In-valid Routing"});
    });
    connectDB();

}
export default bootstrap;