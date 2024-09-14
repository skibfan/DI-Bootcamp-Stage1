import express from 'express'

const app = express()
const PORT = 3002
app.use(express.json())

const blog = [
    {id:1, title: 'first day', content:'first day of posting'},
    {id:2, title: 'second day', content:'second day of posting'},
    {id:3, title: 'one year', content:'one year of posting (tired)'},
]

app.listen(PORT, () => console.log('wow'))
app.get('/blog', (req, res) => {
    res.json(blog)
})

app.get('/blog/:id', (req,res) => {
    const {id} = req.params
    const curBlog = blog.find(elem => elem.id == id)
    if(!curBlog) return res.sendStatus(404)
    res.json(curBlog)
})


app.post('/blog', (req, res) => {
    
    const {title, content} = req.body
    const newBlog = {id: 4, title, content}
    blog.push(newBlog)
    res.json(blog)
})

app.put('/blog/:id', (req, res) => {
    const {id} = req.params
    const {title, content} = req.body
    const curBlog = blog.find(elem => elem.id == id)
    if(!curBlog) return res.sendStatus(404)
    elem.title = title
    elem.content = content
    res.json(blog)
})

app.delete('/blog/:id', (req, res) => {
    const {id} = req.params
    const i = blog.findIndex(elem => elem.id == id)
    if(i == -1) return res.status(404).send('There is no such id to delete')
    res.json(blog)
})