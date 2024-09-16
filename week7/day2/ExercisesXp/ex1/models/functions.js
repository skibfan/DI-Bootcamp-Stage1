import { db } from "../config/data.js";

export const _getAllPosts = () => {
    try {
        const data = db(`posts`).select(`id`, `title`, `content`)
        return data
    } catch (e) {
        console.error('Error:', e);
        throw e;
    }
}

export const _getPostByID = async (id) => {

    try {
        const data = await db(`posts`).select(`id`, `title`, `content`).where({id}).first();
        if (!data) {
          throw new Error('Post not found');
        }
        return data;
      } catch (e) {
        console.error('Error:', e);
        throw e;
      }
}

export const _postNewPost = (title, content) => {
    try {
        const data = db(`posts`).insert({title, content}, [`id`, `title`, `content`])
        return data
    } catch (e) {
        console.error('Error:', e);
        throw e;
    }
}

export const _updatePost = (id, title, content) => {
    try {
        const data = db(`posts`).where({id}).update({title, content}, [`id`, `title`, `content`])
        return data
    } catch (e) {
        console.error('Error:', e);
        throw e;
    }
}

export const _deletePost = (id, title, content) => {
    try {
        const data = db(`posts`).where({id}).del().returning([`id`, `title`, `content`])
        return data
    } catch (e) {
        console.error('Error:', e);
        throw e;
    }
}