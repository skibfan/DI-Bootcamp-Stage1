import express from 'express'
import router from './router/routes.js'
const app = express()
const PORT = 3010
app.listen(PORT, console.log(`listening: ${PORT}`))
app.use(express.json())
app.use(router)