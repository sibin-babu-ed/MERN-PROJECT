const express= require ('express')
const {CreatePost,getAllposts,getPost,UpdatePost,deletePost}=require('../controller/PostController')
const router=express.Router()
const {signupUser, loginUser}=require('../controller/userController.js')


router.post('/signup',signupUser)
router.post('/login',loginUser)

router.post('/create',CreatePost)
router.get('/posts',getAllposts)
router.put('/update/:id',UpdatePost)
router.get('/post/:id',getPost)
router.delete('/delete/:id',deletePost)


module.exports =router