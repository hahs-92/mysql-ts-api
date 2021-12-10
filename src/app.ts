import express, {Application} from 'express'


export class App {
    private app: Application
    private port

    constructor(port: number | string) {
        this.app = express()
        this.port = port
        this.settings()
    }

    private settings() {
        this.app.set('port', this.port)
    }

    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`Server listening in port: ${this.app.get('port')}`)
    }
}
