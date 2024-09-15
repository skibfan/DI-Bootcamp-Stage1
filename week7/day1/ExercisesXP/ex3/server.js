import router from "./router/myrouter.js";
import express from 'express'


const app = express()
const PORT = 3007
app.listen(PORT, () => console.log(`listening ${PORT}`))
app.use(router)