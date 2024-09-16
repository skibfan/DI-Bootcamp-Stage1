import express from 'express'
import {triviaQuestions} from './questions.js'
import path from 'path'

const router = express.Router()
console.log(triviaQuestions);
router.use(express.json())

let counter = 0
const __dirname = path.dirname('./index.html')
router.use(express.static(__dirname))


router.get('/quiz', (req, res) => {
    res.json(triviaQuestions)
})


router.post('/quiz', (req, res) => {
    const {answer} = req.body
    const correct = answer == triviaQuestions[counter].answer
    counter++

    res.json({correct})
})

export default router