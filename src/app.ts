import express, {Application} from 'express'
import morgan from 'morgan'
//routes
import route from './routes'
import postRoutes from './routes/post.routes'

export class App {
    private app: Application
    private port

    constructor(port: number | string) {
        this.app = express()
        this.port = port
        this.settings()
        this.middlewares()
        this.routes()
    }

    private settings() {
        this.app.set('port', this.port)
    }

    private middlewares() {
        this.app.use(express.json())
        this.app.use(morgan('dev'))
    }

    private routes() {
        this.app.use(route)
        this.app.use('/posts', postRoutes)
    }

    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`Server listening in port: ${this.app.get('port')}`)
    }
}
