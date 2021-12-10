import { Request, Response } from "express"


function init(req:Request, res: Response) {
    return res.send('Hi there! Welcome to my Api')
}

export default init
