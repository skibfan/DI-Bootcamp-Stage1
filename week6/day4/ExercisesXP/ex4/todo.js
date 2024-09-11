

export class TodoList {
    constructor() {
        this.tasks = []
    }

    addTask(whatToDo) {
        let newTask = {
            task: whatToDo,
            completed: false
        }
        this.tasks.push(newTask)
    }

    completeTask(taskName) {
        const thisTask = this.tasks.find(elem => elem.task === taskName)
        thisTask.completed = true
    }

    listAllTasks() {
        this.tasks.forEach(elem => {
            console.log(`task : "${elem.task}" is ${elem.completed ? 'completed' : 'not completed'}`);
        })
    }

}