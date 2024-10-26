import { FullList } from "../model/FullList";
import { ToDoItem } from "../model/ListItem";
import { render } from "../main";


export class ListTemplate {
    // private fullisttodo: FullList
    constructor(private fullisttodo: FullList) {
        this.fullisttodo = fullisttodo
    }

    private deleteToDo(task: ToDoItem) {
        this.fullisttodo.removeTodo(task)
        this.loadTodo()
    }

    loadTodo() {
        const todoDiv = document.getElementById('todolist') as HTMLDivElement
        const myTodoList = this.fullisttodo.getToDos()

        myTodoList.forEach((elem) => {
            const liElem = document.createElement('li')
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.checked = elem.checked
            checkbox.addEventListener('change', () => {
                this.fullisttodo.toggletodo(elem)
                this.loadTodo()
            })
            const label = document.createElement('label')
            label.textContent = elem.item
            const deleteButton = document.createElement('button')
            deleteButton.textContent = "Delete"
            deleteButton.addEventListener('click', () => {
                this.deleteToDo(elem)
                render()
            })
            liElem.appendChild(checkbox)
            liElem.appendChild(label)
            liElem.appendChild(deleteButton)
            todoDiv.appendChild(liElem)
        })

    }
}