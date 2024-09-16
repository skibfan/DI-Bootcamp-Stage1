import express from 'express'

const router = express.Router()

router.use(express.json())
// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/todos', (req, res) => {
    res.json(todos)
})

router.get('/todos/:id', (req, res) => {
    const {id} = req.params
    const curToDo = todos.find(elem => elem.id == id)
    if (curToDo) {
        res.json(curToDo)
      } else {
        res.status(404).json({message: "no such todo"})
      }
})
// Add a new to-do item
router.post('/todos', (req, res) => {
    const id = todos.length + 1
    
    const {task} = req.body
    const newToDo = {id, task}
    todos.push(newToDo)
    res.json(todos)
})

// Update a to-do item by ID

router.put('/todos/:id', (req, res) => {
    const {id} = req.params
    const {task} = req.body
    const curToDo = todos.find(elem => elem.id == id)
    if (curToDo) {
        curToDo.task = task
        res.json(todos)
    } else {
        res.status(404).json({message: "no such todo"})
    }
})

// Delete a to-do item by ID

router.delete('/todos/:id', (req, res) => {
    const {id} = req.params
    const index = todos.findIndex(elem => elem.id == id)
    if (index != -1) {
        todos.splice(index, 1)
        for (let i = index; i < todos.length; i++) {
            todos[i].id--;
          }
    }
    res.json(todos)
})


export default router