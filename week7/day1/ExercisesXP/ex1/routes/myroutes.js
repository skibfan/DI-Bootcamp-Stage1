import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "hello there"})
})

router.get('/about', (req, res) => {
    res.json({message: "General Kenoby"})
})

export default router