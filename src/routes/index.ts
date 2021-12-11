import { Router, Application } from "express"
//routes
import routerPosts from './post.routes'
//controller
import init from '../controllers'


function routerApi(app:Application) {
    const router = Router()

    app.use('/api/v1', router)

    router.get('/', init)
    router.use('/posts', routerPosts)
}


export default routerApi
