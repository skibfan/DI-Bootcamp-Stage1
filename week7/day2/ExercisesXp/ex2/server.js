import express from 'express'
import router from './routes/router.js'
const app = express()
const PORT = 3011
app.listen(PORT, console.log(`listening: ${PORT}`))
app.use(express.json())
app.use(router)