import express from 'express'
import path from 'path'
import { getCorEmoji, getTwoEmoji } from './emoji.js'

const app = express()
const PORT = 3005
app.listen(PORT, () => console.log(`listening ${PORT}`))
app.use(express.json())
let corEmoji, extraEmoji
const getNewGame = () => {
    corEmoji = getCorEmoji()
    extraEmoji = getTwoEmoji(corEmoji)
}

let currentGame = null

const __dirname = path.dirname('./index.html')
app.use(express.static(__dirname))

app.get('/game', (req, res) => {
    getNewGame()
    console.log(corEmoji);
    
    currentGame = {
        corEmoji: corEmoji,
        allEmo: [corEmoji, ...extraEmoji].sort((a, b) => a.name.localeCompare(b.name))
    }
    res.json(currentGame.allEmo)
})


app.post('/guess', (req, res) => {
    const {emojiName} = req.body
    if (!currentGame) {
        return res.status(400).json({error: "No active game"})
    }
    const correct = emojiName === currentGame.corEmoji.name
    res.json({correct})
})
