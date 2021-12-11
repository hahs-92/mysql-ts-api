import { Router, Request, Response } from "express"
//controller
import {
    getPosts,
    createPost,
    getPostById,
    deletePost,
    updatePost
} from '../controllers/posts.controller'

const router = Router()

router.get('/', getPosts).post('/',createPost)
router
    .get('/:id', getPostById)
    .delete('/:id',deletePost)
    .patch('/:id', updatePost)


export default router
