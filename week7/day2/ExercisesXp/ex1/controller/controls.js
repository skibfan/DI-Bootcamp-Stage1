import { _deletePost, _getAllPosts, _getPostByID, _postNewPost, _updatePost } from "../models/functions.js"

export const getAllPosts = async (req, res) => {
    try {
        const data = await _getAllPosts()
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({ message: 'hmmm some error'})
    }

}


export const getPostByID =  async (req, res) => {
    const {id} = req.params
    try {
        const data = await _getPostByID(id)
        res.status(200).json(data)
    } catch (e) {
        res.status(404).send({message: 'no such post exists'})  
    }
}


export const postNewPost =  async (req, res) => {
    const {title, content} = req.body
    
        try {
            const data = await _postNewPost(title, content)
            res.status(200).json(data)
        } catch (e) {
          res.status(403).send({message: 'something went wrong'})  
        }
}


export const updatePost = async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
   
    try {
        const data = await _updatePost(id, title, content)
        res.status(200).json(data)
    } catch (e) {
        res.status(404).json({message: 'no such post exists'})  
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    try {
        const data = await _deletePost(id, title, content)
        res.status(200).json(data)
    } catch (e) {
        res.status(404).json({message: 'no such post exists'})  
    }
}