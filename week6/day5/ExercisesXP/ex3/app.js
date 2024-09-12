import express from 'express'
import axios from 'axios'
import { fetchPosts } from './data/dataService.js'


const app = express()
const PORT = 3004
app.use(express.json())

app.listen(PORT, () => console.log(`listening on ${PORT}`))

app.get('/home', async (req, res) => {
    const data = await fetchPosts('https://jsonplaceholder.typicode.com/posts')
    res.status(200).json(data).send(console.log("why do we need this?"))
})