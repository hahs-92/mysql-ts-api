import { Request, Response } from "express"
//controllers
import { connect } from '../db/mysql'

export async function getPosts(req:Request, res:Response): Promise<void> {
    const conn = await connect()
    const posts = await conn.query(`SELECT * FROM posts`)

    res.status(200).json(posts[0])
}