import { _deleteTaskByID, _getAllTasks, _getTaskByID, _saveNewTask, _updateTaskByID } from "../models/model.js"

const fileName = './tasks.json'

export const saveNewTask = (req, res) => {
    const data = req.body
    try {
        const result = _saveNewTask(data, fileName) 
        if (result) {
            res.status(200).json({data, message: "task added successfuly"})
        } else {
            res.json({data, message: "task with this id already exists"})
        }
    } catch (e) {
        res.status(500).json({message: "something went wrong with writing"})
    }

}


export const getAllTasks =  (req, res) => {
    try {
        const data =  _getAllTasks(fileName)
        
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({ message: 'hmmm some error'})
    }
}



export const getTaskByID =  (req, res) => {
    const {id} = req.params
    try {
        const data =  _getTaskByID(id, fileName)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({ message: 'hmmm some error'})
    }
}


export const updateTaskByID =  (req, res) => {
    const {id} = req.params
    const {task} = req.body
    try {
        const data =  _updateTaskByID(id, task, fileName)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({ message: 'hmmm some error'})
    }
}

export const deleteTaskByID = (req, res) => {
    const {id} = req.params
    try {
        const data =  _deleteTaskByID(id, fileName)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({ message: 'hmmm some error'})
    }
}