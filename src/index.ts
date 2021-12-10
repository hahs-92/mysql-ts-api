import { App } from "./app"

const PORT = process.env.PORT || 3006


async function main() {
    const app = new App(PORT)
    app.listen()
}

main()
