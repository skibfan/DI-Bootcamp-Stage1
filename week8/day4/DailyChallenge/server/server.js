import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3041

app.listen(PORT, console.log('server is listening ->', PORT))

app.get('/api/hello', (req, res) => {
    res.json({message: 'Hello From Express'})
})


app.post('/api/hello', (req, res) => {
    const {inp} = req.body    
    console.log(inp);
    
    res.json({message: `I got your POST with message: ${inp}` })
})


