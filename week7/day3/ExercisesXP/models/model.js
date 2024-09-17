import fs from 'fs'

export const _saveNewTask = (newTask, fileName) => {
    
    try {
        if (!newTask.id || !newTask.task || Object.keys(newTask).length != 2) {
            throw new Error("not correct data for our to-do list")
        }
        let tasks = []
        if (fs.existsSync(fileName)) {
            const data = fs.readFileSync('./tasks.json', 'utf8')
            tasks = JSON.parse(data)
        }
        if (!tasks.find(elem => elem.id == newTask.id)){
            tasks.push(newTask)

            fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2))
            return true
        } else {
            return false
        }
        
    } catch (e) {
        throw new Error('Something went wrong while writing: ' + e.message)
    }
}

export const _getAllTasks = (fileName) => {
    try {
        const data =  fs.readFileSync(fileName, "utf-8")
        const tasks = JSON.parse(data)
        return tasks
    } catch (e) {
        throw new Error('Something went wrong while reading all: ' + e.message)
    }
}

export const _getTaskByID = (id, fileName) => {
    try {
        const data = fs.readFileSync(fileName, "utf-8")
        const tasks = JSON.parse(data)
        return tasks.find(elem => elem.id == id)
    } catch (e) {
        throw new Error('Something went wrong while reading id: ' + e.message)
    }
}

export const _updateTaskByID = (id, task, fileName) => {
    try {
        const data = fs.readFileSync(fileName, "utf-8")
        const tasks = JSON.parse(data)
        const index = tasks.findIndex(elem => elem.id == id)
        if (index != -1) {
            tasks[index] = {id: id, task}
        }
        fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2))
        return tasks
    } catch (error) {
        throw new Error('Something went wrong while updating: ' + e.message)
    }
}



export const _deleteTaskByID = (id, fileName) => {
    try {
        const data = fs.readFileSync(fileName, "utf-8")
        const tasks = JSON.parse(data)
        const index = tasks.findIndex(elem => elem.id == id)
        if (index != -1) {
            tasks.splice(index, 1)
        }
        fs.writeFileSync(fileName, JSON.stringify(tasks, null, 2))
        return tasks
    } catch (error) {
        throw new Error('Something went wrong while deleting: ' + e.message)
    }
}