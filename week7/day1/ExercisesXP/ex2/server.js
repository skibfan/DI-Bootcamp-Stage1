import express from 'express'
import router from "./routes/todos.js";

const app = express()
const PORT = 3006

app.listen(PORT, ()=>console.log(`listening ${PORT}`))

app.use(router)