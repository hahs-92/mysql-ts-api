import { Request, Response } from "express"
//controllers
import { connect } from '../db/mysql'
//interfaces
import { Post } from '../interfaces/post.interface'

export async function getPosts(req:Request, res:Response): Promise<void> {
    try {
        const conn = await connect()
        const posts = await conn.query(`SELECT * FROM posts`)

        res.status(200).json(posts[0])
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function getPostById(req:Request, res:Response) {
    try {
        const {id} = req.params

        if(!id) {
            return res.status(400).send('Please introduce a id')
        }

        const conn = await connect()
        const post = await conn.query(`SELECT * FROM posts WHERE id= ?`,[id])

        if(!post.length) {
            return res.status(400).send(`Not found post with id: ${id}`)
        } else {
            res.status(200).json(post[0])
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

export async function createPost(req:Request, res:Response) {
    try {
        const newPost:Post = req.body
        const conn = await connect()
        await conn.query(`INSERT INTO posts SET ?`,[newPost])

        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function deletePost(req:Request, res:Response) {
    try {
        const {id} = req.params

        if(!id) {
            return res.status(400).send('Please introduce a id')
        }

        const conn = await connect()
        await conn.query(`DELETE FROM posts WHERE id= ?`,[id])

        res.status(200).send('Post delete')
    } catch (error) {
        res.status(500).send(error)
    }
}

export async function updatePost(req:Request, res:Response) {
    try {
        const {id} = req.params
        const udpate_post: Post = req.body

        if(!id) {
            return res.status(400).send('Please introduce a id')
        }

        if(!udpate_post.title || !udpate_post.description) {
            return res.status(400).send('Bad request')
        }

        const conn = await connect()
        await conn.query(`UPDATE posts set ? WHERE id= ?`,[udpate_post, id])

        res.status(200).send('Post updated')
    } catch (error) {
        res.status(500).send(error)
    }
}