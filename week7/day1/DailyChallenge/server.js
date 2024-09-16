import router from "./router/trivrouter.js";
import express from 'express'
import path from 'path'


const app = express()
const PORT = 3008
app.listen(PORT, () => console.log(`listening ${PORT}`))
// const __dirname = path.dirname('./index.html')
// router.use(express.static(__dirname))
app.use(router)

