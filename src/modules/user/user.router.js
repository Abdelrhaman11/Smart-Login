import { Router } from "express";
import * as userController from './controller/user.js'
import * as searchController from './controller/searchUser.js'
const router=Router();

router.get('/',(req,res,next)=>{
    return res.json({message:"API USERS"})
});
router.get('/alldateuser',userController.getUser);
router.post('/signup',userController.signUp);
router.post('/signIn',userController.signIn);
router.delete('/delete/:_id',userController.deleteUser);
router.put('/update/:_id',userController.updateUser);
router.get('/search',searchController.searchUser);
router.get('/searchage',searchController.searchAgeuser);

    export default router;


