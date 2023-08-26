import { Router } from "express";
import * as postController from './controller/post.js'
const router=Router();

router.get('/',(req,res,next)=>{
    return res.json({message:"API POSTS"})
});
router.get('/alldatepost',postController.getPost);
router.post('/addpost',postController.addPost);
router.delete('/deletepost/:_id',postController.deletePost);
router.put('/updatepost/:_id',postController.updatePost);
router.get('/orderpost',postController.orderPost);
export default router;