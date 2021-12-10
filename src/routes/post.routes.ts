import { Router, Request, Response } from "express"
//controller
import { getPosts } from '../controllers/posts.controller'

const router = Router()

router.get('/', getPosts)


export default router
