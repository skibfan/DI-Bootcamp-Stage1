import express from 'express'
import { deletePost, getAllPosts, getPostByID, postNewPost, updatePost } from '../controller/controls.js' 

const router = express.Router()

router.get('/blog', getAllPosts)

router.get('/blog/:id', getPostByID)

router.post('/blog', postNewPost)

router.put('/blog/:id', updatePost)

router.delete('/blog/:id', deletePost)

export default router