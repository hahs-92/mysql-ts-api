import { Router } from "express"
//controllers
import init from "../controllers"

const router = Router()

router.get('/api/v1', init)

export default router
